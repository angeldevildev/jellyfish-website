import Link from "next/link";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import FeatureBoxes from "./Components/Boxes";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <HeroSection />
      <FeatureBoxes />
    </div>
  );
}
