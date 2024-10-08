"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

export default function RegisterNavBlue({ text, href, button_name, location }) {
  return (
    <button
      onClick={() => {
        track(button_name, { location: location });
      }}
    >
      <Link
        href={href}
        className="rounded-3xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors duration-300 ease-in-out text-sm font-semibold leading-6 text-white px-3 py-2"
      >
        {text}
      </Link>
    </button>
  );
}
