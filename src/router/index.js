import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import ChristmasPrj from "../views/ProjectDetail/ChristmasPrj.vue";
import BokkiBokki_1 from "../views/ProjectDetail/BokkiBokki_1.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
    // 프로젝트 디테일
    {
        path: "/projects/ChristmasPrj",
        name: "ChristmasPrj",
        component: ChristmasPrj
    },
    {
        path: "/projects/BokkiBokki_1",
        name: "BokkiBokki_1",
        component: BokkiBokki_1
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
