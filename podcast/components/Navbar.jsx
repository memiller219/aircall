import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar({ blok }) {
  return (
    <header className="bg-white h-95">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={blok.logo?.filename} alt="Aircall" className="h-10" />
          </div>
          <nav className="hidden md:flex items-center space-x-12 text-aircall-grey-900">
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
                      <ChevronDown className="w-3 h-3 opacity-30" />
                    )}
                  </span>
                </div>
              )
            )}
          </nav>
          <button className="bg-aircall-green text-white px-5 py-3 rounded font-semibold">
            {blok.cta_text}
          </button>
        </div>
      </div>
    </header>
  );
}
