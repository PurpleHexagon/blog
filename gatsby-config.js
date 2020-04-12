module.exports = {
  siteMetadata: {
    title: `Purple Hexagon`,
    siteUrl: `https://yoursite.com`,
    description: "Jon Day's technical blog exploring Software Dev, Data Science and more",
    components: {
      appbar: {
        position: "sticky",
        links: [
          // {
          //   title: "Tags",
          //   url: "/tags"
          // },
          {
            title: "CV",
            url: "/cv"
          }
        ]
      },
      footer: {
        copyright: "purplehexagon.com",
        columns: [
          {
            heading: "Find me on",
            links: [
              {
                title: "Github",
                url: "https://github.com/PurpleHexagon"
              },
              {
                title: "Stackoverflow",
                url: "https://stackoverflow.com/users/1185180/purple-hexagon"
              },
              {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/jonathan-day-801a98109/"
              },
            ]
          },
        ]
      }
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6
            }
          }
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
