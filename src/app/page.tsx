"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Mail,
  ExternalLink,
  Globe
} from "lucide-react";
import { url } from "inspector";

// Accent color as requested (lime green)
// Hex provided by user was #E50914 but they said lime green.
// I'll use a vibrant lime green (#ADFF2F or #bef264) for the "vibe" aesthetic.
const ACCENT_COLOR = "#bef264";

const links = [
  {
    name: "Portfolio",
    url: "https://yourportfolio.com",
    icon: <Globe className="w-5 h-5 transition-colors group-hover:text-[#bef264]" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: <Github className="w-5 h-5 transition-colors group-hover:text-white" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: <Twitter className="w-5 h-5 transition-colors group-hover:text-[#1DA1F2]" />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@yourchannel",
    icon: <Youtube className="w-5 h-5 transition-colors group-hover:text-[#FF0000]" />,
  },
  {
    name: "Email",
    url: "mailto:hello@yourname.com",
    icon: <Mail className="w-5 h-5 transition-colors group-hover:text-[#bef264]" />,
  },
];

const myProfile =
{
  myPhoto: "url('https://img.redbull.com/images/c_crop,x_739,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2021/4/14/lyuguphp3zyhcxdvyfat/valorant-sova')",
  myName: "Sayyid",
  myBio: "Vibe Coder ✨ | Building cool stuff with AI"
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function LinkInBio() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-6 py-16 font-sans antialiased overflow-x-hidden selection:bg-[#bef264] selection:text-black">
      <div className="w-full max-w-[480px] flex flex-col items-center">

        {/* Profile Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-10 text-center"
        >
          {/* Avatar Placeholder */}
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#bef264] to-[#84cc16] p-[2px] shadow-[0_0_20px_rgba(190,242,100,0.2)] animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-[url('https://img.redbull.com/images/c_crop,x_739,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2021/4/14/lyuguphp3zyhcxdvyfat/valorant-sova')] bg-contain bg-center flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold text-[#bef264]tracking-tighter"></span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#bef264] text-black w-6 h-6 rounded-full flex items-center justify-center border-4 border-[#0a0a0a]">
              <span className="text-[10px] font-bold">✨</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight mb-2">{myProfile.myName}</h1>
          <p className="text-gray-400 text-sm max-w-[280px] leading-relaxed">
            {myProfile.myBio}
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-4"
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                translateY: -2,
                backgroundColor: "rgba(255, 255, 255, 0.08)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:border-[#bef264]/40"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#bef264]/0 group-hover:bg-[#bef264]/5 transition-colors duration-500" />

              <div className="flex items-center justify-between w-full relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-gray-400 group-hover:bg-[#bef264]/10 group-hover:text-[#bef264] transition-all duration-300">
                    {link.icon}
                  </div>
                  <span className="font-medium text-[15px] text-gray-200 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#bef264] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4 text-gray-500 text-[11px] font-medium tracking-widest uppercase"
        >
          <div className="h-px w-8 bg-white/10 mb-2" />
          <p className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            Made with <span className="text-[#bef264] animate-pulse">💚</span> and vibes
          </p>
        </motion.footer>
      </div>

      {/* Background Decorative Element */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#bef264]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#bef264]/5 blur-[120px] rounded-full" />
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </main>
  );
}
