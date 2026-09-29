"use client";

import { motion } from "framer-motion";
import { BookOpen, Layers, Users, Cog } from "lucide-react";

export function WhyWorkWithMe() {
  const reasons = [
    {
      num: "01",
      title: "Continuous Learning",
      desc: "Always exploring new technologies and improving my skills to stay ahead in a fast-evolving industry.",
      icon: <BookOpen className="text-blue-400" size={24} />
    },
    {
      num: "02",
      title: "Full Stack Mindset",
      desc: "Interested in building complete and scalable digital experiences, understanding both client and server requirements.",
      icon: <Layers className="text-purple-400" size={24} />
    },
    {
      num: "03",
      title: "Team Collaboration",
      desc: "Comfortable working in collaborative environments, valuing clear communication and shared goals.",
      icon: <Users className="text-pink-400" size={24} />
    },
    {
      num: "04",
      title: "Engineering Mindset",
      desc: "Building strong foundations toward becoming a Software Engineer, focusing on clean architecture and optimization.",
      icon: <Cog className="text-orange-400" size={24} />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#080808]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Why Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">With Me?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors flex gap-6"
            >
              <div className="hidden sm:block text-4xl font-black text-gray-800 select-none">
                {reason.num}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="sm:hidden">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
