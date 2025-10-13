import Navbar from "../components/Navbar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 bg-black/80">
      <Navbar />
      <section className="grid place-items-center w-full mt-5">
        <Image
          src="https://res.cloudinary.com/dehxkiyzb/image/upload/v1759905587/profile-picture_agshna.jpg"
          alt="Profile Picture"
          width={550}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <h1 className="text-4xl text-white py-5">Adejare Faruk Ayomkun</h1>
        <div className="mt-5">
          <p className="text-gray-300">
            I am a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability.
          </p>
          <p className="text-gray-300 mt-4">
            My journey as a developer started back in university when I was in
            200 level a period that completely changed my perspective on growth
            and learning. I was struggling academically, and failing courses
            pushed me to search for something that truly resonated with me.
            That’s when I discovered coding outside school. What started as a
            desperate attempt to try something new quickly became a passion for
            creating solutions and bringing ideas to life through technology.
          </p>
          <p className="text-gray-300 mt-4">
            Since then, I’ve had the privilege of working with Alusoft
            Technologies as an intern, where I built a strong foundation in
            real-world software development, and at Agidigbo FM Ibadan as a
            contract developer, contributing to digital solutions that enhanced
            their media operations. These experiences helped me grow both
            technically and professionally teaching me the value of consistency,
            collaboration, and creativity in tech. Today, I continue to learn,
            build, and refine my craft, driven by the same curiosity that
            started it all turning challenges into opportunities and ideas into
            impact
          </p>
        </div>
      </section>
      <Skills />
      <Footer />
    </div>
  );
}
