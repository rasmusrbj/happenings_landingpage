import HappeningsRegister from "../../universal/buttons/happenings_register";
import NavHeader from "../../universal/navigation/header/nav_bar";
import Link from "next/link";
import Image from "next/image";

export default function StudentsHero() {
  return (
    <div className="bg-gray-50">
      <NavHeader />
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            alt=""
            src="/background.webp"
            className="h-full w-full object-cover object-center"
            fill
            priority
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-20"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <HappeningsRegister />
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl shadow-sm">
            Like a best friend, <br />
            unlike any best friend.
          </h1>
          <p className="mt-4 text-xl text-white">
            Helping you stay connected with your friends and school community.
          </p>
          <Link
            href="#"
            className="mt-8 inline-block rounded-3xl border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
