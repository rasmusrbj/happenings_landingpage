"use client";
import { track } from "@vercel/analytics";
import Link from "next/link";
import NavHeader from "../../universal/navigation/header/nav_bar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons";

export default function ProductHero() {
  return (
      <>
        <NavHeader />
        <div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
          {/* First panel - Students */}
          <div className="relative flex h-[60vh] lg:h-[85vh]">
            {/* Background image with absolute positioning */}
            <div className="absolute inset-0 z-0">
              <Image
                  alt="Student background"
                  src="/background_six.webp"
                  className="h-full w-full object-cover object-center"
                  width={1080}
                  height={1080}
                  priority
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
            </div>

            {/* Content overlay with higher z-index */}
            <div className="relative z-10 flex w-full flex-col items-start justify-end p-8 sm:p-12 lg:p-16">
              <h2 className="text-lg font-medium text-gray-900 text-opacity-90 tracking-wide">
                Life at your fingertips
              </h2>
              <p className="mt-2 text-3xl font-bold text-gray-900 max-w-md leading-tight">
                Benefits for Students to enjoy life
              </p>
              <button
                  className="mt-8 group"
                  onClick={() => {
                    track("students_register_button", { location: "product_hero" });
                  }}
              >
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-opacity-90 active:bg-opacity-100 px-6 py-3 text-sm font-medium text-gray-900 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  Register
                  <FontAwesomeIcon
                      icon={faArrowRight}
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </button>
            </div>
          </div>

          {/* Second panel - Leaders */}
          <div className="relative flex h-[60vh] lg:h-[85vh]">
            {/* Background image with absolute positioning */}
            <div className="absolute inset-0 z-0">
              <Image
                  alt="Leader background"
                  src="/background_six.webp"
                  className="h-full w-full object-cover object-right"
                  width={1080}
                  height={1080}
                  priority
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
            </div>

            {/* Content overlay with higher z-index */}
            <div className="relative z-10 flex w-full flex-col items-start justify-end p-8 sm:p-12 lg:p-16">
              <h2 className="text-lg font-medium text-gray-900 text-opacity-90 tracking-wide">
                Synced and all-in-one
              </h2>
              <p className="mt-2 text-3xl font-bold text-gray-900 max-w-md leading-tight">
                Tools to bring people together for Leaders
              </p>
              <button
                  className="mt-8 group"
                  onClick={() => {
                    track("leaders_claim_community_button", {
                      location: "product_hero",
                    });
                  }}
              >
                <Link
                    href="mailto:support@happenings.dk"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  Claim your community
                  <FontAwesomeIcon
                      icon={faArrowRight}
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
  );
}
