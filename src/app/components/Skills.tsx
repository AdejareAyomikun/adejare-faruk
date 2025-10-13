"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  FilePlus,
  Layers,
  FileCode2,
  SquareCode,
  BookText,
} from "lucide-react";

export default function Skills() {
  return (
    <section className="w-full max-w-5xl mt-20">
      <h1 className="text-4xl font-bold text-white mb-4 border-b border-white py-5">
        My Skills
      </h1>
      <div className="max-w-6xl mx-auto lg:p-10 py-5 text-center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              title: "Front End",
              description:
                "I value simple content structure, clean design and thoughtful interactions.",
              icon: Layers,
              live: "https://orbyt-ai.vercel.app/",
              tech: [
                "HTML5",
                "CSS3",
                "Bootstrap 5",
                "TailwindCSS",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "React Native",
              ],
            },
            {
              title: "Back End",
              description:
                "I like to code things from scratch and implement efficiently.",
              icon: SquareCode,
              live: "https://orbyt-ai.vercel.app/admin",
              tech: [
                "PHP",
                "Laravel",
                "MySQL",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Python",
                "Django",
                "PostgreSQL",
              ],
            },
          ].map(({ title, description, tech, icon: Icon, live }, idk) => (
            <motion.div
              key={idk}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 lg:p-10 lg:m-5">
                <CardContent>
                  <Icon className="w-10 h-10 mx-auto my-6 mb-2 text-gray-600" />
                  <h3 className="text-xl font-semibold my-3 ">{title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-6"></CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
