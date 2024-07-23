import Image from 'next/image'
import React from 'react'
import Floaters from './Floaters'
import {Button} from "@/components/ui/button"
import Python from "@/public/images/Floaters/python.svg"
import ReactJS from "@/public/images/Floaters/react.png"
import AWS from "@/public/images/Floaters/aws.png"
import Fastapi from "@/public/images/Floaters/fastapi.png"
import Nextjs from "@/public/images/Floaters/next.svg"

const Hero = () => {
    return (
        <div className='max-w-8xl h-[700px] flex items-center justify-center gap-2 rounded-3xl bg-blue-100 p-10 shadow-2xl bg-[url("/images/hero-bg.jpg")] bg-cover bg-center bg-no-repeat '>
            <div className='w-1/2 px-5 bg-white/70 rounded-2xl py-10'>
                <div className='flex flex-col items-center justify-center gap-5 text-left'>
                    <h1 className='text-3xl font-semibold text-blue-500'>One Stop solution with Latest Cutting Edge Technologies</h1>
                    <h3 className='text-xl font-medium text-blue-400'>Discover premier Software Development Solutions with Alpha Solutions.</h3>
                    <p className='text-base'>Our expert developers understand your unique business needs and are committed to delivering excellence worldwide. Let us turn your vision into reality.</p>
                </div>
                <div className='flex items-center justify-start gap-5 mt-10'>
                    <Button>Get Started</Button>
                    <Button variant={"outline"}>Enquire</Button>
                </div>
            </div>
            <div className='w-1/2 h-full flex items-end justify-center rounded-3xl overflow-hidden relative'>
                <Image className='w-full h-auto' width={800} height={800} src={'/images/hero-img.png'} alt={'Hero Image'} />
                <Floaters image={Python} className='w-20 bottom-52 left-10 animate-tada' />
                <Floaters image={ReactJS} className='w-20 bottom-52 right-10 animate-tada' />
                <Floaters image={Fastapi} className='w-20 bottom-80 right-44 animate-tada' />
                <Floaters image={Nextjs} className='w-20 top-40 left-72 animate-tada' />
                <Floaters image={AWS} className='w-20 bottom-80 left-36 animate-tada' />
            </div>

        </div>
    )
}

export default Hero
