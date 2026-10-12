import type { Role } from "@/lib/types";

/**
 * Candidate profile, adapted from "Dr. Sundeep Seth – CV 2026".
 * Public site: phone numbers, home address and referee contacts are
 * intentionally left out.
 */
export const profile = {
  name: "Dr. Sundeep Seth",
  headline: "Public Health Nutrition Specialist",
  tagline: "Turning nutrition policy into district-level delivery",
  location: "Lucknow, Uttar Pradesh",
  email: "drsundeepseth17@gmail.com",
  linkedin: "https://www.linkedin.com/in/drsundeep-seth",
  yearsExperience: 9,
  currentRole: "State ICDS Consultant · UNICEF India",
  summary:
    "Public health nutrition professional with 9+ years strengthening government nutrition programmes with UNICEF and GAIN across six Indian states. Specialises in the prevention and management of severe acute malnutrition (CMAM / IMAM / IMSAM), infant and young child nutrition, and Poshan Abhiyan convergence between ICDS, NHM and training institutes. Pairs a clinical foundation (BDS) with health management training (MBA, IIHMR Jaipur) to move programmes from guideline to field.",
  stats: [
    { label: "Years in public health nutrition", value: "9+" },
    { label: "Indian states supported", value: "6" },
    { label: "Global development agencies", value: "2" },
    { label: "Degrees (BDS · MBA)", value: "2" },
  ],
  states: ["Uttar Pradesh", "Assam", "Rajasthan", "Madhya Pradesh", "Gujarat", "Maharashtra"],
  achievements: [
    {
      title: "State SAM guidelines",
      body: "Supported development and roll-out of State Guidelines on comprehensive prevention and management of severe acute malnutrition in Assam and Rajasthan.",
    },
    {
      title: "Screening at scale",
      body: "Planned and hand-held quarterly undernutrition screening in priority districts, including Assam's tea-garden belts and Poshan Abhiyan districts.",
    },
    {
      title: "Data-driven IMSAM",
      body: "Leads IMSAM (NRC + community) reporting and Poshan Tracker analysis for pregnant women, lactating mothers and children in Uttar Pradesh.",
    },
    {
      title: "Food fortification advocacy",
      body: "Drove multi-department advocacy for double-fortified salt, fortified rice and oil through social safety-net programmes across four states with GAIN.",
    },
  ],
  competencies: [
    "SAM management (CMAM / IMAM / IMSAM)",
    "Infant & young child nutrition",
    "Poshan Abhiyan & ICDS",
    "NHM convergence",
    "Early growth faltering",
    "Programme planning & budgeting",
    "Monitoring & evaluation",
    "Poshan Tracker analytics",
    "Capacity building & ToT",
    "Food fortification",
    "Policy advocacy",
    "IEC material development",
    "Maternal & child health",
    "Aspirational block programme",
    "Stakeholder liaison",
  ],
  tools: ["Advanced Excel", "SPSS", "MS Office", "Lean Six Sigma"],
  languages: ["English", "Hindi"],
  education: [
    {
      degree: "MBA, Health & Hospital Management",
      institute: "The IIHMR University, Jaipur",
      period: "2015 – 2017",
    },
    {
      degree: "Bachelor of Dental Surgery (BDS)",
      institute: "Rama Dental College, Hospital & Research Centre (Dr. B. R. Ambedkar University, Agra)",
      period: "2007 – 2012",
    },
  ],
  certifications: ["Lean Six Sigma", "Advanced Excel", "FSAM (NRC) management of SAM children"],
  targetRoles: [
    "Nutrition Specialist (UN agencies)",
    "National Nutrition Consultant",
    "Programme Manager – Nutrition",
    "Technical Lead – SAM / CMAM",
    "Nutrition M&E Specialist",
    "Food Fortification Lead",
    "Maternal & Child Nutrition Advisor",
  ],
  partners: ["UNICEF India", "GAIN", "ICDS", "NHM", "Poshan Abhiyan", "IIHMR University", "Asian Heart Institute", "Fortis Escorts"],
};

export const roles: Role[] = [
  {
    title: "State ICDS Consultant",
    organization: "UNICEF India",
    period: "2024 – Present",
    location: "Lucknow, Uttar Pradesh",
    sector: "development",
    summary:
      "Technical lead for nutrition programming across ICDS and NHM in India's most populous state.",
    highlights: [
      "Accelerates IMSAM, IYCN (breastfeeding, complementary and supplementary nutrition) and two-step early growth faltering interventions.",
      "Owns timely IMSAM (NRC + community) reporting and Poshan Tracker analysis across all nutrition programmes.",
      "Aligns the Aspirational Block programme and Poshan Abhiyan with SDG targets.",
      "Trains and tracks performance of the State Resource Centre for Nutrition, ICDS and Health teams.",
    ],
  },
  {
    title: "State Nutrition Consultant, SAM (CMAM)",
    organization: "UNICEF India",
    period: "2019 – 2024",
    location: "Guwahati, Assam",
    sector: "development",
    summary:
      "Five years building Assam's severe acute malnutrition response under Poshan Abhiyan.",
    highlights: [
      "Supported State Guidelines on comprehensive prevention and management of SAM.",
      "Planned quarterly undernutrition screening in priority districts, including tea-garden areas.",
      "Built capacity of Social Welfare (ICDS) and NHM functionaries on SAM screening and management.",
      "Strengthened convergence for planning, implementation and monitoring in Poshan Abhiyan districts.",
    ],
  },
  {
    title: "Programme Manager, Milk & Oil Fortification",
    organization: "GAIN India",
    period: "2019",
    location: "Rajasthan · MP · Gujarat · Maharashtra",
    sector: "development",
    summary:
      "Multi-state advocacy to bring fortified staples into social safety-net programmes.",
    highlights: [
      "Briefed decision makers with GAIN evidence on fortified and diversified food baskets.",
      "Coordinated multi-stakeholder consultations and media engagement workshops.",
      "Facilitated government orders and cross-learning visits for key officials.",
      "Estimated supply and budget needs for introducing fortified staples.",
    ],
  },
  {
    title: "State Consultant, CMAM / IMAM-2 (Poshan)",
    organization: "GAIN India",
    period: "2017 – 2019",
    location: "Jaipur, Rajasthan",
    sector: "development",
    summary: "Rolled out community-based management of acute malnutrition in Rajasthan.",
    highlights: [
      "Supported the State Guidelines on prevention and management of SAM.",
      "Finalised training modules, communication materials and the CMAM training plan.",
      "Produced analytical reports from priority districts and a strategic note on strengthening CMAM/IMAM.",
    ],
  },
  {
    title: "Senior Executive, Operations",
    organization: "Asian Heart Institute",
    period: "2017",
    location: "Mumbai",
    sector: "healthcare",
    summary: "Hospital operations management trainee rotating across departments.",
    highlights: [
      "Ran department forums including Monthly Business Reviews and Quarterly Quality Meetings.",
      "Served as Manager on Duty after the shadow-manager phase.",
      "Researched IPD patient experience for the MBA dissertation.",
    ],
  },
  {
    title: "Assistant Dental Surgeon",
    organization: "Dr. Tanu Mahajan's Clinic",
    period: "2013 – 2015",
    location: "Kanpur",
    sector: "healthcare",
    summary: "Clinical dental practice with responsibility for clinic operations and outreach.",
    highlights: ["Practised as a dentist.", "Managed clinic operations and patient outreach."],
  },
];
