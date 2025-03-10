import Link from "next/link";
import Image from "next/image";
import {Button} from "@/app/(components)/universal/buttons/Button";
import Footer from "@/app/(components)/universal/navigation/footer/footer";
import {Inter} from "next/font/google";

export const metadata = {
    title: 'Event | Happenings',
    description: 'View event details and get tickets',
};

const inter = Inter({ subsets: ['latin'] });

export default function EventLayout({ children }) {
    return (
        <div className={`${inter.className} min-h-screen bg-gray-50`}>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="hover:opacity-70 transition-opacity duration-300 ease-in-out">
                        <div className="flex flex-row items-center justify-between gap-2">
                            <Image
                                src={'/logo.svg'}
                                alt="Logo"
                                width={16}
                                height={16}
                                priority
                            />
                            <h1 className="text-md font-bold">Happenings</h1>
                        </div>
                    </Link>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Button className="rounded-3xl">
                                    <Link href="/claim">
                                        Try in your club
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
