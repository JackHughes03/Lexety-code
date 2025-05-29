import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NewDefinition from "@/views/blogs/NewDefinition.vue";
import DyslexiaExist from "@/views/blogs/DyslexiaExist.vue";
import HaveDyslexia from "@/views/blogs/HaveDyslexia.vue";
import DyslexiaView from "@/views/DyslexiaView.vue";
import ResourcesView from "@/views/ResourcesView.vue";
import BlogView from "@/views/BlogView.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Lexety",
            description: "Home"
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
        meta: {
            title: "Contact me",
            description: "Contact Me"
        },
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
        meta: {
            title: "About me",
            description: "| Lexety Education"
        },
    },
    {
        path: "/dyslexia",
        name: "dyslexia",
        component: DyslexiaView,
        meta: {
            title: "Dyslexia",
            description: "| Lexety Education"
        },
    },
    {
        path: "/resources",
        name: "resources",
        component: ResourcesView,
        meta: {
            title: "Resources",
            description: "| Lexety Education"
        },
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogView,
        meta: {
            title: "Blog",
            description: "| Lexety Education Blog"
        },
    },
    {
        path: "/blog/1",
        name: "dyslexia-exist",
        component: DyslexiaExist,
        meta: {
            title: "Does Dyslexia Exist",
            description: "Real or label"
        },
    },
    {
        path: "/blog/2",
        name: "new-definition",
        component: NewDefinition,
        meta: {
            title: "The New Delphi Definition of Dyslexia",
            description: "On 25th February 2025, a new definition of dyslexia was confirmed by experts using the Delphi method"
        },
    },
    {
        path: "/blog/3",
        name: "have-dyslexia",
        component: HaveDyslexia,
        meta: {
            title: "Do I have dyslexia?",
            description: "How do I know if I have dyslexia?"
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundView,
        meta: {
            title: "404 Not Found",
            description: "The page you are looking for could not be found. Please check the URL or go back to the homepage."
        },
    },
];