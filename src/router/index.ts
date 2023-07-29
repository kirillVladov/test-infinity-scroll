import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.url),
    routes: routes,
});

export default router;
