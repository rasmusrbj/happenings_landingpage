"use client";

import HappeningsRegister from "../../universal/buttons/happenings_register";
import NavHeader from "../../universal/navigation/header/nav_bar";
import { track } from "@vercel/analytics";

import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="bg-gray-900">
      <NavHeader />
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="/images/home/home_hero_image.webp"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-95"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <HappeningsRegister />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl shadow-sm">
              Unlock and elevate <br />
              your student life.
            </h1>
            <p className="mt-6 text-lg sm:text-md leading-8 text-gray-50 shadow-sm">
              Connect with people at your school and know what's happening.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/students"
                className="rounded-3xl text-white px-6 py-3 text-sm font-semibold bg-blue-600 hover:transition-colors hover:bg-blue-500 duration-200 ease-in-out"
              >
                <button
                  onClick={() => {
                    track("navigate_students_button", {
                      location: "home_hero",
                    });
                  }}
                >
                  Students
                </button>
              </Link>
              <Link
                href="/leaders"
                className="rounded-3xl text-sm font-semibold border border-white text-white px-6 py-3 hover:transition-colors hover:bg-gray-50 hover:text-gray-900 duration-200 ease-in-out"
              >
                <button
                  onClick={() => {
                    track("navigate_leaders_button", { location: "home_hero" });
                  }}
                >
                  Leaders
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ></div>
      </div>
    </div>
  );
}
