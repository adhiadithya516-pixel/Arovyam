"use client";

import React, { useState, type FormEvent } from "react";
import Image from "next/image";
import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, ArrowUpRightIcon } from "@/components/icons";

const categories = [
  "General Consultation",
  "Diabetes Support",
  "Therapeutic Nutrition",
  "Yoga Therapy",
  "Naturopathy-Based Support",
  "Gut and Digestive Wellness",
  "Programme Pricing & Inclusions",
  "Other Health Concern",
];

const contactMethods = [
  "WhatsApp Message",
  "Phone Call",
  "Online Video Consultation",
];

export function WhatsAppEnquiry() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [contactMethod, setContactMethod] = useState(contactMethods[0]);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  function validate() {
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name so we know who is enquiring.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (phone.trim()) {
      const cleanPhone = phone.replace(/[\s\-()]/g, "");
      if (!/^\+?[0-9]{7,15}$/.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid phone number (digits only), or leave blank.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const messageLines = [
      "Hello Arovyam, I would like to enquire about a consultation.",
      `• Name: ${name.trim()}`,
      `• Area of Interest: ${category}`,
      `• Preferred Contact: ${contactMethod}`,
      phone.trim() ? `• Contact Number: ${phone.trim()}` : "",
      message.trim() ? `• Message: ${message.trim()}` : "",
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const targetUrl = whatsappUrl(fullMessage);

    setFallbackUrl(targetUrl);

    // Attempt to open in a new tab gracefully
    const openedWindow = window.open(targetUrl, "_blank", "noopener,noreferrer");

    // In case popup blockers prevent automatic opening, state clearly displays fallback
    if (!openedWindow || openedWindow.closed || typeof openedWindow.closed === "undefined") {
      // Popup was likely blocked
    }
  }

  function handleReset() {
    setName("");
    setCategory(categories[0]);
    setContactMethod(contactMethods[0]);
    setPhone("");
    setMessage("");
    setErrors({});
    setFallbackUrl(null);
  }

  return (
    <div className="enquiry-card">
      <div className="enquiry-header">
        <div className="mini-mark" aria-hidden="true">
          <Image
            src="/logo-emblem.png"
            alt="Arovyam Emblem"
            width={34}
            height={36}
            className="enquiry-logo-img"
          />
        </div>
        <div>
          <h3 className="enquiry-card-title">Start with a Simple Enquiry</h3>
          <p className="enquiry-card-subtitle">
            Fill out the details below. We will format a clear message for you to continue in WhatsApp.
          </p>
        </div>
      </div>

      {fallbackUrl ? (
        <div className="enquiry-success" role="status">
          <div className="success-badge">
            <WhatsAppIcon size={20} />
            <strong>Message Prepared for WhatsApp</strong>
          </div>
          <p>
            Your details have been formatted into an enquiry message. Click the button below if WhatsApp did not open automatically:
          </p>
          <a
            className="button enquiry-continue-btn"
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            <span>Open in WhatsApp</span>
            <ArrowUpRightIcon size={14} />
          </a>
          <button
            type="button"
            className="text-link enquiry-reset-btn"
            onClick={handleReset}
          >
            ← Fill out another enquiry
          </button>
        </div>
      ) : (
        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="enquiry-name">
              Your Full Name <span className="req">*</span>
            </label>
            <input
              id="enquiry-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              placeholder="e.g. Ramesh Kumar"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              maxLength={80}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && (
              <span id="name-error" className="form-field-error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="enquiry-category">
              Area of Interest <span className="req">*</span>
            </label>
            <select
              id="enquiry-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group-grid">
            <div className="form-group">
              <label htmlFor="enquiry-contact-method">Preferred Contact Method</label>
              <select
                id="enquiry-contact-method"
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
              >
                {contactMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="enquiry-phone">
                Phone Number <span className="opt">(optional)</span>
              </label>
              <input
                id="enquiry-phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                placeholder="+91 98765 43210"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                maxLength={20}
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && (
                <span id="phone-error" className="form-field-error" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="enquiry-message">
              Brief Message <span className="opt">(optional)</span>
            </label>
            <textarea
              id="enquiry-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us briefly what kind of support you are seeking..."
              rows={3}
              maxLength={400}
            />
          </div>

          <div className="form-privacy-note">
            <p>
              <strong>Privacy Notice:</strong> Please do not submit medical reports, diagnostic scans, or detailed medical histories through this web form. All medical documents should only be shared directly with the doctor during your consultation.
            </p>
          </div>

          <button className="button form-submit-btn" type="submit">
            <WhatsAppIcon size={18} />
            <span>Continue to WhatsApp</span>
            <ArrowUpRightIcon size={14} />
          </button>
        </form>
      )}
    </div>
  );
}
