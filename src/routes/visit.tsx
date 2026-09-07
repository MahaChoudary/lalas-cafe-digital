import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { luxButton } from "@/components/ui-kit/Button";
import { complaintPhone, orderPhones, photos, siteSettings } from "@/lib/site-content";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Lala's Cafe, Nisbat Road Daska" },
      {
        name: "description",
        content:
          "Find Lala's Cafe on Nisbat Road, Daska — opening hours, phone numbers and how to reach the indoor and rooftop dining areas.",
      },
      { property: "og:title", content: "Visit Lala's Cafe in Daska" },
      { property: "og:description", content: "Opening hours, address and contact numbers for Lala's Cafe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit"
        title="Nisbat Road, Daska. Indoor & rooftop."
        intro="Find us next to Just Smile Family Dental Clinic. Free home delivery around town."
        image={photos.entrance}
        imageAlt="Entrance of Lala's Cafe with a vine-covered ceiling and warm pendant lights"
      />

      <section className="container-lux grid gap-6 py-20 md:grid-cols-3">
        <Reveal>
          <div className="surface-panel h-full rounded-3xl p-8">
            <MapPin className="text-primary" size={24} />
            <h2 className="mt-5 text-2xl">Where we are</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {siteSettings.addressLine}
              <br />
              {siteSettings.city}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface-panel h-full rounded-3xl p-8">
            <Clock className="text-primary" size={24} />
            <h2 className="mt-5 text-2xl">When we're open</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {siteSettings.hours.map((h) => (
                <li key={h.label}>
                  <span className="text-foreground">{h.label}:</span> {h.value}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="surface-panel h-full rounded-3xl p-8">
            <Phone className="text-primary" size={24} />
            <h2 className="mt-5 text-2xl">Call to order</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {orderPhones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary">
                    {p}
                  </a>
                </li>
              ))}
              <li className="pt-2 text-xs">
                Complaints: <a href={`tel:${complaintPhone.replace(/\s/g, "")}`}>{complaintPhone}</a>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="container-lux pb-24">
        <Reveal>
          <div className="surface-panel flex flex-wrap items-center justify-between gap-6 rounded-3xl p-10">
            <div>
              <h2 className="text-3xl">Planning a table?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Send a reservation request and we'll confirm on WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/reservations" className={luxButton("ember")}>
                Request a table
              </Link>
              <Link to="/menu" className={luxButton("outline")}>
                View the menu
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
