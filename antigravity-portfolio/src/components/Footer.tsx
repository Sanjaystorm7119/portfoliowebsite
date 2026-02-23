"use client";
import { Github, Linkedin, Twitter, ArrowUp, Zap } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)", padding: "3rem 0 2rem" }}>
      <div className="container">
        <div className="neon-divider" style={{ marginBottom: "2.5rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div className="gradient-text" style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "0.4rem" }}>Get Sh*t Done</div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Zap size={12} color="#00d4ff" /> Sanjay B · Gen Ai Developer
            </p>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} id={`footer-nav-${item.toLowerCase()}`}
                style={{ color: "var(--text-secondary)", fontSize: "0.85rem", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                onClick={(e) => { e.preventDefault(); document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" }); }}
              >{item}</a>
            ))}
          </div>
          {/* <div style={{ display: "flex", gap: "0.75rem" }}>
            {[{ icon: <Github size={16} />, href: "#", label: "GitHub" },
            { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
            { icon: <Twitter size={16} />, href: "#", label: "Twitter" }].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} id={`footer-social-${s.label.toLowerCase()}`}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "0.6rem", border: "1px solid var(--border)", color: "var(--text-secondary)", textDecoration: "none", transition: "all 0.2s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#00d4ff"; el.style.color = "#00d4ff"; el.style.boxShadow = "0 0 10px rgba(0,212,255,0.3)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-secondary)"; el.style.boxShadow = "none"; }}
              >{s.icon}</a>
            ))}
          </div> */}
          <button onClick={scrollTop} id="footer-back-to-top" aria-label="Back to top"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #00d4ff, #7c3aed)", border: "none", cursor: "pointer", boxShadow: "0 0 20px rgba(0,212,255,0.3)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 0 30px rgba(0,212,255,0.5)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 0 20px rgba(0,212,255,0.3)"; }}
          ><ArrowUp size={18} color="white" /></button>
        </div>
        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>© {new Date().getFullYear()} Sanjay B. All rights reserved.</p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            Built with <span style={{ color: "#00d4ff" }}>Next.js</span> · Powered by <span className="gradient-text" style={{ fontWeight: 600 }}>AntiGravity</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
