import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/news',
    name: 'news',
    props: { mode: 'news' },
    component: () => import('../views/MultiArticle.vue'),
  },
  {
    path: '/research',
    name: 'research',
    props: { mode: 'research' },
    component: () => import('../views/MultiArticle.vue'),
  },
  {
    path: '/news/:ind',
    props: { mode: 'news' },
    component: () => import('../views/MultiView.vue'),
  },
  {
    path: '/research/:ind',
    props: { mode: 'research' },
    component: () => import('../views/MultiView.vue'),
  },
  {
    path: '*',
    component: () => import('../views/PNF.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
