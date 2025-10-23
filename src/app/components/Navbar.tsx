"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", icon: <Home size={18} />, href: "/" },
    { name: "About", icon: <User size={18} />, href: "#about" },
    { name: "Projects", icon: <Briefcase size={18} />, href: "#projects" },
    { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2",
        "w-[50%] md:w-auto px-6 py-3",
        "bg-black/50 backdrop-blur-lg border border-white/20",
        "rounded-full shadow-lg flex items-center justify-between"
      )}
    >
      <div className="font-semibold text-lg text-white md:mr-5 lg:mr-20">Faruk.dev</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm text-gray-200">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="flex items-center pl-5 gap-1 hover:text-white transition"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li><a href="/My-Resume.pdf" className="rounded-lg border p-2 hover:bg-amber-50 hover:text-black" download>Resume</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-black/90 rounded-2xl py-4 md:hidden"
        >
          <ul className="flex flex-col items-center gap-4 text-gray-200">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li><a href="/My-Resume.pdf" className="rounded-lg border p-2 hover:bg-amber-50 hover:text-black" download>Resume</a></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
