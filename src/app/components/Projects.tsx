"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "OrbitAI App",
    description:
      "A productivity web app built with React and Firebase that helps users manage daily tasks with real-time updates.",
    image: "https://res.cloudinary.com/dehxkiyzb/image/upload/v1759950115/orbitAi_jwgce1.png",
    live: "https://orbyt-ai.vercel.app/",
    tech: ["React", "TailwindCSS", "Firebase"],
  },
  {
    title: "OrbitAI Admin Dashboard",
    description:
      "An internal tool for Agidigbo FM to manage show schedules and announcements efficiently.",
    image: "https://res.cloudinary.com/dehxkiyzb/image/upload/c_pad,w_500,h_500,e_improve,e_sharpen/v1759950834/orbitAi-Admin_q8ks0x.png",
    live: "https://orbyt-ai.vercel.app/admin",
    tech: ["Next.js", "TailwindCSS", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and experiences in software development.",
    image: "https://res.cloudinary.com/dehxkiyzb/image/upload/v1759952180/portfolio_bruzix.png",
    live: "https://yourportfolio.vercel.app",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-40">
      <h2 className="text-4xl font-bold text-white mb-4 border-b border-white py-5 mx-7">
        Featured Projects
      </h2>
      <div className="max-w-6xl mx-auto p-10 text-center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover"
                  width={500}
                  height={500}
                />
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
