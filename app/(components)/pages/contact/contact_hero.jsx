import Link from "next/link";
import NavHeader from "../../universal/navigation/header/nav_bar";

export default function ContactHero() {
  return (
    <div className="bg-gradient-to-b from-gray-300 to-gray-50 py-24 sm:py-32">
      <NavHeader />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Talk to us
              </h2>
              <p className="mt-4 leading-7 text-gray-700">
                If your question isn't answered in our{" "}
                <Link
                  href="/#faq"
                  className="font-semibold text-blue-500 hover:underline underline-offset-2"
                >
                  FAQ
                </Link>{" "}
                or you need help, please don't be a stranger.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Help & Support
                </h3>
                <dl className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        href="mailto:help@happenings.social"
                        className="font-regular text-blue-500 hover:underline underline-offset-2"
                      >
                        help@happenings.social
                      </Link>
                    </dd>
                  </div>
                  <div className="mt-2">
                    <dt className="sr-only">Phone number</dt>
                    <Link
                      href="tel:+4531450914"
                      className="hover:underline underline-offset-2 text-xs"
                    >
                      <dd>+45 31 45 09 14</dd>
                    </Link>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Public Relations
                </h3>
                <dl className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        href="mailto:press@happenings.social"
                        className="font-regular text-blue-500 hover:underline underline-offset-2"
                      >
                        press@happenings.social
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Investors & Funds
                </h3>
                <dl className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        href="mailto:invest@happenings.social"
                        className="font-regular text-blue-500 hover:underline underline-offset-2"
                      >
                        invest@happenings.social
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Schools & Institutions
                </h3>
                <dl className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        href="mailto:school@happenings.social"
                        className="font-regular text-blue-500 hover:underline underline-offset-2"
                      >
                        school@happenings.social
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Business & Partnerships
                </h3>
                <dl className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        href="mailto:business@happenings.social"
                        className="font-regular text-blue-500 hover:underline underline-offset-2"
                      >
                        business@happenings.social
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Say Hello
                </h3>
                <dl className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        href="mailto:hello@happenings.social"
                        className="font-regular text-blue-500 hover:underline underline-offset-2"
                      >
                        hello@happenings.social
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Meet & Greet
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                A global team with a local presence. Come say hi.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Palo Alto
                </h3>
                <address className="mt-2 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p className="font-medium">United States</p>
                  <p className="text-xs font-normal">Remote office</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Aarhus
                </h3>
                <address className="mt-2 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p className="font-medium">Denmark</p>
                  <p className="text-xs font-normal">
                    Klostergade 56B, St., 8000 Aarhus C
                  </p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Amsterdam
                </h3>
                <address className="mt-2 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p className="font-medium">The Netherlands</p>
                  <p className="text-xs font-normal">Remote office</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Granada
                </h3>
                <address className="mt-2 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p className="font-medium">Spain</p>
                  <p className="text-xs font-normal">Remote office</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
