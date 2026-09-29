"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon as Github } from "./icons";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building modern digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass rounded-2xl border border-gray-800 overflow-hidden group hover:border-emerald-500/50 transition-colors flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <Code2 size={48} className="text-gray-700 group-hover:scale-110 group-hover:text-emerald-500 transition-all duration-500" />
                
                {/* 
                  Real image placeholder for future use
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                */}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#111] text-gray-300 rounded text-xs font-medium border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-800/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white transition-colors ml-auto"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
