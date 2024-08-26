"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const navigation = [
  { name: "Product", href: "/#product" },
  { name: "About", href: "/about" },
  { name: "Business", href: "/business" },
  { name: "Mission", href: "/students#benefits" },
];

export default function NavHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gray-50 bg-opacity-10">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 hover:opacity-60 transition-opacity ease-in-out duration-200"
          >
            <span className="sr-only">Happenings</span>
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold text-sm text-white hover:underline underline-offset-2">
                Home
              </p>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:underline underline-offset-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex flex-row gap-2">
            <Link
              href="#"
              className="rounded-3xl bg-blue-600 hover:bg-blue-500 transition-colors duration-300 ease-in-out text-sm font-semibold leading-6 text-white px-3 py-2"
            >
              Register
            </Link>
            <Link
              href="#"
              className="rounded-3xl bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out text-sm font-semibold leading-6 text-gray-900 px-3 py-2"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5 hover:opacity-60 transition-opacity ease-in-out duration-200"
            >
              <span className="sr-only">Happenings</span>
              <div className="flex flex-row gap-2 items-center">
                <img
                  alt=""
                  src="https://happenings.dk/static/logo_color.svg"
                  className="h-6 w-auto"
                />
                <p className="font-bold text-sm text-white">Happenings</p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
