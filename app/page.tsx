import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import FeatureBoxes from "./Components/Boxes";
import GameModeCarousel from "./Components/GameModes";
import MeetTheTeam from "./Components/Team";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <HeroSection />
      <FeatureBoxes />
      <GameModeCarousel />
      <MeetTheTeam />

      <Analytics />
    </div>
  );
}
