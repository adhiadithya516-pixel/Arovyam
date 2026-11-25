export const WA_NUMBER = "919353359968";

export const waLink = (msg) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_DEFAULT = waLink(
    "Hello Arovyam, I would like to consult a doctor. Please share the details of your online consultation."
);

export const IMAGES = {
    heroFern:
        "https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?q=80&w=1200&auto=format&fit=crop",
    aboutLeaves:
        "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?q=80&w=1400&auto=format&fit=crop",
    nutrition:
        "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1200&auto=format&fit=crop",
    yoga:
        "https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?q=80&w=1200&auto=format&fit=crop",
    meditation:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    herbs:
        "https://images.pexels.com/photos/5480036/pexels-photo-5480036.jpeg?auto=compress&cs=tinysrgb&w=1200",
    darkLeaves:
        "https://images.pexels.com/photos/7051519/pexels-photo-7051519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    vegetables:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1200&auto=format&fit=crop",
};

export const NAV_LINKS = [
    { label: "Home", id: "#home" },
    { label: "Our Approach", id: "#approach" },
    { label: "Doctors & Team", id: "#doctors" },
    { label: "Services", id: "#services" },
    { label: "Programmes", id: "#programmes" },
    { label: "Health Focus Areas", id: "#focus" },
    { label: "FAQs", id: "#faqs" },
    { label: "Contact", id: "#contact" },
];

export const DOCTORS = [
    {
        id: "darshan",
        name: "Dr. Darshan V R",
        credentials: "BNYS",
        monogram: "DV",
        badges: [
            "Case Coordinator",
            "Certificate in Integrative Management of Diabetes Mellitus",
        ],
        excerpt:
            "A qualified Naturopathy and Yoga Physician specialising in integrative healthcare, acupuncture and pain management.",
        bio: [
            "A qualified Naturopathy and Yoga Physician specialising in integrative healthcare, acupuncture and pain management.",
            "Certified in Integrative Management of Diabetes Mellitus, with a focus on metabolic health, lifestyle disorders and preventive medicine.",
            "Combines clinical care, therapeutic nutrition, yoga therapy and holistic wellness approaches to promote sustainable health, disease prevention and overall well-being through personalised online consultations.",
        ],
        expertise: [
            "Integrative Healthcare",
            "Pain Management",
            "Metabolic Health",
            "Lifestyle Disorders",
            "Preventive Medicine",
            "Diabetes Remission Support",
            "Gut Health",
            "Therapeutic Nutrition",
        ],
        note: "Dr. Darshan coordinates cases and handles follow-up personally.",
        wa: waLink(
            "Hello, I would like to enquire about a consultation with Dr. Darshan V R (BNYS)."
        ),
    },
    {
        id: "suresh",
        name: "Dr. Suresh Gubballi",
        credentials: "BNYS",
        monogram: "SG",
        badges: [],
        excerpt:
            "A qualified BNYS doctor with expertise in diabetes remission support, gut health, obesity management, women's health and endocrine health.",
        bio: [
            "A qualified BNYS doctor with expertise in:",
            "He focuses on personalised, evidence-based lifestyle interventions, preventive healthcare and wellness counselling to promote long-term health and well-being.",
        ],
        expertise: [
            "Diabetes Remission Support",
            "Gut Health",
            "Obesity Management",
            "Women's Health",
            "Endocrine Health",
            "Therapeutic Nutrition",
            "Yoga Therapy",
            "Lifestyle Medicine",
        ],
        note: null,
        wa: waLink(
            "Hello, I would like to enquire about a consultation with Dr. Suresh Gubballi (BNYS)."
        ),
    },
    {
        id: "poojashree",
        name: "Dr. Poojashree G",
        credentials: "BNYS",
        monogram: "PG",
        badges: [],
        excerpt:
            "A qualified Naturopathy and Yoga Physician with a strong clinical interest in women's health, metabolic disorders, gut health and endocrine health.",
        bio: [
            "A qualified Naturopathy and Yoga Physician with a strong clinical interest in women's health, metabolic disorders, gut health, obesity management and endocrine health.",
            "Skilled in therapeutic nutrition, yoga therapy and lifestyle medicine, with an emphasis on personalised health strategies, hormonal balance, disease prevention and integrative wellness.",
            "Focused on evidence-informed interventions, patient education and sustainable lifestyle modifications to support long-term health and overall well-being.",
        ],
        expertise: [
            "Women's Health",
            "Metabolic Disorders",
            "Gut Health",
            "Obesity Management",
            "Endocrine Health",
            "Therapeutic Nutrition",
            "Yoga Therapy",
        ],
        note: null,
        wa: waLink(
            "Hello, I would like to enquire about a consultation with Dr. Poojashree G (BNYS)."
        ),
    },
    {
        id: "pavan",
        name: "Dr. Pavan M J",
        credentials: "BNYS",
        monogram: "PJ",
        badges: ["Certificate in Integrative Management of Diabetes Mellitus"],
        excerpt:
            "A qualified Naturopathy and Yoga Physician with an interest in integrative medicine, metabolic health and preventive healthcare.",
        bio: [
            "A qualified Naturopathy and Yoga Physician with an interest in integrative medicine, metabolic health, lifestyle-related disorders and preventive healthcare.",
            "Certified in Integrative Management of Diabetes Mellitus, with a focus on supporting metabolic function and improving overall health through naturopathic interventions.",
            "Combines therapeutic approaches, yoga therapy and personalised lifestyle strategies to promote disease prevention, holistic wellness and sustainable health outcomes.",
            "Committed to patient-centred care and evidence-informed clinical practice.",
        ],
        expertise: [
            "Integrative Medicine",
            "Metabolic Health",
            "Lifestyle-Related Disorders",
            "Preventive Healthcare",
            "Yoga Therapy",
        ],
        note: null,
        wa: waLink(
            "Hello, I would like to enquire about a consultation with Dr. Pavan M J (BNYS)."
        ),
    },
];

