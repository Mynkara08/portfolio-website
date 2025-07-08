import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, MessageSquare, Newspaper, Database } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Chat Messenger App",
      description: "Real-time chat application with Firebase authentication, cloud messaging, and secure user authentication with OTP-based login.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Android", "Firebase", "WebSocket", "XML"],
      icon: MessageSquare,
      githubUrl: "https://github.com/Mynkara08/Chat_Messenger"
    },
    {
      title: "News App",
      description: "Real-time news application with REST API integration, categorized browsing, search functionality, and push notifications for breaking news.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Android", "Retrofit", "REST API", "XML"],
      icon: Newspaper,
      githubUrl: "https://github.com/Mynkara08/NewsNow"
    },
    {
      title: "UNBIND Internship Project",
      description: "Implemented client-side caching mechanism using Room Database and developed notification service for real-time updates during internship.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Android", "Room DB", "Notifications", "Caching"],
      icon: Database,
      period: "May 2024 - June 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-slate-600 mt-6">Here are some of my recent projects that showcase my skills and experience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <project.icon size={32} />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    {project.githubUrl ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github size={16} />
                        View Code
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    
                    {project.period && (
                      <span className="text-slate-500 text-sm">{project.period}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
