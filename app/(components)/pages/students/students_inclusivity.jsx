import Image from "next/image";
import Link from "next/link";

export default function StudentInclusivity() {
  return (
    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          alt=""
          src="/background.wepb"
          className="h-full w-full object-cover object-center opacity-85"
          fill
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-20"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          A safe space for students
        </h2>
        <p className="mt-3 text-xl text-white">
          Regardless of background, interests, or social circles, there is a
          place for you.
        </p>
        <Link
          href="#"
          className="mt-8 block w-full max-w-36 rounded-3xl border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
        >
          Objectives
        </Link>
      </div>
    </div>
  );
}
