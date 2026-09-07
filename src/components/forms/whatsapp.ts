import { siteSettings } from "@/lib/site-content";

/**
 * Until the cafe's database is connected, enquiries are delivered over
 * WhatsApp to the cafe's real number. Nothing is silently "saved" — the UI
 * always tells the customer exactly what happened.
 */
export function whatsappUrl(lines: (string | false | undefined)[]) {
  const body = lines.filter(Boolean).join("\n");
  return `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent(body)}`;
}
