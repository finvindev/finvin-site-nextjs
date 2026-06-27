import Image from "next/image";

export default function TeamCard({ name, title, description, image }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="bg-white rounded-2xl p-6 flex flex-col items-center text-center card-lift"
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        border: "1px solid #e5e7eb",
      }}
    >
      {/* Avatar */}
      {image ? (
        <div
          className="w-24 h-24 rounded-full overflow-hidden mb-5 flex-shrink-0"
          style={{ border: "3px solid #dbeafe" }}
        >
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
      ) : (
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-5 flex-shrink-0 text-2xl font-bold text-blue-600"
          style={{
            background: "linear-gradient(135deg, #dbeafe, #e0f2fe)",
            border: "3px solid #dbeafe",
          }}
        >
          {initials}
        </div>
      )}

      {/* Name */}
      <div className="font-bold text-gray-900 text-lg mb-1 leading-tight">
        {name}
      </div>

      {/* Title */}
      <div
        className="text-sm font-semibold mb-4 px-3 py-1 rounded-full"
        style={{ color: "#2563eb", background: "#eff6ff" }}
      >
        {title}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
