import { ChevronDown } from "lucide-react";
import ReleasesCard from "./ReleaseCard";

export default function Releases({ blok }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-black">
            The latest releases
          </h2>
          <div className="flex items-center gap-2 bg-aircall-grey-200 px-4 py-2 rounded cursor-pointer">
            <span className="text-aircall-grey-900">Sort by</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-12">
          {blok.card.map((cardInfo, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 xl:col-span-3"
            >
              <ReleasesCard info={cardInfo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
