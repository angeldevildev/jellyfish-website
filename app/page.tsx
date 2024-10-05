import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import FeatureBoxes from "./Components/Boxes";
import GameModeCarousel from "./Components/GameModes";
import MeetTheTeam from "./Components/Team";
import { Analytics } from "@vercel/analytics/react"
import Regolamento from "./regolamento/page";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <HeroSection />
      <FeatureBoxes />
      <GameModeCarousel />
      <Regolamento />
      <MeetTheTeam />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
