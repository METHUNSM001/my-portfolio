import "../styles/Certificates.css";

import nptel from "../assets/nptel.png";
import uiuxBit from "../assets/uiux-bit.png";
import figmaAruvi from "../assets/figma-aruvi.png";
import greenIdea from "../assets/green-idea.png";
import aiWorkshop from "../assets/ai-workshop.png";

function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>

      <ul>
        <li>
          <a href={nptel} target="_blank" rel="noreferrer">
            🏆 NPTEL – Enhancing Soft Skills & Personality
          </a>
        </li>

        <li>
          <a href={uiuxBit} target="_blank" rel="noreferrer">
            🏆 UI/UX Workshop – BIT V-Prayukti’25
          </a>
        </li>

        <li>
          <a href={figmaAruvi} target="_blank" rel="noreferrer">
            🏆 UI/UX Figma – Aruvili Workshop
          </a>
        </li>

        <li>
          <a href={greenIdea} target="_blank" rel="noreferrer">
            🏆 Green Idea Project – Velammal Institute
          </a>
        </li>

        <li>
          <a href={aiWorkshop} target="_blank" rel="noreferrer">
            🏆 AI Workshop – SVHT Engineering College
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Certificates;
