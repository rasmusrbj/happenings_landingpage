import Link from "next/link";
import NavHeader from "../../universal/navigation/header/nav_bar";
import HappeningsRegister from "../../universal/buttons/happenings_register";

export default function AboutHero() {
  return (
    <div className="bg-gray-50">
      <NavHeader />
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src="https://media.istockphoto.com/id/1400764779/es/foto/apuesto-manitas-con-capa-roja-y-m%C3%A1scara-como-un-superh%C3%A9roe-posando-con-taladro-en-una-mano.jpg?s=2048x2048&w=is&k=20&c=WlJWKr9E_p_RvzGia6ggxCa6lg9bFofiUnfJ1WU3RPk="
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-20"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <HappeningsRegister />
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl shadow-sm">
            The digital screwdriver <br />
            connecting people in reality.
          </h1>
          <p className="mt-4 text-md text-white">
            Technology is a tool, not a replacement for real life.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-3xl bg-blue-600 hover:bg-blue-500 px-3.5 py-2.5 text-sm font-medium text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
