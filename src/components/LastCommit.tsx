import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GitCommitHorizontal, type LucideIcon } from "lucide-react";

type Commit = {
  sha: string;
  html_url: string;
  commit: { message: string };
  author: { login: string; avatar_url: string } | null;
};

type LastCommitProps = {
  repo: string; // e.g. "infinotiver/lockin"
  icon: LucideIcon;
};

export default function LastCommit({ repo, icon: Icon }: LastCommitProps) {
  const [commit, setCommit] = useState<Commit | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`)
      .then((res) => res.json())
      .then((data) => setCommit(data[0]))
      .catch(() => {});
  }, [repo]);

  if (!commit) return null;

  return (
    
      <a href={commit.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground/80 no-underline w-fit"
    >
      <Icon size={20} className="shrink-0" />
      <Avatar className="h-5 w-5">
        <AvatarImage src={commit.author?.avatar_url} />
        <AvatarFallback>
          <GitCommitHorizontal size={12} />
        </AvatarFallback>
      </Avatar>
      <code>{commit.sha.slice(0, 7)}</code>
      <span className="truncate max-w-[40ch]">
        {commit.commit.message.split("\n")[0]}
      </span>
    </a>
  );
}