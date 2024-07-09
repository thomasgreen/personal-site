import { FadeIn } from "@/components/FadeIn";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

export function Footer() {
  return (
    <div className="flex justify-center gap-4 bg-gray-900 mb-4">
      <a
        href="https://www.linkedin.com/in/thomas-green/"
        target="_blank"
        rel="noopener"
        className="text-white hover:opacity-80"
        aria-label="Tom Green LinkedIn"
      >
        <RiLinkedinBoxFill className="text-3xl" />
      </a>
      <a
        href="https://github.com/thomasgreen/"
        target="_blank"
        rel="noopener"
        aria-label="Tom Green GitHub"
        className="text-white hover:opacity-80"
      >
        <RiGithubFill className="text-3xl" />
      </a>
    </div>
  );
}
