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
    <div className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                
                {/* Before illustration */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-lg shadow-sm border border-gray-200">
                    <svg className="absolute inset-0 h-full w-full text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                        <svg className="h-8 w-8 text-gray-400 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                          />
                        </svg>
                        <span className="block text-xs font-medium text-gray-500">
                          {language === "danish" ? "Gamle metoder" : "Old methods"}
                        </span>
                      </div>
                      <div className="space-y-1 mt-4">
                        <div className="h-2 w-24 bg-gray-200 rounded"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                        <div className="h-2 w-20 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                
                {/* After illustration */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 shadow-sm">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                        <svg className="h-8 w-8 text-blue-500 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                          />
                        </svg>
                        <span className="block text-xs font-medium text-blue-700">Happenings</span>
                      </div>
                      <div className="space-y-1 mt-4">
                        <div className="h-1.5 w-16 bg-blue-200 rounded"></div>
                        <div className="h-1.5 w-12 bg-blue-200 rounded"></div>
                        <div className="h-1.5 w-20 bg-blue-200 rounded"></div>
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