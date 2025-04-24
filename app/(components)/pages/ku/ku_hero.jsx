"use client";

import { useState } from "react";
import NavHeader from "../../universal/navigation/header/nav_bar";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./language_toggle";

export default function KUHero() {
  const [language, setLanguage] = useState("danish");

  const content = {
    danish: {
      title: "Gør det nemt at drive en studenterforening på KU",
      subtitle: "Billetter. Medlemmer. Kommunikation. Alt samlet ét sted – helt gratis.",
      cta: "Start nu - det er gratis"
    },
    english: {
      title: "Make running a student club at Copenhagen University easy",
      subtitle: "Tickets. Members. Communication. All in one place – completely free.",
      cta: "Start now - it's free"
    }
  };

  return (
    <div className="bg-gray-50">
      <NavHeader />
      <div className="relative bg-gray-900 overflow-hidden">
        <LanguageToggle onChange={setLanguage} />

        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            alt="Download app Juridisk Diskussionsklub"
            src="/images/download.webp"
            className="h-full w-full object-cover object-center"
            fill
            priority
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/30"
        />

        <div className="relative mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto max-w-3xl flex-col items-center py-24 text-center sm:py-32 lg:py-40 min-h-[70vh] flex justify-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl shadow-sm leading-tight">
              {content[language].title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white max-w-xl mx-auto">
              {content[language].subtitle}
            </p>
            <Link
              href="#"
              className="mt-8 inline-block rounded-full border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {content[language].cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}