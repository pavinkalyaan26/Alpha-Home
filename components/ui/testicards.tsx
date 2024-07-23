import Image, { StaticImageData } from "next/image";
import { CardProps } from "@/context/data";
interface TestiProps extends CardProps {
  rating: number;
  role: string;
}
export default function TestiCards({
  image,
  title,
  description,
  rating,
  role,
}: TestiProps) {
  return (
    <div className="flex items-center justify-center w-80 gap-4 flex-wrap border rounded-lg border-white bg-white p-4">
      <div className="flex-col items-center justify-center w-full">
      <p className="my-4 text-center">{description}</p>
      <span className='flex items-center justify-center'>
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-400'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                    ))}
                    
                </span>
        
        <div className=" bg-white flex rounded-lg p-5 w-72">
          <div className="mr-4">
            <div className=" overflow-hidden rounded-full bg-blue-200 w-10 h-auto flex justify-center items-center">
              <Image src={image} alt={""} width={500} height={500} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{title}</h2>
            <h2 className=" text-gray-800">{role}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
