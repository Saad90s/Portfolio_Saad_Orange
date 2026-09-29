import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./icons";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Saad Larabi</h3>
            <p className="text-gray-500 text-sm">Full Stack Developer • Future Software Engineer</p>
          </div>

          <div className="flex items-center space-x-6">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Saad Larabi. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center space-x-1">
            <span>Built with Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
