import {
  AdjustmentsVerticalIcon,
  DocumentChartBarIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

export default function ItemsSentences() {
  return (
    <div className="w-full lg:p-5">
      <div className="w-full bg-gray-50 p-5">
        <div className="border-b pb-5 w-full flex lg:flex-row flex-col items-center justify-between">
          <div className="flex w-full lg:w-auto items-center py-2 px-4 bg-gray-200 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <DocumentChartBarIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-2 text-blue-900 font-medium">
              Items & Sentences
            </div>
          </div>
          <div className="flex items-center mt-3 w-full lg:w-auto lg:flex-row flex-col">
            <div className="flex items-center w-full lg:w-auto py-2 px-4 bg-gray-200 rounded-md">
              <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
                <AdjustmentsVerticalIcon className="h-4 text-blue-900" />
              </div>
              <div className="ml-2 text-gray-500">
                Sort by:{" "}
                <select className="text-blue-900 outline-none cursor-pointer bg-transparent font-medium">
                  <option value="1">Default</option>
                  <option value="2">Default</option>
                  <option value="3">Default</option>
                  <option value="4">Default</option>
                </select>
              </div>
            </div>
            <div className="lg:ml-5 flex lg:mt-3 w-full lg:w-auto items-center py-2 px-4 bg-gray-200 rounded-md">
              <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
                <AdjustmentsVerticalIcon className="h-4 text-blue-900" />
              </div>
              <div className="ml-2 text-blue-900 font-medium">Filter Items</div>
            </div>
          </div>
        </div>

        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="w-full grid lg:grid-cols-itemsSentences">
      <div className="grid grid-cols-blogSideLeft border-b pb-7 pr-5 pt-5 lg:border-r">
        <div className="h-8 w-8 p-1 rounded-full flex items-center justify-center bg-white border">
          <SpeakerWaveIcon className="h-5 text-blue-900" />
        </div>
        <div>
          <h1>Heading</h1>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="text-sm text-gray-500 ml-2">Verb</p>
      </div>
      <div className="lg:pl-5 pt-5 grid lg:grid-cols-blogSideRight border-b pb-5">
        <div className="h-8 w-8 p-1 rounded-full flex items-center justify-center bg-white border">
          <SpeakerWaveIcon className="h-5 text-blue-900" />
        </div>
        <div>
          <h1 className="mt-5">Heading</h1>
          <p className="text-sm mt-2 pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsum natus ullam optio
            maiores similique quidem, autem obcaecati hic, labore iure eaque.
            Voluptatibus vitae, itaque laborum eveniet exercitationem saepe
            facilis aspernatur?
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <img src="/img/img.png" className="w-full border-2 rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
}
