import Link from "next/link";
import NavHeader from "../../universal/navigation/header/nav_bar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Building } from "lucide-react";
import Image from "next/image";

export default function ContactHero() {
  return (
      <div className="relative overflow-hidden">
        {/* Background pattern */}
       <Image
           src="/background.webp"
           alt={"background image"}
           fill
           priority
       />

        <div className="relative py-24 sm:py-32">
          <NavHeader />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div className="space-y-5">
                <span className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-medium text-white">
                  Connect
                </span>
                  <h2 className="text-4xl font-bold tracking-tight text-white">
                    Don't be a stranger
                  </h2>
                  <p className="mt-4 leading-7 text-gray-50">
                    If your question isn't answered in our{" "}
                    <Link
                        href="/#faq"
                        className="font-semibold text-blue-200 hover:text-blue-300 underline underline-offset-4"
                    >
                      FAQ
                    </Link>{" "}
                    or you need help, please just reach out to us.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <ContactCard
                      title="Help & Support"
                      email="help@happenings.social"
                      phone="+45 31 45 09 14"
                      icon={<Mail className="h-5 w-5 text-blue-500" />}
                  />
                  <ContactCard
                      title="Public Relations"
                      email="press@happenings.social"
                      icon={<Mail className="h-5 w-5 text-blue-500" />}
                  />
                  <ContactCard
                      title="Investors & Funds"
                      email="invest@happenings.social"
                      icon={<Mail className="h-5 w-5 text-blue-500" />}
                  />
                  <ContactCard
                      title="Schools & Institutions"
                      email="school@happenings.social"
                      icon={<Mail className="h-5 w-5 text-blue-500" />}
                  />
                  <ContactCard
                      title="Business & Partnerships"
                      email="business@happenings.social"
                      icon={<Mail className="h-5 w-5 text-blue-500" />}
                  />
                  <ContactCard
                      title="Say Hello"
                      email="hello@happenings.social"
                      icon={<Mail className="h-5 w-5 text-blue-500" />}
                  />
                </div>
              </div>

              <Separator className="my-8 opacity-30" />

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                <div className="space-y-5">
                <span className="inline-block rounded-lg bg-green-500 px-3 py-1 text-sm font-medium text-white">
                  Locations
                </span>
                  <h2 className="text-4xl font-bold tracking-tight text-white">
                    Drop by to say hi
                  </h2>
                  <p className="mt-4 leading-7 text-white">
                    We are a global team with a local presence. And you are welcome to come say hi.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <LocationCard
                      city="Palo Alto"
                      country="United States"
                      address="Remote office"
                      icon={<MapPin className="h-5 w-5 text-green-500" />}
                  />
                  <LocationCard
                      city="Aarhus"
                      country="Denmark"
                      address="Klostergade 56B, St., 8000 Aarhus C"
                      icon={<Building className="h-5 w-5 text-green-500" />}
                      hasPhysicalAddress={true}
                  />
                  <LocationCard
                      city="Amsterdam"
                      country="The Netherlands"
                      address="Remote office"
                      icon={<MapPin className="h-5 w-5 text-green-500" />}
                  />
                  <LocationCard
                      city="Granada"
                      country="Spain"
                      address="Remote office"
                      icon={<MapPin className="h-5 w-5 text-green-500" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

// Contact Card Component
function ContactCard({ title, email, phone, icon }) {
  return (
      <Card className="rounded-2xl border border-gray-200 bg-white backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="p-6 pb-2 flex flex-row items-center space-x-2">
          {icon && <div className="mt-1">{icon}</div>}
          <CardTitle className="text-base font-semibold leading-7 text-gray-900">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <div className="space-y-1 text-sm leading-6 text-gray-600">
            {email && (
                <div>
                  <span className="sr-only">Email</span>
                  <Link
                      href={`mailto:${email}`}
                      className="font-regular text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {email}
                  </Link>
                </div>
            )}
            {phone && (
                <div className="mt-2">
                  <span className="sr-only">Phone number</span>
                  <Link
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-xs hover:text-gray-900 hover:underline underline-offset-4 transition-colors duration-200 flex items-center"
                  >
                    <Phone className="h-3 w-3 mr-2 text-gray-500" />
                    {phone}
                  </Link>
                </div>
            )}
          </div>
        </CardContent>
      </Card>
  );
}

// Location Card Component
function LocationCard({ city, country, address, icon, hasPhysicalAddress }) {
  return (
      <Card className={`rounded-2xl border border-gray-200 bg-white backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300 ${hasPhysicalAddress ? 'ring-1 ring-green-500/10' : ''}`}>
        <CardHeader className="p-6 pb-2 flex flex-row items-center space-x-2">
          {icon && <div className="mt-1">{icon}</div>}
          <CardTitle className="text-base font-semibold leading-7 text-gray-900">
            {city}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <address className="space-y-1 text-sm not-italic leading-6 text-gray-600">
            <p className="font-medium">{country}</p>
            <p className={`text-xs ${hasPhysicalAddress ? 'font-normal text-green-700' : 'font-normal text-gray-500'}`}>
              {address}
            </p>
          </address>
        </CardContent>
      </Card>
  );
}
