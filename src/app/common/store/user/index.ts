import {create} from "zustand";
import type {IUserState} from "./interface.ts";


const useModalStore = create<IUserState>((set) => ({
    user: null,

    set: (user) => set({user}),
}));


export {useModalStore};