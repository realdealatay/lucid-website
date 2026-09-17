"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/reveal";

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="relative overflow-hidden bg-plum px-6 py-24 sm:py-32"
    >
      <div
        ref={ref}
        className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 sm:grid-cols-2 sm:gap-12"
      >
        <div className="relative order-2 flex items-center justify-center sm:order-1">
          <div
            aria-hidden="true"
            className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-lavender/50 to-transparent"
          />
          {/* soft moonlit glow pooling behind the can */}
          <div
            aria-hidden="true"
            className="absolute h-64 w-64 rounded-full bg-ion/25 blur-[90px] sm:h-80 sm:w-80"
          />
          <motion.div style={{ y }} className="relative">
            <Image
              src="/images/can-hero.png"
              alt="LUCID caffeine-free energy drink can, matte violet-black with an icy lavender wordmark"
              width={768}
              height={768}
              loading="lazy"
              unoptimized
              className="h-auto w-72 drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] sm:w-96"
            />
          </motion.div>
        </div>

        <div className="order-1 sm:order-2">
          <Reveal>
            <h2
              id="product-heading"
              className="font-display text-3xl font-semibold text-silver sm:text-4xl"
            >
              What&rsquo;s actually in the can.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-silver/70">
              We build LUCID around a small set of researched nootropics —
              L-theanine, rhodiola, and lion&rsquo;s mane among them — dosed to
              work with your body&rsquo;s own rhythm instead of overriding it.
              No caffeine to fight through, no sugar crash waiting on the
              other side. Just a clear, even state of mind that lasts as long
              as you need it to.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-silver/70">
              Every batch is formulated in small runs and tested for potency,
              not just safety — clarity is the whole product.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
