import Image from "next/image";

import { Button } from './Button'
import { Briefcase, Download } from "lucide-react";

export default function Resume() {
  const resume = [
    {
      company: "Freelancer",
      title: " Software Development ",
      start: "Augustus 2022",
      logo:"sdasdas",
      end: {
        label: "Present",
        dateTime: new Date().toLocaleString("en-us", {
          month: "short",
          year: "numeric",
        }),
      },
    },
    {
      company: "overdoze",
      title: "Full-Stack ",
      start: "July 2022",
      logo:"https://media.licdn.com/dms/image/C4D0BAQE9bN-jQmualQ/company-logo_200_200/0/1679039115825?e=2147483647&v=beta&t=vcgU6F6f0Bfr7ix9F2djiz_2K-L2qEbVXXJd7JvaZeE",
      end: {
        label: "Bankruptcy",
        dateTime: new Date().toLocaleString("en-us", {
          month: "short",
          year: "numeric",
        }),
      },
    },

  ];

  return (
    <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-700/40">
      <h2 className="flex text-xs font-semibold text-neutral-900 dark:text-neutral-100">
        <Briefcase className="h-6 w-6 flex-none fill-neutral-100 stroke-neutral-400 dark:fill-neutral-100/10 dark:stroke-neutral-500" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map(({ company, title, start, end, logo }, roleIndex) => (
          <li
            key={roleIndex}
            className="flex items-center gap-4 border-b border-neutral-200 pb-4 dark:border-neutral-700/40"
          >
            <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0">
              <img src={logo}   className="h-12 w-12" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="w-full text-xs text-neutral-500 dark:text-neutral-400">
                {title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="w-full text-xxs text-neutral-400 dark:text-neutral-500"
                aria-label={`${start} until ${end.label ?? end}`}
              >
                <time dateTime={start}>{start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={end.dateTime}>{end.label ?? end.dateTime}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="/"
        target="_blank"
        rel="noreferrer"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download Resume
        <Download className="h-[0.85rem] w-[0.85rem] stroke-neutral-400 transition group-active:stroke-neutral-600 dark:group-hover:stroke-neutral-50 dark:group-active:stroke-neutral-50" />
      </Button>
    </div>
  );
}
