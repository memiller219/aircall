import Link from "next/link";
import Layout from "./Layout";

export default function Navbar({ blok }) {
  console.log(blok.nav_items);

  return (
    <header>
      {/* Main Navbar */}
      <Layout>
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <img src={blok.logo?.filename} alt="Logo" className="h-6 md:h-8" />
          </Link>
          {/* Nav Items */}
          <nav className="flex items-center space-x-12 text-sm font-medium text-gray-800">
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
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              )
            )}
          </nav>

          <Link href="/signup">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded">
              {blok.cta_text}
            </button>
          </Link>
        </div>
      </Layout>
    </header>
  );
}
