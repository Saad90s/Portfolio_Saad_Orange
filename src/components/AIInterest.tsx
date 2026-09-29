"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Network } from "lucide-react";

export function AIInterest() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Future Focus</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Exploring the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technology
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            While my foundation is in Full Stack Development, I am deeply fascinated by the potential of Artificial Intelligence. These are areas I am actively exploring and developing my knowledge in to integrate into future solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Machine Learning",
              desc: "Understanding algorithms that allow systems to learn and improve from experience.",
              icon: <BrainCircuit size={32} />,
              color: "cyan"
            },
            {
              title: "Deep Learning",
              desc: "Exploring neural networks and complex architectures for advanced problem solving.",
              icon: <Network size={32} />,
              color: "blue"
            },
            {
              title: "AI Integration",
              desc: "Bridging the gap between traditional web applications and intelligent AI services.",
              icon: <Sparkles size={32} />,
              color: "purple"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-all group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/10 rounded-full blur-2xl group-hover:bg-${item.color}-500/20 transition-colors`} />
              
              <div className={`w-16 h-16 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-6 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
