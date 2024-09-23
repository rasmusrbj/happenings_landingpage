"use client";

import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually (20% off)", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Hyperlocal",
    id: "tier-hyperlocal",
    href: {
      monthly: "mailto:support@happenings.dk",
      annually: "mailto:support@happenings.dk",
    },
    price: { monthly: "Individual", annually: "Individual" },
    description:
      "Visibility for all students in your city in the public list. Approved businesses only.",
    features: [
      "Visibility on the public list",
      "Listed in the specific category",
      "One fixed discount on all opening hours",
      "Admin panel with analytics",
      "Ideal for individual stores (e.g., barber, coffee shop, ice cream parlor, etc.)",
    ],
    mostPopular: false,
  },
  {
    name: "Local+",
    id: "tier-local-plus",
    href: {
      monthly: "https://buy.stripe.com/14k28J5BF7fC6mAfZ9",
      annually: "https://buy.stripe.com/4gwfZzd47czW26k6oy",
    },
    price: { monthly: "235 kr.", annually: "1.974 kr." },
    description:
      "Set different discounts at different times and enjoy a top spot on the list once a month.",
    features: [
      "Everything in Hyperlocal",
      "Inreased visibility on the public list",
      "Showcase products, services or menu",
      "Set different discounts at different hours",
      "Top spot in the niche for 1 week /month",
      "Perfect for chains and franchises",
    ],
    mostPopular: true,
  },
  {
    name: "All the way",
    id: "tier-all-the-way",
    href: {
      monthly: "https://buy.stripe.com/6oE6oZ5BF0RebGU6oA",
      annually: "https://buy.stripe.com/7sI7t32pt0Reh1ebIV",
    },
    price: { monthly: "789 kr.", annually: "7.575 kr." },
    description:
      "Maximum visibility and flexibility with multiple offers, special discounts, and sticky top ad.",
    features: [
      "Everything in Local+",
      "Multiple offers (e.g., 2-for-1, special discounts on specific days)",
      "Always listed as the top choice",
      "Ad always placed on the top in public list",
      "Dedicated account manager",
      "Feature as 'deal of the month' once a year (month of your choice)",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LocalPricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div id="#pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Fair pricing for every local business
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-700">
          Affordable plans that’s packed with the best features for engaging
          your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full bg-gray-100 p-1 text-center text-xs font-semibold leading-5 text-gray-900 shadow-md"
            >
              {frequencies.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-blue-500 data-[checked]:text-white"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-emerald-600"
                  : "ring-1 ring-blue-500",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-gray-900"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-700">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-500">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href[frequency.value]}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-emerald-500"
                    : "bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-500",
                  "mt-6 block rounded-3xl px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                {tier.name === "Hyperlocal" ? "Request" : "Enroll"}
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-700 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-gray-900"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
