// app/page/[id]/layout.js
import { GeistSans } from "geist/font/sans";
import '@/app/globals.css';
import { generateMetadata } from './metadata';
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '/app/(components)/universal/buttons/Button'
import Footer from "@/app/(components)/universal/navigation/footer/footer";

// Export the generateMetadata function to be used by Next.js
export { generateMetadata };

export default function OrganizationLayout({ children }) {
    return (
        <div className={`${GeistSans.className} min-h-screen bg-zinc-50`}>
            <header className="bg-white/95 backdrop-blur-sm border-b border-zinc-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="hover:opacity-70 transition-opacity duration-300 ease-in-out">
                        <div className="flex flex-row items-center justify-between gap-3">
                            <Image
                                src={'/logo_black.svg'}
                                alt="Happenings Logo"
                                width={20}
                                height={20}
                                priority
                                className="text-zinc-600"
                            />
                            <h1 className="text-lg font-bold text-zinc-700">Happenings</h1>
                        </div>
                    </Link>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Button className="rounded-full bg-zinc-600 hover:bg-zinc-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 px-6">
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
