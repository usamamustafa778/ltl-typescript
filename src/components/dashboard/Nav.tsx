import { BellIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

export default function Nav() {
  return (
    <div className="w-full flex items-center justify-between border-b py-3 px-7 mt-16 lg:mt-0">
      <input
        type="text"
        className="text-sm w-full flex-1 p-3 border rounded-md mr-3 lg:max-w-xl focus:outline-none"
        placeholder="Search for Language, Verb, Nouns"
      />
      <div className="flex items-center">
        <div className="p-1 border-2 h-9 w-9 flex items-center justify-center rounded-full">
          <BellIcon className="h-5" />
        </div>
        <div className="ml-2 p-1 border-2 h-9 w-9 flex items-center justify-center rounded-full">
          <ChatBubbleLeftIcon className="h-5" />
        </div>
        <div className="ml-2 p-1 border-2 h-9 w-9 flex items-center justify-center rounded-full bg-dp bg-center bg-cover"></div>
      </div>
    </div>
  );
}
