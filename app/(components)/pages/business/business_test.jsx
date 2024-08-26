import Link from "next/link";
import NavHeader from "../navigation/header/nav_bar";
import HappeningsRegister from "../buttons/happenings_register";

const collections = [
  {
    name: "Real Estate",
    title: "Apartments and Rooms",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/1341820907/es/foto/tres-j%C3%B3venes-amigos-despreocupados-dos-mujeres-y-un-hombre-sentados-en-el-apartamento-en-el.jpg?s=2048x2048&w=is&k=20&c=RgAlvNG2g0T9jtnAb99Wk1lKU8VzhP_90ti09sR6Sz0=",
    imageAlt: "Woman wearing an off-white cotton t-shirt.",
  },
  {
    name: "Local Business",
    title: "Restaurants, Salons, and Stores",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/2159416405/es/foto/retrato-mujer-y-caf%C3%A9-como-camarera-en-un-peque%C3%B1o-negocio-con-felicidad-en-un-restaurante-o.jpg?s=2048x2048&w=is&k=20&c=V6jbA9NfLvJsDAFLLIfqFPNfZriWWKtewYSPOYDicok=",
    imageAlt: "Man wearing a charcoal gray cotton t-shirt.",
  },
  {
    name: "Online Sellers",
    title: "Apps, Webshops and Agencies",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];

export default function BusinessTest() {
  return (
    <div className="relative bg-gray-50">
      <NavHeader />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:flex sm:flex-col"
      >
        <div className="relative w-full flex-1 bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1398831307/es/vector/paisaje-de-monta%C3%B1a-con-amanecer-puesta-del-sol-terreno-monta%C3%B1oso.jpg?s=2048x2048&w=is&k=20&c=9hihIstZK7mU_2w6kbsc0XTA9cxG9YAOAbFWK68mWOI="
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-10" />
        </div>
        <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col sm:hidden"
        >
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                src="https://media.istockphoto.com/id/1398831307/es/vector/paisaje-de-monta%C3%B1a-con-amanecer-puesta-del-sol-terreno-monta%C3%B1oso.jpg?s=2048x2048&w=is&k=20&c=9hihIstZK7mU_2w6kbsc0XTA9cxG9YAOAbFWK68mWOI="
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-20" />
          </div>
          <div className="h-48 w-full bg-white" />
        </div>
        <div className="relative py-60">
          <HappeningsRegister />
          <h1 className="text-4xl font-bold tracking-tight text-white shadow-sm sm:text-5xl md:text-6xl">
            Like a poster, <br />
            unlike any poster.
          </h1>
          <p className="mt-4 text-md text-gray-200">
            Promote products and services directly to students.
          </p>
          <div className="mt-4 sm:mt-6">
            <Link
              href="#"
              className="text-sm inline-block rounded-3xl border border-transparent bg-blue-600 px-3.5 py-2.5 font-medium text-white hover:bg-blue-500"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="collection-heading"
        className="relative -mt-96 sm:-mt-40"
      >
        <h2 id="collection-heading" className="sr-only">
          Collections
        </h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      alt={collection.imageAlt}
                      src={collection.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-end rounded-lg p-6">
                  <div>
                    <p aria-hidden="true" className="text-sm text-white">
                      {collection.title}
                    </p>
                    <h3 className="mt-1 font-semibold text-white">
                      <a href={collection.href}>
                        <span className="absolute inset-0" />
                        {collection.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
