// app/page/[id]/page.js
import { Suspense } from 'react'
import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'
import SidePanel from './components/SidePanel'
import TabNavigation from './components/TabNavigation'
import PostCard from '@/app/(components)/universal/cards/PostCard'
import EventCard from '@/app/(components)/universal/cards/EventCard'
//import JobCard from '@/components/universal/cards/JobCard'

async function getPageData(id) {
    const res = await fetch(`https://share.happenings.dk/page/${id}`, {
        next: { revalidate: 60 } // Revalidate every minute
    })
    if (!res.ok) return null
    return res.json()
}

export async function generateMetadata({ params }) {
    const data = await getPageData(params.id)
    if (!data) return { title: 'Page Not Found' }

    return {
        title: `Happenings | ${data.Page.name}`,
        description: data.Page.description,
        openGraph: {
            title: data.Page.name,
            description: data.Page.description,
            images: [data.Page.image.original],
            url: `https://happenings.social/page/${data.Page.user_name}`
        }
    }
}

export default async function Page({ params }) {
    const data = await getPageData(params.id)
    if (!data) return <div>Page not found</div>

    const date = new Date(data.Page.created_at.seconds * 1000)
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()

    // Sort posts by date
    const sortedPosts = data.Posts?.sort((a, b) =>
        b.created_at.seconds - a.created_at.seconds
    ) || []

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {/* Cover Image */}
                <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden rounded-2xl">
                    <Image
                        src={data.Page.cover_image?.original || "/static/students.jpeg"}
                        alt={`${data.Page.name} cover`}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="mt-8 flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                        <Tabs.Root defaultValue="feed" className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4">
                            <TabNavigation tabs={data.Page.tabs} />

                            <Suspense fallback={<div>Loading...</div>}>
                                {/* Feed Tab */}
                                <Tabs.Content value="feed">
                                    {sortedPosts.length > 0 ? (
                                        <div className="space-y-6">
                                            {sortedPosts.map(post => (
                                                <PostCard
                                                    key={post.id}
                                                    name={post.is_posted_by_club ? post.author.full_name : data.Page.name}
                                                    userImage={post.is_posted_by_club ? post.author.profile_image.small : data.Page.image.small}
                                                    body={post.text}
                                                    date={formatDate(post.created_at.seconds)}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="py-12 text-center text-gray-500">
                                            No posts yet
                                        </div>
                                    )}
                                </Tabs.Content>

                                {/* Events Tab */}
                                <Tabs.Content value="events">
                                    {data.Events?.length > 0 ? (
                                        <div className="space-y-6">
                                            {data.Events.map(event => (
                                                <EventCard
                                                    key={event.id}
                                                    event={event}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="py-12 text-center text-gray-500">
                                            No events yet
                                        </div>
                                    )}
                                </Tabs.Content>

                                {/* Additional tabs... */}
                            </Suspense>
                        </Tabs.Root>
                    </div>

                    {/* Side Panel */}
                    <div className="w-full lg:w-80">
                        <SidePanel
                            name={data.Page.name}
                            description={data.Page.description}
                            image={data.Page.image?.medium}
                            memberCount={data.Page.member_count}
                            instagramId={data.Page.instagram_id}
                            userName={data.Page.user_name}
                            coverImage={data.Page.cover_image?.original}
                            address={data.Page.address}
                            website={data.Page.website}
                            createdAt={`${month} ${year}`}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

// Utility function for date formatting
function formatDate(seconds) {
    const date = new Date(seconds * 1000)
    return new Intl.DateTimeFormat('da-DK', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date)
}