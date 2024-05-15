import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
const NavBar = () => {
  const links: any = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center ">
      <Link href="/">
        <FaBug />
      </Link>

      <ul className="flex  space-x-6">
        {links.map((link: any) => {
          <li key={link.href}>
            {" "}
            <Link
              className="text-zinc-500 hover:text-xinc-800 transition-colors"
              href={link.href}
            >
              {" "}
              {link.label}{" "}
            </Link>{" "}
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
