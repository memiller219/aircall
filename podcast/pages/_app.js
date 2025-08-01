import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import TopNav from "../components/TopNav";
import SubHeader from "../components/SubHeader";
import HeroSection from "../components/HeroSection";

const components = {
  TopNav: TopNav,
  Navbar: Navbar,
  SubHeader: SubHeader,
  HeroSection: HeroSection,
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
