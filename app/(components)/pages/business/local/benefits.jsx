/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: "More units sold",
    description:
      "Yes, at first you might have a lower margin, but over time selling more will lead to lower variable cost, and therefore increased margins overall.",
    imageSrc:
      "https://media.istockphoto.com/id/2160750173/photo/businessman-draws-increase-arrow-graph-corporate-future-growth-year-2025-planning-opportunity.jpg?s=2048x2048&w=is&k=20&c=_XnBamw4R2GDEPuRTezY7azE-4tOgLgMnzlE9_AjD-U=",
    imageAlt: "Money",
  },
  {
    name: "Increased brand loyalty",
    description:
      "The students already use Happenings to find deals, stay up-to-date and keep in touch with their friends and personal communities.",
    imageSrc:
      "https://media.istockphoto.com/id/1505663075/photo/staying-connected.jpg?s=2048x2048&w=is&k=20&c=vhakFjsShDalXOLSGYBwsOdc_33TECmx1OysNMdvb7M=",
    imageAlt: "Students.",
  },
  {
    name: "Micro-influencers",
    description:
      "This young generation are born with phones, so having them in your shop, where they have a good time, will lead to increased publicity by them sharing photos, videos, etc. on their social media.",
    imageSrc:
      "https://media.istockphoto.com/id/1452385093/photo/close-up-video-of-female-tourist-enjoying-japanese-style-pub-izakaya-and-taking-photos-and.jpg?s=2048x2048&w=is&k=20&c=OLXVpIUsNnUs0YjvQinLB77SVQ90VzL1Mz27iOIkV3g=",
    imageAlt: "Influencers.",
  },
];

export default function BenefitsLocal() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-gray-500">The students are</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Too important to leave behind
            </p>
            <p className="mt-4 text-gray-500">
              That is why we have created a marketplace for students to find
              deals from local businesses <br />
              and help businesses get maximum exposure.
            </p>
          </div>

          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      alt={feature.imageAlt}
                      src={feature.imageSrc}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
