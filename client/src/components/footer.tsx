import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mayank-kumar",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/mayank-kumar",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:mayanksingh2000@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Mayank Kumar</h3>
          <p className="text-slate-400 mb-6">Software Developer | Android Enthusiast</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} Mayank Kumar. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
