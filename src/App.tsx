import "./App.css";
import DotGrid from "@/components/DotGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast, Toaster } from "@/components/ui/toast";
import { Download, Flame, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import LastCommit from "./components/LastCommit";

const faqs = [
  {
    q: "How does staking work?",
    a: "Set a goal and back it with money. Stay under it, keep your money. Go over, and your stake goes to charity.",
  },
  {
    q: "How is my screen time tracked?",
    a: "LockIn uses Android's on-device UsageEvents API for accurate tracking, not self-reported app opens.",
  },
  {
    q: "Is LockIn available on iOS?",
    a: "Not yet. LockIn is currently Android-only, with iOS support planned.",
  },
  {
    q: "Who made this?",
    a: (
      <>
        LockIn is mostly built by{" "}
        <a
          href="https://github.com/infinotiver"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-2 hover:text-foreground/80"
        >
          Infino
        </a>
        , handling the app, design system, and native Android layer, with
        backend support from{" "}
        <a
          href="https://github.com/tanishworks"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-2 hover:text-foreground/80"
        >
          Crucible
        </a>
        .
      </>
    ),
  },
];

function App() {
  return (
    <>
      <Toaster />
      <div className="page">
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
              <a
                href="https://github.com/infinotiver/lockin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="rounded-full">
                  <FaGithub size={24} />
                  Github
                </Button>
              </a>

              <Button
                size="lg"
                className="rounded-full"
                onClick={() =>
                  toast.add({
                    type: "warning",
                    title: "LockIn is in Beta",
                    description:
                      "You may encounter bugs or incomplete features.",
                    actionProps: {
                      children: "Continue",
                      onClick: () => {
                        window.open(
                          "https://github.com/infinotiver/lockin/releases",
                          "_blank",
                          "noopener,noreferrer",
                        );
                      },
                    },
                  })
                }
              >
                <Download />
                Download for Android
              </Button>
            </div>
          </div>
        </div>

        <main>
          <section className="faq-section">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Frequently asked questions
            </h2>

            <Accordion>
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </main>

        <footer className="site-footer">
          <span className="footer-copy">
            © 2026 LockIn{" "}
            <Badge variant="secondary" className="ml-1">
              Beta
            </Badge>
          </span>

          <div className="footer-links">
            <LastCommit repo="infinotiver/lockin" icon={Flame} />
            <LastCommit repo="infinotiver/lockin-site" icon={Globe} />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
