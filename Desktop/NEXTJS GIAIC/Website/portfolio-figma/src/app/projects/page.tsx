import Image from "next/image";
import Projects from "../projects/project2.png";

export default function Project() {
  return (
    <>
      {/* Container for the white background */}
      <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between p-28">
        
        {/* Text section on the left */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black animate-bounce flex justify-center">
            CARD💕
          </h1>
          <i className="text-lg md:text-xl font-medium text-black">
            "I've recently completed a project where I created an ID card using
            Tailwind CSS and explored the use of props in Next.js. This project
            was a great practice for enhancing my skills in both styling and
            React component management, and I'm excited to apply these concepts
            to future web development projects."
          </i>
        </div>

        {/* Image section on the right */}
        <div className="md:w-1/2 flex justify-center md:justify-center mt-10 md:mt-0 h-60 w-60">
          <Image
            src={Projects}
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

