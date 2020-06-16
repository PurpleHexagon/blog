module.exports = {
  siteMetadata: {
    title: `Purple Hexagon`,
    siteUrl: `https://yoursite.com`,
    description: "[ Exploring Software Development, Data Science and beyond ]",
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
              {
                title: "ObservableHQ",
                url: "https://observablehq.com/@purplehexagon"
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
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [
          `gatsby-remark-images`,
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },

          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     extensions: [`.mdx`, `.md`],
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-prismjs',
    //         options: {
    //           classPrefix: "languageaa-",
    //         }
    //       }
    //     ]
    //   }
    // },
  ]
};
