"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailIcon, User } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace this!

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setStatus("success");
      setResult("✅Message sent successfully! You will get a Response as soon as possible");
      form.reset();
    } else {
      setStatus("error");
      setResult("❌ Something went wrong. Try again!");
    }

    setTimeout(() => setStatus("idle"), 5000); // hide message after 5s
  };

  return (
    <div id="contact" className="lg:w-250 place-items-center mt-40">
      <h1 className="text-4xl font-bold text-white mb-4 border-b border-white py-5 w-full">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid w-full max-w-3xl gap-6 mx-7 mt-10 text-center"
      >
        <h2 className="text-1xl font-semibold text-gray-300">
          Have a project in mind or want to collaborate? Feel free to reach out
          and I&apos;ll get back to you as soon as possible.
        </h2>
        <InputGroup>
          <InputGroupInput
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <InputGroupAddon>
            <User />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
        <Textarea
          name="message"
          placeholder="Type your message here."
          required
        />
        <Button
          variant="outline"
          size="lg"
          className="text-white border-white bg-black/10"
          type="submit"
        >
          Submit
        </Button>
        {/* Animated Status Message */}
        <AnimatePresence>
          {status !== "idle" && (
            <motion.p
              key={result}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={`font-medium mt-2 ${
                status === "success"
                  ? "text-green-400"
                  : status === "error"
                  ? "text-red-400"
                  : "text-gray-300"
              }`}
            >
              {result}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
