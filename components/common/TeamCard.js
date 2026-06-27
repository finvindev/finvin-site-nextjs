import Image from "next/image";

export default function TeamCard({ name, title, description, image }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="card-editorial rounded-2xl p-7 flex flex-col">
      {/* Avatar + identity */}
      <div className="flex items-center gap-4 mb-5">
        {image ? (
          <div
            className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "2px solid var(--line)" }}
          >
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold font-display"
            style={{ background: "var(--paper-2)", color: "var(--ink-2)", border: "2px solid var(--line)" }}
          >
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <div className="font-display font-semibold text-lg leading-tight" style={{ color: "var(--ink)" }}>
            {name}
          </div>
          <div
            className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "var(--gold)" }}
          >
            {title}
          </div>
        </div>
      </div>

      {/* Hairline */}
      <div className="h-px w-full mb-4" style={{ background: "var(--line)" }} />

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {description}
      </p>
    </div>
  );
}
