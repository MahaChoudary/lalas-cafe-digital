import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt, children }: PageHeroProps) {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden pb-14 pt-32 sm:min-h-[68vh] sm:pb-20">
      <motion.img
        src={image}
        alt={imageAlt}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        initial={reduced ? undefined : { scale: 1.1 }}
        animate={reduced ? undefined : { scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="veil absolute inset-0 -z-10" />
      <div className="container-lux">
        <motion.p
          className="text-eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-6xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            {intro}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
