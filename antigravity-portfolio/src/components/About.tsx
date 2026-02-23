"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { experience, skills } from "@/lib/content";
import { Briefcase, GraduationCap, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="section" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.p variants={itemVariants} className="section-label">Who I Am</motion.p>
          <motion.h2 variants={itemVariants} style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            marginBottom: "1rem", color: "var(--text-primary)"
          }}>
            About{" "}
            <span className="gradient-text">Sanjay B</span>
          </motion.h2>
          <motion.p variants={itemVariants} style={{
            fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7
          }}>
            A Gen AI Engineer specialising in LangChain, LangGraph, RAG, and agentic systems. I design and ship production AI pipelines that are observable, reliable, and genuinely useful.
          </motion.p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

          {/* Left: Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} style={{
              fontSize: "1.25rem", fontWeight: 700, marginBottom: "2rem",
              display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)"
            }}>
              <Briefcase size={18} color="#00d4ff" /> Experience & Education
            </motion.h3>

            <div style={{ position: "relative", paddingLeft: "2rem" }}>
              <div className="timeline-line" />
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  style={{
                    position: "relative", marginBottom: "2rem",
                    paddingBottom: i < experience.length - 1 ? "2rem" : 0,
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: -38, top: 4,
                    width: 12, height: 12, borderRadius: "50%",
                    background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    boxShadow: "0 0 12px rgba(0,212,255,0.4)",
                  }} />

                  <div style={{
                    background: "var(--bg-card)", borderRadius: "1rem",
                    padding: "1.25rem", border: "1px solid var(--border)",
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px -10px rgba(0,212,255,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>{exp.role}</div>
                        <div style={{ color: "#00d4ff", fontSize: "0.85rem", fontWeight: 600, marginTop: "0.15rem" }}>{exp.company}</div>
                      </div>
                      <span style={{
                        fontSize: "0.75rem", color: "var(--text-secondary)",
                        background: "var(--bg-secondary)", padding: "0.2rem 0.6rem",
                        borderRadius: "9999px", border: "1px solid var(--border)",
                        whiteSpace: "nowrap", flexShrink: 0, marginLeft: "0.5rem",
                      }}>{exp.period}</span>
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                      {exp.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {exp.tech.map((t) => (
                        <span key={t} style={{
                          fontSize: "0.7rem", padding: "0.2rem 0.5rem", borderRadius: "9999px",
                          background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)",
                          color: "#00d4ff", fontWeight: 500,
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} style={{
              fontSize: "1.25rem", fontWeight: 700, marginBottom: "2rem",
              display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)"
            }}>
              <Zap size={18} color="#7c3aed" /> Tech Stack
            </motion.h3>

            <motion.div variants={itemVariants} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
              {skills.map((skill) => (
                <span key={skill.name} className="skill-badge cursor-pointer">
                  <span>{skill.icon}</span> {skill.name}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants}>
              <h3 style={{
                fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem",
                display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)"
              }}>
                <GraduationCap size={18} color="#06ffa5" /> By The Numbers
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { value: "4+", label: "Years Experience", color: "#00d4ff" },
                  { value: "20+", label: "AI Projects Shipped", color: "#7c3aed" },
                  { value: "10+", label: "LLM Pipelines Built", color: "#06ffa5" },
                  { value: "4+", label: "AI Frameworks", color: "#00d4ff" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "var(--bg-card)", borderRadius: "1rem",
                      padding: "1.5rem", border: "1px solid var(--border)",
                      transition: "all 0.3s ease", textAlign: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = stat.color + "66";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px -10px ${stat.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div style={{ fontSize: "2.5rem", fontWeight: 900, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.4rem", fontWeight: 500 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
