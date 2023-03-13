import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`pr-3 ${router.pathname === href ? "selected" : ""}`}
    >
      {children}
    </Link>
  );
};
