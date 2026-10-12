"use client";

import { useState } from "react";

const FIELD_CLASS =
  "w-full rounded-xl bg-white px-4 py-3 text-sm text-[var(--ink)] border outline-none focus:border-[var(--brand)] transition-colors placeholder:text-[var(--muted)]";

export default function CareerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#f8f8f8]">
      <div className="max-w-[700px] mx-auto px-6 sm:px-10 py-16 sm:py-20 text-center">
        <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--brand)] mb-4">
          Career
        </p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--ink)] mb-2">
          Join the team that made a difference.
        </h2>
        <p className="text-sm text-[var(--ink)]/70 mb-10">
          Tell us a bit about yourself and we&apos;ll be in touch.
        </p>

        {submitted ? (
          <div className="rounded-2xl bg-white border p-10" style={{ borderColor: "var(--line)" }}>
            <p className="font-display font-bold text-lg text-[var(--brand)] mb-2">
              Application received.
            </p>
            <p className="text-sm text-[var(--ink)]/70">
              Thanks for reaching out — our team will review your application and get back to you.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left"
          >
            <div>
              <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Your full name"
                className={FIELD_CLASS}
                style={{ borderColor: "var(--line)" }}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 00000 00000"
                  className={FIELD_CLASS}
                  style={{ borderColor: "var(--line)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className={FIELD_CLASS}
                  style={{ borderColor: "var(--line)" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5">
                Role Applying For
              </label>
              <input
                type="text"
                name="role"
                required
                placeholder="e.g. Chartered Accountant"
                className={FIELD_CLASS}
                style={{ borderColor: "var(--line)" }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5">
                Resume
              </label>
              <input
                type="file"
                name="resume"
                required
                accept=".pdf,.doc,.docx"
                className={`${FIELD_CLASS} file:mr-3 file:rounded-full file:border-0 file:bg-[var(--brand)] file:text-white file:text-xs file:font-semibold file:px-4 file:py-2 file:cursor-pointer cursor-pointer`}
                style={{ borderColor: "var(--line)" }}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5">
                Cover Letter
              </label>
              <input
                type="file"
                name="coverLetter"
                accept=".pdf,.doc,.docx"
                className={`${FIELD_CLASS} file:mr-3 file:rounded-full file:border-0 file:bg-[var(--brand)] file:text-white file:text-xs file:font-semibold file:px-4 file:py-2 file:cursor-pointer cursor-pointer`}
                style={{ borderColor: "var(--line)" }}
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 rounded-full bg-[var(--brand)] text-white text-sm font-semibold px-8 py-3 hover:bg-[var(--brand-2)] transition-colors self-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
