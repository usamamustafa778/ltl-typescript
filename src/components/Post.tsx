import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import Code from "./Code";
import Nav from "./Nav";
import * as fs from "fs";
import * as path from "path";

const Post = () => {
  //use the fs module to read the markdown files from the markdown folder

  const [postContent, setPostContent] = useState("");
  const [markdownFiles, setMarkdownFiles] = useState([]);
  const [isDark, setIsDark] = useState(true);

  const files = fs.readdirSync("posts");

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

  // useEffect(() => {
  //   fetch("/path/to/markdown/files")
  //     .then((response) => response.json())
  //     .then((files) => {
  //       setMarkdownFiles(files.map((file) => markdown(file.content)));
  //     });
  // }, []);

  //fetch all the markdown files and display them in the sidebar

  //dyamically import the markdown file based on the name of the file

  console.log(postContent);

  return (
    <>
      <Nav />
      <div>
        {markdownFiles.map((file: any) => (
          <div key="{file.name}">{file.content}</div>
        ))}
      </div>
      {/* create a sidebar for selecting the markedown file to display */}

      <div className="sidebar">
        <div className="sidebar-wrapper flex gap-5 bg-red-300 p-2">
          <div className="sidebar-item">
            <a
              onClick={() => {
                fetchMarkdown("article.md");
              }}
              href="#"
            >
              Blog 1
            </a>
          </div>
          <div className="sidebar-item">
            <a
              onClick={() => {
                fetchMarkdown("second.md");
              }}
              href="#"
            >
              Blog 2
            </a>
          </div>
          <div className="sidebar-item">
            <a
              onClick={() => {
                fetchMarkdown("third.md");
              }}
              href="#"
            >
              Blog 2
            </a>
          </div>
        </div>
      </div>

      <article className="article bg-stone-900 text-white">
        <div className="containers">
          <div className="post-wrapper w-full">
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
                      className: "list-disc ml-4 my-3 ",
                    },
                  },
                },
              }}
            >
              {postContent}
            </Markdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
