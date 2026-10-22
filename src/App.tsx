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
import { Flame, Globe, Smartphone, Users, Wallet, Apple } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import LastCommit from "./components/LastCommit";

const roadmap = [
  {
    icon: Smartphone,
    title: "Android beta",
    status: "In progress",
    desc: "Stake on screen-time goals, tracked on-device.",
  },
  {
    icon: Wallet,
    title: "Real stakes",
    status: "Exploring",
    desc: "Real consequences for missed goals, without the usual payment mess.",
  },
  {
    icon: Users,
    title: "Group stakes",
    status: "Planned",
    desc: "Lock in with friends and keep each other honest.",
  },
  {
    icon: Apple,
    title: "iOS",
    status: "Planned",
    desc: "Same app, on iPhone.",
  },
];

const faqs = [
  {
    q: "How does staking work?",
    a: "Set a goal and back it with a stake. Stay under it, keep your stake. Go over, and you lose it.",
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
        LockIn is built by{" "}
        <a
          href="https://github.com/infinotiver"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-2 hover:text-foreground/80"
        >
          Infino
        </a>{" "}
        (app, design system, native Android layer) and{" "}
        <a
          href="https://github.com/tanishworks"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-2 hover:text-foreground/80"
        >
          Crucible
        </a>{" "}
        (backend).
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
              <Badge variant="secondary" className="mb-4">
                Coming soon
              </Badge>
              <h1 className="hero">LockIn</h1>
              <p className="subtext">
                Put something on the line. Actually stick to your goals.
              </p>
            </div>

            <div className="hero-button-container">
              <a
                href="https://github.com/infinotiver/lockin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="rounded-full">
                  <FaGithub size={24} />
                  Follow on Github
                </Button>
              </a>

              <Button
                variant="secondary"
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
                Try the Android beta
              </Button>
            </div>
          </div>
        </div>

        <main>
          <section className="faq-section">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              What's coming
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {roadmap.map(({ icon: Icon, title, status, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-card p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-foreground" />
                    <Badge variant="secondary">{status}</Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

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
