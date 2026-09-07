import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { MaskImage, Reveal } from "@/components/motion/Reveal";
import { luxButton } from "@/components/ui-kit/Button";
import { photos } from "@/lib/site-content";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Lala's Cafe Daska" },
      {
        name: "description",
        content:
          "How Lala's Cafe was built in Daska: hand-made cabanas, painted pallets, neon light and a room designed for staying late.",
      },
      { property: "og:title", content: "Our Story — Lala's Cafe Daska" },
      {
        property: "og:description",
        content: "Hand-built cabanas, painted pallets and neon light — the making of Lala's Cafe.",
      },
    ],
  }),
  component: StoryPage,
});

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A cafe built piece by piece."
        intro="Lala's wasn't fitted out from a catalogue. It was built here, by hand, one pallet at a time."
        image={photos.courtyard}
        imageAlt="Colourful pergola seating beside a calligraphy wall piece at Lala's Cafe"
      />

      <section className="container-lux grid gap-14 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <MaskImage
            src={photos.helipad}
            alt="Wooden helicopter seating installation lit with fairy lights"
            className="aspect-[4/5] rounded-3xl"
          />
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-3xl text-foreground sm:text-4xl">The idea</h2>
          <p>
            Daska had plenty of places to eat and almost nowhere to <em>stay</em>. Lala's was made
            for the second part — a place you settle into with friends and lose three hours.
          </p>
          <p>
            So the space was designed like a set: seating you climb into, lighting that changes
            the mood as the night goes on, and corners that each feel like a different room.
          </p>
          <h2 className="pt-4 text-3xl text-foreground sm:text-4xl">Made on site</h2>
          <p>
            The cabanas, the pergolas, the painted slat walls, even the helicopter you can sit
            inside — all built and painted in-house. Nothing here is off the shelf, which is
            exactly why it photographs the way it does.
          </p>
          <h2 className="pt-4 text-3xl text-foreground sm:text-4xl">Still growing</h2>
          <p>
            New corners keep appearing. The best way to keep up is the gallery — or simply
            turning up on a weeknight and seeing what's changed.
          </p>
          <div className="pt-4">
            <Link to="/gallery" className={luxButton("ember")}>
              See the cafe
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface/40 py-20">
        <div className="container-lux grid gap-4 sm:grid-cols-3">
          {[
            { k: "Open till", v: "2 AM" },
            { k: "Breakfast from", v: "7 AM" },
            { k: "Built", v: "By hand, on site" },
          ].map((s) => (
            <Reveal key={s.k}>
              <div className="surface-panel rounded-2xl p-8 text-center">
                <p className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">{s.k}</p>
                <p className="mt-3 font-display text-3xl text-primary">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
