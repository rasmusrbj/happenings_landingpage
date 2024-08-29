import Link from "next/link";
import NavHeader from "../../universal/navigation/header/nav_bar";
import HappeningsRegister from "../../universal/buttons/happenings_register";

const collections = [
  {
    name: "Real Estate",
    title: "Apartments and Rooms",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/915914778/es/foto/mujer-joven-en-movimiento-a-un-nuevo-apartamento-escribiendo-un-mensaje-mientras-sentado-sobre.jpg?s=2048x2048&w=is&k=20&c=O2m_KWkm2wCJph04XPNHHaznXU2uMAA3i7yekADusro=",
    imageAlt: "Woman wearing an off-white cotton t-shirt.",
  },
  {
    name: "Local Business",
    title: "Restaurants, Salons, and Stores",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/816833592/es/foto/j%C3%B3venes-amigos-tener-un-buen-rato-en-la-cafeter%C3%ADa.jpg?s=2048x2048&w=is&k=20&c=lxzeq7MAQiAS3qjMOUTR8ixp1WV6y9EBocaNoalwH8U=",
    imageAlt: "Man wearing a charcoal gray cotton t-shirt.",
  },
  {
    name: "Online Sellers",
    title: "Apps, Webshops and Agencies",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/1447845897/es/foto/la-mujer-asi%C3%A1tica-y-el-hombre-vendedor-en-l%C3%ADnea-preparan-la-caja-de-paquetes-y-verifican-los.jpg?s=2048x2048&w=is&k=20&c=g_aDdkD80Gah-01z0FDJQjrQbHyRjf_ed-neBVu2ngY=",
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
          <HappeningsRegister business={true} />
          <h1 className="text-4xl font-bold tracking-tight text-white shadow-sm sm:text-5xl md:text-6xl">
            Like a poster, <br />
            unlike any poster.
          </h1>
          <p className="mt-4 text-md text-gray-200">
            Promote products and services directly to students.
          </p>
          <div className="mt-4 sm:mt-6">
            <Link
              href={`mailto:alexander@happenings.dk?subject=Application%20Business%20{insert business name here}&body=Hello%20Happenings,%0D%0A%0D%0AI%20am%20interested%20in%20applying%20for%20the%20Business%20{insert business name here}.%0D%0A%0D%0APlease%20provide%20what%20you%20are%20interested%20in%20promoting%20and%20one%20to%20three%20examples%20of%20content%20on%20your%20socials%20today.%0D%0A%0D%0AThank%20you.%0D%0A%0D%0ABest%20regards,%0D%0A{your name here}`}
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
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75 transition-transform ease-in-out">
                    <img
                      alt={collection.imageAlt}
                      src={collection.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
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
