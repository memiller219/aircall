import LatestArticles from "./LatestArticles";
export default function Articles({ blok }) {
  return (
    <div className="py-24 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-8 ">
          <h2 className="text-3xl font-semibold text-black">{blok.title}</h2>
        </div>
      </div>
      <LatestArticles blok={blok} />
    </div>
  );
}
