import Image from "next/image";

export default function TeamCard({
  name,
  title,
  description,
  image,
  borderColor = "border-gray-400",
}) {
  return (
    <div
      className={`bg-white rounded-xl shadow p-6 flex flex-col items-start border-t-4 ${borderColor}`}
    >
      {image && (
        <div className="w-full mb-4 aspect-[3/4] relative">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
            priority={false}
          />
        </div>
      )}
      <div className="font-bold text-lg mb-1">{name}</div>
      <div className="text-blue-700 font-semibold mb-2">{title}</div>
      <div className="text-sm text-left">{description}</div>
    </div>
  );
}
