import clsx from "clsx";

import { Container } from "@/components/Container";
import { ElementType } from "react";
import ExternalLink from "@/components/ExternalLink";
import Resume from "@/components/Resume";
import { Github, Linkedin, Mail } from "lucide-react";



function SocialLink({
  icon: Icon,
  href,
  ...props
}: {
  icon: ElementType;
  href: string;
}) {
  return (
    <ExternalLink className="group -m-1 p-1" href={href} {...props}>
      <Icon className="h-6 w-6 border-none stroke-neutral-500 stroke-[1.5] transition group-hover:stroke-neutral-600 dark:stroke-neutral-400 dark:group-hover:stroke-neutral-300" />
    </ExternalLink>
  );
}


export default function Home() {
  return (
    <>
      <Container className="mt-9 sm:mt-12">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center sm:mx-0 sm:max-w-3xl sm:items-start sm:text-left">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
            Software development, Student
          </h1>
          <p className="mt-6 max-w-2xl text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">

            I &apos;m Hasan Ali. I &apos;m developing software and studying at the same time.

          </p>
          <div className="mt-6 flex gap-6">


            <SocialLink
              href="https://github.com/codehasanali"
              aria-label="Follow on GitHub"
              icon={Github}
            />
            <SocialLink
            href="https://www.linkedin.com/in/hasanali-ar%C4%B1kan-460747277"
              aria-label="Follow on LinkedIn"
              icon={Linkedin}
            />
            <SocialLink
              href="mailto:hasanaliarikan077@gmail.com"
              aria-label="Email hasanali"
              icon={Mail}
            />
          </div>

        </div>
      </Container>
      <Container className="mt-24 md:mt-28">

        <div
          className={clsx("space-y-10 lg:pl-16 xl:pl-24")}
        >

          <Resume />
        </div>
      </Container>
    </>
  );
}
