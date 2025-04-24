"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function KUStory() {
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

  const content = {
    danish: {
      heading: "VORES HISTORIE",
      title: "Fra gymnasierne til universitetet – og videre ud i verden",
      subtitle: "Hvorfor Happenings er det perfekte match for studenterforeninger på Københavns Universitet",
      origins: "Det hele startede med gymnasierne",
      originsContent: "Happenings blev oprindeligt bygget til at hjælpe gymnasieelever med at organisere deres sociale liv og finde events. Vi voksede hurtigt og er i dag aktive på mere end 25% af alle danske gymnasier.",
      kuStory: "Mødet med Juridisk Diskussionsklub",
      kuStoryContent: "Vendepunktet kom, da vi mødte Juridisk Diskussionsklub på Københavns Universitet. JD ledte efter en løsning til at håndtere deres medlemmer og events, og de overvejede at bygge deres egen app.",
      approach: "Vores tilgang",
      approachContent: 'I stedet for at lade JD starte helt fra bunden, foreslog vi: "Hvorfor ikke lade os hjælpe jer og mange flere?" Vi indsamlede feedback fra JD og byggede platformen ud fra deres specifikke ønsker og krav.',
      result: "Resultatet",
      resultContent: "En platform, der er skræddersyet til studenterforeninger. Vi fortsætter med at udvikle Happenings baseret på løbende feedback fra brugerne, så vi altid matcher foreningernes behov.",
      growth: "Fra Københavns Universitet og ud i verden",
      growthContent: "I dag bruger Danmarks største studenterforening, Studenterlauget, Happenings. Vi har også partnerskaber på tværs af landegrænser i Holland og Spanien. Det er sikkert at sige, at Happenings er det rette valg for enhver studenterforening.",
      readMore: "Læs mere om vores rejse",
      readMoreCta: "Læs artiklen"
    },
    english: {
      heading: "OUR STORY",
      title: "From high schools to university – and out into the world",
      subtitle: "Why Happenings is the perfect match for student clubs at the University of Copenhagen",
      origins: "It all started with high schools",
      originsContent: "Happenings was originally built to help high school students organize their social lives and find events. We grew quickly and are now active in more than 25% of all Danish high schools.",
      kuStory: "Meeting Juridisk Diskussionsklub",
      kuStoryContent: "The turning point came when we met Juridisk Diskussionsklub at the University of Copenhagen. They were looking for a solution to manage their members and events, and were considering building their own app.",
      approach: "Our approach",
      approachContent: 'Instead of letting them start from scratch, we suggested: "Why not let us do it for you?" We collected their feedback and built the platform based on their specific wishes and requirements.',
      result: "The result",
      resultContent: "A platform tailor-made for student associations. We continue to develop Happenings based on ongoing user feedback, ensuring we always match the needs of associations.",
      growth: "From University of Copenhagen to the world",
      growthContent: "Today, Denmark's largest student association, Studenterlauget, uses Happenings. We also have partnerships across borders in The Netherlands and Spain. It's safe to say that Happenings is the right choice for any student association.",
      readMore: "Read more about our journey",
      readMoreCta: "Read the article"
    }
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">{content[language].heading}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content[language].title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              {content[language].subtitle}
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-indigo-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12 relative z-10">
              {/* Origins - High Schools */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{content[language].origins}</h3>
                    <p className="text-gray-600">{content[language].originsContent}</p>
                  </div>
                </div>

                <div className="flex-none mx-auto md:mx-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md z-20">
                    1
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-xl overflow-hidden h-48 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="h-16 w-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-gray-600">25%+ <br/>af danske <br/>gymnasier</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KU Story */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 hidden md:block">
                  <div className="flex justify-end">
                    <Image
                      src="/jdku.webp"
                      alt="Juridisk Diskussionsklub"
                      width={140}
                      height={140}
                      className="rounded-full shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex-none mx-auto md:mx-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md z-20">
                    2
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{content[language].kuStory}</h3>
                    <p className="text-gray-600">{content[language].kuStoryContent}</p>
                  </div>
                </div>
              </div>

              {/* Our Approach */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{content[language].approach}</h3>
                    <p className="text-gray-600">{content[language].approachContent}</p>
                  </div>
                </div>

                <div className="flex-none mx-auto md:mx-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md z-20">
                    3
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-xl overflow-hidden h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                    <div className="p-5 text-center">
                      <div className="inline-flex rounded-full bg-blue-100 p-3 mb-4">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                      <blockquote className="text-sm italic text-gray-700">
                        "Team work, makes the dream work"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Result */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 hidden md:block">
                  <div className="rounded-xl overflow-hidden h-48 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="grid grid-cols-2 gap-3 p-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <svg className="h-6 w-6 text-blue-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                        <span className="text-xs font-medium">Billetter</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <svg className="h-6 w-6 text-blue-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-xs font-medium">Medlemmer</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <svg className="h-6 w-6 text-blue-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="text-xs font-medium">Kommunikation</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <svg className="h-6 w-6 text-blue-500 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className="text-xs font-medium">Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-none mx-auto md:mx-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md z-20">
                    4
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{content[language].result}</h3>
                    <p className="text-gray-600">{content[language].resultContent}</p>
                  </div>
                </div>
              </div>

              {/* Growth Story */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{content[language].growth}</h3>
                    <p className="text-gray-600">{content[language].growthContent}</p>
                  </div>
                </div>

                <div className="flex-none mx-auto md:mx-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md z-20">
                    5
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-xl overflow-hidden h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <svg className="h-full w-full text-blue-500" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/>
                      </svg>
                    </div>
                    <div className="relative flex flex-col items-center space-y-1 p-5">
                      <div className="flex items-center space-x-3">
                        <Image src="/logo_black.svg" alt="Happenings" width={24} height={16} />
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                          DK
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                          NL
                        </div>
                        <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                          ES
                        </div>
                      </div>
                      <p className="text-xs font-medium text-gray-600 mt-2">International growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Read More Link */}
          <div className="mt-16 text-center">
            <div className="inline-block">
              <h3 className="text-lg font-medium text-gray-900 mb-3">{content[language].readMore}</h3>
              <Link
                href="/happenings_story.md"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-500 transition-colors shadow-sm"
              >
                {content[language].readMoreCta}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
