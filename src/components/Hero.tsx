"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Download, ArrowRight, Code2, Terminal } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const codeSnippet = `const developer = {
  name: "Saad Larabi",
  role: "Full Stack Developer",
  location: "Morocco"
};`;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Building digital <br />
            experiences with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              code & creativity.
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-light">
            {personalInfo.title.split(" | ").map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2 text-gray-600">|</span>}
                <span className={i === 1 ? "text-gray-200 font-medium" : ""}>{part}</span>
              </span>
            ))}
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            I'm a passionate Full Stack Developer aspiring to become a Software Engineer, passionate about modern web technologies, AI and continuous learning.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#projects"
              className="group flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              <span>View My Work</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              href="#contact"
              className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-colors text-white font-medium"
            >
              <span>Let's Talk</span>
            </Link>
            <button className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-colors text-white font-medium">
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>

          <div className="flex items-center space-x-6 pt-6">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
          {/* Decorative code editor window */}
          <div className="w-full max-w-md bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl relative z-20">
            <div className="flex items-center px-4 py-3 bg-[#111] border-b border-gray-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex items-center space-x-2 text-xs text-gray-500">
                <Terminal size={12} />
                <span>developer.ts</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
              {mounted && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                >
                  {codeSnippet.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      className={
                        char === "{" || char === "}" || char === "=" 
                          ? "text-blue-400" 
                          : ["name", "role", "location"].includes(codeSnippet.substring(index, index + 4)) || ["name", "role", "location"].includes(codeSnippet.substring(index, index + 8))
                            ? "text-purple-400"
                            : char === '"' || char === "'" ? "text-green-400"
                            : "text-gray-300"
                      }
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 glass px-4 py-2 rounded-lg flex items-center space-x-2 border-blue-500/30 z-30"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium">Next.js 14</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -left-6 glass px-4 py-2 rounded-lg flex items-center space-x-2 border-purple-500/30 z-30"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-sm font-medium">TypeScript</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -right-8 glass px-4 py-2 rounded-lg flex items-center space-x-2 border-cyan-500/30 z-30"
          >
            <Code2 size={16} className="text-cyan-400" />
            <span className="text-sm font-medium">Tailwind CSS</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
