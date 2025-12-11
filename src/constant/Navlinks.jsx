import { Links } from "react-router-dom";

export const Navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Class",
    link: "/classes",
    submenu: true,
    sublink: [
      {
        name: "Tech",
        // links: "/tech",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
      {
        name: "Lifestyle",
        // links: "/blog/lifestyle",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
      {
        name: "News",
        // links: "/blog/news",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
    ],
  },

  {
    title: "About",
    link: "/about",
    submenu: true,
    sublink: [
      {
        name: "Tech",
        // links: "/tech",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
      {
        name: "Lifestyle",
        // links: "/blog/lifestyle",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
      {
        name: "News",
        // links: "/blog/news",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
    ],
  },
  {
    title: "blog",
    link: "/blog",
    submenu: true,
    sublink: [
      {
        name: "Tech",
        // links: "/tech",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
      {
        name: "Lifestyle",
        // links: "/blog/lifestyle",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
      {
        name: "News",
        // links: "/blog/news",
        submenulink: [
          { name: "Tech one", link: "/tech/techone" },
          { name: "Tech Two", link: "/tech/techtwo" },
          { name: "Tech Three", link: "/tech/techthree" },
        ],
      },
    ],
  },
  {
    title: "contact",
    link: "/contact",
  },
];
