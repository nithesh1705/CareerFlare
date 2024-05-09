import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      // {
      //   id: 41,
      //   title: "About Page",
      //   path: "/about",
      //   newTab: false,
      // },
      // {
      //   id: 42,
      //   title: "Contact Page",
      //   path: "/contact",
      //   newTab: false,
      // },
      {
        id: 43,
        title: "Career Guidance",
        path: "/career",
        newTab: false,
      },
      {
        id: 44,
        title: "Explore",
        path: "/explore",
        newTab: false,
      },
      {
        id: 45,
        title: "Courses",
        path: "/courses",
        newTab: false,
      },
      {
        id: 46,
        title: "Personal Bot",
        path: "/personalbot",
        newTab: false,
      },
      // {
      //   id: 46,
      //   title: "Resume Analyzer",
      //   path: "/resumeanalyzer",
      //   newTab: false,
      // },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 49,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
