// app/page/[id]/components/Panel.js
import { Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '/app/(components)/universal/buttons/Button'
import { XMarkIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export default function Panel({
                                  isOpen,
                                  onClose,
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
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500/75 dark:bg-slate-900/75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-slate-800 shadow-xl">
                                        <div className="px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                                    Profile
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md text-gray-400 hover:text-gray-500 dark:text-slate-400 dark:hover:text-slate-300"
                                                        onClick={onClose}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Cover Image */}
                                        <div className="relative h-60">
                                            <Image
                                                src={coverImage || "/static/students.jpeg"}
                                                alt="Cover"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="px-4 py-6 sm:px-6">
                                            <div className="flex items-center gap-4">
                                                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                                                    <Image
                                                        src={image}
                                                        alt={`${name}'s profile`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                        {name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 dark:text-slate-400">
                                                        @{userName}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="mt-6 flex gap-4">
                                                <Button variant="green" className="flex-1">
                                                    Follow
                                                </Button>
                                                <Button variant="muted" className="flex-1">
                                                    Message
                                                </Button>
                                                <Menu as="div" className="relative">
                                                    <Menu.Button className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-slate-400 dark:hover:text-slate-300">
                                                        <EllipsisVerticalIcon className="h-5 w-5" />
                                                    </Menu.Button>
                                                    <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    className={cn(
                                                                        "block w-full px-4 py-2 text-left text-sm",
                                                                        active ? "bg-gray-100 dark:bg-slate-600" : ""
                                                                    )}
                                                                    onClick={() => {
                                                                        navigator.clipboard.writeText(
                                                                            `https://happenings.dk/page/${userName}`
                                                                        )
                                                                    }}
                                                                >
                                                                    Copy profile link
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Menu>
                                            </div>

                                            {/* Info Sections */}
                                            <div className="mt-8 space-y-8">
                                                {description && (
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 dark:text-slate-400">
                                                            About
                                                        </h4>
                                                        <p className="mt-2 text-sm text-gray-900 dark:text-white">
                                                            {description}
                                                        </p>
                                                    </div>
                                                )}

                                                {address && (
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 dark:text-slate-400">
                                                            Location
                                                        </h4>
                                                        <Link
                                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                                                `${address.street}, ${address.postal_code} ${address.city}`
                                                            )}`}
                                                            className="mt-2 block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {address.street}, {address.postal_code} {address.city}
                                                        </Link>
                                                    </div>
                                                )}

                                                {website && (
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 dark:text-slate-400">
                                                            Website
                                                        </h4>
                                                        <Link
                                                            href={website}
                                                            className="mt-2 block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {website}
                                                        </Link>
                                                    </div>
                                                )}

                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-500 dark:text-slate-400">
                                                        Joined
                                                    </h4>
                                                    <p className="mt-2 text-sm text-gray-900 dark:text-white">
                                                        {createdAt}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}