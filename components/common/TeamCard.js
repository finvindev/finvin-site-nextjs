import Image from "next/image";

export default function TeamCard({ name, title, description, image }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="card-editorial rounded-2xl overflow-hidden flex flex-col">
      {/* Full portrait photo */}
      {image ? (
        <div className="relative w-full aspect-[4/5]" style={{ background: "var(--paper-2)" }}>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div
          className="w-full aspect-[4/5] flex items-center justify-center text-4xl font-bold font-display"
          style={{ background: "var(--paper-2)", color: "var(--ink-2)" }}
        >
          {initials}
        </div>
      )}

      {/* Identity + description */}
      <div className="p-7 flex flex-col flex-1">
        <div className="font-display font-semibold text-lg leading-tight" style={{ color: "var(--ink)" }}>
          {name}
        </div>
        <div
          className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
          style={{ color: "var(--gold)" }}
        >
          {title}
        </div>

        {/* Hairline */}
        <div className="h-px w-full my-4" style={{ background: "var(--line)" }} />

        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
