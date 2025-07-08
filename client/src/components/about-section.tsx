import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const interests = [
    "Android Development",
    "Competitive Programming", 
    "Data Analysis",
    "Open Source"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate Software Developer and Electronics & Communication Engineering graduate from{" "}
              <span className="font-semibold text-primary">National Institute of Technology, Agartala</span> with a CGPA of 7.73.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              My journey in technology spans across Android development, data analysis, and competitive programming. 
              I've gained valuable industry experience through my internship at{" "}
              <span className="font-semibold text-primary">UNBIND</span> and contributed to open-source projects like{" "}
              <span className="font-semibold text-primary">Organic Maps</span>.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm particularly passionate about creating efficient, user-friendly mobile applications and solving 
              complex algorithmic problems. My competitive programming achievements include a{" "}
              <span className="font-semibold text-primary">maximum rating of 1705 on LeetCode</span> with 500+ problems solved.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="text-sm">
                  {interest}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Developer workspace with computer and code"
                className="w-full h-auto"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-slate-600">Problems Solved</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
