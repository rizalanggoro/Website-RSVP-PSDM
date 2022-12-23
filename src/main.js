import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Form from "./components/Form.vue";
import Test from "./components/Test.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/form",
    component: Form,
  },
  {
    path: "/test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
