"use client";
import Link from "next/link";
import { track } from "@vercel/analytics";

export default function HomeCTA() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden bg-emerald-50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get the most
              <br />
              out of your student life?
            </h2>
            <div className="flex flex-col gap-2 items-center md:items-start lg:items-start">
              <p className="mt-4 text-lg leading-8 text-gray-700 sm:text-center">
                Join the space where it all happens.
              </p>
              <p className="text-xs text-gray-500 sm:text-center">
                Available on iOS, Android and the World Wide Web.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="https://get.happenings.dk"
                className="rounded-3xl bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white focus:bg-blue-400 shadow-sm hover:bg-blue-200 hover:text-gray-900 transition-colors duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <button
                  onClick={() => {
                    track("register_button", { location: "home_cta" });
                  }}
                >
                  Register
                </button>
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline underline-offset-2"
              >
                <button
                  onClick={() => {
                    track("faq_button", { location: "home_cta" });
                  }}
                >
                  FAQ <span aria-hidden="true">→</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://media.istockphoto.com/id/1034348394/es/foto/quiero-como-en-instagram-concepto-de-persona-de-loca-suscriptor-personas-adictas-retrato-de.jpg?s=2048x2048&w=is&k=20&c=ohiTiirRrI3i9YR1Ob_fGeHMNF20_itBQXrXViVTsbM="
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
