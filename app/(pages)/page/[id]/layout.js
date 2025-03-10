// app/page/[id]/layout.js
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { generateMetadata } from './metadata';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

// Export the generateMetadata function to be used by Next.js
export { generateMetadata };

export default function OrganizationLayout({ children }) {
    return (
        <div className={`${inter.className} min-h-screen bg-gray-50`}>
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" className="text-xl font-bold">Happenings</a>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><Link href="/discover" className="hover:text-blue-600 transition-colors">Discover</Link></li>
                            <li><Link href="/page" className="hover:text-blue-600 transition-colors">Pages</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer className="bg-white mt-12 py-6 border-t">
                <div className="container mx-auto px-4 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Happenings Platform. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
