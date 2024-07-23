import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import test from "node:test";
import TestiCards from "./ui/testicards";
import Image from "next/image";
import { testimonial } from "@/context/data";
export default function Testimonial() {
  return (
    <section className="max-w-7xl w-full h-96 my-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl leading-tight text-center text-indigo-400 mb-10 w-[900px]">
        What did customers say about us?
      </h1>
      <div className="gap-5">
        <Carousel className="flex justify-center ">
          <CarouselContent className="max-w-5xl flex ">
            {testimonial.map((item, index) => (
              <CarouselItem key={index} className=" basis-1/3">
                <TestiCards
                  image={item.image}
                  rating={item.rating}
                  description={item.comment}
                  title={item.name}
                  role={item.role}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
