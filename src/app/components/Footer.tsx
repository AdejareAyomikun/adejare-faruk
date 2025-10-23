import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-white mt-16">
      <div className="flex">
        <span className="p-3 lg:mr-70 md:mr-30">
          © {new Date().getFullYear()} Adejare Faruk • All rights reserved
        </span>
        <a
          href="https://github.com/AdejareAyomikun"
          className="text-white lg:ml-60 md:ml-30 p-2"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/faruk-ayomikun"
          className="text-white p-2"
        >
          <Linkedin />
        </a>
      </div>
    </footer>
  );
}
