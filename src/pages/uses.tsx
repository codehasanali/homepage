import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

import { HTMLAttributes, ReactNode } from "react";
type SimpleLayoutProps = {
    title: string;
    intro: string;
    children?: ReactNode;
};

function SimpleLayout({ title, intro, children }: SimpleLayoutProps) {
    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
                    {title}
                </h1>
                <p className="mt-6 text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
                    {intro}
                </p>
            </header>
            <div className="mt-16 sm:mt-20">{children}</div>
        </Container>
    );
}

function Tool({
    title,
    href,
    children,
}: {
    title: string;
    href?: string;
    children: ReactNode;
}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    );
}

function ToolsSection({
    children,
    ...props

}: { children: ReactNode } & HTMLAttributes<HTMLElement>) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    );
}

export default function Uses() {

    return (
        <Container className="mt-12 sm:mt-32">
            <header className="max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
                    The software languages I use
                </h1>
                <p className="mt-6 text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
                Here is a long list of all my favourites.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <div className="space-y-20">
                    <ToolsSection title="Languages"
                    >
                        <Tool title="TypeScript " href="https://www.typescriptlang.org">
                            TypeScript is designed for developing large-scale applications. It enables you to create modular structures and facilitates code management in complex projects. By relying on its static type system, it helps prevent errors and simplifies the maintenance process as your codebase grows.

                        </Tool>


                        <Tool title="Go " href="https://go.dev">
                            Go is a language with a simple syntax that is easy to understand. Its design focuses on readability and simplicity. This allows you to write, understand, and maintain code quickly. Additionally, the richness of the Go standard library accelerates the development process.

                        </Tool>

                        <Tool title="Rust " href="https://www.rust-lang.org/tr">
                            Rust supports parallel and concurrent programming in a safe manner. It utilizes ownership and borrowing systems to prevent memory and data races. This enables writing parallel and concurrent code safely and enhances performance.
                        </Tool>

                    </ToolsSection>
                </div>

            </div>
        </Container>
    )
}
