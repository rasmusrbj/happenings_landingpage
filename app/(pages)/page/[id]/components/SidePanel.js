'use client';

// app/page/[id]/components/SidePanel.js
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/app/(components)/universal/buttons/Button'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import Panel from './Panel'
import { cn } from '@/app/lib/utils'
//import MemberCountImages from '@/components/universal/ui/member_avatars'

export default function SidePanel({
                                      name,
                                      description,
                                      image,
                                      memberCount,
                                      instagramId,
                                      userName,
                                      coverImage,
                                      address,
                                      website,
                                      createdAt
                                  }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isPanelOpen, setIsPanelOpen] = useState(false)

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <button
                onClick={() => setIsPanelOpen(true)}
                className="w-full text-left"
            >
                <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                        <Image
                            src={image}
                            alt={`${name}'s profile picture`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="font-semibold text-gray-900 dark:text-white">
                                {name}
                            </h2>
                            <CheckBadgeIcon className="h-5 w-5 text-blue-500" />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-slate-400">
                            @{userName}
                        </p>
                    </div>
                </div>

                {memberCount > 0 && (
                    <div className="mt-4">
                        MemberCountImages
                    </div>
                )}

                <div className="mt-4">
                    <p className={cn(
                        "text-sm text-gray-600 dark:text-slate-300",
                        isExpanded ? "" : "line-clamp-3"
                    )}>
                        {description}
                    </p>
                    {description?.length > 150 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsExpanded(!isExpanded)
                            }}
                            className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                    )}
                </div>
            </button>

            <div className="mt-6 grid grid-cols-2 gap-4">
                <Link href="https://app.happenings.dk/page" className="w-full">
                    <Button variant="green" className="w-full">
                        Join
                    </Button>
                </Link>
                <Button
                    variant="muted"
                    className="w-full"
                    onClick={() => setIsPanelOpen(true)}
                >
                    Information
                </Button>
            </div>

            <Panel
                isOpen={isPanelOpen}
                onClose={() => setIsPanelOpen(false)}
                name={name}
                description={description}
                image={image}
                memberCount={memberCount}
                instagramId={instagramId}
                userName={userName}
                coverImage={coverImage}
                address={address}
                website={website}
                createdAt={createdAt}
            />
        </div>
    )
}

//<MemberCountImages memberCount={memberCount} />