import Hero from "@/components/hero";
import Image from "next/image";
import Expertise from "@/components/Expertise";
import Reasons from "@/components/Reasons";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <section className="max-w-8xl mx-auto flex flex-col items-center justify-between p-10">
      <Hero />
      <Expertise/>  
      <Reasons/>
      <Testimonial/>
    </section>
  );
}
