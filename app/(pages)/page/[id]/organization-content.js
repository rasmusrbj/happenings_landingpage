// app/page/[id]/organization-content.js
'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Verified, Users, ExternalLink } from 'lucide-react';
import { formatDistanceToNow, format, parseISO } from 'date-fns';
import Head from 'next/head';

export default function OrganizationContent({ initialData, id }) {
    // Get page data from initial data
    const [pageData, setPageData] = useState(initialData?.Page || null);
    const [events, setEvents] = useState(initialData?.Events || []);
    const [posts, setPosts] = useState(initialData?.Posts || []);
    const [activeTab, setActiveTab] = useState('events');
    const [isLoading, setIsLoading] = useState(false);

    // Client-side metadata fields
    const [metaInfo, setMetaInfo] = useState({
        title: '',
        description: '',
        image: '',
        url: ''
    });

    // Update metadata when page data changes
    useEffect(() => {
        if (pageData) {
            updateMetadata();
        }
    }, [pageData, events, activeTab]);

    // Function to update client-side metadata
    const updateMetadata = () => {
        // Base URL for canonical links
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
        const canonicalUrl = `${baseUrl}/page/${id}`;

        // Get page name for title
        const pageName = pageData?.name || 'Organization';

        // Build title
        const title = `${pageName} | Happenings`;

        // Build description with upcoming event if available
        let description = pageData?.description || `Check out ${pageName}'s page on Happenings`;

        // Get upcoming events
        const now = new Date();
        const upcomingEvents = events
            .filter(event => event.start_date && new Date(event.start_date.seconds * 1000) > now)
            .sort((a, b) => a.start_date.seconds - b.start_date.seconds);

        // Get first upcoming event
        const firstEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;

        // Add event info to description if available
        if (firstEvent?.title) {
            const eventDate = firstEvent.start_date
                ? format(new Date(firstEvent.start_date.seconds * 1000), 'MMM d, yyyy')
                : 'Upcoming';

            description = `${description}. ${eventDate}: ${firstEvent.title}`;
        }

        // Choose the best image for social sharing
        let image = '';

        // If we're on the events tab and have upcoming events with images, use that
        if (activeTab === 'events' && firstEvent?.image?.medium) {
            image = firstEvent.image.medium;
        }
        // Otherwise use organization image if available
        else if (pageData?.image?.medium) {
            image = pageData.image.medium;
        }
        // Or fallback to cover image
        else if (pageData?.cover_image?.medium) {
            image = pageData.cover_image.medium;
        }

        // Update metadata state
        setMetaInfo({
            title,
            description,
            image,
            url: canonicalUrl
        });
    };

    // Determine which tabs to show based on available data
    const getAvailableTabs = () => {
        const tabs = [];

        // Add tabs based on API data if available
        if (pageData?.tabs) {
            // Map tab codes to names - tab codes from the API are numeric
            const tabMapping = {
                1: 'events',
                2: 'posts',
                5: 'about'
            };

            pageData.tabs.forEach(tabCode => {
                if (tabMapping[tabCode]) {
                    tabs.push(tabMapping[tabCode]);
                }
            });
        }

        // If we have events but no events tab, add it
        if (!tabs.includes('events') && events.length > 0) {
            tabs.unshift('events');
        }

        // If we have posts but no posts tab, add it
        if (!tabs.includes('posts') && posts.length > 0) {
            tabs.push('posts');
        }

        // Always include about tab
        if (!tabs.includes('about')) {
            tabs.push('about');
        }

        return tabs;
    };

    const availableTabs = getAvailableTabs();

    // Utility functions for formatting
    const formatEventDate = (timestamp) => {
        if (!timestamp) return 'Date TBA';
        try {
            const date = new Date(timestamp.seconds * 1000);
            return format(date, 'EEEE, MMMM d, yyyy');
        } catch (e) {
            console.error("Date formatting error:", e);
            return 'Date unavailable';
        }
    };

    const formatEventTime = (timestamp) => {
        if (!timestamp) return '';
        try {
            const date = new Date(timestamp.seconds * 1000);
            return format(date, 'h:mm a');
        } catch (e) {
            console.error("Time formatting error:", e);
            return '';
        }
    };

    const formatPostDate = (timestamp) => {
        if (!timestamp) return '';
        try {
            const date = new Date(timestamp.seconds * 1000);
            return formatDistanceToNow(date, { addSuffix: true });
        } catch (e) {
            console.error("Post date formatting error:", e);
            return '';
        }
    };

    const truncateDescription = (description, maxLength = 180) => {
        if (!description) return '';
        if (description.length <= maxLength) return description;

        // Try to cut at the end of a sentence
        const sentenceEnd = description.substring(0, maxLength).lastIndexOf('.');
        if (sentenceEnd > maxLength * 0.7) {
            return description.substring(0, sentenceEnd + 1);
        }

        // Fall back to cutting at a word boundary
        return `${description.substring(0, maxLength).trim().replace(/[,.;:!?]$/, '')}...`;
    };

    // Filter and sort events
    const now = new Date();
    const upcomingEvents = events
        .filter(event => event.start_date && new Date(event.start_date.seconds * 1000) > now)
        .sort((a, b) => a.start_date.seconds - b.start_date.seconds);

    const pastEvents = events
        .filter(event => event.start_date && new Date(event.start_date.seconds * 1000) <= now)
        .sort((a, b) => b.start_date.seconds - a.start_date.seconds);

    return (
        <>
            {/* Client-side head for metadata */}
            <Head>
                <title>{metaInfo.title}</title>
                <meta name="description" content={metaInfo.description} />

                {/* Canonical URL */}
                <link rel="canonical" href={metaInfo.url} />

                {/* Open Graph */}
                <meta property="og:title" content={metaInfo.title} />
                <meta property="og:description" content={metaInfo.description} />
                {metaInfo.image && <meta property="og:image" content={metaInfo.image} />}
                <meta property="og:url" content={metaInfo.url} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Happenings" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaInfo.title} />
                <meta name="twitter:description" content={metaInfo.description} />
                {metaInfo.image && <meta name="twitter:image" content={metaInfo.image} />}
            </Head>

            <div className="container mx-auto px-4 py-8">
                {/* Organization Header with Cover Image */}
                {pageData?.cover_image?.large && (
                    <div className="relative w-full h-48 md:h-64 lg:h-80 mb-8 rounded-xl overflow-hidden">
                        <img
                            src={pageData.cover_image.large}
                            alt={`${pageData.name} cover`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                )}

                {/* Organization Profile */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
                    <div className="flex-shrink-0">
                        <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-white shadow-lg">
                            <AvatarImage src={pageData?.image?.medium || ''} alt={pageData?.name || 'Organization'} />
                            <AvatarFallback className="text-2xl md:text-3xl font-bold">
                                {pageData?.name?.charAt(0) || 'O'}
                            </AvatarFallback>
                        </Avatar>
                    </div>

                    <div className="flex-grow text-center md:text-left">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                            <h1 className="text-3xl md:text-4xl font-bold">{pageData?.name || 'Organization'}</h1>
                            {pageData?.verified && (
                                <Badge variant="outline" className="bg-blue-50 ml-2">
                                    <Verified className="h-3.5 w-3.5 mr-1 text-blue-600" />
                                    Verified
                                </Badge>
                            )}
                        </div>

                        {pageData?.description && (
                            <p className="text-gray-600 mt-3 max-w-3xl text-lg">{pageData.description}</p>
                        )}

                        <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                            {pageData?.member_count > 0 && (
                                <Badge variant="outline" className="bg-gray-50 px-3 py-1">
                                    <Users className="h-3.5 w-3.5 mr-1.5" />
                                    {pageData.member_count.toLocaleString()} members
                                </Badge>
                            )}

                            {pageData?.address?.city && (
                                <Badge variant="outline" className="bg-gray-50 px-3 py-1">
                                    <MapPin className="h-3.5 w-3.5 mr-1.5" />
                                    {pageData.address.city}
                                    {pageData.address.country && `, ${pageData.address.country}`}
                                </Badge>
                            )}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
                            {pageData?.website && (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={pageData.website} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Website
                                    </a>
                                </Button>
                            )}

                            {pageData?.instagram_id && (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={`https://instagram.com/${pageData.instagram_id}`} target="_blank" rel="noopener noreferrer">
                                        <svg
                                            className="h-4 w-4 mr-2"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
                                            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                                        </svg>
                                        Instagram
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Tabs */}
                <Tabs
                    defaultValue={availableTabs[0]}
                    onValueChange={setActiveTab}
                    className="mt-8"
                >
                    <TabsList className="mb-6 w-full max-w-md mx-auto flex justify-center border-b">
                        {availableTabs.map(tab => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className="capitalize text-base flex-1"
                            >
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Events Tab Content */}
                    {availableTabs.includes('events') && (
                        <TabsContent value="events" className="mt-2 pb-12 animation-fade-in">
                            {upcomingEvents.length > 0 && (
                                <div className="mb-16">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                                        <span className="mr-2 p-1 bg-green-100 rounded-full">
                                            <Calendar className="h-5 w-5 text-green-600" />
                                        </span>
                                        Upcoming Events
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {upcomingEvents.map(event => (
                                            <Card key={event.id} className="h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg">
                                                {event.image && (
                                                    <div className="relative w-full aspect-video overflow-hidden">
                                                        <img
                                                            src={event.image.medium || event.image.small}
                                                            alt={event.title}
                                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                        />
                                                    </div>
                                                )}

                                                <CardHeader className="pb-2">
                                                    <CardTitle className="line-clamp-2 text-xl">{event.title}</CardTitle>
                                                    <CardDescription className="mt-2">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="h-4 w-4 text-blue-600" />
                                                            <span className="font-medium">
                                                                {formatEventDate(event.start_date)}
                                                            </span>
                                                        </div>
                                                        {event.start_date && (
                                                            <div className="mt-1 ml-6 text-sm">
                                                                <span>{formatEventTime(event.start_date)}</span>
                                                                {event.end_date && (
                                                                    <span> - {formatEventTime(event.end_date)}</span>
                                                                )}
                                                            </div>
                                                        )}
                                                    </CardDescription>
                                                </CardHeader>

                                                <CardContent className="flex-grow">
                                                    <p className="text-gray-600 line-clamp-3">
                                                        {truncateDescription(event.description)}
                                                    </p>
                                                </CardContent>

                                                <CardFooter className="pt-2 pb-4">
                                                    <Button variant="default" className="w-full">
                                                        View Event Details
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {pastEvents.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                                        <span className="mr-2 p-1 bg-gray-100 rounded-full">
                                            <Calendar className="h-5 w-5 text-gray-600" />
                                        </span>
                                        Past Events
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {pastEvents.slice(0, 6).map(event => (
                                            <Card key={event.id} className="h-full flex flex-col opacity-85 hover:opacity-100 transition-opacity duration-200">
                                                {event.image && (
                                                    <div className="relative w-full aspect-video overflow-hidden grayscale-[30%]">
                                                        <img
                                                            src={event.image.medium || event.image.small}
                                                            alt={event.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-black/10"></div>
                                                    </div>
                                                )}

                                                <CardHeader className="pb-2">
                                                    <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                                                    <CardDescription>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Calendar className="h-4 w-4" />
                                                            <span>
                                                                {formatEventDate(event.start_date)}
                                                            </span>
                                                        </div>
                                                    </CardDescription>
                                                </CardHeader>

                                                <CardContent className="flex-grow">
                                                    <p className="text-gray-600 line-clamp-2">
                                                        {truncateDescription(event.description, 120)}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    {pastEvents.length > 6 && (
                                        <div className="mt-8 flex justify-center">
                                            <Button variant="outline">
                                                View All Past Events ({pastEvents.length})
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {upcomingEvents.length === 0 && pastEvents.length === 0 && (
                                <div className="text-center py-16 bg-gray-50 rounded-lg">
                                    <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                    <h3 className="text-xl font-medium">No Events Found</h3>
                                    <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                        This organization hasn't posted any events yet. Check back later for updates.
                                    </p>
                                </div>
                            )}
                        </TabsContent>
                    )}

                    {/* Posts Tab Content */}
                    {availableTabs.includes('posts') && (
                        <TabsContent value="posts" className="mt-2 pb-12 animation-fade-in">
                            <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>

                            {posts.length > 0 ? (
                                <div className="space-y-8">
                                    {posts.map(post => (
                                        <Card key={post.id} className="overflow-hidden">
                                            <CardHeader className="pb-3">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="border">
                                                        <AvatarImage
                                                            src={post.sender?.image?.small || ''}
                                                            alt={post.sender?.name || ''}
                                                        />
                                                        <AvatarFallback>{post.sender?.name?.charAt(0) || 'P'}</AvatarFallback>
                                                    </Avatar>

                                                    <div>
                                                        <CardTitle className="text-lg">{post.sender?.name || pageData?.name || 'Organization'}</CardTitle>
                                                        <CardDescription>{formatPostDate(post.created_at)}</CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>

                                            <CardContent>
                                                <p className="whitespace-pre-line mb-4">{post.text}</p>

                                                {post.image && (
                                                    <div className="mt-4 relative w-full overflow-hidden rounded-lg">
                                                        <img
                                                            src={post.image.medium || post.image.small}
                                                            alt="Post image"
                                                            className="w-full object-cover max-h-[500px]"
                                                        />
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16 bg-gray-50 rounded-lg">
                                    <svg
                                        className="h-12 w-12 mx-auto text-gray-400 mb-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M2 10L22 10" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M7 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M7 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <h3 className="text-xl font-medium">No Posts Yet</h3>
                                    <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                        This organization hasn't shared any posts yet. Check back later for updates.
                                    </p>
                                </div>
                            )}
                        </TabsContent>
                    )}

                    {/* About Tab Content */}
                    {availableTabs.includes('about') && (
                        <TabsContent value="about" className="mt-2 pb-12 animation-fade-in">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">About {pageData?.name}</CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    {pageData?.description && (
                                        <div>
                                            <h3 className="text-lg font-medium mb-2">Description</h3>
                                            <p className="text-gray-700 whitespace-pre-line">{pageData.description}</p>
                                        </div>
                                    )}

                                    {pageData?.address && Object.keys(pageData.address).some(k => !!pageData.address[k]) && (
                                        <div>
                                            <h3 className="text-lg font-medium mb-2">Location</h3>
                                            <div className="bg-gray-50 p-4 rounded-lg flex gap-3">
                                                <MapPin className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                                <p className="text-gray-700">
                                                    {pageData.address.street && <span className="block">{pageData.address.street}</span>}
                                                    {(pageData.address.postal_code || pageData.address.city) && (
                                                        <span className="block">
                                                            {pageData.address.postal_code && `${pageData.address.postal_code} `}
                                                            {pageData.address.city && pageData.address.city}
                                                        </span>
                                                    )}
                                                    {pageData.address.country && <span className="block">{pageData.address.country}</span>}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {pageData?.legal_name && (
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-medium mb-1">Legal Name</h3>
                                                <p className="text-gray-700">{pageData.legal_name}</p>
                                            </div>
                                        )}

                                        {pageData?.cvr && (
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-medium mb-1">CVR (Business ID)</h3>
                                                <p className="text-gray-700">{pageData.cvr}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {pageData?.website && (
                                                <a
                                                    href={pageData.website}
                                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="h-5 w-5 mr-3 text-blue-600" />
                                                    <div>
                                                        <p className="font-medium text-sm text-gray-600">Website</p>
                                                        <p className="text-blue-600 truncate">{pageData.website}</p>
                                                    </div>
                                                </a>
                                            )}

                                            {pageData?.instagram_id && (
                                                <a
                                                    href={`https://instagram.com/${pageData.instagram_id}`}
                                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        className="h-5 w-5 mr-3 text-pink-600"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
                                                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                                                    </svg>
                                                    <div>
                                                        <p className="font-medium text-sm text-gray-600">Instagram</p>
                                                        <p className="text-pink-600">@{pageData.instagram_id}</p>
                                                    </div>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    )}
                </Tabs>

                <div className="mt-16 text-center text-gray-500 text-sm">
                    <p>Made with <a href="https://happenings.dk" className="text-blue-600 hover:underline">Happenings</a></p>
                </div>
            </div>

            {/* Add some CSS for animations */}
            <style jsx global>{`
                .animation-fade-in {
                    animation: fadeIn 0.3s ease-out;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}
