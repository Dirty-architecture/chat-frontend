import {useEffect, useState} from "react";

interface IScrolledBelowBlockOptions {
    offsetPx?: number;
    /** сам элемент (или null пока не смонтирован) */
    rootEl: HTMLElement | null;
}

interface IScrolledBelowBlockResult {
    isBelow: boolean;
}

const useScrolledBelowBlock = ({
                                   offsetPx = 0,
                                   rootEl,
                               }: IScrolledBelowBlockOptions): IScrolledBelowBlockResult => {
    const [isBelow, setIsBelow] = useState(false);

    useEffect(() => {
        if (!rootEl) return;

        const update = () => {
            setIsBelow(rootEl.scrollTop > offsetPx);
        };

        update(); // initial
        rootEl.addEventListener("scroll", update, {passive: true});

        return () => rootEl.removeEventListener("scroll", update);
    }, [offsetPx, rootEl]);

    return {isBelow};
};

export {useScrolledBelowBlock};