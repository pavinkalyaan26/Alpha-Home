import Image, { StaticImageData } from 'next/image';

interface FloaterProps{
    className?:string;
    image:string|StaticImageData;
}

const Floaters = ({image,className}:FloaterProps) => {
  return (
    <div className={`bg-white w-20 h-20 flex items-center justify-center border border-blue-400 p-3 rounded-3xl shadow-2xl absolute ${className}`}>
      <Image src={image} height={200} width={200} alt={"floating icons"}  />
    </div>
  )
}

export default Floaters;

