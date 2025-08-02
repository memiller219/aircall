export default function ReleasesCard({ info }) {
  const hasSeason = !!info.releasedInfo_season;
  const hasDuration = !!info.releasedInfo_duration;
  const hasTitle = !!info.podcast_title;

  return (
    <div>
      <img
        src={info.card_image?.filename}
        alt="podcast image"
        className={`w-[305px] aspect-square rounded-xl mb-4 ${
          hasSeason && hasDuration ? "shadow-lg" : ""
        }`}
      />
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-aircall-grey-300 text-sm font-semibold uppercase h-5">
          {hasSeason ? (
            <span>{info.releasedInfo_season}</span>
          ) : (
            <div className="w-20 h-4 bg-[#F1F3F8] rounded-[5px]" />
          )}
          {hasSeason && info.releasedInfo_duration && (
            <>
              <div className="w-0.5 h-4 bg-aircall-grey-300" />
              <span>{info.releasedInfo_duration}</span>
            </>
          )}
        </div>

        {hasTitle ? (
          <h3 className="text-xl text-left font-semibold text-aircall-grey-900 leading-tight min-h-[28px]">
            {info.podcast_title}
          </h3>
        ) : (
          <div className="h-7 bg-[#F1F3F8]  rounded-[5px] w-2/3" />
        )}

        {hasTitle ? (
          <button className="flex items-center gap-2 text-black cursor-pointer mt-2">
            <div className="w-6 h-6 bg-aircall-green/15 rounded-full flex items-center justify-center">
              <img src={info.playButton?.filename} alt="Play" />
            </div>
            <span className="font-medium">Listen Now</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
