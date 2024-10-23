import Image from "next/image";
import Navbar from "./components/navbar";
import Profile from "./profile/page";
import Project from "./projects/page";
import Works from "./skills/page";
import Connect from "./components/footer";



export default function Home() {
  return (
    <>
   <Profile/>
    <Project/>
    <Works/>
    <Connect/>
    </>
  );
}
