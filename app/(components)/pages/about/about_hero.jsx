"use client";

import Link from "next/link";
import NavHeader from "../../universal/navigation/header/nav_bar";
import HappeningsRegister from "../../universal/buttons/happenings_register";
import { track } from "@vercel/analytics";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="bg-gray-50">
      <NavHeader />
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            alt="Background"
            src="/background_three.webp"
            className="h-full w-full object-cover object-center"
            fill
            priority
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-20"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <button
            onClick={() =>
              track("happenings_register", { location: "about_hero" })
            }
          >
            <HappeningsRegister />
          </button>
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl shadow-sm">
            The digital screwdriver <br />
            connecting people in reality.
          </h1>
          <p className="mt-4 text-md text-white">
            Technology is a tool, not a replacement for real life.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-3xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white"
          >
            <button
              onClick={() =>
                track("contact_button", { location: "about_hero" })
              }
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
