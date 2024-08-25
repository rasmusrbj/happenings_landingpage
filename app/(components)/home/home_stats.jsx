const stats = [
  { id: 1, name: "Hosted happenings", value: "52k+" },
  { id: 2, name: "For students & leaders", value: "Free" },
  { id: 3, name: "Countries", value: "4" },
  { id: 4, name: "Student space", value: "#1" },
];

export default function HomeStats() {
  return (
    <div className="bg-gray-50 py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What's happening
              <br className="sm:hidden" /> at your{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-purple-500 inline-block text-transparent bg-clip-text">
                fingertips
              </span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Live your best student life,{" "}
              <span className="font-semibold">effortlessly.</span>
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-100 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
