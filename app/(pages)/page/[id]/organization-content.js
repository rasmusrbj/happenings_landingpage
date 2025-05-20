// app/page/[id]/organization-content.js
'use client';

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ExternalLink, Clock, Star, ArrowRight, Check } from 'lucide-react';
import { formatDistanceToNow, format } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';

export default function OrganizationContent({ initialData, id }) {
    const [pageData, setPageData] = useState(initialData?.Page || null);
    const [events, setEvents] = useState(initialData?.Events || []);
    const [posts, setPosts] = useState(initialData?.Posts || []);
    const [activeTab, setActiveTab] = useState('about');
    const [isLoading, setIsLoading] = useState(false);

    const [metaInfo, setMetaInfo] = useState({
        title: '',
        description: '',
        image: '',
        url: ''
    });

    useEffect(() => {
        if (pageData) {
            updateMetadata();
        }
    }, [pageData, events, activeTab]);

    const updateMetadata = () => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
        const canonicalUrl = `${baseUrl}/page/${id}`;
        const pageName = pageData?.name || 'Organization';
        const title = `${pageName} | Happenings`;
        let description = pageData?.description || `Check out ${pageName}'s page on Happenings`;

        const now = new Date();
        const upcomingEvents = events
            .filter(event => event.start_date && new Date(event.start_date.seconds * 1000) > now)
            .sort((a, b) => a.start_date.seconds - b.start_date.seconds);

        const firstEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;

        if (firstEvent?.title) {
            const eventDate = firstEvent.start_date
                ? format(new Date(firstEvent.start_date.seconds * 1000), 'MMM d, yyyy')
                : 'Upcoming';
            description = `${description}. ${eventDate}: ${firstEvent.title}`;
        }

        let image = '';
        if (activeTab === 'events' && firstEvent?.image?.medium) {
            image = firstEvent.image.medium;
        } else if (pageData?.image?.medium) {
            image = pageData.image.medium;
        } else if (pageData?.cover_image?.medium) {
            image = pageData.cover_image.medium;
        }

        setMetaInfo({
            title,
            description,
            image,
            url: canonicalUrl
        });
    };

    const getAvailableTabs = () => {
        const tabs = ['about'];
        const hasEventsOrPosts = events.length > 0 || posts.length > 0;
        if (hasEventsOrPosts) {
            tabs.push('more');
        }
        return tabs;
    };

    const availableTabs = getAvailableTabs();

    const formatEventDate = (timestamp) => {
        if (!timestamp) return 'Date TBA';
        try {
            const date = new Date(timestamp.seconds * 1000);
            return format(date, 'EEEE, MMMM d, yyyy');
        } catch (e) {
            return 'Date unavailable';
        }
    };

    const formatEventTime = (timestamp) => {
        if (!timestamp) return '';
        try {
            const date = new Date(timestamp.seconds * 1000);
            return format(date, 'h:mm a');
        } catch (e) {
            return '';
        }
    };

    const formatPostDate = (timestamp) => {
        if (!timestamp) return '';
        try {
            const date = new Date(timestamp.seconds * 1000);
            return formatDistanceToNow(date, { addSuffix: true });
        } catch (e) {
            return '';
        }
    };

    const truncateDescription = (description, maxLength = 120) => {
        if (!description) return '';
        if (description.length <= maxLength) return description;

        const sentenceEnd = description.substring(0, maxLength).lastIndexOf('.');
        if (sentenceEnd > maxLength * 0.7) {
            return description.substring(0, sentenceEnd + 1);
        }

        return `${description.substring(0, maxLength).trim().replace(/[,.;:!?]$/, '')}...`;
    };

    const now = new Date();
    const upcomingEvents = events
        .filter(event => event.start_date && new Date(event.start_date.seconds * 1000) > now)
        .sort((a, b) => a.start_date.seconds - b.start_date.seconds);

    const pastEvents = events
        .filter(event => event.start_date && new Date(event.start_date.seconds * 1000) <= now)
        .sort((a, b) => b.start_date.seconds - a.start_date.seconds);

    return (
        <div>
            <Head>
                <title>{metaInfo.title}</title>
                <meta name="description" content={metaInfo.description} />
                <link rel="canonical" href={metaInfo.url} />
                <meta property="og:title" content={metaInfo.title} />
                <meta property="og:description" content={metaInfo.description} />
                {metaInfo.image && <meta property="og:image" content={metaInfo.image} />}
                <meta property="og:url" content={metaInfo.url} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Happenings" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaInfo.title} />
                <meta name="twitter:description" content={metaInfo.description} />
                {metaInfo.image && <meta name="twitter:image" content={metaInfo.image} />}
            </Head>

            <div className="min-h-screen bg-zinc-50">
                {/* Header Image Section */}
                <div className="relative">
                    {pageData?.cover_image?.large ? (
                        <div className="relative w-full h-80 lg:h-96">
                            <img
                                src={pageData.cover_image.large}
                                alt={`${pageData.name} cover`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </div>
                    ) : (
                        <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute top-10 right-10 w-16 h-16 bg-zinc-500/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-20 left-10 w-24 h-24 bg-zinc-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                        </div>
                    )}
                </div>

                {/* Floating Card - Positioned outside header image container for proper layering */}
                <div className="relative -mt-32 z-50 mb-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div 
                                className="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/60 p-8 mx-4 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-3xl"
                                style={{
                                    boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.25), 0 12px 40px -8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                                }}
                            >
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                    <div className="flex-shrink-0">
                                        <Avatar className="w-28 h-28 lg:w-36 lg:h-36 border-6 border-white shadow-2xl ring-4 ring-white/50">
                                            <AvatarImage src={pageData?.image?.medium || ''} alt={pageData?.name || 'Organization'} />
                                            <AvatarFallback className="text-3xl lg:text-4xl font-bold bg-zinc-600 text-white">
                                                {pageData?.name?.charAt(0) || 'O'}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>

                                    <div className="flex-grow text-center lg:text-left">
                                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                                            <h1 className="text-3xl lg:text-4xl font-bold text-zinc-700">
                                                {pageData?.name || 'Organization'}
                                            </h1>
                                            {pageData?.verified ? (
                                                <Badge className="bg-blue-600 text-white shadow-lg">
                                                    <Check className="h-3 w-3 mr-1" />
                                                    Verified
                                                </Badge>
                                            ) : (
                                                <Badge className="bg-orange-500 text-white shadow-lg">
                                                    <Star className="h-3 w-3 mr-1" />
                                                    Not yet claimed
                                                </Badge>
                                            )}
                                        </div>

                                        {(() => {
                                            const hasWebsite = pageData?.website;
                                            const hasInstagram = pageData?.instagram_id;
                                            const hasAddress = pageData?.address?.city || pageData?.address?.street;
                                            const hasAnyLink = hasWebsite || hasInstagram || hasAddress;
                                            
                                            if (!hasAnyLink && pageData?.description) {
                                                // Show 2-line preview if no links/address
                                                const words = pageData.description.split(' ');
                                                const preview = words.slice(0, 25).join(' ') + (words.length > 25 ? '...' : '');
                                                return (
                                                    <p className="text-zinc-600 text-lg leading-relaxed mb-6 max-w-3xl line-clamp-2">
                                                        {preview}
                                                    </p>
                                                );
                                            }
                                            return null;
                                        })()}

                                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                                            {pageData?.member_count > 0 && (
                                                <Badge variant="outline" className="text-zinc-600 border-zinc-300 bg-white/50">
                                                    <Users className="h-4 w-4 mr-2" />
                                                    {pageData.member_count.toLocaleString()} members
                                                </Badge>
                                            )}

                                            {pageData?.address?.city && (
                                                <Badge variant="outline" className="text-zinc-600 border-zinc-300 bg-white/50">
                                                    <MapPin className="h-4 w-4 mr-2" />
                                                    {pageData.address.city}
                                                    {pageData.address.country && `, ${pageData.address.country}`}
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                            {!pageData?.verified && (
                                                <Button className="bg-zinc-600 hover:bg-zinc-700 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                                                    <Link href="/claim">
                                                        <Star className="h-4 w-4 mr-2" />
                                                        Claim This
                                                    </Link>
                                                </Button>
                                            )}
                                            
                                            {pageData?.website && (
                                                <Button variant="outline" size="sm" className="bg-white/70 hover:bg-white/90 transition-all" asChild>
                                                    <a href={pageData.website} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                        Website
                                                    </a>
                                                </Button>
                                            )}

                                            {pageData?.instagram_id && (
                                                <Button variant="outline" size="sm" className="bg-white/70 hover:bg-white/90 transition-all" asChild>
                                                    <a href={`https://instagram.com/${pageData.instagram_id}`} target="_blank" rel="noopener noreferrer">
                                                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 pb-12">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue={availableTabs[0]} onValueChange={setActiveTab} className="space-y-8">
                            <div className="flex justify-center">
                                <TabsList className="bg-white border border-zinc-200 shadow-sm">
                                    {availableTabs.map(tab => (
                                        <TabsTrigger
                                            key={tab}
                                            value={tab}
                                            className="capitalize px-6 py-2 data-[state=active]:bg-zinc-600 data-[state=active]:text-white"
                                        >
                                            {tab === 'about' && <Users className="h-4 w-4 mr-2" />}
                                            {tab === 'more' && <Calendar className="h-4 w-4 mr-2" />}
                                            {tab === 'about' ? 'About' : 'More'}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>

                            {availableTabs.includes('more') && (
                                <TabsContent value="more" className="space-y-12">
                                    {upcomingEvents.length > 0 && (
                                        <div>
                                            <h2 className="text-2xl font-bold text-zinc-700 mb-6 text-center">Upcoming Events</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {upcomingEvents.slice(0, 6).map((event) => (
                                                    <Link key={event.id} href={`/event/${event.id}`} className="block group">
                                                        <Card className="h-full bg-white border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-200 group-hover:-translate-y-1">
                                                            {event.image && (
                                                                <div className="aspect-video overflow-hidden rounded-t-lg">
                                                                    <img
                                                                        src={event.image.medium || event.image.small}
                                                                        alt={event.title}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                                                    />
                                                                </div>
                                                            )}

                                                            <CardHeader className="pb-3">
                                                                <CardTitle className="text-lg font-semibold text-zinc-700 line-clamp-2">
                                                                    {event.title}
                                                                </CardTitle>
                                                                <CardDescription className="space-y-1">
                                                                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                                                                        <Calendar className="h-4 w-4" />
                                                                        <span>{formatEventDate(event.start_date)}</span>
                                                                    </div>
                                                                    {event.start_date && (
                                                                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                                                                            <Clock className="h-4 w-4" />
                                                                            <span>{formatEventTime(event.start_date)}</span>
                                                                        </div>
                                                                    )}
                                                                </CardDescription>
                                                            </CardHeader>

                                                            <CardContent className="pt-0">
                                                                <p className="text-zinc-600 text-sm line-clamp-3">
                                                                    {truncateDescription(event.description)}
                                                                </p>
                                                            </CardContent>

                                                            <CardFooter className="pt-2">
                                                                <Button className="w-full bg-zinc-600 hover:bg-zinc-700 text-white">
                                                                    View Details
                                                                    <ArrowRight className="h-4 w-4 ml-2" />
                                                                </Button>
                                                            </CardFooter>
                                                        </Card>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {posts.length > 0 && (
                                        <div>
                                            <h2 className="text-2xl font-bold text-zinc-700 mb-6 text-center">Recent Posts</h2>
                                            <div className="space-y-6">
                                                {posts.slice(0, 5).map(post => (
                                                    <Card key={post.id} className="bg-white border-zinc-200 shadow-sm">
                                                        <CardHeader className="pb-4">
                                                            <div className="flex items-center gap-4">
                                                                <Avatar className="border-2 border-zinc-100">
                                                                    <AvatarImage
                                                                        src={post.sender?.image?.small || ''}
                                                                        alt={post.sender?.name || ''}
                                                                    />
                                                                    <AvatarFallback className="bg-zinc-600 text-white">
                                                                        {post.sender?.name?.charAt(0) || 'P'}
                                                                    </AvatarFallback>
                                                                </Avatar>

                                                                <div>
                                                                    <CardTitle className="text-base font-semibold text-zinc-700">
                                                                        {post.sender?.name || pageData?.name || 'Organization'}
                                                                    </CardTitle>
                                                                    <CardDescription className="text-sm text-zinc-500">
                                                                        {formatPostDate(post.created_at)}
                                                                    </CardDescription>
                                                                </div>
                                                            </div>
                                                        </CardHeader>

                                                        <CardContent>
                                                            <p className="whitespace-pre-line text-zinc-700 leading-relaxed mb-4">
                                                                {post.text}
                                                            </p>

                                                            {post.image && (
                                                                <div className="rounded-lg overflow-hidden">
                                                                    <img
                                                                        src={post.image.medium || post.image.small}
                                                                        alt="Post image"
                                                                        className="w-full object-cover max-h-96"
                                                                    />
                                                                </div>
                                                            )}
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {upcomingEvents.length === 0 && posts.length === 0 && (
                                        <div className="text-center py-12">
                                            <div className="max-w-md mx-auto">
                                                <Calendar className="h-12 w-12 text-zinc-400 mx-auto mb-4" />
                                                <h3 className="text-xl font-semibold text-zinc-700 mb-2">Nothing Here Yet</h3>
                                                <p className="text-zinc-500">
                                                    This organization hasn't posted any events or updates yet.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </TabsContent>
                            )}

                            {availableTabs.includes('about') && (
                                <TabsContent value="about">
                                    <div className="max-w-3xl mx-auto">
                                        <Card className="bg-white border-zinc-200 shadow-sm">
                                            <CardHeader className="text-center">
                                                <CardTitle className="text-2xl font-bold text-zinc-700 mb-4">
                                                    About {pageData?.name}
                                                </CardTitle>
                                            </CardHeader>

                                            <CardContent className="space-y-8 p-8">
                                                {pageData?.description && (
                                                    <div className="text-center">
                                                        <p className="text-zinc-700 text-lg leading-relaxed">
                                                            {pageData.description}
                                                        </p>
                                                    </div>
                                                )}

                                                {pageData?.address && Object.keys(pageData.address).some(k => !!pageData.address[k]) && (
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-zinc-700 mb-4 text-center">Location</h3>
                                                        <div className="bg-zinc-50 p-6 rounded-xl">
                                                            <div className="flex items-start gap-4">
                                                                <div className="w-12 h-12 bg-zinc-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                                    <MapPin className="h-6 w-6 text-white" />
                                                                </div>
                                                                <div>
                                                                    {pageData.address.street && <p className="font-medium text-zinc-700 mb-1">{pageData.address.street}</p>}
                                                                    {(pageData.address.postal_code || pageData.address.city) && (
                                                                        <p className="text-zinc-600 mb-1">
                                                                            {pageData.address.postal_code && `${pageData.address.postal_code} `}
                                                                            {pageData.address.city && pageData.address.city}
                                                                        </p>
                                                                    )}
                                                                    {pageData.address.country && <p className="text-zinc-500">{pageData.address.country}</p>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {(pageData?.legal_name || pageData?.cvr) && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {pageData?.legal_name && (
                                                            <div className="bg-zinc-50 p-4 rounded-lg">
                                                                <h3 className="text-sm font-semibold text-zinc-700 mb-2">Legal Name</h3>
                                                                <p className="text-zinc-600">{pageData.legal_name}</p>
                                                            </div>
                                                        )}

                                                        {pageData?.cvr && (
                                                            <div className="bg-zinc-50 p-4 rounded-lg">
                                                                <h3 className="text-sm font-semibold text-zinc-700 mb-2">CVR (Business ID)</h3>
                                                                <p className="text-zinc-600">{pageData.cvr}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>
                            )}
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}