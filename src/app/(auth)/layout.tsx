"use client";

import "@/app/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLink = ["register", "login", "forgotpass"];
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <header className="bg-slate-600 w-full p-5">Header</header>
        <div className="flex gap-5 text-[#fff] pt-2">
          {navLink.map((link, i) => {
            const isActive =
              pathname == `/${link}` ||
              (pathname.startsWith(`/${link}`) && pathname !== "/");
            return (
              <Link
                key={i}
                className={`${isActive?"px-4 py-2 border-[1px] border-blue-400 bg-sky-900 text-white":"px-4 py-2 border-[1px] border-red-400"}`}
                href={`/${link}`}
              >
                {link}
              </Link>
            );
          })}
          {/* <Link href="/register">register</Link> */}
        </div>
        {children}
        <footer className="bg-teal-400 w-full p-5">Footer</footer>
      </body>
    </html>
  );
}
