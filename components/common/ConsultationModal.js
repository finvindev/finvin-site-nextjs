"use client";

import { useEffect, useState } from "react";
import { useConsultationModal } from "./ConsultationModalContext";

const FIELD_CLASS =
  "w-full rounded-xl bg-white px-4 py-3 text-sm text-[var(--ink)] border outline-none focus:border-[var(--brand)] transition-colors placeholder:text-[var(--muted)]";

export default function ConsultationModal() {
  const { isOpen, closeModal } = useConsultationModal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setSubmitting(false);
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData(e.target);
      const res = await fetch("/api/consultation", {
        method: "POST",
        body: formData,
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        onClick={closeModal}
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--navy)]/60 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border"
          style={{ borderColor: "var(--line)" }}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M5 5l10 10M15 5L5 15" stroke="#141b2e" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <p className="font-display font-bold text-lg text-[var(--brand)] mb-2">
              Request received.
            </p>
            <p className="text-sm text-[var(--ink)]/70">
              Thanks for reaching out — our team will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 inline-block rounded-full bg-[var(--brand)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--brand-2)] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--ink)] mb-1 pr-8">
              Schedule a Consultation
            </h2>
            <p className="text-sm text-[var(--ink)]/70 mb-6">
              Tell us a bit about what you need and we&apos;ll be in touch.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
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

              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5">
                  Mobile Number
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

              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5">
                  What help do you need?
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Briefly describe the purpose of your consultation"
                  className={`${FIELD_CLASS} resize-none`}
                  style={{ borderColor: "var(--line)" }}
                />
              </div>

              {error && <p className="text-sm text-red-600 text-center">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 rounded-full bg-[var(--brand)] text-white text-sm font-semibold px-8 py-3 hover:bg-[var(--brand-2)] transition-colors self-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
