"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send, ExternalLink, CheckCircle2 } from "lucide-react";
import { LinkedinIcon as Linkedin } from "./icons";

export function Contact() {
  const [formState, setFormState] = useState({
    status: "idle", // idle, submitting, success
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "submitting" });
    
    // Placeholder submission handler
    setTimeout(() => {
      setFormState({ status: "success" });
      setTimeout(() => {
        setFormState({ status: "idle" });
        (e.target as HTMLFormElement).reset();
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Have an opportunity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">for me?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            I'm open to discussing internships, job opportunities, freelance missions and professional collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Email</div>
                    <div className="text-sm md:text-base">{personalInfo.email}</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 text-gray-400 group">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Location</div>
                    <div className="text-sm md:text-base">{personalInfo.location}</div>
                  </div>
                </div>

                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center group-hover:bg-[#0077b5]/20 transition-colors">
                    <Linkedin className="text-[#0077b5]" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">LinkedIn</div>
                    <div className="text-sm md:text-base flex items-center gap-2">
                      Connect with me <ExternalLink size={14} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass p-8 rounded-3xl border border-gray-800 relative overflow-hidden"
          >
            <AnimatePresence>
              {formState.status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-[#0a0a0a]/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="text-green-500" size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Recruiter / Your Name *</label>
                  <input required type="text" id="name" className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-400">Company Name</label>
                  <input type="text" id="company" className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Tech Corp" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Professional Email *</label>
                  <input required type="email" id="email" className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-gray-400">Opportunity Type *</label>
                  <select required id="type" className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                    <option value="">Select type...</option>
                    <option value="cdi">CDI / Full-time</option>
                    <option value="internship">Internship</option>
                    <option value="freelance">Freelance</option>
                    <option value="alternance">Alternance</option>
                    <option value="other">Other Collaboration</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message / Details *</label>
                <textarea required id="message" rows={4} className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="Tell me about the role or project..."></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contactMethod" className="text-sm font-medium text-gray-400">Preferred Contact Method</label>
                  <select id="contactMethod" className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                    <option value="email">Email</option>
                    <option value="meet">Google Meet</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
                <div className="space-y-2 flex items-end">
                  <button
                    type="submit"
                    disabled={formState.status === "submitting"}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white rounded-xl px-4 py-3 font-medium transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group"
                  >
                    <span>{formState.status === "submitting" ? "Sending..." : "Propose an Opportunity"}</span>
                    {!formState.status && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
