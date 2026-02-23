"use client";
import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      radius: number; color: string; alpha: number;
    }[] = [];

    const colors = ["#00d4ff", "#7c3aed", "#06ffa5"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 0.05;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = "#00d4ff";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section
      id="home"
      style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: "var(--bg-primary)" }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        id="particle-canvas"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />

      {/* Gradient blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "4rem", flexWrap: "wrap" }}>
          
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: "1 1 400px", maxWidth: "600px" }}
          >
            <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.4rem 1rem", borderRadius: "9999px",
                border: "1px solid rgba(0,212,255,0.3)",
                background: "rgba(0,212,255,0.08)",
                fontSize: "0.8rem", fontWeight: 600,
                color: "#00d4ff", letterSpacing: "0.05em"
              }}>
                <Sparkles size={12} /> Open to Gen AI opportunities
              </span>
            </motion.div>

            <motion.p variants={itemVariants} style={{
              fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "0.5rem", fontWeight: 500
            }}>
              Hi, I&apos;m Sanjay B
            </motion.p>

            <motion.h1 variants={itemVariants} style={{
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 900, lineHeight: 1.1,
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 60%, #06ffa5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Gen AI<br />Developer
            </motion.h1>

            <motion.p variants={itemVariants} style={{
              fontSize: "1.1rem", color: "var(--text-secondary)",
              lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "500px"
            }}>
              I build <strong style={{ color: "var(--text-primary)" }}>production-grade Gen AI systems</strong> — RAG pipelines, agentic workflows, LLM observability, and MCP-powered tools. From prototype to deployment, I ship AI that actually works.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <button className="btn-primary" onClick={scrollToProjects} id="hero-view-work">
                <span>View Work</span>
              </button>
              <button className="btn-secondary" onClick={scrollToContact} id="hero-lets-talk">
                Let&apos;s Talk
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem" }}>
              {[
                { icon: <Github size={18} />, href: "https://github.com/Sanjaystorm7119", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/sanjaysrivastavab/", label: "LinkedIn" },
                // { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 40, height: 40, borderRadius: "50%",
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    color: "var(--text-secondary)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#00d4ff";
                    (e.currentTarget as HTMLElement).style.color = "#00d4ff";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(0,212,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}
          >
            <div className="floating-badge" style={{ position: "relative" }}>
              {/* Outer glow rings */}
              <div style={{
                position: "absolute", inset: -20,
                borderRadius: "50%",
                background: "conic-gradient(from 0deg, #00d4ff, #7c3aed, #06ffa5, #00d4ff)",
                opacity: 0.3, filter: "blur(20px)",
                animation: "spin 8s linear infinite",
              }} />
              <div className="glow-pulse" style={{
                width: 280, height: 280,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "2px solid rgba(0,212,255,0.3)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Avatar placeholder */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Gemini_Generated_Image.png"
                  alt="Sanjay B"
                  style={{
                    width: 250, height: 250, borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    border: "2px solid rgba(0,212,255,0.2)",
                  }}
                />
              </div>

              {/* Floating badges */}
              <div style={{
                position: "absolute", top: 10, right: -20,
                padding: "0.4rem 0.8rem", borderRadius: "9999px",
                background: "rgba(0,212,255,0.15)", border: "1px solid rgba(0,212,255,0.4)",
                fontSize: "0.75rem", fontWeight: 600, color: "#00d4ff",
                backdropFilter: "blur(10px)",
              }}>
                4+ Years
              </div>
              <div style={{
                position: "absolute", bottom: 20, left: -30,
                padding: "0.4rem 0.8rem", borderRadius: "9999px",
                background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)",
                fontSize: "0.75rem", fontWeight: 600, color: "#a78bfa",
                backdropFilter: "blur(10px)",
              }}>
                20+ Projects
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{
            position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
            color: "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 500,
          }}
        >
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} color="#00d4ff" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
