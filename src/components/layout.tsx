import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const Layout = ({ children }: any) => {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      layout
      {children}
    </div>
  )
}
export default Layout
