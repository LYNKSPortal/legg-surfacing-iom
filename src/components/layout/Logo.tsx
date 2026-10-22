import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center transition-transform duration-300 group-hover:scale-[1.02]"
      aria-label="LEGG Surfacing Ltd home"
    >
      <Image
        src="/logo/logo-colour.png"
        alt="LEGG Surfacing Ltd"
        width={3000}
        height={875}
        priority
        className="h-8 w-auto sm:h-10"
      />
    </Link>
  );
}
