import clsx from "clsx";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { ElementType, ReactNode } from "react";
import ExternalLink from "./ExternalLink";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  icon: ElementType;
  href: string;
  children: ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <ExternalLink
        href={href}
        className="group flex text-xs font-medium text-neutral-800 transition hover:text-sky-500 dark:text-neutral-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none stroke-neutral-500 stroke-[1.5] transition group-hover:stroke-sky-500" />
        <span className="ml-4">{children}</span>
      </ExternalLink>
    </li>
  );
}

export default function SocialLinks() {
  return (
    <ul role="list">
      <SocialLink
        href="https://github.com/codehasanali"
        icon={Github}
        className="mt-4"
      >
        Follow on GitHub
      </SocialLink>
      <SocialLink
       href="https://www.linkedin.com/in/hasan-ali-arikan-4343281b8/"
        icon={Linkedin}
        className="mt-4"
      >
        Follow on LinkedIn
      </SocialLink>
      <SocialLink
        href="mailto:hasanaliarikan077@gmail.com"
        aria-label="Email hasanali"
        icon={Mail}
        className="mt-8 border-t border-neutral-200 pt-8 dark:border-neutral-700/40"
      >
      hasanaliarikan077@gmail.com
      </SocialLink>
    </ul>
  );
}
