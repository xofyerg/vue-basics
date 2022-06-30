import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import PostItemPage from "@/pages/PostItemPage";
import PostsPageWithStore from "@/pages/PostsPageWithStore";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    component: PostItemPage,
  },
  {
    path: "/store",
    component: PostsPageWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
