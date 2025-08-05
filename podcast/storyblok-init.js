import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});
