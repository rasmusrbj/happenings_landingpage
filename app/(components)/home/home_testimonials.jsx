import Link from "next/link";

import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    body: "Onboarding our 3.500 members was smooth; we even launched Happenings mid-year. In general, the team are just the most helpful and responsive, I've ever encountered.",
    author: {
      name: "Julie Meyer",
      handle: "Juridisk Diskussionsklub (JDKU)",
      role: "Leader",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Onboarding our 3.500 members was smooth; we even launched Happenings mid-year. In general, the team are just the most helpful and responsive, I've ever encountered.",
    author: {
      name: "Julie Meyer",
      handle: "Juridisk Diskussionsklub (JDKU)",
      role: "Student",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Onboarding our 3.500 members was smooth; we even launched Happenings mid-year. In general, the team are just the most helpful and responsive, I've ever encountered.",
    author: {
      name: "Julie Meyer",
      handle: "Juridisk Diskussionsklub (JDKU)",
      role: "Student",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Onboarding our 3.500 members was smooth; we even launched Happenings mid-year. In general, the team are just the most helpful and responsive, I've ever encountered.",
    author: {
      name: "Julie Meyer",
      handle: "Juridisk Diskussionsklub (JDKU)",
      role: "Student",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More testimonials...
];

export default function HomeTestimonials() {
  return (
    <div className="bg-gray-50 py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Create account, connect to school and{" "}
            <span className="bg-gradient-to-r from-red-500 to-blue-500 inline-block text-transparent bg-clip-text">
              join your community.
            </span>
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-8 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-100 p-8 text-sm leading-6 shadow-md outline outline-1 outline-gray-300 hover:transition-transform ease-out hover:transition-scale-110 duration-300">
                  <p className="sr-only">5 out of 5 stars</p>
                  <div className="flex gap-x-1 text-gray-900 mb-3">
                    <StarIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none"
                    />
                    <StarIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none"
                    />
                    <StarIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none"
                    />
                    <StarIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none"
                    />
                    <StarIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none"
                    />
                  </div>
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={testimonial.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="flex flex-row gap-1 items-center">
                        <div className="font-semibold text-gray-900">
                          {testimonial.author.name}
                        </div>
                        <p>·</p>
                        <div className="font-regular text-white text-xs bg-blue-500 rounded-3xl px-2 py-1">
                          {testimonial.author.role}
                        </div>
                      </div>
                      <Link
                        className="hover:underline underline-offset-2"
                        href="https://happenings.dk/page/jdku"
                      >
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </Link>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
