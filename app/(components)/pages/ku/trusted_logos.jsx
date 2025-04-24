"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TrustedLogos({ language: initialLanguage }) {
  const [language, setLanguage] = useState(initialLanguage || "danish");

  // Listen for language changes from the toggle
  useEffect(() => {
    const handleLanguageChange = (e) => {
      if (e.detail && (e.detail === "danish" || e.detail === "english")) {
        setLanguage(e.detail);
      }
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const content = {
    danish: {
      title: "Brugt og elsket af flere universitetsforeninger",
      subtitle: "Foreninger der allerede bruger Happenings:",
      joinNow: "Vil du med på listen? Kontakt os i dag"
    },
    english: {
      title: "Used and loved by university associations",
      subtitle: "Organizations already using Happenings:",
      joinNow: "Want to join the list? Contact us today"
    }
  };

  // Logo data with actual logos from the project
  const logos = [
    {
      src: "/jdku.webp",
      alt: "Juridisk Diskussionsklub",
      href: "/page/jdku",
      width: 60,
      height: 60,
      name: "Juridisk Diskussionsklub",
      type: language === "danish" ? "Københavns Universitet" : "University of Copenhagen"
    },
    {
      src: "/elsa.webp",
      alt: "ELSA Cph",
      href: "/page/jdku",
      width: 60,
      height: 60,
      name: "ELSA Cph",
      type: language === "danish" ? "Københavns Universitet" : "University of Copenhagen"
    },
    {
      src: "/sl.webp",
      alt: "StudenterLauget",
      href: "/page/studenterlauget",
      width: 60,
      height: 60,
      name: "StudenterLauget",
      type: language === "danish" ? "Aarhus Universitet BSS" : "BSS Aarhus University"
    },
    {
      src: "/kvindelige.jpg",
      alt: "StudenterLauget",
      href: "/page/jdku",
      width: 60,
      height: 60,
      name: "Kvindelige Jurister",
      type: language === "danish" ? "Københavns Universitet" : "University of Copenhagen"
    }
  ];

  // Additional placeholder logos for visual balance
  const placeholderCount = 0;

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              {content[language].title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {content[language].subtitle}
            </p>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {/* Real logos */}
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="col-span-1 flex flex-col items-center justify-start gap-2"
                >
                  <div className="h-16 w-16 overflow-hidden rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center p-1">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-full w-full object-contain rounded-full"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm font-medium text-gray-900 truncate max-w-[240px]">{logo.name}</p>
                    <p className="text-xs text-gray-500 truncate max-w-[240px]">{logo.type}</p>
                  </div>
                </div>
              ))}

              {/* Placeholder logos */}
              {Array.from({ length: placeholderCount }).map((_, idx) => (
                <div
                  key={`placeholder-${idx}`}
                  className="col-span-1 flex flex-col items-center justify-start gap-2 opacity-60"
                >
                  <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-100 shadow-sm border border-gray-200 flex items-center justify-center">
                    <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="text-center mt-2">
                    <div className="h-3 w-16 bg-gray-200 rounded mb-1 mx-auto"></div>
                    <div className="h-2 w-12 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Join now text */}
            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                {content[language].joinNow}
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
