
import { Metadata } from "next";
import Banner from "../components/website/banner";
import About from "../components/website/about";
import Team from "../components/website/team";

export const metadata: Metadata = {
  title: "FakoDallas - Home",
};

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Team />
    </>
  );
}
