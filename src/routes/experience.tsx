import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { luxButton } from "@/components/ui-kit/Button";
import { photos } from "@/lib/site-content";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — Lala's Cafe Daska" },
      {
        name: "description",
        content:
          "Walk through Lala's Cafe before you arrive: the entrance, the mural lounge, private cabanas, the star-light terrace and the helicopter booth.",
      },
      { property: "og:title", content: "The Experience — Lala's Cafe Daska" },
      {
        property: "og:description",
        content: "A walk through Lala's Cafe, corner by corner, before you even arrive.",
      },
    ],
  }),
  component: ExperiencePage,
});

const chapters = [
  {
    n: "01",
    title: "The welcome",
    body: "A wooden lattice ceiling dripping with vines and warm pendant light. The street noise drops away in about four steps.",
    image: photos.entrance,
    alt: "Vine-covered wooden ceiling and pendant lights at the Lala's Cafe entrance",
  },
  {
    n: "02",
    title: "The mural lounge",
    body: "Deep tufted leather booths facing a wall of hand-painted street art. Best table in the house for a big group.",
    image: photos.lounge,
    alt: "Brown leather booths in front of a painted street mural",
  },
  {
    n: "03",
    title: "Private cabanas",
    body: "Slatted white rooms softened with greenery, artificial turf underfoot and neon trim overhead. Yours for the evening.",
    image: photos.cabana,
    alt: "White slatted private cabana lit with neon and filled with plants",
  },
  {
    n: "04",
    title: "The star terrace",
    body: "Moons and stars strung along the walkway, brick washed in violet light. This is the corner everyone photographs.",
    image: photos.terrace,
    alt: "Terrace walkway with hanging star and moon fairy lights",
  },
  {
    n: "05",
    title: "The helicopter",
    body: "Yes, a full-size helicopter built out of painted pallets and fairy lights — and yes, you can sit in it.",
    image: photos.helipad,
    alt: "Illuminated wooden helicopter seating installation",
  },
];

function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The experience"
        title="Feel the place before you park."
        intro="Five corners, five completely different moods — all inside one cafe."
        image={photos.terrace}
        imageAlt="Star and moon fairy lights along the Lala's Cafe terrace"
      />

      <div className="py-10">
        {chapters.map((c, i) => (
          <Chapter key={c.n} chapter={c} flip={i % 2 === 1} />
        ))}
      </div>

      <section className="container-lux pb-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-5xl">
            Pick your corner, we'll keep it warm.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/reservations" className={luxButton("ember")}>
              Reserve a table
            </Link>
            <Link to="/gallery" className={luxButton("outline")}>
              More photos
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Chapter({ chapter, flip }: { chapter: (typeof chapters)[number]; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <section ref={ref} className="container-lux grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-20">
      <div className={`overflow-hidden rounded-3xl ${flip ? "lg:order-2" : ""}`}>
        <motion.img
          src={chapter.image}
          alt={chapter.alt}
          loading="lazy"
          style={{ y }}
          className="aspect-[4/3] w-full scale-110 object-cover"
        />
      </div>
      <Reveal>
        <p className="font-display text-5xl text-primary/35">{chapter.n}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{chapter.title}</h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{chapter.body}</p>
      </Reveal>
    </section>
  );
}
