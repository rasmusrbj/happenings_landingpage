"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function KUComparison() {
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
      title: "Hvorfor vælge Happenings?",
      subtitle: "Moderne platform vs. traditionelle løsninger",
      pricingTitle: "Pris",
      pricingCompetitor: "Andre platforme siger, det er gratis – men tager gebyr hver gang I sælger en billet.",
      pricingHappenings: "Happenings er helt gratis. Ingen gebyrer. Ingen mellemregninger. I beholder det hele.",
      focusTitle: "Fokus",
      focusCompetitor: "Andre platforme prøver at være alt for alle – events, jobs, rabatter, brugte bøger og mere. Det betyder, at nogle funktioner ikke er gennemarbejdede.",
      focusHappenings: "Happenings gør én ting – og gør det godt:",
      focusPoints: [
        "Billetter",
        "Medlemskaber",
        "Kommunikation"
      ],
      focusConclusion: "Bygget specifikt til foreninger. Ikke alt muligt andet.",
      securityTitle: "Datasikkerhed",
      securityCompetitor: "Andre platforme bruger amerikanske servere. Data kan blive behandlet uden for EU.",
      securityHappenings: "Happenings hoster udelukkende i Europa. Vi passer på jeres data – med fuld GDPR-overholdelse.",
      whyTitle: "Hvorfor betyder det noget?",
      whyDescription: "Fordi foreninger har brug for ro og overblik. Når teknikken spiller, og administrationen er enkel, får I mere tid til det, det hele handler om: fællesskabet, medlemmerne og jeres aktiviteter.",
      securityCertification: "Verificeret datasikkerhed",
      certificationText: "Vores processer er revideret efter ISAE 3000-standarden, hvilket sikrer, at vi håndterer data forsvarligt og sikkert.",
      viewReport: "Se rapport",
      contactTitle: "Vi hjælper jer i gang – gratis og uforpligtende.",
      contactCta: "Tag kontakt i dag og oplev forskellen."
    },
    english: {
      title: "Why choose Happenings?",
      subtitle: "Modern platform vs. traditional solutions",
      pricingTitle: "Pricing",
      pricingCompetitor: "Other platforms claim to be free – but charge a fee every time you sell a ticket.",
      pricingHappenings: "Happenings is completely free. No fees. No intermediaries. You keep everything.",
      focusTitle: "Focus",
      focusCompetitor: "Other platforms try to be everything for everyone – events, jobs, discounts, used books, and more. This means some features aren't thoroughly developed.",
      focusHappenings: "Happenings does one thing – and does it well:",
      focusPoints: [
        "Tickets",
        "Memberships",
        "Communication"
      ],
      focusConclusion: "Built specifically for associations. Not everything else.",
      securityTitle: "Data Security",
      securityCompetitor: "Other platforms use American servers. Data may be processed outside the EU.",
      securityHappenings: "Happenings hosts exclusively in Europe. We protect your data – with full GDPR compliance.",
      whyTitle: "Why does it matter?",
      whyDescription: "Because associations need peace and overview. When technology works smoothly, and administration is simple, you have more time for what really matters: community, members, and your activities.",
      securityCertification: "Verified data security",
      certificationText: "Our processes are audited according to the ISAE 3000 standard, ensuring we handle data responsibly and securely.",
      viewReport: "View report",
      contactTitle: "We'll help you get started – free and without obligation.",
      contactCta: "Contact us today and experience the difference."
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {content[language].title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          {/* Pricing comparison */}
          <div className="mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 h-16 w-16 bg-blue-600 transform translate-x-8 -translate-y-8 rotate-45"></div>
            
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {content[language].pricingTitle}
            </h3>
            
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-base text-gray-600">
                    {content[language].pricingCompetitor}
                  </p>
                </div>
              </div>
              
              <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-base text-gray-700 font-medium">
                    {content[language].pricingHappenings}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Focus comparison */}
          <div className="mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 h-16 w-16 bg-blue-600 transform translate-x-8 -translate-y-8 rotate-45"></div>
            
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
              </svg>
              {content[language].focusTitle}
            </h3>
            
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="text-base text-gray-600">
                  {content[language].focusCompetitor}
                </div>
              </div>
              
              <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-sm">
                <div className="text-base text-gray-700 font-medium">
                  {content[language].focusHappenings}
                  
                  <ul className="mt-3 space-y-1">
                    {content[language].focusPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="mt-3">{content[language].focusConclusion}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Security comparison with ISAE certification */}
          <div className="mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 h-16 w-16 bg-blue-600 transform translate-x-8 -translate-y-8 rotate-45"></div>
            
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {content[language].securityTitle}
            </h3>
            
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-base text-gray-600">
                    {content[language].securityCompetitor}
                  </p>
                </div>
              </div>
              
              <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-base text-gray-700 font-medium">
                    {content[language].securityHappenings}
                  </p>
                </div>
                
                {/* ISAE 3000 certification */}
                <div className="mt-5 flex p-3 bg-white rounded-lg border border-blue-100">
                  <div className="flex-shrink-0 mr-3">
                    <Image src="/isae3000_icon.svg" alt="ISAE 3000" width={40} height={40} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{content[language].securityCertification}</h4>
                    <p className="text-xs text-gray-600 mt-1">{content[language].certificationText}</p>
                    <Link href="/isae3000.pdf" target="_blank" className="text-xs font-medium text-blue-600 hover:text-blue-500 mt-1 inline-flex items-center">
                      {content[language].viewReport}
                      <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why it matters */}
          <div className="mb-12 rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern-why" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40 L40 40 L40 0" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-why)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold flex items-center">
                <svg className="h-6 w-6 mr-2 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {content[language].whyTitle}
              </h3>
              
              <p className="mt-4 text-lg text-blue-100">
                {content[language].whyDescription}
              </p>
              
              <div className="mt-6 pt-6 border-t border-blue-500/30">
                <p className="text-lg font-medium">
                  {content[language].contactTitle}
                </p>
                <p className="mt-2 text-blue-100">
                  {content[language].contactCta}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}