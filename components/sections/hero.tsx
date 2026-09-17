"use client";

import { motion } from "motion/react";
import { SiteNav } from "@/components/site-nav";
import { Button } from "@/components/ui/button";

const sequence = [0.9, 0.3];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-void"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/lucid-promo.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/55 to-void" />
      <div className="absolute inset-0 bg-void/20" />

      <SiteNav />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: sequence[0], ease: [0.16, 1, 0.3, 1] }}
          className="text-glow font-display text-6xl font-semibold tracking-tight text-silver sm:text-8xl md:text-9xl"
        >
          LUCID
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: sequence[0], delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-md text-balance font-display text-xl font-medium text-silver/90 sm:text-2xl"
        >
          Clarity, Bottled.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: sequence[0], delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Button
            render={<a href="#product" />}
            nativeButton={false}
            size="lg"
            className="h-12 rounded-full bg-lavender px-8 text-base font-medium text-void shadow-[0_0_0_1px_rgba(201,192,245,0.4)] transition-all duration-500 hover:bg-lavender hover:shadow-[0_0_40px_rgba(139,127,232,0.55)]"
          >
            Shop Now
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-10 flex justify-center pb-10"
        aria-hidden="true"
      >
        <div className="h-12 w-px bg-gradient-to-b from-lavender/60 to-transparent" />
      </motion.div>
    </section>
  );
}
