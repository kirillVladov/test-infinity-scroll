import $http from "../http.ts";
import type {BeerItem} from "../../../../types/beer";

const base: string = "/v2/beers";
export async function getBeerList(page: number): Promise<BeerItem[]> {
    const endpoint: string = `${base}`
    return await $http.get(endpoint, {params: {page}})
}