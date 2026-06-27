"use client";

import { useState } from "react";

const inputBase =
  "w-full px-4 py-3 rounded-xl border bg-white text-[var(--ink)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.message.trim()) e.message = "Please describe your requirement";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // TODO: wire up to email service or backend API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(176,122,44,0.12)" }}
        >
          <svg className="w-8 h-8" style={{ color: "var(--gold)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold font-display mb-2" style={{ color: "var(--ink)" }}>
          Message sent
        </h3>
        <p style={{ color: "var(--muted)" }}>
          Thank you for reaching out. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--ink)" }}>
            Full Name <span style={{ color: "var(--gold)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputBase}
            style={{ borderColor: errors.name ? "#dc2626" : "var(--line)" }}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1.5" style={{ color: "var(--ink)" }}>
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company or bank name"
            className={inputBase}
            style={{ borderColor: "var(--line)" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--ink)" }}>
          Email Address <span style={{ color: "var(--gold)" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputBase}
          style={{ borderColor: errors.email ? "#dc2626" : "var(--line)" }}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "var(--ink)" }}>
          How can we help? <span style={{ color: "var(--gold)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your requirement..."
          className={`${inputBase} resize-none`}
          style={{ borderColor: errors.message ? "#dc2626" : "var(--line)" }}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5"
        style={{ background: "var(--ink)", boxShadow: "0 8px 22px rgba(20,35,58,0.18)" }}
      >
        Send Message
      </button>
    </form>
  );
}
