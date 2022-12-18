type props = {
  fetchMarkdown: any;
};

export default function BlogNav({ fetchMarkdown }: props) {
  return (
    <div className="flex items-center space-x-2">
      <button
      className="font-medium px-5 py-2 bg-gray-100 rounded-md hover:bg-blue-100 hover:text-primary"
        onClick={() => {
          fetchMarkdown("article.md");
        }}
      >
        Blog 1
      </button>
      <button
      className="font-medium px-5 py-2 bg-gray-100 rounded-md hover:bg-blue-100 hover:text-primary"
        onClick={() => {
          fetchMarkdown("second.md");
        }}
      >
        Blog 2
      </button>
      <button
      className="font-medium px-5 py-2 bg-gray-100 rounded-md hover:bg-blue-100 hover:text-primary"
        onClick={() => {
          fetchMarkdown("third.md");
        }}
      >
        Blog 2
      </button>
    </div>
  );
}
