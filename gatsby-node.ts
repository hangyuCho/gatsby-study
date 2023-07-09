//const readingTime = require("reading-time")
const slugify = require("@sindresorhus/slugify")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "timeToRead",
      //value: readingTime(node.body)
      value: `/${slugify(node.frontmatter.title)}`
    })
  }
}
