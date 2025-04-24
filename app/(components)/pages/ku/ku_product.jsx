"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function KUProduct() {
  const [language, setLanguage] = useState("danish");

  // Listen for language changes
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
      title: "Et digitalt værktøj til at styrke jeres fysiske fællesskab",
      highlight: "reelt fællesskab",
      subtitle: "Skab tættere kontakt til jeres medlemmer med en platform designet til universitetsforeninger.",
      button: "Se alle fordele",
      link: "Kom i gang nu",
      features: [
        "Digitale medlemskort",
        "Event-håndtering",
        "Medlemskontrol",
        "Automatisk kommunikation"
      ]
    },
    english: {
      title: "A digital tool to strengthen your physical community",
      highlight: "real community",
      subtitle: "Create closer connection with your members using a platform designed for university associations.",
      button: "See all benefits",
      link: "Get started now",
      features: [
        "Digital membership cards",
        "Event management",
        "Membership verification",
        "Automated communication"
      ]
    }
  };

  return (
    <div id="product" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-none lg:text-left">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Left content area */}
              <div className="lg:col-span-6 xl:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-left">
                  {content[language].title.split(language === "danish" ? "reelt fællesskab" : "real community")[0]}
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-600 inline-block text-transparent bg-clip-text">
                    {content[language].highlight}
                  </span>
                  {content[language].title.split(language === "danish" ? "reelt fællesskab" : "real community")[1]}
                </h2>
                <p className="mt-4 text-lg text-gray-600 lg:text-left">
                  {content[language].subtitle}
                </p>

                {/* Features grid for desktop */}
                <div className="mt-8 hidden sm:block">
                  <div className="grid grid-cols-2 gap-4">
                    {content[language].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-3 text-sm font-medium text-gray-500">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features list for mobile */}
                <div className="mt-6 sm:hidden">
                  <ul className="space-y-3">
                    {content[language].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-3 text-sm font-medium text-gray-500">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:justify-start">
                  <Link
                    href="#features"
                    className="w-full sm:w-auto text-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                  >
                    {content[language].button}
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center sm:justify-start text-sm font-semibold text-gray-900 group"
                  >
                    {content[language].link}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right content area (app mockup) */}
              <div className="relative mt-12 sm:mt-16 lg:col-span-6 lg:mt-0 xl:col-span-7">
                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                  {/*/!* Phone mockup - visible only on larger screens *!/*/}
                  {/*<div className="hidden lg:block absolute z-10 right-4 top-8 w-full max-w-[230px]">*/}
                  {/*  <div className="relative">*/}
                  {/*    <svg*/}
                  {/*      viewBox="0 0 366 729"*/}
                  {/*      aria-hidden="true"*/}
                  {/*      className="w-full"*/}
                  {/*    >*/}
                  {/*      <defs>*/}
                  {/*        <clipPath id="app-screenshot-clip-large">*/}
                  {/*          <rect rx="36" width="316" height="684" />*/}
                  {/*        </clipPath>*/}
                  {/*      </defs>*/}
                  {/*      <path*/}
                  {/*        fill="#4B5563"*/}
                  {/*        d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"*/}
                  {/*      />*/}
                  {/*      <path*/}
                  {/*        fill="#343E4E"*/}
                  {/*        d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"*/}
                  {/*      />*/}
                  {/*      <foreignObject*/}
                  {/*        width={316}*/}
                  {/*        height={684}*/}
                  {/*        clipPath="url(#app-screenshot-clip-large)"*/}
                  {/*        transform="translate(24 24)"*/}
                  {/*      >*/}
                  {/*        <img src="/images/app_screen.png" alt="App screenshot" />*/}
                  {/*      </foreignObject>*/}
                  {/*    </svg>*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  {/* For mobile view, show a simplified app screenshot */}
                  <div className="relative lg:hidden">
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
                      <Image
                        src="/images/app_screen.png"
                        alt="App screenshot"
                        width={375}
                        height={812}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Background image with gradients and design elements */}
                  <div className="relative hidden lg:block">
                    <div className="absolute -inset-x-10 bottom-0 top-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-2"></div>
                    <div className="absolute -inset-x-10 bottom-0 top-8 bg-white/80 rounded-3xl transform -rotate-2 border border-blue-100"></div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 shadow-lg">
                      <img
                        src="/images/app_leaders.webp"
                        alt="App dashboard screenshot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
