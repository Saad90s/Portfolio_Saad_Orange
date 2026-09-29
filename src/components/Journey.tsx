"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/portfolio";
import { Milestone } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#080808]">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The path I've taken and where I'm heading next.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {journey.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#080808] border-2 border-orange-500 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="glass p-6 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-colors">
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold mb-3 border border-orange-500/20">
                      {item.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-gray-400 text-sm">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Future End Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-0 left-4 md:left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          >
            <Milestone className="text-orange-400" size={20} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
