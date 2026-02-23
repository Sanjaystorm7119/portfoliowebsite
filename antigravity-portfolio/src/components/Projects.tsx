"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { projects } from "@/lib/content";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="projects" className="section" ref={ref} style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label">What I&apos;ve Built</p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            marginBottom: "1rem", color: "var(--text-primary)"
          }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            A curated selection of projects that showcase my skills in design, engineering, and product thinking.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="card-glow"
              style={{
                background: "var(--bg-card)",
                borderRadius: "1.25rem",
                border: "1px solid var(--border)",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
              }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Card top accent bar */}
              <div style={{
                height: 3,
                background: `linear-gradient(90deg, ${project.color}, ${i % 2 === 0 ? "#7c3aed" : "#06ffa5"})`,
              }} />

              {/* Thumbnail */}
              <div style={{
                height: 200,
                background: `linear-gradient(135deg, ${project.color}18, ${i % 2 === 0 ? "#7c3aed" : "#06ffa5"}12)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "3rem", position: "relative", overflow: "hidden",
              }}>
                <div style={{ fontSize: "4rem", opacity: 0.6 }}>
                  {["📊", "🛒", "🤖", "👥", "🔒", "📈"][i]}
                </div>
                {/* Frosted overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(135deg, ${project.color}30, rgba(0,0,0,0.3))`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <ArrowUpRight size={36} color={project.color} />
                </motion.div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{
                  fontSize: "1.1rem", fontWeight: 700,
                  color: "var(--text-primary)", marginBottom: "0.5rem"
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: "0.875rem", color: "var(--text-secondary)",
                  lineHeight: 1.6, marginBottom: "1rem",
                  display: "-webkit-box", WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical", overflow: "hidden"
                }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: "0.7rem", padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}40`,
                      color: project.color, fontWeight: 500,
                    }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a
                    href={project.demo}
                    id={`project-demo-${i}`}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.35rem",
                      fontSize: "0.8rem", fontWeight: 600, color: project.color,
                      textDecoration: "none", transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    id={`project-github-${i}`}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.35rem",
                      fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)",
                      textDecoration: "none", transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    <Github size={13} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
