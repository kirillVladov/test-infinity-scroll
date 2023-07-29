import BeerView from "@/views/BeerView.vue";
import StartView from "@/views/StartView.vue";

export default [
    {
        path: "/",
        component: StartView
    },
    {
        path: "/beer-list",
        component: BeerView
    },
]