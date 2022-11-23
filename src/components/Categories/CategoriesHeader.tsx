type Props = {
  img: any;
  title: any;
};
export default function CategoriesHeader() {
  return (
    <div className="w-11/12 py-5 px-10 bg-gray-50 rounded-md">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <h1 className="text-xl font-bold">Categories</h1>
        <div className="flex flex-col lg:flex-row mt-5 md:mt-0 items-center">
          <h1 className="text-lg">Show content for speakers of</h1>
          <select
            name=""
            className="p-3 ml-5 mt-3 md:mt-0 rounded bg-transparent border border-black w-44"
            id=""
          >
            <option value="English">English</option>
          </select>
        </div>
      </div>
      <div className="mt-5 w-full grid md:grid-cols-4 gap-5">
        <Card img="/img/grammer.png" title="Japenese Core 6000" />
        <Card img="/img/core.png" title="Simplified Japenese Core" />
        <Card img="/img/specific.png" title="Traditional Japenese Core" />
        <Card img="/img/sentences.png" title="English Vocabulary" />
      </div>
    </div>
  );
}

function Card({ img, title }: Props) {
  return (
    <div className="p-5 flex items-center text-center justify-center flex-col">
      <img src={img} className="h-28" alt="" />
      <h1 className="text-xl font-bold mt-5">{title}</h1>
    </div>
  );
}
