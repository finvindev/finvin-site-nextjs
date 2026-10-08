export default function CTABanner() {
  return (
    <section className="w-full bg-[var(--navy)]">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-20 text-center">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
          Ready to resolve your
          <br />
          <span className="font-display italic font-medium text-[var(--brand-2)]">
            distressed assets?
          </span>
        </h2>
        <p className="mt-4 text-sm text-white/70 max-w-md mx-auto">
          Talk to our experts today and discover how Finvin can help unlock
          maximum value from your stressed portfolio.
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-full bg-[var(--brand)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--brand-2)] transition-colors"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
