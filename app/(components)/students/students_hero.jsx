import HappeningsRegister from "../buttons/happenings_register";
import NavHeader from "../navigation/header/nav_bar";

export default function StudentsHero() {
  return (
    <div className="bg-gray-50">
      <NavHeader />
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src="https://media.istockphoto.com/id/2087707686/es/foto/grupo-de-amigas-asi%C3%A1ticas-jugando-juntas-en-la-playa.jpg?s=2048x2048&w=is&k=20&c=WhS-8Xqh_u7vWs4q1mADsGjwtmtQlqsfkVnE1vQ9Jv4="
            className="h-full w-full object-cover object-center"
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
          <a
            href="#"
            className="mt-8 inline-block rounded-3xl border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-500"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
