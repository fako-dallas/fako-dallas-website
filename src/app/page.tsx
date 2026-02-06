
import { Metadata } from "next";
import Banner from "../components/website/banner";

export const metadata: Metadata = {
  title: "FakoDallas - Home",
};

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}
