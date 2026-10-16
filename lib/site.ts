export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: "stethoscope" | "activity" | "nutrition" | "yoga" | "leaf" | "gut";
}

export interface ProgrammeItem {
  name: string;
  price: string;
  period: string;
  summary: string;
  featured?: boolean;
  features: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const site = {
  name: "AROVYAM",
  descriptor: "Integrative Health & Naturopathy",
  tagline: "Look beyond symptoms. Understand the person.",
  doctorName: "Dr. Darshan V R",
  qualification: "Naturopathy and Yogic Sciences",
  certificate: "Certificate in Integrative Management of Diabetes Mellitus",
  // Verification notice: Replace this with the verified business WhatsApp number before public launch
  whatsappNumber: "919353359968",
  copyrightYear: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://arovyam.com",
};

export const whatsappUrl = (
  message = "Hello Arovyam, I would like to enquire about a consultation."
) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Clinical Team", href: "#doctor" },
  { label: "Services", href: "#services" },
  { label: "Programmes", href: "#programmes" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const services: ServiceItem[] = [
  {
    id: "general-consultation",
    number: "01",
    title: "General Consultation",
    description:
      "A comprehensive initial discussion exploring your health history, current habits, sleep, stress, and lifestyle context to map a thoughtful, individualised direction.",
    icon: "stethoscope",
  },
  {
    id: "diabetes-support",
    number: "02",
    title: "Diabetes Support",
    description:
      "Integrative lifestyle and daily regimen guidance to complement glucose monitoring, prescribed medication, and your primary doctor's clinical management.",
    icon: "activity",
  },
  {
    id: "therapeutic-nutrition",
    number: "03",
    title: "Therapeutic Nutrition",
    description:
      "Nutrition planning tailored to your physiological needs, routine, and clinical information, focusing on nourishment without unsustainable dietary extremes.",
    icon: "nutrition",
  },
  {
    id: "yoga-therapy",
    number: "04",
    title: "Yoga Therapy",
    description:
      "Condition-appropriate yoga, movement, and mindful breathing practices selected with careful attention to individual mobility, vitality, and safety.",
    icon: "yoga",
  },
  {
    id: "naturopathy-support",
    number: "05",
    title: "Naturopathy-Based Support",
    description:
      "Evidence-informed lifestyle interventions, circadian rhythm alignment, and gentle restorative routines that encourage your body's self-regulatory balance.",
    icon: "leaf",
  },
  {
    id: "gut-wellness",
    number: "06",
    title: "Gut and Digestive Wellness",
    description:
      "Targeted lifestyle and dietary guidance to support digestive ease, microbiome harmony, and healthy gut habits alongside conventional medical oversight.",
    icon: "gut",
  },
];

export const focusAreas = [
  {
    title: "Diabetes Mellitus & Metabolic Health",
    description: "Supportive dietary routines and habits that complement medical glucose care.",
  },
  {
    title: "Digestive & Gut Wellness",
    description: "Dietary adjustments and routine guidance for comfort and gut balance.",
  },
  {
    title: "PCOS / PCOD & Hormonal Support",
    description: "Lifestyle-centred approaches for hormonal harmony and energy.",
  },
  {
    title: "Thyroid & Endocrine Wellness",
    description: "Supportive nutritional care aligned with ongoing clinical treatment.",
  },
  {
    title: "Movement & Yoga Therapy",
    description: "Safe, personalised movement and breath practices for daily vitality.",
  },
  {
    title: "Sleep Health & Circadian Habits",
    description: "Restorative sleep routines to support recovery and cognitive balance.",
  },
  {
    title: "Stress & Nervous System Care",
    description: "Breathing techniques and mindful routines to foster calm resilience.",
  },
  {
    title: "Sustainable Health Habits",
    description: "Practical, long-term changes that fit your everyday work and family life.",
  },
];

export const programmes: ProgrammeItem[] = [
  {
    name: "Basic",
    price: "₹1,999",
    period: "per month",
    summary: "A structured starting point for nutrition and daily routine support.",
    features: [
      "Initial consultation",
      "Personalised nutrition planning",
      "Balanced diet strategy",
      "One consultation or follow-up per week",
      "Progress monitoring",
      "Diet modifications based on progress",
    ],
  },
  {
    name: "Standard",
    price: "₹2,999",
    period: "per month",
    summary: "Ongoing support combining nutrition, yoga therapy, and regular reviews.",
    featured: true,
    features: [
      "Initial consultation",
      "Personalised nutrition planning",
      "Goal-oriented diet strategy",
      "Yoga sessions two days per week",
      "Two consultations or follow-ups per week",
      "Regular progress monitoring",
      "Personalised plan modifications",
    ],
  },
  {
    name: "Premium",
    price: "₹7,999",
    period: "per three months",
    summary: "A comprehensive 90-day programme with dedicated individualised follow-up.",
    features: [
      "Detailed initial consultation",
      "Personalised therapeutic nutrition planning",
      "Functional meal planning",
      "Mindful lifestyle guidance",
      "Personalised yoga programme",
      "Regular consultations and follow-ups",
      "Progress monitoring and plan adjustments",
      "Ongoing one-to-one support",
    ],
  },
];

export const consultationSteps: StepItem[] = [
  {
    number: "01",
    title: "Explore the Services",
    description:
      "Review the practice focus areas, doctor credentials, and programme options to see how supportive care fits your health journey.",
  },
  {
    number: "02",
    title: "Send an Enquiry on WhatsApp",
    description:
      "Message the practice directly. Tell us briefly about the support you seek and your preferred method of communication.",
  },
  {
    number: "03",
    title: "Discuss Your Requirements",
    description:
      "Our clinical team reviews your enquiry, assesses your requirements, answers preliminary questions, and schedules your online consultation.",
  },
  {
    number: "04",
    title: "Receive Guidance and Follow-Up",
    description:
      "Engage in a thorough consultation and receive clear, actionable nutritional, yoga, and lifestyle recommendations with scheduled reviews.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What is Arovyam?",
    answer:
      "Arovyam is a doctor-led integrative health and naturopathy practice founded on the philosophy of looking beyond symptoms to understand the whole person. Directed by Dr. Darshan V R (Naturopathy and Yogic Sciences) alongside a dedicated clinical team, Arovyam offers online-first supportive care combining clinical nutrition, yoga therapy, and naturopathic lifestyle guidance.",
  },
  {
    question: "What services are available?",
    answer:
      "Arovyam offers General Consultation, Integrative Diabetes Support, Therapeutic Nutrition, Yoga Therapy, Naturopathy-Based Support, and Gut and Digestive Wellness. Each service is tailored to the individual's specific health history and daily patterns.",
  },
  {
    question: "Are consultations available online?",
    answer:
      "Yes. Arovyam is an online-first practice, making consultations convenient and accessible from anywhere via secure video or phone appointments. In-person availability may be discussed where feasible and clinically appropriate.",
  },
  {
    question: "How do I enquire about a programme?",
    answer:
      "Enquiring is simple: click any 'Enquire on WhatsApp' button or use the website enquiry form. Share your name, general area of interest, and any short questions. The practice will get back to you directly to guide you through next steps.",
  },
  {
    question: "How can I learn about programme pricing?",
    answer:
      "Our verified programme outlines—Basic (₹1,999/month), Standard (₹2,999/month), and Premium (₹7,999/3 months)—are detailed on this website. You can discuss exact inclusions, payment details, and personal suitability directly on WhatsApp before enrolling.",
  },
  {
    question: "Is lifestyle guidance a replacement for prescribed medication?",
    answer:
      "No. Arovyam's supportive care is designed to complement—never replace—care from your primary treating physician, medical specialists, or prescribed medications. You should never alter, pause, or discontinue prescribed treatments without consulting your treating doctor.",
  },
  {
    question: "What should I do before contacting the practice?",
    answer:
      "Simply prepare a brief summary of what you are seeking help with and your daily routine. Please do not send sensitive medical reports, diagnostic scans, or exhaustive histories in your initial public enquiry.",
  },
  {
    question: "Can I request a female doctor?",
    answer:
      "Yes. Arovyam is supported by a team of doctors. If you prefer to consult with a female doctor, please mention this in your initial WhatsApp enquiry, and we will confirm availability.",
  },
  {
    question: "Are specific health results guaranteed?",
    answer:
      "No. Human physiology and health outcomes vary significantly between individuals. We do not make misleading claims, guaranteed cures, or promises of disease reversal. Our commitment is to provide responsible, evidence-informed, and compassionate guidance.",
  },
];