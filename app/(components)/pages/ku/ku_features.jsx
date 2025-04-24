"use client";

import { useEffect, useState } from "react";

export default function KUFeatures() {
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
      heading: "FORENINGER PÅ KØBENHAVNS UNIVERSITET VÆLGER HAPPENINGS",
      title: "Derfor bruger flere KU-foreninger Happenings",
      features: [
        {
          name: "100% gratis",
          description: "Vi tager ingen gebyrer – hverken på billetter eller medlemskaber.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )
        },
        {
          name: "Fuld kontrol",
          description: "Opret events, styr hvem der kan tilmelde sig, og få penge direkte ind på jeres egen konto.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )
        },
        {
          name: "Automatisk tjek af medlemskab",
          description: "Ingen skal længere sidde og godkende manuelt – det klarer platformen.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          name: "Kendt og afprøvet på KU",
          description: "Juridisk Diskussionsklub og andre foreninger bruger allerede Happenings.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          name: "Sponsorer og støttemedlemmer",
          description: "Vil I have støttemedlemmer? Vi hjælper jer med at finde sponsorer og bygge modellen.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          name: "Alt samlet ét sted",
          description: "Medlemslister, billetsalg, notifikationer, medlemskort – I slipper for Excel og skiftende værktøjer.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          )
        }
      ]
    },
    english: {
      heading: "WHY MORE KU ASSOCIATIONS CHOOSE HAPPENINGS",
      title: "Why more KU associations use Happenings",
      features: [
        {
          name: "100% free",
          description: "We don't charge any fees – neither on tickets nor memberships.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )
        },
        {
          name: "Full control",
          description: "Create events, control who can register, and get money directly into your own account.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )
        },
        {
          name: "Automatic membership verification",
          description: "No one needs to manually approve anymore – the platform handles it.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          name: "Known and tested at KU",
          description: "Juridisk Diskussionsklub and other associations already use Happenings.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          name: "Sponsors and supporting members",
          description: "Want supporting members? We help you find sponsors and build the model.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          name: "Everything in one place",
          description: "Member lists, ticket sales, notifications, membership cards – no more Excel and changing tools.",
          icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          )
        }
      ]
    }
  };

  return (
    <div id="features" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">{content[language].heading}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {content[language].title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {language === "danish"
              ? "Vi har skabt platformen sammen med studenterdrevne foreninger på KU"
              : "We've created the platform together with student-run associations at KU"}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid gap-y-10 gap-x-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {content[language].features.map((feature, index) => (
              <div key={index} className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-blue-100">
                <dt className="flex flex-col gap-3">
                  <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-semibold leading-7 text-gray-900">{feature.name}</span>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative rounded-full px-5 py-2 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all hover:bg-gray-50">
            {language === "danish"
              ? "Se flere foreninger, der bruger Happenings."
              : "See more associations using Happenings."}{" "}
            <a href="#" className="font-semibold text-blue-600 group inline-flex items-center">
              <span className="absolute inset-0" aria-hidden="true" />
              {language === "danish" ? "Læs mere" : "Read more"}
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
  );
}
