"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Terminal, Send, Command } from "lucide-react";

const commands = {
  "/who": "Sanjay B – A Gen AI Engineer building production-grade RAG pipelines and agentic workflows.",
  "/skills": "Expertise in: Python, LangChain, LangGraph, RAG, MCP, Docker, and Next.js.",
  "/projects": "6 high-performance AI projects including Multi-Modal RAG and Workflow Engines.",
  "/contact": "You can reach me at sanjaysrivastavab@gmail.com. Let's build something agentic!",
  "/clear": "CLEAR_COMMAND"
};

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "user" | "bot" | "trace"; text: string }[]>([
    { type: "bot", text: "System Initialised. I am Sanjay's Agent. How can I assist you today?" },
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isThinking]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCommand = async (cmd: string) => {
    if (!cmd.trim()) return;

    const userText = cmd.trim().toLowerCase();
    setHistory(prev => [...prev, { type: "user", text: cmd }]);
    setInput("");
    setIsThinking(true);

    // Simulate Agent Traces
    await new Promise(r => setTimeout(r, 600));
    setHistory(prev => [...prev, { type: "trace", text: "> Executing: SemanticSearch(query: '" + userText + "')" }]);
    await new Promise(r => setTimeout(r, 800));
    setHistory(prev => [...prev, { type: "trace", text: "> RAG Status: Context retrieved from vector_store_v2" }]);
    await new Promise(r => setTimeout(r, 500));

    let response = "I'm not sure about that. Try: /who, /skills, /projects, or /contact";
    
    // Simple matching logic
    if (userText.includes("hi") || userText.includes("hello")) {
      response = "Hi! How can I help you today?";
    } else if (userText.includes("bye")) {
      response = "Goodbye! Have a great day.";
      setHistory(prev => [...prev, { type: "bot", text: response }]);
      setIsThinking(false);
      setTimeout(() => setIsOpen(false), 1500);
      return;
    } else if (userText.includes("who") || userText === "/who") response = commands["/who"];
    else if (userText.includes("skill") || userText === "/skills") response = commands["/skills"];
    else if (userText.includes("project") || userText === "/projects") response = commands["/projects"];
    else if (userText.includes("contact") || userText === "/contact") response = commands["/contact"];
    else if (userText === "/clear" || userText.includes("clear")) {
      setHistory([{ type: "bot", text: "Console cleared. How can I help?" }]);
      setIsThinking(false);
      return;
    }

    setHistory(prev => [...prev, { type: "bot", text: response }]);
    setIsThinking(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        id="ai-agent-toggle"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (isOpen && isMinimized) {
            setIsMinimized(false);
          } else {
            setIsOpen(!isOpen);
            if (!isOpen) setIsMinimized(false);
          }
        }}
        style={{
          position: "fixed", bottom: "2rem", right: "2rem", zIndex: 60,
          width: 60, height: 60, borderRadius: "50%",
          background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
          border: "none", cursor: "pointer",
          boxShadow: "0 0 20px rgba(0,212,255,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white"
        }}
      >
        {isOpen && !isMinimized ? <X size={24} /> : <Bot size={28} />}
      </motion.button>

      {/* Terminal View */}
      <AnimatePresence>
        {isOpen && (
          isMinimized ? (
            <motion.div
              key="mini"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => setIsMinimized(false)}
              style={{
                position: "fixed", bottom: "2rem", right: "7rem", zIndex: 60,
                padding: "0.75rem 1.5rem", background: "var(--bg-card)",
                border: "1px solid var(--border)", borderRadius: "999px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                display: "flex", alignItems: "center", gap: "0.75rem",
                cursor: "pointer", backdropFilter: "blur(10px)"
              }}
              whileHover={{ scale: 1.05, borderColor: "#00d4ff" }}
            >
              <Terminal size={14} color="#00d4ff" />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)" }}>Agent Console (Active)</span>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#27c93f", boxShadow: "0 0 8px #27c93f" }} />
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{
                position: "fixed", bottom: "6rem", right: "2rem", zIndex: 60,
                width: "clamp(300px, 90vw, 400px)", height: "450px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)", borderRadius: "1.25rem",
                boxShadow: "0 20px 50px -10px rgba(0,0,0,0.5)",
                display: "flex", flexDirection: "column", overflow: "hidden",
                backdropFilter: "blur(20px)"
              }}
            >
              {/* Header */}
              <div style={{
                padding: "1rem", borderBottom: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "var(--bg-secondary)", opacity: 0.8
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Terminal size={16} color="#00d4ff" />
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#00d4ff", letterSpacing: "0.05em" }}>SANJAY_AGENT v1.0.4</span>
                </div>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsMinimized(false); }}
                    style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56", border: "none", cursor: "pointer", padding: 0 }}
                    title="Close"
                  />
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }}
                    style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", border: "none", cursor: "pointer", padding: 0 }}
                    title="Minimize"
                  />
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onClick={(e) => { e.stopPropagation(); setHistory([{ type: "bot", text: "Console cleared. How can I help?" }]); }}
                    style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f", border: "none", cursor: "pointer", padding: 0 }}
                    title="Clear Console"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                ref={scrollRef}
                style={{
                  flex: 1, overflowY: "auto", padding: "1.25rem",
                  display: "flex", flexDirection: "column", gap: "1rem",
                  fontFamily: "monospace", fontSize: "0.85rem"
                }}
              >
                {history.map((msg, i) => (
                  <div key={i} style={{
                    color: msg.type === "bot" ? "var(--text-primary)" : msg.type === "trace" ? "var(--text-secondary)" : "#00d4ff",
                    paddingLeft: msg.type === "trace" ? "0.5rem" : 0,
                    fontSize: msg.type === "trace" ? "0.75rem" : "0.85rem",
                    lineHeight: 1.5
                  }}>
                    {msg.type === "user" && <span style={{ color: "var(--accent-purple)", marginRight: "0.5rem" }}>user:</span>}
                    {msg.type === "bot" && <span style={{ color: "#00d4ff", marginRight: "0.5rem" }}>agent:</span>}
                    {msg.text}
                  </div>
                ))}
                {isThinking && (
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    style={{ color: "#00d4ff", fontSize: "0.75rem" }}
                  >
                    Thinking...
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => { e.preventDefault(); handleCommand(input); }}
                style={{
                  padding: "1rem", borderTop: "1px solid var(--border)",
                  background: "var(--bg-secondary)", display: "flex", gap: "0.75rem"
                }}
              >
                <input
                  autoFocus
                  placeholder="Ask me anything... (e.g. /skills)"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    flex: 1, background: "transparent", border: "none",
                    color: "var(--text-primary)", fontSize: "0.85rem", outline: "none"
                  }}
                />
                <button type="submit" style={{ background: "transparent", border: "none", color: "#00d4ff", cursor: "pointer" }}>
                  <Send size={16} />
                </button>
              </form>

              <div style={{ padding: "0.5rem 1rem", background: "var(--bg-secondary)", fontSize: "0.65rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.4rem", opacity: 0.6 }}>
                <Command size={10} /> + K to toggle · Try: who, skills, projects
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  );
}
