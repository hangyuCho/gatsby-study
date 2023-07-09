import * as React from "react";
import Layout from "../components/layout"
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (<Layout><div className="underline text-indigo-500 text-2xl">hoge</div></Layout>);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
