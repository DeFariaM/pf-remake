"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ path, title, icon, justIcon, className }) {
  const route = usePathname();

  return (
    <>
      <Link
        href={path}
        className={`font-bebas text-2xl text-bgray transition-all duration-500 hover:text-brand hover:opacity-80 ${route === path && "text-brand underline underline-offset-4"} ${className}`}
      >
        {justIcon ? (
          <p className="flex h-8 w-8 font-semibold">{icon}</p>
        ) : (
          <>
            <p className="flex h-8 w-8 font-semibold sm:hidden">{icon}</p>
            <span className="hidden sm:block">{title}</span>
          </>
        )}
      </Link>
    </>
  );
}
