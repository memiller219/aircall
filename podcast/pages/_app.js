import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";
import SubHeader from "../components/SubHeader";
import HeroSection from "../components/HeroSection";
import Releases from "../components/Releases";
import ReleaseCard from "../components/ReleaseCard";
import LatestArticles from "../components/LatestArticles";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

const components = {
  TopNav: TopNav,
  Navbar: Navbar,
  SubHeader: SubHeader,
  HeroSection: HeroSection,
  releases: Releases,
  ReleaseCard: ReleaseCard,
  articles: Articles,
  LatestArticles: LatestArticles,
  footer: Footer,
  page: Page,
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
