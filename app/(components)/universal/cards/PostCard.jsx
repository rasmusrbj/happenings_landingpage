'use client';

// app/(components)/universal/cards/PostCard.jsx
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { toast } from 'sonner'
import { Button } from '../buttons/Button'

export default function PostCard({ name, body, userImage, date }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [showShareSuccess, setShowShareSuccess] = useState(false)

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            toast.success('Link copied to clipboard')
        } catch (err) {
            toast.error('Failed to copy link')
        }
    }

    return (
        <article className="bg-white dark:bg-slate-800 rounded-2xl p-6 mb-8 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
            <div className="flex gap-4">
                <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                        <Image
                            src={userImage}
                            alt={`${name}'s profile`}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex-grow">
                    <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-slate-900 dark:text-white">
                            {name}
                        </h2>
                        <svg
                            className="h-5 w-5 text-blue-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{date}</p>

                    <div className="mt-3">
                        <p className={`text-slate-600 dark:text-slate-300 whitespace-pre-line ${
                            isExpanded ? '' : 'line-clamp-4'
                        }`}>
                            {body}
                        </p>
                        {body.length > 280 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-2 text-blue-500 hover:text-blue-600 text-sm font-medium"
                            >
                                {isExpanded ? 'Show less' : 'Read more'}
                            </button>
                        )}
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex gap-6">
                            <button
                                onClick={() => setIsDialogOpen(true)}
                                className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="text-sm">Like</span>
                            </button>

                            <button
                                onClick={() => setIsDialogOpen(true)}
                                className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="text-sm">Comment</span>
                            </button>

                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                                <span className="text-sm">Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <LoginDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                name={name}
            />
        </article>
    )
}

function LoginDialog({ isOpen, onClose, name }) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-50">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-sm w-full">

                            <Dialog.Title className="text-xl font-semibold text-slate-900 dark:text-white">
                                See more from {name}
                            </Dialog.Title>
                            <Dialog.Description className="mt-2 text-slate-500 dark:text-slate-400">
                                Create an account or log in to see more content from {name} and connect with others.
                            </Dialog.Description>

                            <div className="mt-6 flex flex-col gap-3">
                                <Button variant="default" onClick={onClose}>
                                    Create Account
                                </Button>
                                <Button variant="muted" onClick={onClose}>
                                    Log In
                                </Button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}