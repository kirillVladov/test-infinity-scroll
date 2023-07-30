import {defineStore, StateTree} from "pinia";
import {getBeerList} from "../../services/api/requests/testList.ts";
import type {BeerItem} from "../../../types/beer";
import {usePreloaderStore} from "../preloader";

interface State extends StateTree {
    list: BeerItem[],
}

export const useBeerStore = defineStore("beer-store", {
    state: (): State => ({
        list: [],
    }),
    actions: {
        getList(page: number): void {
            const preloaderStore = usePreloaderStore();

            if(page === 1) {
                preloaderStore.setState(true);
            }

            getBeerList(page)
                .then((result: BeerItem[]) => {
                    if(!Array.isArray(result)) return;

                    this.$patch((state: State) => {
                        state.list.push(...result);
                    })
                })
                .finally(() => {
                    if(page === 1) {
                        setTimeout(() => {
                            preloaderStore.setState(false)
                        }, 500)
                    }
                })
        },
    },
    getters: {
        getBeerList(): BeerItem[] {
            return this.list ?? [];
        }
    }
})