import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <div className="underline text-indigo-500 text-2xl">hoge</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
