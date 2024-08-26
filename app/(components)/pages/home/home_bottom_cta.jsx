export default function HomeBottomCTA() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-blue-500">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
            Life is a gift 🎁
            <br />
            You just have to unpack it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-md md:text-lg lg:text-lg leading-8 text-gray-100">
            Happenings is your best friend, who will bring you the scissors.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
