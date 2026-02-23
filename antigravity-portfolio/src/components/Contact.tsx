"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="contact" className="section" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1rem", color: "var(--text-primary)" }}>
            Let&apos;s <span className="gradient-text">Collaborate</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Have a Gen AI project in mind? I&apos;d love to hear about it. Reach out directly and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            maxWidth: "860px",
            margin: "0 auto 3rem",
          }}
        >
          {[
            { icon: <Mail size={20} />, label: "Email", value: "sanjaysrivastavab@gmail.com", color: "#00d4ff", href: "mailto:sanjaysrivastavab@gmail.com" },
            { icon: <MapPin size={20} />, label: "Location", value: "Remote · Worldwide", color: "#7c3aed", href: null },
            { icon: <MessageSquare size={20} />, label: "Response Time", value: "Within 24 hours", color: "#06ffa5", href: null },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              style={{
                display: "flex", alignItems: "center", gap: "1rem",
                padding: "1.4rem 1.5rem",
                background: "var(--bg-card)", borderRadius: "1rem",
                border: "1px solid var(--border)", transition: "all 0.3s ease",
                textDecoration: "none",
                cursor: item.href ? "pointer" : "default",
              }}
              {...(item.href ? {
                as: "a",
              } : {})}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = item.color + "60";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px -8px ${item.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              onClick={() => { if (item.href) window.location.href = item.href; }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: "0.875rem", flexShrink: 0,
                background: `${item.color}15`, border: `1px solid ${item.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: item.color,
              }}>
                {item.icon}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 500, marginBottom: "0.2rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 600, wordBreak: "break-all" }}>{item.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center" }}
        >
          <motion.p variants={itemVariants} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.25rem", fontWeight: 500, letterSpacing: "0.08em" }}>
            FIND ME ON
          </motion.p>
          <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            {[
              { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/Sanjaystorm7119" },
              { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/sanjaysrivastavab/" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                id={`contact-social-${s.label.toLowerCase()}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.6rem",
                  padding: "0.75rem 1.5rem", borderRadius: "0.75rem",
                  border: "1px solid var(--border)", background: "var(--bg-card)",
                  color: "var(--text-secondary)", transition: "all 0.2s ease",
                  textDecoration: "none", fontSize: "0.9rem", fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#00d4ff";
                  (e.currentTarget as HTMLElement).style.color = "#00d4ff";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,212,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {s.icon} {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
