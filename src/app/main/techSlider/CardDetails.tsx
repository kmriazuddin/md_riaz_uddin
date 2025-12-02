import Image, { StaticImageData } from "next/image";

type TechCardProps = {
  icon: string | StaticImageData;
  title: string;
  gradient: string;
};

export default function TechCard({ icon, title, gradient }: TechCardProps) {
  return (
    <div
      className={`w-36 h-40 rounded-xl relative p-2 flex flex-col items-center justify-center ${gradient}`}
      style={{
        clipPath: "polygon(0 20%, 20% 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <Image
        src={icon}
        width={300}
        height={300}
        className="w-14 h-14 object-contain mt-2"
        alt={title}
      />
      <p className="text-white font-semibold mt-3 text-center text-sm">
        {title}
      </p>
    </div>
  );
}
