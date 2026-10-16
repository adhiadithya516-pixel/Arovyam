"use client";

import React, { useState } from "react";
import { faqs, whatsappUrl } from "@/lib/site";
import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/icons";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-shell section-space faq-section" id="faqs" aria-label="Frequently Asked Questions">
      <div className="faq-intro">
        <p className="eyebrow">
          <span className="eyebrow-rule" /> FREQUENTLY ASKED QUESTIONS
        </p>
        <h2>
          Good questions.
          <br />
          <em>Clear answers.</em>
        </h2>
        <p className="faq-lead">
          Everything you need to know about our practice, consultations, and supportive care philosophy.
        </p>
        <div className="faq-contact-card">
          <strong>Still have a question?</strong>
          <p>We are happy to clarify any details directly on WhatsApp.</p>
          <a
            className="text-link"
            href={whatsappUrl("Hello Arovyam, I have a question before enquiring.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Ask us on WhatsApp</span>
            <ArrowUpRightIcon size={14} />
          </a>
        </div>
      </div>

      <div className="faq-list" role="region" aria-label="FAQ items">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `faq-btn-${index}`;
          const contentId = `faq-panel-${index}`;

          return (
            <div key={faq.question} className={`faq-card ${isOpen ? "faq-open" : ""}`}>
              <h3>
                <button
                  id={buttonId}
                  className="faq-question-btn"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(index)}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-icon ${isOpen ? "faq-icon-rotated" : ""}`} aria-hidden="true">
                    <ChevronDownIcon size={18} />
                  </span>
                </button>
              </h3>
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={`faq-answer-panel ${isOpen ? "block" : "hidden"}`}
              >
                <div className="faq-answer-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
