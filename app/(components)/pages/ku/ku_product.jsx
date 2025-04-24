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
      title: "Et digitalt værktøj til at styrke",
      highlight: "fysiske fællesskaber",
      subtitle: "Skab tættere kontakt til jeres medlemmer med en platform designet til universitetsforeninger.",
      button: "Se alle fordele",
      link: "Kom i gang nu",
      features: [
        "Digitale medlemskort",
        "Event-håndtering og billetter",
        "Medlemskontrol og verificering",
        "Automatisk kommunikation og notifikationer"
      ],
      imageBadge: "Udviklet med studerende"
    },
    english: {
      title: "A digital tool to strengthen your",
      highlight: "physical community",
      subtitle: "Create closer connection with your members using a platform designed for university associations.",
      button: "See all benefits",
      link: "Get started now",
      features: [
        "Digital membership cards",
        "Event management and tickets",
        "Membership verification",
        "Automated communication and notifications"
      ],
      imageBadge: "Developed with students"
    }
  };

  return (
    <div id="product" className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute inset-y-0 right-0 hidden lg:block lg:w-1/2 xl:w-2/5 bg-gradient-to-r from-transparent to-blue-50/30 -z-10"></div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto lg:max-w-none lg:flex lg:items-center lg:gap-8 lg:justify-between">

            {/* Left content area */}
            <div className="max-w-xl lg:max-w-lg lg:shrink-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {content[language].title} <br className="inline"/>
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 inline-block text-transparent bg-clip-text">
                  {content[language].highlight}
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {content[language].subtitle}
              </p>

              {/* Features grid */}
              <div className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content[language].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-md">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3 text-sm font-medium text-gray-500 mt-1">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Link
                  href="#features"
                  className="w-full sm:w-auto text-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
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

            {/* Right content area (app image) */}
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:ml-auto">
              <div className="relative mx-auto max-w-lg lg:max-w-none lg:mx-0">
                {/* Image container with decorative elements */}
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-10 blur-xl"></div>

                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm border border-gray-200/50">
                        {content[language].imageBadge}
                      </div>
                    </div>

                    {/* Main image */}
                    <div className="max-w-xl">
                    <div className="aspect-[16/9] sm:aspect-[4/3] w-full h-auto overflow-hidden">
                      <img
                        src="/images/app_leaders.webp"
                        alt="Happenings app dashboard showing events and members"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    </div>

                    {/* Floating UI elements for decoration */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200/50 hidden sm:block">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-xs font-semibold text-gray-800">{language === "danish" ? "Opret event" : "Create event"}</div>
                          <div className="text-xs text-gray-500">{language === "danish" ? "Nemt & hurtigt" : "Quick & easy"}</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-gray-200/50 hidden sm:flex items-center space-x-1">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="text-xs font-medium text-gray-700">{language === "danish" ? "350+ aktive foreninger" : "350+ active associations"}</div>
                    </div>
                  </div>

                  {/* Mobile UI element */}
                  <div className="absolute -right-4 -bottom-4 sm:right-4 sm:bottom-16 z-20 hidden sm:block">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 w-32 transform rotate-6">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                      <div className="p-2">
                        <div className="w-full h-5 bg-gray-200 rounded-full mb-2"></div>
                        <div className="flex space-x-1">
                          <div className="w-5 h-5 bg-blue-100 rounded-full"></div>
                          <div className="w-20 h-5 bg-gray-100 rounded-md"></div>
                        </div>
                      </div>
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
