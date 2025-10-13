"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Professional Foundations",
    description:
      "ALX Learning",
    live: "https://orbyt-ai.vercel.app/",
    tech: ["React", "TailwindCSS", "Firebase"],
  },
  {
    title: "Frontend Development",
    description:
      "ALX Learning",
    live: "https://orbyt-ai.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
  },
  {
    title: "Frontend Pro Development",
    description:
      "ALX Learning",
    live: "https://orbyt-ai.vercel.app/admin",
    tech: ["TypeScript", "Next.js", "TailwindCSS", "React Native"],
  },
  {
    title: "Backend Development",
    description:
      "ALX Learning",
    live: "https://yourportfolio.vercel.app",
    tech: ["Python", "PostgreSQL", "Django", "Framer Motion"],
  },
];

export default function Certificates() {
  return (
    <section className="my-10">
      <h2 className="text-4xl font-bold text-white mb-4 border-b border-white py-5 mx-7">
        Certificates
      </h2>
      <div className="max-w-6xl mx-auto lg:p-10 py-5 text-center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 py-20 lg:px-10">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {certificate.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {certificate.tech.map((t, i) => (
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
                    href={certificate.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Show Certificate
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
