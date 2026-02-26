import {useEffect, useState} from 'react';

/**
 * useMediaQuery(query)
 *
 * React-хук для определения, совпадает ли текущее окно браузера с CSS media-query.
 * Работает так же, как `@media (...)` в SCSS, только возвращает `boolean` в коде.
 *
 * Возвращает:
 * - `true`  — если query сейчас подходит
 * - `false` — если query сейчас НЕ подходит
 *
 * Пример (tablet по ширине окна):
 * ```ts
 * import {useMediaQuery} from '@/app/utils/useMediaQuery';
 *
 * const isTablet = useMediaQuery('(max-width: 768px)');
 * ```
 *
 * Пример (laptop диапазон):
 * ```ts
 * const isLaptop = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
 * ```
 *
 * Пример (использование в компоненте):
 * ```tsx
 * const isTablet = useMediaQuery('(max-width: 768px)');
 *
 * return (
 *   <div className={isTablet ? s.layoutTablet : s.layoutDesktop}>
 *     ...
 *   </div>
 * );
 * ```
 *
 * Важно:
 * - Query задавай строкой в формате CSS: `(max-width: 768px)`, `(prefers-color-scheme: dark)` и т.п.
 * - Хук обновляется автоматически при изменении размера окна (через `matchMedia(...).change`).
 */
const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(query);

        const onChange = () => setMatches(mql.matches);
        onChange();

        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    }, [query]);

    return matches;
}

export {useMediaQuery}