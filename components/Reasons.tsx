import { BackUp } from "@/context/data";
import globe from "@/public/images/SVG/globe.svg"; 
import Image from "next/image";
import Card from "./card";
export default function Reasons() {
  return (
    <section className="max-w-7xl my-20 flex flex-col items-center">
      <h1 className="text-4xl leading-tight text-center text-indigo-400 mb-10 w-[900px]">
        More reasons companies around the world choose CrackTech
      </h1>
      <div className="flex items-center justify-center max-w-5xl gap-4 flex-wrap">
        {BackUp.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
