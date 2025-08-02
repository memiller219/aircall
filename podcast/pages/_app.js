import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import TopNav from "../components/TopNav";
import SubHeader from "../components/SubHeader";
import HeroSection from "../components/HeroSection";
import Releases from "../components/Releases";
import ReleaseCard from "../components/ReleaseCard";

const components = {
  TopNav: TopNav,
  Navbar: Navbar,
  SubHeader: SubHeader,
  HeroSection: HeroSection,
  releases: Releases,
  ReleaseCard: ReleaseCard,
  page: Page,
  layout: Layout,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
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
