import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home.vue')
    },
    {
        path: "/about",
        name: "About",
        component: () => import('../views/About.vue')
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import('../views/Projects.vue')
    },
    // 프로젝트 디테일
    {
        path: "/projects/ChristmasPrj",
        name: "ChristmasPrj",
        component: () => import('../views/ProjectDetail/ChristmasPrj.vue')
    },
    {
        path: "/projects/BokkiBokki_1",
        name: "BokkiBokki_1",
        component: () => import('../views/ProjectDetail/BokkiBokki_1.vue')
    },
    {
        path: "/projects/BokkiBokki_2",
        name: "BokkiBokki_2",
        component: () => import('../views/ProjectDetail/BokkiBokki_2.vue')
    },
    {
        path: "/projects/EKP",
        name: "EKP",
        component: () => import('../views/ProjectDetail/EKP.vue')
    },
    {
        path: "/projects/Homey",
        name: "Homey",
        component: () => import('../views/ProjectDetail/Homey.vue')
    }
];

export default function createRouterInstance() {
    const isServer = typeof window === "undefined";
    const history = isServer ? createMemoryHistory() : createWebHistory();

    return createRouter({
        history,
        routes,
        scrollBehavior(to, from, savedPosition) {
            // `/projects/`로 시작하는 경로로 이동할 때만 스크롤을 맨 위로 이동
            if (to.path.startsWith("/projects/")) {
                return { top: 0 };
            }

            // savedPosition이 있을 경우 해당 위치로 이동
            if (savedPosition) {
                return savedPosition;
            }

            // 기본적으로 페이지 맨 위로 스크롤
            return { top: 0 };
        }
    });
}
