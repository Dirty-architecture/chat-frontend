import {create} from "zustand";
import type {IModalState} from "./interface.ts";


const useModalStore = create<IModalState>((set) => ({
    title: undefined,
    content: undefined,
    open: false,

    show: (props) =>
        set({
            ...props,
            open: true,
        }),

    hide: () =>
        set({
            title: undefined,
            content: undefined,
            open: false,
        }),
}));


export {useModalStore};