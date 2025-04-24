"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
      cta: "Book demo",
      contact: "Kontakt os",
      tagline: "Bygget med foreninger, til foreninger.",
      testimonial: {
        quote: "Happenings har revolutioneret vores måde at håndtere medlemmer og events på. Det er let at bruge og sparer os for så meget tid.",
        author: "Juridisk Diskussionsklub, Københavns Universitet",
        role: "Studenterforening"
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
      }
    }
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 px-6 py-12 sm:rounded-3xl sm:px-10 md:py-16 lg:flex lg:gap-x-10 lg:px-16 lg:py-20">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)] opacity-25"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#3b82f6" />
                <stop offset={1} stopColor="#1e40af" />
              </radialGradient>
            </defs>
          </svg>
          
          <div className="relative z-10 mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:text-left lg:py-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {content[language].title}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-7 text-blue-100">
              {content[language].description}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6 lg:justify-start">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center rounded-full bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                {content[language].cta}
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto text-center group flex items-center justify-center text-sm font-semibold text-white transition-colors"
              >
                {content[language].contact} 
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Testimonial */}
            <div className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-xl">
              <blockquote className="relative">
                <div className="relative z-10">
                  <p className="text-xs sm:text-sm italic font-medium text-blue-50">
                    "{content[language].testimonial.quote}"
                  </p>
                  <div className="mt-3">
                    <p className="text-xs sm:text-sm font-semibold text-white">{content[language].testimonial.author}</p>
                    <p className="text-xs text-blue-200">{content[language].testimonial.role}</p>
                  </div>
                </div>
                <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 h-8 w-8 sm:h-12 sm:w-12 text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </blockquote>
            </div>
          </div>
          
          {/* Stats card */}
          <div className="relative mt-10 lg:mt-0 lg:h-full">
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-5 rounded-xl lg:absolute lg:right-0 lg:w-[350px] lg:h-full lg:flex lg:flex-col lg:justify-center">
              <div className="bg-white/95 rounded-lg shadow-lg p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-gray-50 p-2 sm:p-3 rounded-lg text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">100+</div>
                    <div className="text-xs text-gray-500">{language === "danish" ? "Foreninger" : "Associations"}</div>
                  </div>
                  <div className="bg-gray-50 p-2 sm:p-3 rounded-lg text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">10k+</div>
                    <div className="text-xs text-gray-500">{language === "danish" ? "Medlemmer" : "Members"}</div>
                  </div>
                  <div className="bg-gray-50 p-2 sm:p-3 rounded-lg text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">5k+</div>
                    <div className="text-xs text-gray-500">{language === "danish" ? "Events" : "Events"}</div>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-1">Happenings</h3>
                <p className="text-xs sm:text-sm text-gray-600 italic text-center">{content[language].tagline}</p>
                
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="flex justify-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      {language === "danish" ? "Se flere cases" : "See more case studies"}
                      <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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
  );
}