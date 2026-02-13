// store/modalStore.ts
import {create} from "zustand";
import type {IModalState} from "./interface.ts";


const useModalStore = create<IModalState>((set) => ({
    type: null,
    title: undefined,
    content: undefined,
    open: false,

    show: ({type = "default", title, content}) =>
        set({
            type,
            title,
            content,
            open: true,
        }),

    hide: () =>
        set({
            type: null,
            title: undefined,
            content: undefined,
            open: false,
        }),
}));


export {useModalStore};