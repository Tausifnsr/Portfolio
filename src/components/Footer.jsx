import { GitBranch as Github, Network as Linkedin, Mail } from "lucide-react";
import { developer } from "../data/siteData";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Logo />
          <h3>
            Building products for the web, mobile
            <br />
            and everything in between.
          </h3>
        </div>
        <div className="footer-links">
          <a href={developer.social.github}>
            <Github /> GitHub
          </a>
          <a href={developer.social.linkedin}>
            <Linkedin /> LinkedIn
          </a>
          <a href={developer.whatsapp}>WhatsApp</a>
          <a href={`mailto:${developer.email}`}>
            <Mail /> Email
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {developer.name}
        </span>
        <span>Product engineering · India</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
