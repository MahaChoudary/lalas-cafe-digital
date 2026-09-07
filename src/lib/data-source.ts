/**
 * DATA ACCESS LAYER
 *
 * Every screen reads through these functions. Today they resolve from the
 * centralized content file; once the cafe's Supabase project is connected the
 * bodies below are the only place that changes (each one maps 1:1 to a table).
 *
 *   menu_categories, menu_items, gallery_images, events, offers,
 *   reservations, contact_messages, private_event_inquiries, site_settings
 */

import {
  cafeEvents,
  galleryImages,
  menuCategories,
  menuItems,
  offers,
  siteSettings,
} from "./site-content";
import type {
  CafeEvent,
  ContactMessage,
  GalleryImage,
  MenuCategory,
  MenuItem,
  Offer,
  PrivateEventInquiry,
  Reservation,
  SiteSettings,
  SubmissionResult,
} from "./types";

const byOrder = <T extends { sortOrder: number }>(rows: T[]) =>
  [...rows].sort((a, b) => a.sortOrder - b.sortOrder);

export const dataSource = {
  getSiteSettings(): SiteSettings {
    return siteSettings;
  },

  getMenuCategories(): MenuCategory[] {
    return byOrder(menuCategories);
  },

  getMenuItems(): MenuItem[] {
    return byOrder(menuItems);
  },

  getFeaturedMenuItems(): MenuItem[] {
    return byOrder(menuItems).filter((i) => i.isFeatured && i.isAvailable);
  },

  getGalleryImages(): GalleryImage[] {
    return byOrder(galleryImages);
  },

  getEvents(): CafeEvent[] {
    return cafeEvents.filter((e) => e.isPublished);
  },

  getOffers(): Offer[] {
    return offers.filter((o) => o.isActive);
  },

  /**
   * Submissions are intentionally NOT faked. Until the cafe's backend is
   * connected these return a clear failure so the UI can offer WhatsApp or a
   * phone call instead of showing a false "saved" message.
   */
  async submitReservation(_input: Reservation): Promise<SubmissionResult> {
    return { ok: false, error: "NO_BACKEND" };
  },
  async submitContactMessage(_input: ContactMessage): Promise<SubmissionResult> {
    return { ok: false, error: "NO_BACKEND" };
  },
  async submitPrivateEventInquiry(
    _input: PrivateEventInquiry,
  ): Promise<SubmissionResult> {
    return { ok: false, error: "NO_BACKEND" };
  },
};

export const isBackendConnected = false;
