import Image from "next/image";
import Picture from "../profile/Asset 1 2.png";

export default function Profile() {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen items-center justify-between p-5 md:p-10">
      {/* Text Section */}
      <div className=" mt-32 md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold flex justify-center text-white animate-bounce">I AM AYESHA</h1>
        <p className="text-lg md:text-xl font-medium text-white">
          I'm a passionate web developer with experience in creating responsive, user-friendly websites and applications. With expertise in modern web technologies like HTML, CSS, JavaScript, TypeScript, and frameworks like Next.js, I aim to build dynamic, scalable solutions that provide seamless user experiences. My goal is to constantly enhance my skills while delivering high-quality projects that align with client needs and industry standards.
        </p>
      </div>
      <div className=" top-40 md:w-1/2  h-56 flex justify-evenly animate-pulse">
        <Image
          src={Picture}
          alt={"Profile Picture"}
          width={300}  
          height={300} 
          className="rounded-sm"
        />
      </div>
    </div>
  );
}
