import Image from "next/image";
import Hero from "../components/Hero";
// import Introduction from "../components/Introduction";
import Review from "../components/Review";
import BambooExperience from "@/components/Experience";
import BeforeYouVisit from "@/components/BeforeYouVisit";

export const metadata = {
  title: "Nails as Art",
  description:
    "Professional nail salon in nail salon in Anlaby Road, Hull specialising in BIAB, gel nails and modern artistic designs.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <BambooExperience />
      <Review />
      <BeforeYouVisit />
    </div>
  );
}
