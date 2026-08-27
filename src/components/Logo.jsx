import { motion } from "framer-motion";

export default function Logo({ compact = false }) {
  return (
    <motion.div
      className={`brand-mark ${compact ? "brand-mark-compact" : ""}`}
      initial={{ opacity: 0, rotate: -8, scale: 0.88 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 190, damping: 18 }}
      aria-label="Md Tausif Ansari logo"
    >
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path className="logo-frame" d="M17 5h30l12 12v30L47 59H17L5 47V17L17 5Z" />
        <path className="logo-route" d="M17 42V23h15l8 8h8" />
        <path className="logo-arrow" d="m39 22 9 9-9 9" />
        <circle className="logo-node logo-node-start" cx="17" cy="42" r="4" />
        <circle className="logo-node logo-node-end" cx="48" cy="31" r="4" />
      </svg>
    </motion.div>
  );
}
