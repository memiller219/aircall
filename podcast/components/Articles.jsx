import LatestArticles from "./LatestArticles";
export default function Articles({ blok }) {
  return (
    <div className="py-[50px]">
      <div className="mx-auto max-w-[311px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="flex items-center justify-between pb-8 ">
          <h2 className="text-2xl font-semibold text-black">{blok.title}</h2>
        </div>
      </div>
      <LatestArticles blok={blok} />
    </div>
  );
}
