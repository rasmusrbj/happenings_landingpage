import {
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  VideoCameraIcon,
  PhoneIcon,
  WrenchIcon,
  DocumentCheckIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HomeResources() {
  return (
    <div className="isolate bg-gray-50 py-16 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Resources
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Everything you need to get the most out of Happenings.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200">
            <VideoCameraIcon
              aria-hidden="true"
              className="h-6 w-6 text-gray-600"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Crash Course
            </h3>
            <p className="mt-2 leading-7 text-gray-600">
              60 seconds, straight to the point.
            </p>
            <p className="mt-4">
              <Link
                href="/demo"
                className="text-sm font-medium leading-6 text-blue-500 hover:underline underline-offset-2"
              >
                Watch film <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200">
            <PaperClipIcon
              aria-hidden="true"
              className="h-6 w-6 text-gray-600"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              User Manual
            </h3>
            <p className="mt-2 leading-7 text-gray-600">Get a head start.</p>
            <p className="mt-4">
              <Link
                href="/contact"
                className="text-sm font-medium leading-6 text-blue-500 hover:underline underline-offset-2"
              >
                Download PDF <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200">
            <WrenchIcon aria-hidden="true" className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Contact Support
            </h3>
            <p className="mt-2 leading-7 text-gray-600">Get help, fast.</p>
            <p className="mt-4">
              <Link
                href="/contact"
                className="text-sm font-medium leading-6 text-blue-500 hover:underline underline-offset-2"
              >
                Talk to a person <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
