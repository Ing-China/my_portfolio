import Hero from "@/components/Hero";
import KeyMetrics from "@/components/KeyMetrics";
import LogoAnimation from "@/components/LogoAnimation";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <LogoAnimation />
      <KeyMetrics />
      <Services />
    </>
  );
}
