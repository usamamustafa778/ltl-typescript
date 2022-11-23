import { DocumentChartBarIcon } from "@heroicons/react/24/outline";

export default function Head() {
  return (
    <div className="w-full flex lg:flex-row flex-col p-5 px-7">
      <div className="bg-post h-72 lg:w-5/12 relative text-white">
        <div className="grid grid-cols-2 absolute bottom-0 m-5">
          <h1 className="font-semibold text-3xl">Japenese Language</h1>
          <div className="flex flex-col justify-end text-end">
            <p className="text-xs">Rating 4.8</p>
            <p className="w-10/12 ml-auto">Japenese core 4000 series 1</p>
          </div>
        </div>
      </div>
      <div className="py-5 lg:px-5">
        <div className="flex items-center">
          <span className="text-gray-400 mt-1">Series:</span>
          <span className="text-2xl text-blue-900 ml-2 font-semibold">
            Japenes Core 400
          </span>
        </div>
        <div className="flex items-center mt-3">
          <span className="text-gray-400 mt-1">Level:</span>
          <span className="text-2xl text-blue-900 ml-2 font-semibold">
            Intermediate
          </span>
        </div>

        <div className="flex space-y-3 lg:space-y-0 lg:flex-row flex-col lg:items-center mt-5 lg:mt-10">
          {/* Items */}
          <div className="flex items-center py-2 px-4 bg-gray-100 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <DocumentChartBarIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-1 text-gray-500">
              Items: <span className="text-blue-900 font-medium">100</span>
            </div>
          </div>

          {/* Sentences */}
          <div className="lg:ml-5 flex items-center py-2 px-4 bg-gray-100 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <DocumentChartBarIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-1 text-gray-500">
              Sentences: <span className="text-blue-900 font-medium">100</span>
            </div>
          </div>

          {/* Sentences */}
          <div className="lg:ml-5 flex items-center py-2 px-4 bg-gray-100 rounded-md">
            <div className="h-7 w-7 p-1 rounded-full flex items-center justify-center bg-white">
              <DocumentChartBarIcon className="h-4 text-blue-900" />
            </div>
            <div className="ml-1 text-gray-500">
              Users: <span className="text-blue-900 font-medium">5,562</span>
            </div>
          </div>
        </div>

        <p className="w-full text-sm mt-5 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          asperiores nostrum repudiandae ipsa voluptatum, animi facilis est eos
          odit expedita, pariatur dolores soluta exercitationem, eligendi velit
          provident repellat. Molestias, odit!100
        </p>
      </div>
    </div>
  );
}
