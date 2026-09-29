"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Code, Cpu, GraduationCap, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm <span className="text-white font-medium">Saad Larabi</span>, a passionate Full Stack Developer currently pursuing my engineering studies in Computer Science and Networks.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech began with a strong curiosity for how digital experiences are built. Today, I focus on building accessible, inclusive products and digital experiences for a variety of platforms.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm deeply interested in exploring <span className="text-blue-400">Machine Learning, Deep Learning, and Artificial Intelligence</span>, constantly seeking to integrate cutting-edge technologies into my development workflow.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mt-6 pt-6 border-t border-gray-800">
              <MapPin size={20} className="text-blue-500" />
              <span>Based in {personalInfo.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-sm text-gray-400">Modern web technologies and scalable architectures.</p>
            </div>

            <div className="glass p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Future Software Engineer</h3>
              <p className="text-sm text-gray-400">2025 - Present • Engineering studies.</p>
            </div>

            <div className="glass p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors group sm:col-span-2">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="text-cyan-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Enthusiast</h3>
              <p className="text-sm text-gray-400">Fascinated by Machine Learning, Deep Learning, and the future of Artificial Intelligence in software engineering.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
