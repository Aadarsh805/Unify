import CreateProfile from "./components/CreateProfile";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroText from "./components/HeroText";
import Support from "./components/Support";
import Tradition from "./components/Tradition";

export default function Home() {
  return (
    <div className="bg-[#F4F1E7]">
      <Hero />
      <HeroText />
      <Tradition />
      <CreateProfile />
      <Support />
      <Footer />
    </div>
  );
}
