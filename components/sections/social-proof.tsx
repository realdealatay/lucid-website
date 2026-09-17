import { Reveal } from "@/components/reveal";

export function SocialProof() {
  return (
    <section
      id="about"
      aria-label="Founder's note"
      className="bg-void px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-display text-2xl font-medium leading-relaxed text-silver sm:text-3xl">
            &ldquo;We didn&rsquo;t want to build another energy drink. We
            wanted the feeling of a clear morning, in a can you could drink
            at 11pm.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-sm text-silver/55">
            Founder &amp; Formulator, LUCID
          </p>
        </Reveal>
      </div>
    </section>
  );
}
