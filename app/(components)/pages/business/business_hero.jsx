import { ChevronRightIcon } from "@heroicons/react/20/solid";
import NavHeader from "../navigation/header/nav_bar";
import Link from "next/link";

export default function BusinessHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50">
      <NavHeader />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
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
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Like a poster, <br />
            unlike any poster.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sell your products and services directly to students.
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
              <img
                alt="App screenshot"
                src="https://media.istockphoto.com/id/2159416405/es/foto/retrato-mujer-y-caf%C3%A9-como-camarera-en-un-peque%C3%B1o-negocio-con-felicidad-en-un-restaurante-o.jpg?s=2048x2048&w=is&k=20&c=V6jbA9NfLvJsDAFLLIfqFPNfZriWWKtewYSPOYDicok="
                width={2432}
                height={1442}
                className="w-[76rem] h-1/2 rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
