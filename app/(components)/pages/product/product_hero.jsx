"use client";
import { track } from "@vercel/analytics";
import Link from "next/link";
import NavHeader from "../../universal/navigation/header/nav_bar";
export default function ProductHero() {
  return (
    <>
      <NavHeader />
      <div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative flex">
          <img
            alt=""
            src="/images/Happenings_Neutral_noBG.png"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
            <h2 className="text-md font-medium text-white text-opacity-75">
              Life at your fingertips
            </h2>
            <p className="mt-1 text-2xl font-semibold text-white">
              Benefits for Students to enjoy life
            </p>
            <button
              onClick={() => {
                track("clicked_shop_now_button");
              }}
            >
              <Link
                href="#"
                className="mt-4 rounded-3xl bg-transparant border border-gray-50 hover:bg-gray-100 px-4 py-2.5 text-sm font-medium text-white hover:text-gray-900 active:text-gray-900 active:bg-whtite transition-colors duration-300 ease-in-out "
              >
                Register
              </Link>
            </button>
          </div>
        </div>
        <div className="relative flex">
          <img
            alt=""
            src="/images/app_leaders.webp   "
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
            <h2 className="text-md font-medium text-white text-opacity-75">
              Synced and all-in-one
            </h2>
            <p className="mt-1 text-2xl font-semibold text-white">
              Tools to bring people together for Leaders
            </p>
            <a
              href="#"
              className="mt-4 rounded-3xl bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
