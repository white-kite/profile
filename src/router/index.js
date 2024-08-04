import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
];

export default function createRouterInstance() {
  const isServer = typeof window === 'undefined';
  const history = isServer ? createMemoryHistory() : createWebHistory();

  return createRouter({
    history,
    routes,
  });
}
