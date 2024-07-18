import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  page: { name: string; link: string };
};

export default function NavLink({ page }: Props) {
  const currPath = usePathname();

  return (
    <Link
      href={`/${page.link}`}
      className={`uppercase text-xl text-black no-underline ${
        currPath === "/" + page.link ? "font-bold text-rose-700" : ""
      }`}
    >
      {page.name}
    </Link>
  );
}
