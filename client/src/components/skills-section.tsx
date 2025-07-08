import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Database } from "lucide-react";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  skills: Skill[];
}

const SkillBar = ({ skill, delay = 0 }: { skill: Skill; delay?: number }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-700 font-medium">{skill.name}</span>
        <span className="text-slate-500 text-sm">{skill.level}%</span>
      </div>
      <div className="skill-progress">
        <div
          className="skill-progress-bar"
          style={{ width: animated ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 90 },
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Android Studio", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "XML", level: 80 },
        { name: "WebSocket", level: 75 },
      ],
    },
    {
      title: "Data & Tools",
      icon: Database,
      skills: [
        { name: "SQL", level: 85 },
        { name: "Git", level: 80 },
        { name: "REST API", level: 80 },
        { name: "Power BI", level: 75 },
      ],
    },
  ];

  const achievements = [
    { value: "1705", label: "LeetCode Max Rating" },
    { value: "500+", label: "Problems Solved" },
    { value: "507", label: "India Rank ICPC" },
    { value: "600", label: "Google Kickstart Rank" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-slate-600 mt-6">My expertise across different technologies and programming languages</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-800">
                    <category.icon size={24} className="text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={categoryIndex * 200 + skillIndex * 100}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Competitive Programming Achievements</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                  <div className="text-sm opacity-90">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
