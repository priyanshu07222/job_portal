import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl  mx-auto">
        <HeroSection />
      </div>
    </div>

  );
}
