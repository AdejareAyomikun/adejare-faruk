import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 bg-black/70">
      <Navbar />
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <div className="pt-10">
          <p className="text-gray-400">Hi, my name is</p>
          <h1 className="text-4xl font-bold text-white mb-4">Adejare Faruk.</h1>
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-gray-300 mb-6">
            I am, a passionate developer specializing in building beautiful and
            functional web applications. Explore my projects and get in touch!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white bg-black/10"
          >
            View Projects
          </Button>
        </div>
        <div>
          <AspectRatio ratio={16 / 9}>
            <Image
              src="https://res.cloudinary.com/dehxkiyzb/image/upload/v1759905587/profile-picture_agshna.jpg" // Use the path relative to the public directory
              alt="Profile Picture"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </AspectRatio>
        </div>
      </section>

      <section className="w-full max-w-5xl mt-50">
        <h1 className="text-4xl font-bold text-white mb-4 border-b border-white py-5">
          About Me
        </h1>
        <p className="text-gray-300">
          I am a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability.
        </p>
        <p className="text-gray-300 mt-4">
          My journey as a developer started back in university when I was in 200
          level a period that completely changed my perspective on growth and
          learning. I was struggling academically, and failing courses pushed me
          to search for something that truly resonated with me. That’s when I
          discovered coding outside school. What started as a desperate attempt
          to try something new quickly became a passion for creating solutions
          and bringing ideas to life through technology.
        </p>
        <p className="text-gray-300 mt-4">
          Since then, I’ve had the privilege of working with Alusoft
          Technologies as an intern, where I built a strong foundation in
          real-world software development, and at Agidigbo FM Ibadan as a
          contract developer, contributing to digital solutions that enhanced
          their media operations. These experiences helped me grow both
          technically and professionally teaching me the value of consistency,
          collaboration, and creativity in tech. Today, I continue to learn,
          build, and refine my craft, driven by the same curiosity that started
          it all turning challenges into opportunities and ideas into impact
        </p>
      </section>

      <Projects />
      <Contact />
        {/* Footer */}
        <footer className="text-center text-sm text-white mt-16">
          © {new Date().getFullYear()} Adejare Faruk • Portfolio
        </footer>
    </div>
  );
}
