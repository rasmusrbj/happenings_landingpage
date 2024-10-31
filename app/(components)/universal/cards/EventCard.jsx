'use client';

// app/(components)/universal/cards/EventCard.jsx
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../buttons/Button'
import { toast } from 'sonner'

export default function EventCard({
                                      link,
                                      img,
                                      title,
                                      capitalizedFormattedDate,
                                      formattedTime,
                                      isThereAnEndTime,
                                      endFormattedTime,
                                      description,
                                      buyOrNot = 'View Event'
                                  }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(`https://happenings.dk/${link}`)
            toast.success('Link copied to clipboard')
        } catch (err) {
            toast.error('Failed to copy link')
        }
    }

    return (
        <article className="mb-8 overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm transition-all duration-200 hover:shadow-md">
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={img || "/static/party.png"}
                    alt={`${title} event image`}
                    fill
                    className="object-cover transition-transform duration-200 hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <h2 className="font-semibold text-xl text-slate-900 dark:text-white">
                        {title}
                    </h2>
                    <button
                        onClick={handleCopyLink}
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        aria-label="Copy event link"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                    </button>
                </div>

                <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>{capitalizedFormattedDate}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>{formattedTime}{isThereAnEndTime ? ` - ${endFormattedTime}` : ''}</span>
                    </div>
                </div>

                <div className="mt-4">
                    <p className={`text-slate-600 dark:text-slate-300 whitespace-pre-line ${
                        isExpanded ? '' : 'line-clamp-3'
                    }`}>
                        {description}
                    </p>
                </div>

                <div className="mt-6 flex items-center gap-4">
                    <Link href={`/${link}`} className="flex-1">
                        <Button
                            variant="default"
                            className="w-full"
                        >
                            {buyOrNot}
                        </Button>
                    </Link>

                    <Button
                        variant="muted"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Show less' : 'Read more'}
                    </Button>
                </div>
            </div>
        </article>
    )
}