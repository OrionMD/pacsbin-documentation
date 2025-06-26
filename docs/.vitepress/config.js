export default {
  title: "Pacsbin Docs",
  description: "Detailed documentation for the Pacsbin platform.",
//   base: "/documentation/",
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: "Updated",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    logo: "/logo-dark.svg",
    siteTitle: "Docs",
    search: {
      provider: "local",
    },
    // nav: [{ text: 'news', link: '/news' }],
    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "About", link: "/" }],
      },
      {
        text: "News",
        collapsed: false,
        items: [
          { text: "The road to 2.0", link: "/news/20250626-the-road-to-2.0" },
        //   {
        //     text: "New docs site!",
        //     link: "/news/20250626-new-documentation-site",
        //   },
        //   {
        //     text: "More",
		// 	collapsed: true,
        //     items: [
        //       {
        //         text: "New docs site!",
        //         link: "/news/20250626-new-documentation-site",
        //       },
        //     ],
        //   },
        ],
      },
      {
        text: "User Guides",
        items: [
          { text: "Account management", link: "/account-management" },
          { text: "Uploader guide", link: "/uploader-guide" },
          { text: "Case organizer guide", link: "/organizer-guide" },
          { text: "Assessments guide", link: "/assessments-guide" },
        ],
      },
      {
        text: "PACS Integration",
        items: [
          { text: "Introduction", link: "/integration-intro" },
          { text: "Configuration", link: "/integration-config" },
        ],
      },
      {
        text: "Advanced usage",
        items: [
          { text: "Embedding the viewer", link: "/embedded-viewer" },
          { text: "Viewer URL options", link: "/viewer-url-options" },
        ],
      },
      {
        text: "Security and Privacy",
        items: [
          { text: "Anonymization", link: "/anonymization" },
          { text: "Security documentation", link: "/security" },
        ],
      },
      {
        text: "Get help",
        items: [
          {
            text: "Bug reports and feature requests",
            link: "/bug-reports-feature-requests.md",
          },
          {
            text: "Contact",
            link: "/contact.md",
          },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "Anonymization Script", link: "/anonymization-script" },
        ],
      },
    ],
  },
};
