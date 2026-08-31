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
import { Toaster } from "@/components/ui/sonner";
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { toast } from "sonner";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Download, Video, Flame, Globe } from "lucide-react";
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
      <div className="px-4 sm:px-6">
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
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <Card className="border-foreground/10 bg-card">
          <CardHeader>
            <CardTitle className="text-2xl">Downloads</CardTitle>
            <CardAction>
              <div className="flex items-center gap-2">
                <Badge variant="default" className="text-sm px-3 py-1">
                  Beta
                </Badge>
              </div>
            </CardAction>
          </CardHeader>
          <CardFooter>
            <a href="https://github.com/infinotiver/lockin/releases">
              <Button
                size="lg"
                onClick={() => toast.success("Redirecting to GitHub Releases")}
              >
                <Download />
                (Beta) Download for Android
              </Button>
            </a>
          </CardFooter>
        </Card>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
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
        <div className="py-4">
          <HoverCard>
            <HoverCardTrigger>
              <a href="https://drive.google.com/file/d/1RVRQkxvHRdjDiMVh6f-chMGd9UahmM0c/view?usp=sharing">
                <Button size="lg" variant="outline">
                  <Video size={24} />
                  Original Pitch Video
                </Button>
              </a>
            </HoverCardTrigger>
            <HoverCardContent side="bottom">
              i don't want you to watch it. the video is horrible.
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-foreground/10 px-4 sm:px-6 py-8">
        <span className="text-sm text-foreground/50">© 2026 LockIn</span>
        <div className="flex flex-col gap-1.5 items-center sm:items-end">
          <LastCommit repo="infinotiver/lockin" icon={Flame} />
          <LastCommit repo="infinotiver/lockin-site" icon={Globe} />
        </div>
      </footer>

      <Toaster />
    </>
  );
}

export default App;
