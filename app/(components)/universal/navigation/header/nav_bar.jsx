"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import RegisterNavBlue from "../../buttons/register_nav_blue";
import LoginaNavWhite from "../../buttons/login_nav_white";
import { track } from "@vercel/analytics";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "/product" },
  { name: "About", href: "/about" },
  { name: "Business", href: "/business" },
  { name: "Mission", href: "/mission" },
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
              <Image
                  src="logo.svg"
                  alt={"logo"}
                  height={16}
                  width={16}
                  priority
              />
              <p className="font-bold text-sm text-white hover:underline underline-offset-2">
                Happenings
              </p>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <div className="flex flex-row gap-2">
            <LoginaNavWhite
              text="Login"
              href="https://get.happenings.dk"
              button_name={"login_button"}
              location={"mobile_nav_header"}
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-3xl px-3 py-2 text-xs font-semibold text-white hover:bg-gray-100 active:bg-white border border-gray-100 hover:text-gray-900 transition-colors duration-300 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              More
            </button>
          </div>
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
            <RegisterNavBlue
              text="Register"
              href="https://get.happenings.dk"
              button_name={"register_button"}
              location={"nav_bar"}
            />
            <LoginaNavWhite
              text="Login"
              href="https://get.happenings.dk"
              button_name={"login_button"}
              location={"nav_header"}
            />
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
                  src="/logo.svg"
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
              <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
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
              <div className="py-6 flex flex-row gap-2">
                <RegisterNavBlue
                  text={"Register"}
                  href={"https://get.happenings.dk"}
                  button_name={"register_button"}
                  location={"mobile_nav_menu"}
                />
                <LoginaNavWhite
                  text={"Login"}
                  href={"https://get.happenings.dk"}
                  button_name={"login_button"}
                  location={"mobile_nav_menu"}
                />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
