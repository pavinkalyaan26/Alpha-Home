import { StaticImageData } from "next/image";
import { comment } from "postcss";
export const BackUp=[
    {
        image: "/images/3D/worldclass.png", title: "World-Class Partner", description: "Keep things moving from anywhere with our top-rated mobile hiring app."
    },
    {
        image: "/images/3d/global.png", title: "Fast,global support", description: "Keep things moving from anywhere with our top-rated mobile hiring app."
    },
    {
        image: "/images/3D/sheild.png", title: "Trusted Security", description: "Keep things moving from anywhere with our top-rated mobile hiring app."
    },
    {
        image: "/images/3D/recruit.png", title: "Anywhere recruiting", description: "Keep things moving from anywhere with our top-rated mobile hiring app."
    },
    {
        image: "/images/3D/advice.png", title: "Expert advice", description: "Keep things moving from anywhere with our top-rated mobile hiring app."
    },
    {
        image: "/images/3D/rocket.png", title: "Assisted Onboarding", description: "Keep things moving from anywhere with our top-rated mobile hiring app."
    },
    

]

export interface CardProps {
    image: string | StaticImageData;
    title: string;
    description: string;
  }
  export const testimonial=[
    {
        image: "/images/dummy2.jpg", name: "Wade Wilson", role:"Dummy", comment:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining sensually unchanged.It has survived.", rating:1   
    },
    {
        image: "/images/dummy2.jpg", name: "Steve Rogers", role:"Captain", comment:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining sensually unchanged.It has survived.", rating:5    
    },
    {
        image: "/images/dummy2.jpg", name: "Tony Stark", role:"Head", comment:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining sensually unchanged.It has survived.", rating:5    
    },
    {
        image: "/images/dummy2.jpg", name: "Thor Odinson", role:"God", comment:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining sensually unchanged.It has survived.", rating:5    
    },
    {
        image: "/images/dummy2.jpg", name: "Bruce Banner", role:"Rage", comment:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining sensually unchanged.It has survived.", rating:4    
    },
  ]
  