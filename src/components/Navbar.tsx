"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-stone-700 shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyBlog
      </Link>

      {/* Menu */}
      <ul className="flex gap-6 text-lg font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
}
