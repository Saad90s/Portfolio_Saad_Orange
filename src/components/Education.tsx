"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";
import { Award, GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#080808]">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
                <GraduationCap className="text-blue-500" size={40} />
                <span>Education</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="glass p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[32px] group-hover:bg-blue-500/10 transition-colors" />
                  
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-3 border border-blue-500/20">
                      {edu.duration}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
                <Award className="text-yellow-500" size={40} />
                <span>Certifications</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </motion.div>

            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center space-x-4 glass p-4 rounded-xl border border-gray-800 hover:border-yellow-500/30 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Award size={20} className="text-yellow-500" />
                  </div>
                  <h4 className="text-gray-200 font-medium group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
