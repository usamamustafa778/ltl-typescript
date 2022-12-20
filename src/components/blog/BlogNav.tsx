import { Bars3Icon } from "@heroicons/react/24/solid";
import blogs from "./blogs.json";
type props = {
  fetchMarkdown: any;
  handleBlogSidebar: any;
  blogOpen: any;
};

export default function BlogNav({
  fetchMarkdown,
  blogOpen,
  handleBlogSidebar,
}: props) {
  return (
    <div
      className={
        blogOpen
          ? "hidden lg:flex p-7 space-y-2 flex-col items-center border-l bg-gray-50"
          : "hidden lg:flex py-7 px-3 space-y-2 flex-col items-center border-l bg-gray-50"
      }
    >
      <button
        onClick={handleBlogSidebar}
        className={
          blogOpen
            ? "w-full flex justify-end text-primary hover:text-blue-500"
            : "w-full flex justify-center text-primary hover:text-blue-500"
        }
      >
        <Bars3Icon className="h-8" />
      </button>
      {blogs.map((blog, index) => (
        <button
          key={index}
          className="blogButton"
          onClick={() => {
            fetchMarkdown(blog.file);
          }}
        >
          {blogOpen && <span className="mr-2">{blog.name}</span>}
          {blog.id}
        </button>
      ))}
    </div>
  );
}
