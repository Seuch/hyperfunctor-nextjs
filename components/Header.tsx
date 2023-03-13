import { NavLink } from "./NavLink";

export const Header = () => {
  return (
    <header className="bg-gray-500 max-w-7xl mx-auto w-full">
      <nav className="px-4 py-2">
        <NavLink href="/">Strona główna</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </header>
  );
};
