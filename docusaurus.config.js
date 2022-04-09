// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Who Is Next",
  tagline: "Next Is You",
  url: "https://github.com/Nurtau/who-is-next-docs",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "who-is-next",
  projectName: "who-is-next-docs",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "Who Is Next",
      items: [
        {
          type: "doc",
          docId: "overview",
          position: "left",
          label: "Документация",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Repositories",
          items: [
            {
              label: "Front-end",
              href: "https://github.com/alture/win",
            },
            {
              label: "Back-end",
              href: "https://gitlab.com/abdr2307/aitu-hack",
            },
            {
              label: "Docs",
              href: "https://github.com/Nurtau/who-is-next-docs",
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
