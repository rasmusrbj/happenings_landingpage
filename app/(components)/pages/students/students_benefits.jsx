import Image from "next/image";

const features = [
  {
    name: "Back to basics",
    description: "Our cause is that social tools should be resulting in meaningful, real life interactions. We do not believe the purpose of technology is to replace reality.",
    imageSrc: "/background.wepb",
    imageAlt: "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Do more together",
    description: "We say ‘circles’ because we invite clubs, greek life, associations, dorms and everything in between to use technology as a means to foster genuine connections.",
    imageSrc: "/background_two.wepb",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StudentsBenefits() {
  return (
    <div id="benefits" className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay in the loop about{" "}
            <span className="bg-gradient-to-r from-red-500 to-blue-500 inline-block text-transparent bg-clip-text">
              what's happening
            </span>
          </h2>
          <p className="mt-4 text-gray-500">
            Designed to create rendezvous and give you a sense of belonging.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="object-cover object-center max-h-96  w-full"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
