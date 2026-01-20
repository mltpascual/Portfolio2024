import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, FileDown, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LIMIT = 4;

export default function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/profile/miguel.jpg"
          alt="Photo of Miguel"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Miguel Pascual</h1>
          <p className="mt-4 font-light">Full Stack Web Developer</p>
          <p className="mt-2 font-light">📍 Winnipeg, Manitoba 🇨🇦</p>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/docs/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileText className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Featured Projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="View More"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>
    </article>
  );
}
