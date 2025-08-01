import { ChevronDown } from "lucide-react";

export default function TopNav({ blok }) {
  return (
    <>
      <div className="bg-white">
        <div className="bg-white border-b border-gray-100">
          <div className="pb-1 -mt-3 flex items-center justify-end text-sm text-gray-600 gap-2 max-w-7xl mx-auto">
            <div className="flex gap-8 mr-8">
              <span>{blok.phone_number}</span>
              <span>{blok.contact_us}</span>
            </div>
            <button className="border border-aircall-green text-aircall-green px-4 py-1 rounded text-sm font-semibold">
              {blok.login_text}
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded text-sm">
              {blok.language_code} <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
