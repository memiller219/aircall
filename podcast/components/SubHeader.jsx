import { ChevronDown, Search } from "lucide-react";

export default function SubHeader({ blok }) {
  return (
    <div className="bg-aircall-grey-100">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center flex flex-col justify-center items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10 text-aircall-grey-500">
            {blok.nav_items.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item._uid}
                  href={item.url}
                  className="hover:text-emerald-500"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item._uid} className="relative group cursor-pointer">
                  <span className="hover:text-emerald-500 flex items-center gap-1">
                    {item.label}
                    {item.type[0] !== "link" && (
                      <ChevronDown className="w-3 h-3 opacity-50" />
                    )}
                  </span>
                </div>
              )
            )}
            <Search className="w-6 h-6 text-aircall-green flex flex-col justify-end items-start ml-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
