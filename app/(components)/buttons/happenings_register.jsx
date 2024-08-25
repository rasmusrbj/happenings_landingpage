import Link from "next/link";
export default function HappeningsRegister() {
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
          <p className="font-bold text-md text-white">Happenings</p>
        </div>
      </Link>
    </div>
  );
}
