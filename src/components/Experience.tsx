"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start mb-12">
                <div className="md:col-span-1 md:text-right mb-4 md:mb-0 relative">
                  <div className="hidden md:flex absolute top-1.5 right-[-1.3rem] w-4 h-4 rounded-full bg-purple-500 border-4 border-[#050505] z-10" />
                  <div className="text-sm font-semibold text-purple-400 mb-1">{exp.duration}</div>
                  <div className="text-xs text-gray-500">{exp.months}</div>
                </div>

                <div className="md:col-span-4 relative md:border-l border-gray-800 md:pl-8 pb-8">
                  <div className="md:hidden absolute top-1.5 left-[-2rem] w-4 h-4 rounded-full bg-purple-500 border-4 border-[#050505] z-10" />
                  
                  <div className="glass p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-400 mt-2">
                          <Briefcase size={16} />
                          <span className="font-medium text-gray-300">{exp.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                          className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