export const SERVICES = [
    {
        id: "nutrition",
        icon: "Salad",
        title: "Clinical Nutrition",
        body: "Individualised dietary guidance rooted in traditional Pathya principles and informed by your history, reports and daily routine â€” not a generic diet chart.",
    },
    {
        id: "yoga",
        icon: "PersonStanding",
        title: "Yoga Therapy",
        body: "Condition-aware therapeutic yoga and pranayama, adapted to your capacity and reviewed by doctors as you progress.",
    },
    {
        id: "naturopathy",
        icon: "Leaf",
        title: "Naturopathy Guidance",
        body: "Naturopathy-based supportive care that works alongside your existing medical treatment â€” never as a replacement for it.",
    },
    {
        id: "lifestyle",
        icon: "Sun",
        title: "Lifestyle Medicine",
        body: "Sleep, movement, stress and daily routines: the patterns that quietly shape long-term health, made workable.",
    },
    {
        id: "preventive",
        icon: "ShieldCheck",
        title: "Preventive Health",
        body: "Understanding your personal risk factors early and building habits that hold for years, not weeks.",
    },
    {
        id: "followup",
        icon: "Stethoscope",
        title: "Doctor-Led Follow-Up",
        body: "Every case is coordinated by Dr. Darshan, with personal follow-up, plan adjustments and continuity across your care.",
    },
];

export const PROGRAMMES = [
    {
        id: "metabolic",
        num: "01",
        name: "Metabolic & Diabetes Support",
        who: "For blood-sugar concerns, pre-diabetes and metabolic health.",
        points: [
            "Guidance from doctors certified in integrative diabetes management",
            "Therapeutic nutrition built on Pathya principles",
            "Yoga therapy and routine design with scheduled reviews",
        ],
        wa: waLink(
            "Hello, I would like to know more about the Metabolic & Diabetes Support programme."
        ),
    },
    {
        id: "gut",
        num: "02",
        name: "Gut & Digestive Reset",
        who: "For bloating, irregular digestion and recurring gut discomfort.",
        points: [
            "Root-cause review of diet, stress and daily patterns",
            "Gentle, staged dietary correction â€” no crash protocols",
            "Digestive-calming yoga therapy with follow-up",
        ],
        wa: waLink(
            "Hello, I would like to know more about the Gut & Digestive Reset programme."
        ),
    },
    {
        id: "womens",
        num: "03",
        name: "Women's Wellness & Hormonal Balance",
        who: "For cycle health, hormonal balance, energy and endocrine well-being.",
        points: [
            "Female doctor available on request, subject to availability",
            "Nutrition and lifestyle support for hormonal balance",
            "Patient education for sustainable, long-term change",
        ],
        wa: waLink(
            "Hello, I would like to know more about the Women's Wellness & Hormonal Balance programme."
        ),
    },
    {
        id: "weight",
        num: "04",
        name: "Weight & Lifestyle Management",
        who: "For sustainable weight and obesity management â€” without crash diets.",
        points: [
            "Individualised, evidence-informed plans",
            "Movement and yoga therapy scaled to your capacity",
            "Regular doctor follow-up and plan adjustment",
        ],
        wa: waLink(
            "Hello, I would like to know more about the Weight & Lifestyle Management programme."
        ),
    },
];

