import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import TopNav from "../components/TopNav";
import SubHeader from "../components/SubHeader";

const components = {
  TopNav: TopNav,
  Navbar: Navbar,
  SubHeader: SubHeader,
  teaser: Teaser,
  page: Page,
  layout: Layout,
};

storyblokInit({
  accessToken: "LnkF2XqnxiDYQye0HP7Tmwtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
