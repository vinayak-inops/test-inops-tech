"use client";

import { useState, ChangeEvent } from "react";
import { usePathname } from "next/navigation";
import { useImageCaptcha, ImageCaptchaField } from "./ImageCaptcha";

type Fields = { fullName: string; businessEmail: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
const INIT: Fields = { fullName: "", businessEmail: "", phone: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.fullName.trim()) e.fullName = "Required";
  if (!f.businessEmail.trim()) e.businessEmail = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.businessEmail)) e.businessEmail = "Invalid email";
  if (!f.phone.trim()) e.phone = "Required";
  else if (!/^[+]?[\d\s\-().]{7,}$/.test(f.phone)) e.phone = "Invalid number";
  if (!f.message.trim()) e.message = "Required";
  else if (f.message.trim().length < 10) e.message = "Min 10 characters";
  return e;
}

const STANDALONE_ROUTES = ["/clms-pricing", "/glossary", "/research-insights"];

export default function FloatingActions() {
  const pathname = usePathname();
  const [formOpen, setFormOpen] = useState(false);
  const [fields, setFields] = useState<Fields>(INIT);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const captcha = useImageCaptcha();


  if (STANDALONE_ROUTES.includes(pathname)) return null;

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const updated = { ...fields, [e.target.name]: e.target.value };
    setFields(updated);
    if (touched[e.target.name as keyof Fields]) setErrors(validate(updated));
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof Fields;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(fields));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ fullName: true, businessEmail: true, phone: true, message: true });
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const captchaToken = captcha.getToken();
    if (!captchaToken) {
      setCaptchaError("Please complete the verification.");
      return;
    }
    setCaptchaError("");

    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.fullName,
          email: fields.businessEmail,
          phone: fields.phone,
          message: fields.message,
          source: "floating-form",
          captchaToken,
        }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        if (json.code === "CAPTCHA_INVALID") {
          captcha.reset();
          setCaptchaError("Verification failed. Please try again.");
        }
        throw new Error(json.error ?? "Something went wrong.");
      }

      // Email sent — now open WhatsApp with pre-filled message
      const text = [
        `👋 *New Enquiry from inops.tech*`,
        ``,
        `*Name:* ${fields.fullName}`,
        `*Email:* ${fields.businessEmail}`,
        `*Phone:* ${fields.phone}`,
        `*Message:* ${fields.message}`,
      ].join("\n");
      window.open(`https://wa.me/919986221151?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");

      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  function closeAndReset() {
    setFormOpen(false);
    setSubmitted(false);
    setFields(INIT);
    setErrors({});
    setTouched({});
    setServerError("");
    setCaptchaError("");
    captcha.reset();
  }

  const inputCls = (name: keyof Fields) =>
    `w-full bg-[#f4f6f8] border rounded-lg px-3 py-[8px] text-[12.5px] text-[#0b1e2d] placeholder-[#aab4bf] outline-none transition-all duration-150 focus:bg-white focus:border-[#1c7bb8] ${
      touched[name] && errors[name] ? "border-red-400" : "border-[#e2e8ee]"
    }`;

  return (
    <>
      {/* ── Floating form popup ── */}
      <div
        className={`fixed bottom-[112px] right-5 z-[60] w-[300px] bg-white rounded-2xl shadow-[0_16px_48px_rgba(4,20,36,0.18)] border border-[#e2e8ee] overflow-hidden transition-all duration-300 ease-out origin-bottom-right sm:bottom-[96px] ${
          formOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 bg-[#0a1f3d]">
          <div>
            <div className="text-[10px] tracking-[0.08em] uppercase text-white/45 font-semibold">InOps Solutions</div>
            <div className="text-[15px] font-bold text-white mt-[2px]">Get in Touch</div>
          </div>
          <button onClick={closeAndReset} aria-label="Close form"
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-150 flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pb-5 pt-4">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-11 h-11 rounded-full bg-[rgba(19,98,168,0.10)] border border-[#1362a8]/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#1362a8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className="text-[15px] font-bold text-[#0b1e2d] mb-1">Message Sent!</div>
              <p className="text-[12px] leading-[1.6] text-[#6b7b8c]">We'll get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[10px]">
              <div>
                <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">Full Name <span className="text-red-500">*</span></label>
                <input type="text" name="fullName" value={fields.fullName} onChange={handleChange} onBlur={handleBlur} placeholder="Your full name" className={inputCls("fullName")} />
                {touched.fullName && errors.fullName && <p className="mt-[3px] text-[10.5px] text-red-500">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">Email <span className="text-red-500">*</span></label>
                  <input type="email" name="businessEmail" value={fields.businessEmail} onChange={handleChange} onBlur={handleBlur} placeholder="you@company.com" className={inputCls("businessEmail")} />
                  {touched.businessEmail && errors.businessEmail && <p className="mt-[3px] text-[10.5px] text-red-500">{errors.businessEmail}</p>}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">Phone <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={fields.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+91 98765" className={inputCls("phone")} />
                  {touched.phone && errors.phone && <p className="mt-[3px] text-[10.5px] text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">Message <span className="text-red-500">*</span></label>
                <textarea name="message" value={fields.message} onChange={handleChange} onBlur={handleBlur} placeholder="Your requirements…" rows={3}
                  className={`${inputCls("message")} resize-none`} />
                {touched.message && errors.message && (
                  <p className="mt-[3px] text-[10.5px] text-red-500">{errors.message}</p>
                )}
              </div>

              <ImageCaptchaField
                variant="compact"
                recaptchaRef={captcha.ref}
                error={captchaError}
              />

              {serverError && (
                <p className="text-[11px] text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{serverError}</p>
              )}

              {/* Send + WhatsApp — 50/50 on one line */}
              <div className="flex items-center gap-2 mt-1">
                <button type="submit" disabled={submitting}
                  className="flex-1 py-[10px] rounded-lg text-[12.5px] font-bold text-white bg-[#1362a8] hover:bg-[#1578c2] transition-colors duration-150 disabled:opacity-60 flex items-center justify-center gap-1.5">
                  {submitting ? (
                    <>
                      <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>Send <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg></>
                  )}
                </button>

                {/* Vertical dotted divider */}
                <div className="flex flex-col items-center gap-[3px] flex-shrink-0">
                  <span className="w-px h-3 border-l border-dashed border-[#c8d3dc]" />
                  <span className="text-[9.5px] font-semibold text-[#aab4bf] leading-none">or</span>
                  <span className="w-px h-3 border-l border-dashed border-[#c8d3dc]" />
                </div>

                <a
                  href="https://wa.me/919986221151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-[10px] rounded-lg text-[12.5px] font-bold text-white bg-[#25D366] hover:bg-[#20c05a] transition-colors duration-150 flex items-center justify-center gap-1.5"
                >
                  <svg width="15" height="15" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.15.57 4.168 1.563 5.916L4 29l8.29-1.543A11.955 11.955 0 0 0 16.003 28C22.63 28 28 22.627 28 16c0-6.628-5.37-13-11.997-13Z" fill="#fff" />
                    <path d="M16.003 5.4C10.696 5.4 6.4 9.696 6.4 15.003c0 1.975.58 3.816 1.58 5.36l.258.41-.984 3.587 3.69-.968.398.235a9.588 9.588 0 0 0 4.661 1.213C21.31 24.84 25.6 20.546 25.6 15.24c0-5.306-4.288-9.84-9.597-9.84Zm5.667 13.47c-.24.675-1.393 1.29-1.944 1.37-.497.073-1.126.103-1.818-.114-.418-.133-.954-.31-1.64-.607-2.887-1.247-4.773-4.166-4.917-4.358-.143-.19-1.165-1.55-1.165-2.957 0-1.408.738-2.1 1-2.376.262-.277.572-.346.763-.346.19 0 .382.002.549.01.176.008.412-.067.644.49.24.575.815 1.98.886 2.123.07.143.118.311.023.5-.09.188-.136.305-.27.47-.133.164-.28.367-.4.493-.134.14-.272.292-.117.573.155.28.688 1.135 1.477 1.839 1.015.904 1.871 1.185 2.152 1.319.28.133.443.111.607-.067.163-.177.7-.814.886-1.094.187-.28.374-.234.63-.14.258.093 1.637.772 1.918.913.28.14.466.21.535.326.07.115.07.668-.17 1.343Z" fill="#25D366" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── Single FAB button ── */}
      <button
        onClick={() => setFormOpen((v) => !v)}
        aria-label={formOpen ? "Close contact form" : "Open contact form"}
        className="fixed bottom-20 right-5 z-[60] flex items-center justify-center w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#1c7bb8] to-[#0d3a5c] shadow-[0_6px_22px_rgba(28,123,184,0.50)] hover:shadow-[0_8px_28px_rgba(28,123,184,0.65)] hover:-translate-y-[2px] transition-all duration-200 sm:bottom-6"
      >
        {/* Animate between message icon and close icon */}
        {formOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
