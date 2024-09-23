const incentives = [
  {
    name: "Guaranteed views every month",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Depending on the package you choose, we guarantee a certain number of impressions.",
  },
  {
    name: "Reach only verified students",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "We verify that the students who get discounts are real students with a valid student ID.",
  },
  {
    name: "Boosting the local economy",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "We help local businesses grow by integrating them with the daily lives of students in the area.",
  },
];

export default function IncentivesLocal() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Top Perks for Local Businesses
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div
                  key={incentive.name}
                  className="text-center sm:flex sm:text-left lg:block lg:text-center"
                >
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        alt=""
                        src={incentive.imageSrc}
                        className="mx-auto h-16 w-16"
                      />
                    </div>
                  </div>
                  <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-sm font-medium text-gray-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
