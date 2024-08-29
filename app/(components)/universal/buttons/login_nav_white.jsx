import Link from "next/link";

export default function LoginaNavWhite({ text, href }) {
  return (
    <Link
      href={href}
      className="rounded-3xl bg-gray-100 hover:bg-gray-50 active:bg-white transition-colors duration-300 ease-in-out text-sm font-semibold leading-6 text-gray-900 px-3 py-2"
    >
      {text}
    </Link>
  );
}