export const PROGRAMME_STEPS = [
    { n: "01", t: "Message us on WhatsApp", d: "Tell us a little about your concern." },
    { n: "02", t: "Consult a BNYS doctor online", d: "History, reports and goals reviewed." },
    { n: "03", t: "Receive your individualised plan", d: "Nutrition, yoga therapy and lifestyle." },
    { n: "04", t: "Follow-up, review, adjust", d: "Ongoing doctor-guided support." },
];

export const FOCUS_AREAS = [
    { id: "diabetes", icon: "Activity", t: "Diabetes & Metabolic Health", d: "Integrative support for blood sugar and metabolic function." },
    { id: "gut", icon: "Soup", t: "Gut & Digestive Health", d: "Bloating, acidity and irregular digestion." },
    { id: "womens", icon: "Flower2", t: "Women's Health & Hormonal Balance", d: "Cycle health, PCOS and hormonal concerns." },
    { id: "weight", icon: "Scale", t: "Obesity & Weight Management", d: "Sustainable, doctor-guided weight care." },
    { id: "endocrine", icon: "Waves", t: "Endocrine Health", d: "Thyroid and hormonal health, supported holistically." },
    { id: "stress", icon: "Moon", t: "Stress, Sleep & Recovery", d: "Nervous-system care, sleep hygiene and burnout." },
    { id: "pain", icon: "Bone", t: "Pain & Musculoskeletal Care", d: "Acupuncture-informed pain management and movement support." },
    { id: "preventive", icon: "ShieldCheck", t: "Preventive Care & Healthy Ageing", d: "Early risk awareness and habits that hold." },
];

export const FAQS = [
    {
        q: "Is Arovyam a replacement for my current medical treatment?",
        a: "No. Arovyam provides doctor-guided supportive care â€” clinical nutrition, yoga therapy and naturopathy-based guidance â€” designed to work alongside your existing medical treatment. We never advise stopping prescribed medication without your treating doctor's knowledge.",
    },
    {
        q: "How do the online consultations work?",
        a: "Everything is online-first. You message us on WhatsApp, a doctor reviews your history, and you consult over video at a time that suits you. Your plan, follow-ups and adjustments all happen through the same channel.",
    },
    {
        q: "Who will I be consulting with?",
        a: "You will consult a qualified BNYS physician (Bachelor of Naturopathy and Yogic Sciences). Dr. Darshan coordinates all cases and follow-up personally. If you prefer, you may request a female doctor, subject to availability.",
    },
    {
        q: "What conditions does Arovyam support?",
        a: "Our focus areas include diabetes and metabolic health, gut and digestive health, women's health and hormonal balance, obesity and weight management, endocrine health, stress and sleep, and preventive care.",
    },
    {
        q: "How soon will I see results?",
        a: "Honestly â€” it depends on the person, the condition and how long it has been building. Our approach is gradual and sustainable: small, informed steps with regular reviews, not quick fixes.",
    },
    {
        q: "What does a programme include?",
        a: "An initial doctor consultation, an individualised plan covering nutrition, yoga therapy and lifestyle, scheduled follow-ups with a doctor, and adjustments as your progress is reviewed.",
    },
    {
        q: "Can I join from outside India?",
        a: "Yes. Consultations are online and appointment times are arranged to suit your time zone. All you need is a WhatsApp connection and a quiet space for your video consult.",
    },
];
