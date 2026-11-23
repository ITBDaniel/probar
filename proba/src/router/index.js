import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {path: '/', name: 'Home', component:()=> import("@/views/HomeView.vue")},
  {
    path: "/exercise1",
    name: "Exercise1",
    component: () => import("@/components/Exercise1.vue"),
    
    children: [
      {
        path: ":productId",
        name: "ProductDetail",
        component: () => import("@/components/ProductDetail.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/exercise2",
    name: "Exercise2",
    component: () => import("@/components/Exercise2.vue"),
  },
  {
    path: "/exercise3",
    name: "Exercise3",
    component: () => import("@/components/Exercise3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
