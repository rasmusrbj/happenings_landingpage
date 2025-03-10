"use client";
import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const benefitsStudents = [
  {
    benefit: "Find things to do",
    key: 1,
  },
  {
    benefit: "See people at your school",
    key: 2,
  },
  {
    benefit: "Join interest based communities",
    key: 3,
  },
  {
    benefit: "Get deals and discounts",
    key: 4,
  },
];

const benefitsLeaders = [
  {
    benefit: "Consolidate multiple tools into one",
    key: 1,
  },
  {
    benefit: "Track payments and stay in sync",
    key: 2,
  },
  {
    benefit: "Reach students directly, noice free",
    key: 3,
  },
  {
    benefit: "Use state-of-the-art tools to manage A-Z",
    key: 3,
  },
];

export default function HomeSegments() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              What can you do with{" "}
              <span className="bg-gradient-to-r from-red-500 to-blue-500 inline-block text-transparent bg-clip-text">
                Happenings?
              </span>
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              It's just a unified space to have fun and enhance your life.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <Image
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  src="/background_four.webp"
                  className="h-80 w-full object-cover object-center"
                  height={80}
                  width={160}
                  priority
                />
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                For Students
              </h2>
              <ul
                role="list"
                className="mt-4 space-y-3 text-sm leading-6 text-gray-600"
              >
                {benefitsStudents.map((benefit) => (
                  <li key={benefit.key} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-gray-500"
                    />
                    {benefit.benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <Link
                  href="/features/students"
                  className="text-sm font-medium leading-6 text-blue-500 hover:underline underline-offset-2"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
            </div>
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <Image
                  alt="Background image 5"
                  src="/background_five.webp"
                  className="h-80 w-full object-cover object-center"
                  height={80}
                  width={160}
                  priority
                />
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                For Leaders
              </h2>
              <ul
                role="list"
                className="mt-4 space-y-3 text-sm leading-6 text-gray-600"
              >
                {benefitsLeaders.map((benefit) => (
                  <li key={benefit.key} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-gray-500"
                    />
                    {benefit.benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-2">
                <button
                  onClick={() => {
                    track("navigate_leaders_button", {
                      location: "home_segments",
                    });
                  }}
                >
                  <Link
                    href="/leaders"
                    className="text-sm font-medium leading-6 text-blue-500 hover:underline underline-offset-2"
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
