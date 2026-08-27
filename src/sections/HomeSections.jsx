import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  GitBranch as Github,
  Layers3,
  Network as Linkedin,
  Mail,
  MessageCircle,
  Send,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  developer,
  moreProjects,
  projects,
  services,
  skillGroups,
  snapshot,
} from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import ProductVisual from "../components/ProductVisual";
import ProjectShowcase from "../components/ProjectShowcase";
import MagneticButton from "../components/MagneticButton";
import TechMarquee from "../components/TechMarquee";
import ArchitectureDiagram from "../components/ArchitectureDiagram";

const reveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(7px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65 },
  },
};
const roles = [
  "Web Applications",
  "Mobile Applications",
  "ERP Platforms",
  "SaaS Products",
  "Healthcare Software",
];

export function Hero() {
  const [role, setRole] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRole((v) => (v + 1) % roles.length), 2300);
    return () => clearInterval(id);
  }, []);
  const lines = ["Frontend that feels", "clear, fast,", "and unmistakably human."];
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        >
      <motion.div variants={reveal} className="hero-identity">
        <span>Md Tausif Ansari</span>
        <b>Frontend developer · India</b>
      </motion.div>
      <motion.div variants={reveal} className="availability">
            <i /> Available for development projects
          </motion.div>
          <h1>
            {lines.map((line, i) => (
              <span className="line-mask" key={line}>
                <motion.span
                  variants={reveal}
                  className={i !== 1 ? "gradient-text" : ""}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div variants={reveal} className="role-rotator">
            <span>I build</span>
            <AnimatePresence mode="wait">
              <motion.strong
                key={role}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                {roles[role]}
              </motion.strong>
            </AnimatePresence>
          </motion.div>
          <motion.p variants={reveal} className="hero-lead">
            I build production-grade React and React Native experiences for
            healthcare, services and commerce—across Android, iOS and the web.
          </motion.p>
          <motion.div variants={reveal} className="hero-actions">
            <MagneticButton
              onClick={() =>
                document
                  .getElementById("work")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore my work <ArrowDown />
            </MagneticButton>
            <MagneticButton
              className="button-secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Let’s work together <ArrowUpRight />
            </MagneticButton>
          </motion.div>
          <motion.div variants={reveal} className="socials">
            <a href={developer.social.github}>
              <Github /> GitHub
            </a>
        <a href={developer.social.linkedin}>
          <Linkedin /> LinkedIn
        </a>
        <a href={developer.whatsapp}>
          <MessageCircle /> WhatsApp
        </a>
            <a href={`mailto:${developer.email}`}>
              <Mail /> Email
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-system"
          initial={{ opacity: 0, x: 55, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          <div className="system-head">
            <span>Product delivery system</span>
            <b>
              <i /> Live architecture
            </b>
          </div>
          {[
            "React.js / React Native",
            "REST API",
            "Auth + Payments",
            "Firebase + Realtime",
            "Android / iOS / Web",
            "Release-ready product",
          ].map((x, i) => (
            <div className="system-row" key={x}>
              <span>0{i + 1}</span>
              <strong>{x}</strong>
              {i < 5 && (
                <i className="data-line">
                  <b />
                </i>
              )}
            </div>
          ))}
          <div className="system-status">
            <span>
              <i /> Systems operational
            </span>
            <small>Idea → production</small>
          </div>
        </motion.div>
      </div>
      <div className="scroll-hint">
        Scroll to explore <span>↓</span>
      </div>
    </section>
  );
}

export function Snapshot() {
  return (
    <div className="snapshot">
      {snapshot.map(([a, b], i) => (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          viewport={{ once: true }}
          key={a}
        >
          <span>{a}</span>
          <strong>{b}</strong>
        </motion.div>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section about">
      <div>
        <SectionHeading
          eyebrow="01 / About"
          title="Developer. Builder. Problem Solver."
          copy="My work goes beyond building interfaces. I translate business requirements into software—planning workflows, engineering web and mobile experiences, integrating APIs, working with data, and taking products into production."
        />
        <div className="about-actions">
          <a className="text-link" href={developer.social.linkedin} target="_blank" rel="noreferrer">
            View LinkedIn <ArrowUpRight />
          </a>
          <span>{developer.location}</span>
        </div>
      </div>
      <motion.div
        className="code-window"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="window-bar">
          <i />
          <i />
          <i />
          <span>developer.js</span>
        </div>
        <pre>{`const developer = {\n  focus: [\n    "Web Applications",\n    "Mobile Apps",\n    "ERP Systems",\n    "SaaS Products"\n  ],\n\n  frontend: ["ReactJS", "React Native"],\n  backend: ["Django", "Node.js"],\n  mindset: "Build products that get used"\n};`}</pre>
        <div className="terminal-line">
          <span>›</span> product.status <b>"production"</b>
        </div>
      </motion.div>
    </section>
  );
}

export function Statement() {
  return (
    <section className="statement-section">
      {[
        "I don’t just build screens.",
        "I design workflows.",
        "I integrate systems.",
        "I deploy products.",
        "I build software that gets used.",
      ].map((x, i) => (
        <motion.p
          initial={{ opacity: 0.12, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-40% 0px -40%" }}
          transition={{ duration: 0.5 }}
          className={i === 4 ? "statement-final" : ""}
          key={x}
        >
          {x}
        </motion.p>
      ))}
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="section work">
      <SectionHeading
        eyebrow="02 / Selected Work"
        title="Products built around real operations."
        copy="Not concept pieces. Software shaped by business rules, multiple users, connected systems and production constraints."
      />
      {projects.map((project, i) => (
        <ProjectShowcase key={project.slug} project={project} index={i} />
      ))}
      <MoreProjects />
    </section>
  );
}

function MoreProjects() {
  const filters = ["All", "Web", "Mobile", "Platforms"];
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? moreProjects
        : moreProjects.filter((x) => x.type === filter),
    [filter],
  );
  return (
    <div className="more-projects">
      <div className="more-head">
        <h3>More product work</h3>
        <div className="filters">
          {filters.map((x) => (
            <button
              className={filter === x ? "active" : ""}
              onClick={() => setFilter(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              key={p.title}
            >
              <span>
                0{i + 1} / {p.type}
              </span>
              <h4>{p.title}</h4>
              {p.award && (
                <b>
                  <Sparkles /> {p.award}
                </b>
              )}
              <p>{p.description}</p>
              <div className="chips">
                {p.technologies.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <ArrowUpRight className="card-arrow" />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="03 / Experience"
        title="Building where product meets production."
      />
      <div className="experience-grid">
        <div className="timeline">
          <motion.div
            className="timeline-fill"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          {[
            {
              role: "Frontend Developer — React.js & React Native",
              company: "Helixotech Pvt Ltd · Chennai",
              date: "Nov 2023 — Present",
              copy: "Building production healthcare, service and corporate applications with multi-role workflows, real-time communication, payments and reusable cross-platform UI.",
              tech: ["React.js", "React Native", "REST APIs", "Firebase"],
            },
            {
              role: "Award-Winning Full-Stack Project",
              company: "Decorica · Jain University",
              date: "2023",
              copy: "Built a responsive home-decor commerce platform with authentication, product browsing, cart management, order processing and REST API integration.",
              tech: ["React.js", "Tailwind CSS", "Spring Boot", "SQL"],
            },
          ].map((x, i) => (
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              key={x.role}
            >
              <i />
              <span>{x.date}</span>
              <h3>{x.role}</h3>
              <h4>{x.company}</h4>
              <p>{x.copy}</p>
              <div className="chips">
                {x.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
        <div className="education">
          <p className="eyebrow">Education</p>
          <article>
            <span>2021 — 2023</span>
            <h3>Master of Computer Applications</h3>
            <p>Jain University, Bangalore</p>
          </article>
          <article>
            <h3>Bachelor of Computer Applications</h3>
            <p>Magadh University</p>
            <span>2016 — 2019</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    [
      "Understand",
      "Find the actual business problem—not just the requested screen.",
    ],
    ["Architect", "Plan workflows, roles, APIs and data structures."],
    ["Build", "Develop responsive interfaces and integrate backend systems."],
    ["Test", "Validate edge cases, permissions and device behavior."],
    ["Deploy", "Containerize, configure infrastructure and ship."],
    ["Improve", "Iterate with real user and business feedback."],
  ];
  return (
    <section className="section process">
      <SectionHeading eyebrow="04 / Process" title="How I build products." />
      <div className="process-grid">
        {steps.map(([a, b], i) => (
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.06 }}
            key={a}
          >
            <span>0{i + 1}</span>
            <div>
              <h3>{a}</h3>
              <p>{b}</p>
            </div>
            {i < 5 && <ArrowRight />}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <SectionHeading
        eyebrow="05 / Capabilities"
        title="A stack that reaches production."
        copy="The tools are only useful when they connect into a dependable product."
      />
      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            key={g.title}
          >
            <span>0{i + 1}</span>
            <h3>{g.title}</h3>
            <div className="skill-cloud">
              {g.skills.map((s) => (
                <span
                  tabIndex="0"
                  data-tip={`Used in ${g.title.toLowerCase()} product delivery`}
                  key={s}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Architecture() {
  return (
    <section className="section architecture-section">
      <SectionHeading
        eyebrow="06 / Architecture"
        title="From user interaction to live infrastructure."
        copy="I understand the full path a product travels—through interfaces, APIs, data and deployment."
      />
      <ArchitectureDiagram horizontal />
    </section>
  );
}

export function Services() {
  const icons = [
    Code2,
    Smartphone,
    Layers3,
    BriefcaseBusiness,
    Workflow,
    Sparkles,
  ];
  return (
    <section id="services" className="section services">
      <SectionHeading
        eyebrow="07 / Services"
        title="What I can build for you."
      />
      <div className="services-grid">
        {services.map(([a, b], i) => {
          const Icon = icons[i];
          return (
            <motion.article whileHover={{ y: -7 }} key={a}>
              <Icon />
              <span>0{i + 1}</span>
              <h3>{a}</h3>
              <p>{b}</p>
              <ArrowUpRight className="card-arrow" />
            </motion.article>
          );
        })}
      </div>
      <div className="services-cta">
        <p>Have a project in mind?</p>
        <h3>Let’s discuss what you’re building.</h3>
        <MagneticButton
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Start a conversation <ArrowUpRight />
        </MagneticButton>
      </div>
    </section>
  );
}

export function GithubSection() {
  return (
    <section className="section github-section">
      <div>
        <p className="eyebrow">Open source / Code</p>
        <h2>
          Built in the open.
          <br />
          Shaped by the work.
        </h2>
        <p>
          Public project code and hands-on product work—from responsive React
          interfaces to cross-platform mobile applications.
        </p>
        <a className="button" href={developer.social.github}>
          <Github /> View GitHub <ArrowUpRight />
        </a>
      </div>
      <div className="repo-window">
        <div>
          <Github />
          <span>github / Tausifnsr</span>
        </div>
        {["homeDecor", "healthcare-applications", "responsive-web-interfaces"].map(
          (x, i) => (
            <article key={x}>
              <i />
              <span>
                <strong>{x}</strong>
                <small>
                  {
                    [
                      "React.js · Tailwind · Spring Boot",
                      "React Native · REST APIs · Firebase",
                      "React.js · Component architecture",
                    ][i]
                  }
                </small>
              </span>
              <b>↗</b>
            </article>
          ),
        )}
        <div className="contribution-placeholder">
          Decorica received the Best Project Award at Jain University.
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "—"}\nProject: ${data.get("type")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${developer.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };
  const copy = async () => {
    await navigator.clipboard.writeText(developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section id="contact" className="section contact">
      <div className="contact-glow" />
      <div className="contact-intro">
        <p className="eyebrow">08 / Contact</p>
        <h2>
          Have an idea?
          <br />
          <span>Let’s build it.</span>
        </h2>
        <p>
          Whether you need a website, mobile application, ERP system or custom
          digital product, let’s talk about what you’re trying to build.
        </p>
        <div className="contact-links">
          <button onClick={copy}>
            {copied ? <Check /> : <Copy />}
            <span>
              <small>Email</small>
              {copied ? "Copied ✓" : developer.email}
            </span>
          </button>
          <a href={developer.whatsapp}>
            <MessageCircle />
            <span>
              <small>Call / WhatsApp</small>
              {developer.phone}
            </span>
          </a>
          <a href={developer.social.github}>
            <Github />
            <span>
              <small>GitHub</small>Explore the code
            </span>
          </a>
        </div>
      </div>
      <form onSubmit={submit} className="contact-form">
        <div className="form-row">
          <label>
            <span>Your name</span>
            <input name="name" required placeholder="Name" />
          </label>
          <label>
            <span>Work email</span>
            <input
              name="email"
              required
              type="email"
              placeholder="you@company.com"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            <span>Company</span>
            <input name="company" placeholder="Company or organization" />
          </label>
          <label>
            <span>Project type</span>
            <select name="type" required defaultValue="">
              <option value="" disabled>
                Select a project
              </option>
              {[
                "Website",
                "Web Application",
                "Mobile App",
                "ERP",
                "SaaS",
                "UI Development",
                "Other",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        </div>
        <label>
          <span>Budget range</span>
          <select name="budget" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>Let’s discuss</option>
            <option>₹50k – ₹1L</option>
            <option>₹1L – ₹3L</option>
            <option>₹3L+</option>
          </select>
        </label>
        <label>
          <span>Tell me about the project</span>
          <textarea
            name="message"
            required
            rows="5"
            placeholder="What are you trying to build, and who is it for?"
          />
        </label>
        <button
          className="button submit-button"
          disabled={status === "loading"}
        >
          {status === "idle" && (
            <>
              Start a conversation <Send />
            </>
          )}
          {status === "loading" && <>Sending…</>}
          {status === "success" && (
            <>
              Message ready <Check />
            </>
          )}
        </button>
        {status === "success" && (
          <p className="form-note">
            Your email app is ready with the project details filled in.
          </p>
        )}
      </form>
    </section>
  );
}

export { TechMarquee };
