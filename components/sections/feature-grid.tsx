import { Focus, Leaf, Moon, Waves } from "lucide-react";
import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: Moon,
    title: "Caffeine Free",
    copy: "Zero caffeine, so your sleep and your nervous system stay untouched.",
  },
  {
    icon: Leaf,
    title: "Natural Nootropics",
    copy: "Plant-derived compounds chosen for cognition, not synthetic stimulants.",
  },
  {
    icon: Waves,
    title: "No Crash, No Jitters",
    copy: "Energy that holds steady for hours instead of spiking and collapsing.",
  },
  {
    icon: Focus,
    title: "Clarity & Focus",
    copy: "Sharper attention on demand, with a calm, even-keeled mind underneath.",
  },
];

export function FeatureGrid() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative bg-void px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            id="features-heading"
            className="max-w-xl font-display text-3xl font-semibold text-silver sm:text-4xl"
          >
            Built to think clearly, not to buzz.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 border-t border-steel/20 sm:grid-cols-2">
          {/* center glow spine, visible from sm breakpoint up */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-lavender/40 to-transparent sm:block"
          />
          {features.map(({ icon: Icon, title, copy }, index) => (
            <Reveal
              key={title}
              delay={index * 0.08}
              className={`border-b border-steel/20 py-10 sm:py-14 ${
                index % 2 === 0 ? "pr-6 sm:pr-10" : "pr-6 sm:pl-10"
              }`}
            >
              <Icon
                aria-hidden="true"
                className="h-6 w-6 text-lavender"
                strokeWidth={1.5}
              />
              <h3 className="mt-6 font-display text-xl font-medium text-silver">
                {title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-silver/65">
                {copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
