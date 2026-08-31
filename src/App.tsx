import "./App.css";
import DotGrid from "@/components/DotGrid";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="hero-container">
        <DotGrid
          dotSize={5}
          gap={25}
          baseColor="#1e1e1e"
          activeColor="#ababab"
          proximity={120}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
          style={{ position: "absolute", zIndex: -1 }}
        />
        <div className="hero-text-container">
          <div>
            <h1 className="hero">LockIn</h1>
            <p className="subtext">Productivity, Reimagined</p>
          </div>
          <div className="hero-button-container">
            <a href="https://github.com/infinotiver/lockin/releases">
              <Button size="lg" className="rounded-full">
                <Download size={24} data-icon="inline-start" />
                Download
              </Button>
            </a>
            <a
              href="https://github.com/infinotiver/lockin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="rounded-full">
                <FaGithub size={24} data-icon="inline-start" />
                Github
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
