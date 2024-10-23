import Image from "next/image";
import  Work from "../skills/Work.png";

export default function Works() {
  return (
    <>
      {/* Container for the white background */}
      <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between p-28">
        
        {/* Text section on the left */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black animate-bounce flex justify-center">
            Hire me💕
          </h1>
          <p className="text-lg md:text-xl font-medium text-black">
          <i> By hiring me, your team can benefit from my skills to deliver high-quality web development projects. Together, we can enhance your companys online presence while I continue to grow and contribute. It would be a great opportunity for us to achieve impressive results, expand your business reach, and add value to your ongoing projects."</i>
          </p>
        </div>

        {/* Image section on the right */}
        <div className="md:w-1/2 flex justify-center md:justify-center mt-10 md:mt-0 h-60 w-60 ">
          <Image
            src={Work}
            alt="Profile Picture"
            width={500}
            height={300}
            className="rounded-sm"
          />
        </div>
      </div>
    </>
  );
}
