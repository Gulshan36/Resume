"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "loading" | "success" | "error";

export function About() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    // Auto-reset status after 4 seconds
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputBase =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all placeholder:text-gray-400";

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 text-center">
        Get In Touch
      </h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        className="flex-1 flex flex-col gap-3"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="off"
          className={inputBase}
          onPointerDown={(e) => e.stopPropagation()}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="off"
          className={inputBase}
          onPointerDown={(e) => e.stopPropagation()}
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Write your message here..."
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className={`${inputBase} resize-none flex-1 min-h-22.5`}
          onPointerDown={(e) => e.stopPropagation()}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          onPointerDown={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-2 bg-[#2c3e50] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#3d5166] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
        >
          {status === "loading" ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
          ) : (
            <><Send className="w-4 h-4" /> Send Message</>
          )}
        </button>

        {/* Status Feedback */}
        {status === "success" && (
          <div className="flex items-center gap-2 text-emerald-700 text-xs bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">
            <CheckCircle className="w-4 h-4 shrink-0" />
            Message sent! I&apos;ll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 text-red-700 text-xs bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />
            Failed to send. Please check your setup or email me directly.
          </div>
        )}
      </form>

      {/* Social Links */}
      <div className="flex items-center gap-4 justify-center mt-4 pt-3 border-t border-gray-200">
        <span className="text-xs text-gray-400 font-serif italic">or connect via</span>
        <a
          href={portfolioData.about.social.github}
          target="_blank"
          rel="noopener noreferrer"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={portfolioData.about.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={portfolioData.about.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-colors"
          aria-label="Twitter / X"
        >
          <Twitter className="w-4 h-4" />
        </a>
      </div>

      <div className="mt-2 text-center text-[10px] text-gray-400">
        © {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.
      </div>
    </div>
  );
}
