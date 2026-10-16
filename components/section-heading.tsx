import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleItalic,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`section-heading ${isCenter ? "text-center mx-auto" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="eyebrow">
          <span className="eyebrow-rule" />
          {eyebrow}
        </p>
      )}
      <h2>
        {title}
        {titleItalic && (
          <>
            <br />
            <em>{titleItalic}</em>
          </>
        )}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
