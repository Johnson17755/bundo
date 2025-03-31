"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center text-2xl font-bold text-green-500"
    >
      Bundo
    </Link>
  );
}
