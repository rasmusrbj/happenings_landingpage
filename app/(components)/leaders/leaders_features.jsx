import Link from "next/link";
import NavHeader from "../navigation/header/nav_bar";

const features = [
  {
    name: "Safety",
    description: "Students can only join with a valid student email.",
  },
  {
    name: "Audiences",
    description: "Reach students from specific years, studies, levels, etc.",
  },
  {
    name: "Memberships",
    description: "Decide how people can join, payment dues, etc.",
  },
  {
    name: "Engagement",
    description: "Create albums, polls, posts... to activate your members.",
  },
  {
    name: "Events",
    description: "Or just, happenings? Create, share, and congregate.",
  },
  {
    name: "Tickets",
    description: "Sell tickets, or just keep track of who's coming. No fees.",
  },
];

export default function LeadersFeatures() {
  return (
    <div className="bg-gray-50">
      <NavHeader />
      <div aria-hidden="true" className="relative">
        <img
          alt=""
          src="https://media.istockphoto.com/id/2149007254/es/foto/charming-women-in-straw-hat.jpg?s=2048x2048&w=is&k=20&c=uXT7CwJm10K1nOqqs6N-ruDy4RPBh-NUWc6C3uh0Ezs="
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Centralize your student community
          </h2>
          <p className="mt-4 text-gray-500">
            Happenings aims to provide multiple platforms consolidated into one,
            cohesive tool, always in sync and forever free.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-3xl bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Claim your community
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
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
    </div>
  );
}
