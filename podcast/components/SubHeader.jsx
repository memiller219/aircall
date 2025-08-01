import Layout from "./Layout";

export default function SubHeader({ blok }) {
  return (
    <div className="bg-gray-100 h-[85px] pt-[30px]">
      <Layout>
        <nav className="flex items-center justify-center space-x-12 text-sm font-regular text-gray-500">
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
          <img src={blok.search?.filename} alt="Search" />
        </nav>
      </Layout>
    </div>
  );
}
