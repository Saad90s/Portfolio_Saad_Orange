"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Database, Layout, Server, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-blue-400" size={24} />,
    skills: skills.frontend,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "Backend",
    icon: <Server className="text-green-400" size={24} />,
    skills: skills.backend,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "group-hover:border-green-500/50"
  },
  {
    title: "Database",
    icon: <Database className="text-purple-400" size={24} />,
    skills: skills.database,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "Programming",
    icon: <Terminal className="text-yellow-400" size={24} />,
    skills: skills.programming,
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "group-hover:border-yellow-500/50"
  },
  {
    title: "Other",
    icon: <Wrench className="text-red-400" size={24} />,
    skills: skills.other,
    color: "from-red-500/20 to-rose-500/20",
    borderColor: "group-hover:border-red-500/50"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080808]">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of my technical skills and tools I use to build modern applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass rounded-2xl p-6 border border-gray-800 transition-all duration-300 group hover:-translate-y-2 ${category.borderColor}`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#111] text-gray-300 rounded-md text-sm font-medium border border-gray-800 group-hover:border-gray-700 transition-colors hover:text-white hover:bg-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
