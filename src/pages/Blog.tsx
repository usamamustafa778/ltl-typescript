import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import {
  BlogNav,
  DashboardHead,
  DashboardNav,
  DashboardSidebar,
  ItemsSentences,
} from "../components";
import Code from "../components/Code";

const Blog = () => {
  //use the fs module to read the markdown files from the markdown folder

  const [postContent, setPostContent] = useState("");
  const [markdownFiles, setMarkdownFiles] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const [blogOpen, setBlogOpen] = useState(false);

  const handleBlogSidebar = () => {
    setBlogOpen(!blogOpen);
  };

  useEffect(() => {
    fetchMarkdown("article.md");
  }, []);

  const fetchMarkdown = (path: string) => {
    import(`../markdown/${path}`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostContent(response))
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <div className="grid lg:grid-cols-body h-screen">
        <DashboardSidebar />
        <div className="flex flex-col">
          <DashboardNav />
          <div
            className={
              blogOpen
                ? "w-full grid grid-cols-blogs"
                : "w-full grid grid-cols-closeBlogs"
            }
          >
            <div className="p-7">
              {" "}
              {/* <div>
                {markdownFiles.map((file: any) => (
                  <div key="{file.name}">{file.content}</div>
                ))}
              </div> */}
              <Markdown
                options={{
                  overrides: {
                    Code: {
                      component: Code,
                      props: {
                        isDark,
                        setIsDark,
                      },
                    },
                    li: {
                      component: "li",
                      props: {
                        className: "list-disc ml-4 my-3",
                      },
                    },
                  },
                }}
              >
                {postContent}
              </Markdown>
            </div>
            <BlogNav
              blogOpen={blogOpen}
              handleBlogSidebar={handleBlogSidebar}
              fetchMarkdown={fetchMarkdown}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
