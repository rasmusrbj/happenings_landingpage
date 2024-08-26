import Link from "next/link";

export default function LeadersPromo() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute hidden h-full w-1/2 bg-gray-50 lg:block"
          />
          <div className="relative bg-gray-50 lg:bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div className="lg:pr-16">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">
                    Focus on what matters
                  </h1>
                  <p className="mt-4 text-xl text-gray-700">
                    Build your community with Happenings — whether it’s a study
                    group, a social club, or an activist circle.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-block rounded-3xl border border-transparent bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-500"
                    >
                      Claim your community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2 ">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1498170916/es/foto/una-pareja-est%C3%A1-llevando-una-bolsa-de-comida-en-el-banco-de-alimentos-y-ropa.jpg?s=2048x2048&w=is&k=20&c=mFG1yQyjrJtRmRdaKYkH4iipi-3g60Hh8751O1M-j2o="
              className="h-full w-full object-cover object-center lg:rounded-tl-lg lg:rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
