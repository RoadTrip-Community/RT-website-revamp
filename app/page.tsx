import Footer from "@/components/footer/Footer";
import {
  Hero,
  Marquee,
  About,
  Apart,
  Events,
  Stats,
  Partners,
  Stories,
  Outside,
  Onboard
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee text="You will never walk alone" />
      <About />
      <Marquee text="Growth is a marathon, not a sprint" />
      <Apart />
      <Events />
      <Stats />
      <Partners />
      <Stories />
      <Outside />
      <Onboard />
      <Footer />
    </>
  );
}
