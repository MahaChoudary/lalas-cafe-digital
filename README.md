# Lala's Cafe Digital Home

these are supabase credentials NEXT_PUBLIC_SUPABASE_URL=https://zchqwzkdkegppiniaovn.supabase.co

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_Ipv4-zz2ri9LB3Y537_Hyg_3BOPcpfj      You are acting as a senior digital agency team responsible for designing and building a premium, production-quality, full-stack website for Lala’s Cafe.

The final result should feel like a professionally commissioned $10,000+ custom hospitality website, but prioritize a complete, functional, maintainable implementation over unnecessary complexity. Do not create an unfinished experimental showcase.

BRAND & ASSETS

I will provide:

Official Lala’s Cafe logo

Real cafe ambience photographs

Real food/drink photographs

Menu/business information

Analyze the logo and derive the website’s color palette, typography direction, visual language, buttons, backgrounds and overall aesthetic from the actual brand.

Use my real photographs extensively throughout the website. Do not replace them with generic cafe imagery and do not simply dump them into grids. Use them creatively through full-width imagery, editorial layouts, subtle parallax, image reveals, galleries and immersive sections.

The design should feel premium, cinematic, warm, modern and distinctive, not like a generic cafe template.

TECH STACK

Build the project using:

Next.js

TypeScript

App Router

responsive modern styling

Supabase

PostgreSQL through Supabase

Supabase Auth

Supabase Storage

Use Motion/Framer Motion, GSAP or equivalent only where they genuinely improve the experience.

The codebase must be clean, modular, typed and production-maintainable.

MULTI-PAGE WEBSITE

This must be a genuine multi-page Next.js website with proper URLs and smooth client-side navigation without traditional full-page reloads.

Build the necessary pages:

Home

Menu

Our Story

Experience / Ambience

Gallery

Events

Offers

Visit Us

Contact

FAQ

Reservations if supported

Private Events if relevant

Privacy Policy

Terms

Use a shared premium navigation and footer.

Do not create unnecessary pages just to increase page count.

HOMEPAGE

Create a cinematic homepage centered around Lala’s real ambience and food photography.

Include:

premium hero

animated logo/headline entrance

Menu CTA

Visit/Reserve CTA

signature items

cafe atmosphere

short brand story

featured event/offer where available

location/visit section

strong final CTA

Avoid repetitive card grids.

Use editorial compositions and varied layouts.

MENU

Create a genuinely useful dynamic Menu page with:

categories

item images

descriptions

prices

availability

featured/bestseller/new indicators

search/filtering where useful

Menu content must come from Supabase rather than being permanently hardcoded into components.

The admin must be able to add, edit, delete, reorder, feature and mark menu items unavailable.

SUPABASE BACKEND — MANDATORY

Supabase integration is a required part of the implementation, not future preparation.

Connect the website to my Supabase project and implement the actual backend.

Use Supabase for:

PostgreSQL database

authentication

Row Level Security

file/image storage

dynamic website content

admin functionality

menu

events

offers

gallery

reservations/inquiries

website settings

Create the necessary database schema, relationships and security policies.

Use proper environment variables for credentials.

Never expose privileged secret/service-role credentials in client-side code.

Public users should only have access to data/actions they genuinely need.

Admin operations must be protected.

FULL ADMIN PANEL

Create a secure /admin area connected to Supabase Auth.

Authorized Lala’s Cafe staff should be able to control the important website content without editing code.

The admin dashboard must allow management of:

menu categories

menu items

prices

descriptions

availability

featured/bestseller items

food/drink photos

ambience photos

gallery

events

event photographs

offers/promotions

opening hours

contact information

social links

location information

homepage featured content

reservations/inquiries where applicable

Provide proper:

Create

Read

Update

Delete

image previews

upload

replacement

deletion

validation

loading states

error states

confirmation before destructive actions

useful search/filtering

Store images using Supabase Storage.

Changes made through the admin panel must persist and automatically appear on the public website without manually changing source code or redeploying the site.

Do not create an admin dashboard that is only visual/mock UI.

REAL FORMS

Contact, reservation and private-event forms must use real Supabase persistence where those features are enabled.

Implement:

validation

loading

success

error handling

secure database insertion

Never show a fake “success” message when nothing was actually saved.

Do not claim that a reservation is confirmed unless the implemented reservation logic genuinely supports confirmation.

SIGNATURE INTERACTIVE EXPERIENCES

Create two polished cafe-specific interactive experiences, rather than wasting resources building many unfinished ones.

