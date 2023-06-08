import { Container } from "@/components/Container";
import Resume from "@/components/Resume";
import SocialLinks from "@/components/SocialLinks";

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-4xl">
              Hello, I am Hasanali.
              I live in Manavgat Turkey.
              I am 19 years old and I am interested in software.
              I mostly solve algorithms, but I am interested in other areas as well. My goal is to be a good software developer.
            </h1>

          </div>
          <div className="space-y-10 lg:pl-20">
            <SocialLinks />

            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
