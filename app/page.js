"use client";

import { useRef } from "react";
import PdfDownloadButton from "../components/PdfDownloadButton";
import WebGLEffect from "../components/WebGLEffect";

const summaryText =
  "AI Solutions Architect and Engineer with a background in QA and Project Management, specializing in production-grade GenAI systems. Proven track record of saving over $1M USD and 20,000+ man-hours through Python-based agentic workflows, RAG architectures, and custom MCP tools. Expert in deploying scalable AI solutions on GCP, AWS, and Vercel, with a strong focus on developer-led quality assurance and automated testing.";

const expertise = [
  "GenAI & LLM Engineering",
  "Agentic Workflows",
  "Retrieval Augmented Generation (RAG)",
  "Prompt Engineering",
  "QA Engineering & Automated Testing",
  "Project Management (PMP)",
  "Cloud: GCP · AWS · Vercel",
  "Salesforce & CRM Integration",
  "CI/CD & DevOps",
  "Python & Next.js Delivery",
];

const experience = [
  {
    title: "AI Solutions Architect",
    company: "Assent",
    location: "Remote",
    dates: "Feb 2025 - Present",
    points: [
      "Achieved over $1M in savings and reclaimed 20,000+ man-hours annually with GenAI automation for compliance workflows.",
      "Designed a production-grade stack using live RAG, agentic workflows, and custom MCP servers to surface tools safely.",
      "Raised internal AI adoption from 47% to 97% by shipping auditable, workflow-native AI assistants with governance controls.",
    ],
  },
  {
    title: "AI Solutions Architect",
    company: "Sesh | Ai Solutions",
    location: "Remote",
    dates: "Nov 2021 - Present",
    points: [
      "Architected 120+ GenAI applications and deployed 90+ chatbots to production for operational problem-solving.",
      "Built AI-ready sites and automations in Python, connecting CRMs and data capture tools for 40+ small businesses.",
      "Lead a 100+ member community, teaching GenAI workflows and automation best practices.",
    ],
  },
  {
    title: "Salesforce Consultant",
    company: "Online Business Systems",
    location: "Remote",
    dates: "Jun 2024 - Nov 2024",
    points: [
      "Configured Agentforce copilots with safe prompt design and data-access actions aligned to Sales and Marketing Cloud logic.",
      "Kept AI assistants maintainable and audit-ready by matching business processes to guardrail patterns.",
    ],
  },
  {
    title: "Salesforce Manager / Administrator",
    company: "Globalization Partners",
    location: "Remote",
    dates: "Nov 2018 - Nov 2023",
    points: [
      "Pioneered internal GenAI adoption via “GIA” chatbot and LLM-assisted development workflows.",
      "Managed a Salesforce org with 1,000+ licenses, ensuring scalable architecture and data integrity.",
    ],
  },
  {
    title: "QA / PMP",
    company: "HCL Technologies",
    location: "Remote",
    dates: "Aug 2013 - May 2016",
    points: [
      "Led offshore QA teams delivering functional, automation, and performance testing programs.",
      "Enforced rigorous quality gates and risk management now applied to LLM output validation.",
    ],
  },
];

const education = [
  {
    degree: "Ingenieria en Sistemas",
    school: "Universidad Marista de MAcrida",
    dates: "2004 - 2007",
  },
];

const certifications = ["Salesforce Certified AI Associate", "Salesforce Certified Administrator (SCA)"];

export default function Page() {
  const pageRef = useRef(null);

  return (
    <div className="page-shell">
      <div className="page" ref={pageRef}>
        <div className="hero">
          <div className="webgl-wrap">
            <WebGLEffect />
          </div>
          <div className="hero-grid">
            <div className="headline">
              <h1>Alejandro De La Mora</h1>
              <div className="role">AI Solutions Architect & Engineer</div>
              <div className="summary">{summaryText}</div>
            </div>
            <div className="contact-card">
              <h3>Contact</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <span>Phone</span> +1 437 243 3693
                </div>
                <div className="contact-item">
                  <span>Email</span> alex@seshwithfriends.org
                </div>
                <div className="contact-item">
                  <span>LinkedIn</span>{" "}
                  <a href="https://www.linkedin.com/in/amorac/" target="_blank" rel="noreferrer">
                    linkedin.com/in/amorac
                  </a>
                </div>
                <div className="contact-item">
                  <span>Website</span>{" "}
                  <a href="http://www.eloruga.com" target="_blank" rel="noreferrer">
                    eloruga.com
                  </a>
                </div>
                <div className="contact-item">
                  <span>GitHub</span>{" "}
                  <a href="https://github.com/Oruga420" target="_blank" rel="noreferrer">
                    github.com/Oruga420
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section">
          <h2>Areas of Expertise</h2>
          <div className="tags">
            {expertise.map((item) => (
              <div className="tag" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Work Experience</h2>
          <div className="experience-list">
            {experience.map((job) => (
              <div className="experience-card" key={`${job.title}-${job.company}`}>
                <div className="experience-header">
                  <div className="experience-title">
                    {job.title} | {job.company}
                  </div>
                  <div className="experience-meta">
                    {job.location} · {job.dates}
                  </div>
                </div>
                <ul className="experience-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>
          <div className="education-grid">
            {education.map((edu) => (
              <div className="education-card" key={edu.school}>
                <div className="edu-title">{edu.degree}</div>
                <div className="edu-meta">
                  {edu.school} · {edu.dates}
                </div>
                <div className="certs">
                  {certifications.map((cert) => (
                    <span className="pill" key={cert}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="pdf-bar">
          <PdfDownloadButton targetRef={pageRef} />
        </div>
      </div>
    </div>
  );
}
