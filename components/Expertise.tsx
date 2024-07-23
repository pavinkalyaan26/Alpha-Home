import { BsInstagram, BsDribbble, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
export default function Expertise() {
  return (
    <section className="max-w-4xl my-20">
      <div className="flex items-start justify-center">
        <div className="w-1/2">
          <h1 className="text-4xl leading-tight ">
            The best software teams ship early and often
          </h1>
        </div>
        <div className="w-1/2">
          <p className="text-base mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            quisquam dolore necessitatibus quia minus accusantium culpa
            accusamus eos et expedita autem nemo. Dolorum tempora
            exercitationem, amet quasi ab dolore assumenda?
          </p>
          <button className="px-5 py-2 rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-500 ">
            Watch Video
          </button>
        </div>
      </div>
      <div className="flex items-start justify-center mt-20">
        <div className="w-1/2">
          <div className="relative rounded-full h-96 w-96 bg-blue-100">
            <div className="absolute top-2 left-6 w-40 bg-white flex justify-center flex-col items-center p-4 rounded-lg">
              <div className="rounded-full w-10 h-10 bg-blue-300 flex items-center justify-center">
                <Image src={"/images/dummy1.jpg"} alt="" width={500} height={500}/>
              </div>
              <div className="my-4 text-center">
                <h1 className="font-semibold">CODY FISHER</h1>
                <h2 className=" text-gray-600">Designer</h2>
              </div>
              <div className="flex px-4 items-center justify-between w-full my-3">
                <BsInstagram />
                <BsDribbble />
                <BsLinkedin />
              </div>
            </div>
            <div className="absolute top-10 right-6 w-32 bg-white flex justify-center flex-col items-start p-4 rounded-lg text-left">
              <div className="rounded-full w-10 h-10 bg-blue-300 flex items-center justify-center overflow-hidden">
                <Image src={"/images/dummy2.jpg"}alt="" width={500} height={500}/>
              </div>
              <h2 className=" text-gray-600 my-2">6:30 AM</h2>
              <h2 className="font-semibold">Meeting with Sam</h2>
            </div>
            <div className="absolute bottom-10 -right-10  bg-white flex rounded-lg p-5 w-72">
              <div className="mr-4 flex items-center justify-center">
                <div className="rounded-full bg-blue-200 w-12 h-12 flex justify-center items-center">
                  JD
                </div>
              </div>
              <div>
                <h2 className="font-semibold">John Doe</h2>
                <h2 className=" text-gray-800">My name is John Doe</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-blue-400 mb-2">SOURCE & ATTRACT</h2>
          <h1 className="text-4xl leading-tight mb-2">
            All the info you need - in one place
          </h1>
          <p className="text-base my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            nesciunt mollitia facere nobis eveniet necessitatibus possimus
            aperiam corporis vero quo! Totam sint illo at debitis reprehenderit
            mollitia a dolorum possimus.
          </p>
          <button className="px-5 py-2 rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-500">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
