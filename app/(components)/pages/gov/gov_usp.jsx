/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: "A virtual showroom",
    description:
      "Products, services, and more are all available for students to browse.",
  },
  {
    name: "Discounts and deals",
    description:
      "Students can get exclusive discounts and deals, leading to more local sales.",
  },
  {
    name: "Verified students",
    description:
      "Ensuring businesses that people who get discounts are real students.",
  },
  {
    name: "Digital presence",
    description:
      "Reviews, bookings, menus, websites and more all out of the box.",
  },
];

export default function GovUSP() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-500">Machined Kettle</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The students are the future.
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-medium text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
