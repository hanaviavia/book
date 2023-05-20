import { defineConfig } from "vitepress";
import { examples, javaArchitecture } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BOOK",
  description: "BOOK NOTE",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", items: [{ text: "Markdown", link: "/examples/markdown" }, { text: "Runtime API", link: "/examples/api" }] },
      { text: "Course", items: [{ text: "java体系", link: "/course/java-architecture/" }] },
    ],

    sidebar: {
      ...examples(),
      ...javaArchitecture()
    },

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