1. What Should I Order?

Create a fun short experience that asks customers about things such as:

mood

hunger

drink preference

Then recommend relevant real Lala’s menu items from Supabase.

Make the result visually exciting and provide a CTA to view the recommended items.

2. Lala’s Mood Menu

Allow customers to explore real menu items through moods such as:

I need energy

Something comforting

Something refreshing

Something sweet

Surprise me

These should use actual available menu products rather than fake recommendations.

If implementation capacity remains after the entire core website is complete, you may add ONE additional relevant micro-experience. Do not compromise core functionality to do so.

MOTION & INTERACTIONS

Create a consistent premium motion system using tasteful:

scroll reveals

text reveals

image masking

subtle parallax

hover interactions

image transitions

page transitions

button microinteractions

gallery motion

occasional sticky storytelling

Animations should make the website feel expensive without making it difficult to use.

Do not overanimate everything.

Mobile animations should be simplified where necessary.

Support reduced-motion preferences.

GALLERY & AMBIENCE

Use the real cafe photographs to create an immersive representation of Lala’s.

Build ONE excellent gallery experience rather than multiple gimmicky galleries.

The Experience page should make customers feel what visiting the cafe is like before they physically arrive.

MOBILE

The mobile experience must be intentionally designed rather than simply shrinking desktop layouts.

Ensure:

responsive typography

proper image crops

touch-friendly controls

excellent mobile navigation

no horizontal overflow

fast loading

appropriately simplified motion

easy Call / WhatsApp / Directions actions

PERFORMANCE, SEO & ACCESSIBILITY

Despite the visual quality, keep the website performant.

Use optimized responsive images, lazy loading, efficient animation loading and sensible code splitting.

Implement proper:

metadata

page titles/descriptions

Open Graph

sitemap

semantic HTML

local SEO

Restaurant/LocalBusiness structured data where appropriate

Event/FAQ schema where relevant

alt text

keyboard navigation

visible focus states

accessible forms

reduced motion support

BACKEND-READY CODE ARCHITECTURE

Keep UI, business logic and data access properly separated.

Do not tightly couple components directly to database implementation.

Use clean typed models and a sensible Supabase data/service layer.

Major entities such as MenuItem, Category, Event, Offer, GalleryImage, Reservation and SiteSettings should have consistent typed structures.

The architecture must remain easy to extend later with:

online ordering

cart/checkout

payments

customer accounts

loyalty

notifications

analytics

additional admin roles

POS integrations

Future AI-assisted development should be able to add these features without rebuilding the existing website.

IMPORTANT CONTENT RULE

Do not invent important facts about Lala’s Cafe.

If information such as exact history, address, prices, opening hours or services has not been provided, use clearly centralized editable placeholders or leave the relevant content ready for admin entry rather than presenting fabricated information as fact.

COMPLETION RULE — VERY IMPORTANT

Do not spend most of the available implementation effort on visual experimentation and then leave the website incomplete.

Complete in this priority:

Project architecture

All essential pages/routes

Responsive UI

Real supplied assets

Supabase database connection

Supabase schema + RLS

Admin authentication

Functional admin CRUD

Supabase Storage/image management

Dynamic public content

Real forms

Core animations

Two signature interactive experiences

SEO/accessibility/performance

Final visual polish

If resources become constrained, reduce animation complexity or optional visual effects.

Do NOT remove or leave incomplete:

Supabase integration

admin functionality

database persistence

core pages

responsive behavior

navigation

essential business functionality

Never leave TODOs, fake buttons, mock admin actions, fake form submissions, broken routes, placeholder functionality or unfinished sections.

Before finishing, test the complete customer journey and admin journey.

FINAL QUALITY CHECK

Before declaring the project complete, verify that:

every navigation link works

all required pages exist

mobile layouts work

real uploaded assets are used correctly

Supabase is actually connected

admin authentication works

admin CRUD actually persists changes

uploaded images actually save

database changes appear on the public site

forms actually save submissions

no privileged credentials are exposed

RLS protects sensitive operations

animations remain smooth

there are no obvious console/runtime errors

there are no dead buttons

there is no Lorem Ipsum

there are no fake success states

The final product should make a customer think:

“I want to visit Lala’s Cafe.”

And it should allow the cafe owner to actually operate and update the website without needing a developer for everyday content changes.

Build a complete real website first, extraordinary experience second — never an extraordinary-looking unfinished prototype.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a87a8ba7-bdd1-4340-9ec4-95110fc30859).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
