import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import PostItemPage from "@/pages/PostItemPage";

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
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
