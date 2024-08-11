import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import ChristmasPrj from '../views/ProjectDetail/ChristmasPrj.vue';
import BokkiBokki_1 from '../views/ProjectDetail/BokkiBokki_1.vue';

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
  // 프로젝트 디테일
  {
    path: '/projects/ChristmasPrj',
    name: 'ChristmasPrj',
    component: ChristmasPrj
  },
  {
    path: '/projects/BokkiBokki_1',
    name: 'BokkiBokki_1',
    component: BokkiBokki_1
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
