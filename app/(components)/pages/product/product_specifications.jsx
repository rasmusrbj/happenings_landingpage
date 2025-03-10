import Image from "next/image";

const features = [
  {
    name: "Blockchain",
    description: "Ensuring no-one can steal your identity.",
  },
  {
    name: "Artificial Intelligence",
    description: "Helping you find the right communities.",
  },
  {
    name: "Cross-platform",
    description: "Built to be universally accessible.",
  },
  {
    name: "Etichal data storage",
    description: "Stored securely and privately in the EU.",
  },
  {
    name: "Excellent customer service",
    description: "There to help you whenever you need it.",
  },
  {
    name: "Easy to use",
    description: "Easy to say, but doesn't equal false.",
  },
];

export default function ProductSpecifications() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            Our approach to product craftsmanship is that it must be designed
            with a purpose to help people.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="/background.webp"
            className="rounded-lg bg-gray-100"
            fill
          />
          <Image
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="/background_two.webp"
            className="rounded-lg bg-gray-100"
            fill
          />
          <Image
            alt="Side of walnut card tray with card groove and recessed card area."
            src="/background_three.webp"
            className="rounded-lg"
            fill
          />
          <Image
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="/background_four.webp"
            className="rounded-lg bg-gray-100"
            fill
          />
        </div>
      </div>
    </div>
  );
}
