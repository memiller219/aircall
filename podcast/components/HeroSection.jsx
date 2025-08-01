export default function HeroSection({ blok }) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-transparent">
      <div className="max-w-7xl mx-auto py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 mt-10 text-left">
            <h1 className="text-5xl lg:text-6xl font-semibold text-black leading-tight">
              {blok.hero_title}
            </h1>

            <div className="space-y-4">
              <p className="text-xl font-semibold text-black ">
                {blok.sub_text}
              </p>

              <div className="flex">
                {blok.subscriptions.map((item) => (
                  <div className="mt-4 mr-5">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.icon?.filename}
                        alt={item.icon_name}
                        className="w-8 h-8"
                      />
                      <span className="font-semibold text-aircall-grey-900">
                        {item.icon_name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="w-64 h-64 absolute -bottom-[60px] left-[140px] bg-aircall-green rounded-xl shadow-xl overflow-hidden">
                <img
                  src={blok.podcastImages[1].podcast_image?.filename}
                  alt={blok.podcastImages[1].podcast_image?.alt}
                  className="h-64 w-64 object-cover rounded-lg absolute"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
                <img
                  src={blok.podcastImages[3].podcast_image?.filename}
                  alt={blok.podcastImages[3].podcast_image?.alt}
                  className="absolute bottom-4 left-4 w-56 h-56"
                />
              </div>
              <div className="absolute -bottom-[110px] left-[65px]  bg-aircall-green rounded-xl shadow-lg overflow-hidden">
                <img
                  src={blok.podcastImages[0].podcast_image?.filename}
                  alt={blok.podcastImages[0].podcast_image?.alt}
                  className=""
                />
              </div>

              <div className="absolute right-4 -bottom-[250px] rounded-lg overflow-hidden">
                <img
                  src={blok.podcastImages[2].podcast_image?.filename}
                  alt={blok.podcastImages[2].podcast_image?.alt}
                  className="object-cover h-84 w-84"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
