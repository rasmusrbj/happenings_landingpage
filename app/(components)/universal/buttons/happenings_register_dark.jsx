import Link from "next/link";
export default function HappeningsRegisterDark({ business }) {
  return (
    <div className="flex lg:flex-1 justify-center">
      <Link
        href="https://get.happenings.dk"
        className="mb-2 -m-1.5 p-1.5 hover:opacity-60 transition-opacity ease-in-out duration-200"
      >
        <span className="sr-only">Happenings</span>
        <div className="flex flex-row gap-2 items-center">
          <img
            alt="Logo"
            src="https://happenings.dk/static/logo_color.svg"
            className="h-8 w-auto"
          />
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="font-bold text-md text-gray-900">Happenings</p>
            {business && <p className="text-xs font-normal text-gray-900">|</p>}
            {business && (
              <p className="text-xs font-normal text-gray-900">Business</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
