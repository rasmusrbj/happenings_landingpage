import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../buttons/Button'

export default function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <span className="sr-only">Happenings</span>
                            <Image
                                src="/static/logo_color.svg"
                                alt="Happenings Logo"
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                            <span className="font-bold text-slate-900 dark:text-white">
                Happenings
              </span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link href="/about" className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-slate-400">
                            About
                        </Link>
                        <Link href="/product" className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-slate-400">
                            Product
                        </Link>
                        <Link href="/business" className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-slate-400">
                            Business
                        </Link>
                    </div>

                    <div className="flex flex-1 justify-end gap-x-4">
                        <Button variant="muted" size="sm">
                            Log in
                        </Button>
                        <Button variant="default" size="sm">
                            Sign up
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}