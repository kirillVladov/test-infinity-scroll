import {defineStore, StateTree} from "pinia";

interface State extends StateTree {
    isShow: boolean;
}

export const usePreloaderStore = defineStore("preloader-store", {
    state: (): State => ({
        isShow: false,
    }),
    actions: {
        setState(isShow: boolean) {
            this.$patch((state: State) => {
                state.isShow = isShow;
            })
        }
    }
})