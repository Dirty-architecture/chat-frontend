import {type RefObject, useCallback} from 'react';

const SCROLL_TO_TOP_PX = 0;

const useScrollToTop = (ref: RefObject<HTMLElement>, topPx = SCROLL_TO_TOP_PX) => {
    return useCallback(() => {
        ref.current?.scroll({behavior: 'smooth', top: topPx});
    }, [ref, topPx]);
}
export {useScrollToTop}