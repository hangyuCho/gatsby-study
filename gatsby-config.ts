import type { GatsbyConfig } from "gatsby";
const path = requre("path")
const gatsbyRequiredRules = path.json(
  process.cmd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules",
)

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-study`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_moules", "bower_components", ".cache", "public"]
      }
    },
  ],
};

export default config;
