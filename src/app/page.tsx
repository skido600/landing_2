import Contact from "@/Component/Contact";
import Discover from "@/Component/Discover";
import Hero from "@/Component/Hero";
import Last_Footer from "@/Component/Last_Footer";
import Nav from "@/Component/Nav";
import Reviews from "@/Component/Reviews";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Discover />
      <Reviews />
      <Contact />
      <Last_Footer />
    </>
  );
}
