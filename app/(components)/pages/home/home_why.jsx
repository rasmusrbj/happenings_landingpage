"use client";
import {
  UserPlusIcon,
  LockClosedIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { track } from "@vercel/analytics/react";

import Link from "next/link";

const features = [
  {
    name: "Connect with (new) friends.",
    description:
      "No matter who you are or what you're into, there's a circle waiting for you.",
    icon: UserPlusIcon,
  },
  {
    name: "Your safety is our priority.",
    description:
      "Profiles are real people, your data is safe, and your privacy is protected.",
    icon: LockClosedIcon,
  },
  {
    name: "Live life to the fullest.",
    description:
      "Join the most exciting happenings on campus or create your own. ",
    icon: StarIcon,
  },
];

export default function HomeWhy() {
  return (
    <div className="bg-gray-50 lg:pt-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-16 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your entire student life
                <br />
                centralized in one place.
              </h2>
              <p className="mt-4 text-md leading-8 text-gray-600">
                The go-to place, whether you are a student or a leader.
              </p>
              <div className="mt-4 flex flex-row gap-4">
                <button
                  onClick={() => {
                    track("navigate_benefits_button", { location: "home_why" });
                  }}
                >
                  <Link
                    href="/benefits"
                    className="rounded-3xl bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-300 ease-in-out "
                  >
                    Benefits
                  </Link>
                </button>
                <button
                  onClick={() => {
                    track("navigate_get_button", { location: "home_why" });
                  }}
                >
                  <Link
                    href="https://get.happenings.dk"
                    className="rounded-3xl px-3.5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-600 border border-blue-600 hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    Get
                  </Link>
                </button>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src="/images/benefits.webp"
              width={2432}
              height={1442}
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
            />
            <div className="max-w-xl lg:row-start-3 lg:mt-8 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-4">
              <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="ml-8 inline-block font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-gray-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-sky-100 to-sky-200 opacity-25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
