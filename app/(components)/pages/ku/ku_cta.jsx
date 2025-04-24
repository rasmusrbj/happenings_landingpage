"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function KUCTA() {
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
      title: "Skal vi tage en uforpligtende snak?",
      description: "Vi hjælper jer gerne i gang – det tager under 10 minutter. Skriv til os, eller book en hurtig demo direkte her.",
      cta: "Crash course om appen",
      contact: "Book et møde",
      tagline: "Bygget med foreninger, til foreninger.",
      testimonial: {
        quote: "Happenings har revolutioneret vores måde at håndtere medlemmer og events på. Det er let at bruge og sparer os for så meget tid.",
        author: "Juridisk Diskussionsklub, Københavns Universitet",
        role: "Studenterforening"
      },
      stats: {
        associations: "Foreninger",
        members: "Brugere",
        events: "Udbetalt",
        caseStudies: "Se flere cases"
      }
    },
    english: {
      title: "Want to have a no-obligation chat?",
      description: "We'll help you get started – it takes less than 10 minutes. Write to us or book a quick demo directly here.",
      cta: "Book demo",
      contact: "Contact us",
      tagline: "Built with associations, for associations.",
      testimonial: {
        quote: "Happenings has revolutionized how we handle members and events. It's easy to use and saves us so much time.",
        author: "Juridisk Diskussionsklub, University of Copenhagen",
        role: "Student Association"
      },
      stats: {
        associations: "Associations",
        members: "Users",
        events: "Paid to clubs",
        caseStudies: "See more cases"
      }
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Mobile testimonial (hidden on desktop) */}
          <div className="lg:hidden mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 -mt-4 -mr-16 h-32 w-32 opacity-20 transform rotate-12">
                <svg className="text-white" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="relative text-sm text-white italic">
                "{content[language].testimonial.quote}"
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{content[language].testimonial.author}</p>
                  <p className="text-xs text-blue-100">{content[language].testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40 L40 40 L40 0" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            <div className="lg:grid lg:grid-cols-5 lg:items-center">
              {/* Text content - 3 columns on desktop */}
              <div className="p-8 sm:p-10 lg:p-12 lg:col-span-3 relative z-10">
                <div className="max-w-xl lg:max-w-none">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {content[language].title}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-blue-100">
                    {content[language].description}
                  </p>

                  {/* CTA buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="flex-1 sm:flex-none inline-flex justify-center items-center px-6 py-3 rounded-full bg-white text-blue-600 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 transition-colors"
                    >
                      {content[language].cta}
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 sm:flex-none inline-flex justify-center items-center px-6 py-3 rounded-full border border-blue-200 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                    >
                      {content[language].contact}
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Desktop testimonial (hidden on mobile) */}
                  <div className="hidden lg:block mt-12">
                    <blockquote className="relative">
                      <div className="relative z-10 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                        <p className="text-sm italic font-medium text-blue-50">
                          "{content[language].testimonial.quote}"
                        </p>
                        <div className="mt-4 flex items-center">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                              JD
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-semibold text-white">{content[language].testimonial.author}</p>
                            <p className="text-xs text-blue-200">{content[language].testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                      <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 h-8 w-8 text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Stats card - 2 columns on desktop */}
              <div className="lg:col-span-2 p-8 sm:p-10 lg:p-0 lg:pr-12 relative z-10">
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-full lg:h-full">
                  <div className="h-full flex items-center justify-center lg:pr-12">
                    <div className="bg-white/95 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-sm">
                      {/* Logo and title */}
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center shadow-md">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-gray-900">Happenings</h3>
                          <p className="text-sm text-gray-500">{content[language].tagline}</p>
                        </div>
                      </div>

                      {/* Stats counter grid */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-blue-600">350+</div>
                          <div className="text-xs text-gray-500">{content[language].stats.associations}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-blue-600">50k+</div>
                          <div className="text-xs text-gray-500">{content[language].stats.members}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-blue-600">80m+</div>
                          <div className="text-xs text-gray-500">{content[language].stats.events}</div>
                        </div>
                      </div>

                      {/* Organizations using Happenings */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <h4 className="text-sm font-medium text-gray-500 mb-4 text-center">
                          {language === "danish" ? "Bruges af bl.a." : "Used by"}
                        </h4>
                        <div className="flex justify-center space-x-4">
                          <div className="h-8 w-8 rounded-full bg-gray-100 overflow-hidden p-0.5">
                            <Image src="/jdku.webp" alt="JDKU" width={32} height={32} className="rounded-full object-cover" />
                          </div>
                          <div className="h-8 w-8 rounded-full bg-gray-100 overflow-hidden p-0.5">
                            <Image src="/elsa.webp" alt="ELSA" width={32} height={32} className="rounded-full object-cover" />
                          </div>
                          <div className="h-8 w-8 rounded-full bg-gray-100 overflow-hidden p-0.5">
                            <Image src="/sl.webp" alt="Studenterlauget" width={32} height={32} className="rounded-full object-cover" />
                          </div>
                        </div>
                        <div className="mt-6 text-center">
                          <Link
                            href="#"
                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 group"
                          >
                            {content[language].stats.caseStudies}
                            <svg
                              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
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
