"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function KUBenefits() {
  const [language, setLanguage] = useState("danish");

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

  // Example partner/client logos
  const logos = [
    { src: "/jdku.webp", alt: "Juridisk Diskussionsklub", width: 80, height: 80 },
    { src: "/logos/logo2.webp", alt: "Partner 2", width: 80, height: 80 },
    { src: "/logos/logo3.webp", alt: "Partner 3", width: 80, height: 80 },
    { src: "/logos/logo4.webp", alt: "Partner 4", width: 80, height: 80 },
    { src: "/logos/logo5.webp", alt: "Partner 5", width: 80, height: 80 },
    { src: "/logos/logo6.webp", alt: "Partner 6", width: 80, height: 80 },
    { src: "/logos/logo7.webp", alt: "Partner 7", width: 80, height: 80 },
    { src: "/logos/logo8.webp", alt: "Partner 8", width: 80, height: 80 },
  ];

  const content = {
    danish: {
      title: "Happenings er en gratis platform udviklet til foreninger som jeres",
      description: "Om I arrangerer middage, foredrag eller fredagsbarer, hjælper vi jer med at spare tid, undgå rod – og give medlemmerne en super nem oplevelse.",
      before: {
        title: "Før Happenings:",
        description: "Mails frem og tilbage. Manuelle betalinger. Excel-ark. Stress og fejl. Måske lyder det bekendt?"
      },
      after: {
        title: "Med Happenings:",
        bullets: [
          "Ét klik – så er medlemmet tilmeldt.",
          "Automatisk medlemskontrol. Digitalt medlemskort.",
          "Klar kommunikation.",
          "Det hele er gratis, og I bestemmer, hvordan I vil bruge det."
        ]
      }
    },
    english: {
      title: "Happenings is a free platform developed for associations like yours",
      description: "Whether you're organizing dinners, lectures, or social events, we help you save time, avoid hassle – and give members a super smooth experience.",
      before: {
        title: "Before Happenings:",
        description: "Back and forth emails. Manual payments. Excel sheets. Stress and errors. Does that sound familiar?"
      },
      after: {
        title: "With Happenings:",
        bullets: [
          "One click – and the member is registered.",
          "Automatic membership verification. Digital membership card.",
          "Clear communication.",
          "Everything is free, and you decide how to use it."
        ]
      }
    }
  };

  return (
      <div className="bg-white py-16 sm:py-24 overflow-hidden relative">
        {/* Background logos - this creates the scattered logo effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {logos.map((logo, index) => (
              <div
                  key={index}
                  className="absolute opacity-10 transition-opacity hover:opacity-20"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `translate(-50%, -50%) scale(${0.8 + Math.random() * 0.4})`,
                  }}
              >
                <div className="rounded-lg bg-white p-2 shadow-sm">
                  <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="w-full h-auto"
                  />
                </div>
              </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content[language].title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content[language].description}
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-lg lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
              {/* Before Card */}
              <div className="relative p-6 sm:p-8 h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900">{content[language].before.title}</h3>
                  <div className="h-1 w-12 bg-gray-300 my-3"></div>
                  <div className="mt-6 flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-4 text-base text-gray-600">
                      {content[language].before.description}
                    </p>
                  </div>

                  {/*/!* Illustration of old process *!/*/}
                  {/*<div className="mt-6 rounded-lg overflow-hidden">*/}
                  {/*  <Image*/}
                  {/*      src="/jdku.webp"*/}
                  {/*      alt="Manual process illustration"*/}
                  {/*      width={400}*/}
                  {/*      height={225}*/}
                  {/*      className="w-full h-auto object-cover"*/}
                  {/*  />*/}
                  {/*</div>*/}
                </div>
              </div>

              {/* After Card */}
              <div className="relative p-6 sm:p-8 h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm overflow-hidden">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-blue-900/10"></div>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900">{content[language].after.title}</h3>
                  <div className="h-1 w-12 bg-blue-400 my-3"></div>
                  <div className="mt-6 space-y-4">
                    {content[language].after.bullets.map((bullet, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <p className="ml-4 text-base text-gray-600">{bullet}</p>
                        </div>
                    ))}
                  </div>

                  {/*/!* Illustration of new process *!/*/}
                  {/*<div className="mt-6 rounded-lg overflow-hidden shadow-md">*/}
                  {/*  <Image*/}
                  {/*      src="/elsa.webp"*/}
                  {/*      alt="Modern digital solution"*/}
                  {/*      width={400}*/}
                  {/*      height={225}*/}
                  {/*      className="w-full h-auto object-cover"*/}
                  {/*  />*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
