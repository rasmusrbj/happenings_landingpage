import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import NavHeader from "../../universal/navigation/header/nav_bar";

export default function GovHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50">
      <div className="">
        <NavHeader />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600 hover:bg-blue-500/10 hover:ring-black">
                Case Study
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 hover:underline underline-offset-2">
                <span>Read</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Make commerce thrive in your city.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Help local businesses integrate in the digital economy.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="#"
              className="rounded-3xl bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Learn more
            </Link>
            <Link
              href="#"
              className="text-sm px-3.5 py-2.5 rounded-3xl border border-blue-600 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Enroll
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                alt="Background"
                src="/background_two.webp"
                width={2432}
                height={1442}
                className="w-[76rem] h-1/2 rounded-md shadow-2xl ring-1 ring-gray-900/10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
