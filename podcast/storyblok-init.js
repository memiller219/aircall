import { storyblokInit, apiPlugin } from "@storyblok/react";
import Navbar from "./components/Navbar";

const components = {
  navbar: Navbar,
};

storyblokInit({
  accessToken: "LnkF2XqnxiDYQye0HP7Tmwtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});
