import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";

import {
  DetailedHTMLProps,
  Fragment,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { ChevronDown, Moon, Sun, X } from "lucide-react";

export type NavItemProps = {
  href: string;
  children: ReactNode;
};

function MobileNavItem({ href, children }: NavItemProps) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(props: Record<string, unknown>) {
  return (
    <nav className="flex items-center">
      <div className="pointer-events-auto" {...props}>
        <ModeToggle />
      </div>
      <Popover {...props}>
        <Popover.Button className="group ml-4 flex items-center rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-neutral-800 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur dark:bg-neutral-800/90 dark:text-neutral-200 dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <ChevronDown className="ml-2 h-auto w-4 stroke-neutral-500 group-hover:stroke-neutral-700 dark:group-hover:stroke-neutral-400" />
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-neutral-800/40 backdrop-blur-sm dark:bg-black/80" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-neutral-900/5 dark:bg-neutral-900 dark:ring-neutral-800"
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                  <X className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
                </Popover.Button>
                <h2 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-neutral-100 text-xs text-neutral-800 dark:divide-neutral-100/5 dark:text-neutral-300 sm:text-sm">

                  <MobileNavItem href="/uses">Uses</MobileNavItem>
                  <MobileNavItem href="/about">About</MobileNavItem>
                  <MobileNavItem href="/">Home</MobileNavItem>
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </nav>
  );
}

function NavItem({ href, children }: NavItemProps) {
  const isActive = useRouter().pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-sky-500 dark:text-sky-400"
            : "hover:text-sky-500 dark:hover:text-sky-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: Record<string, unknown>) {
  return (
    <nav {...props}>
      <ul className="flex items-center rounded-full bg-white/90 px-3 text-xs font-medium text-neutral-800 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur dark:bg-neutral-800/90 dark:text-neutral-200 dark:ring-white/10">
      <NavItem href="/">Home</NavItem>
        <NavItem href="/uses">Uses</NavItem>
        <NavItem href="/about">About</NavItem>
      
        <div className="pointer-events-auto">
          <ModeToggle />
        </div>
      </ul>
    </nav>
  );
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle("dark");

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 p-2 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur transition dark:bg-neutral-800/90 dark:ring-white/10 dark:hover:ring-white/20 sm:bg-transparent sm:shadow-none sm:ring-0 sm:backdrop-blur-none dark:sm:bg-transparent"
      onClick={toggleMode}
    >
      <Sun className="h-5 w-5 fill-neutral-100 stroke-neutral-500 transition group-hover:fill-neutral-200 group-hover:stroke-neutral-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-sky-50 [@media(prefers-color-scheme:dark)]:stroke-sky-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-sky-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-sky-600 [&>*]:fill-sky-500" />
      <Moon className="hidden h-5 w-5 fill-neutral-700 stroke-neutral-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-neutral-400 [@media_not_(prefers-color-scheme:dark)]:fill-sky-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-sky-500" />
    </button>
  );
}

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}




export function Header() {
  const isHomePage = useRouter().pathname === "/";

  const headerRef = useRef<HTMLDivElement | null>(null);
  const isInitial = useRef(true);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex h-auto flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {isHomePage && (
          <>

            <Container
              className="top-0 order-last -mb-3 flex flex-col pt-3 sm:block"
              // @ts-expect-error
              style={{ position: "var(--header-position)" }}
            >
              <div
                // @ts-expect-error
                style={{ position: "var(--header-inner-position)" }}
              >

              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          // @ts-expect-error
          style={{ position: "var(--header-position)" }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            // @ts-expect-error
            style={{ position: "var(--header-inner-position)" }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: "var(--content-offset)" }} />}
    </>
  );
}
