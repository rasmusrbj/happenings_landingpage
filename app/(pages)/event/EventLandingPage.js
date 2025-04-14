"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, MapPin, Users, Share2, CalendarPlus, Loader2, AlertCircle } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const EventLandingPage = ({ eventId }) => {
    const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
    const [isCalendarDialogOpen, setIsCalendarDialogOpen] = useState(false);
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copySuccess, setCopySuccess] = useState(false);

    useEffect(() => {
        const fetchEventData = async () => {
            if (!eventId) {
                setError("No event ID provided");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                console.log(`Fetching event data for ID: ${eventId}`);

                // Using API route to avoid CORS issues
                const response = await fetch(`/api/event?id=${eventId}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch event data: ${response.status}`);
                }

                const data = await response.json();
                setEventData(data);
            } catch (err) {
                console.error("Error fetching event data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventData();
    }, [eventId]);

    // Reset copy success message after 2 seconds
    useEffect(() => {
        if (copySuccess) {
            const timer = setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [copySuccess]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] py-16">
                <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                <p className="text-lg text-muted-foreground">Loading event information...</p>
            </div>
        );
    }

    if (error || !eventData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
                <div className="bg-red-50 p-6 rounded-lg max-w-md">
                    <h2 className="text-xl font-semibold text-red-700 mb-2">Unable to load event</h2>
                    <p className="text-gray-700">{error || "Failed to load event data. Please try again later."}</p>
                    <Button className="mt-4" onClick={() => window.location.reload()}>
                        Retry
                    </Button>
                </div>
            </div>
        );
    }

    // Extract event data
    const event = eventData.Event;

    // Format dates
    const startDateObj = new Date(event.start_date.seconds * 1000);
    const endDateObj = new Date(event.end_date.seconds * 1000);
    const formattedStartDate = format(startDateObj, "dd MMM yyyy");
    const formattedStartTime = format(startDateObj, "HH:mm");
    const formattedEndTime = format(endDateObj, "HH:mm");

    // Location data
    const fullAddress = `${event.address.street}, ${event.address.postal_code} ${event.address.city}`;
    const encodedAddress = encodeURIComponent(fullAddress);
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAnEwrMkNOFDCZqxWDOKDeez6_zdxPbvRg&q=${encodedAddress}`;

    // Ticket information
    const ticketPercentage = Math.min(Math.round((event.participant_count / event.max_participants) * 100), 100);
    const ticketsRemaining = event.max_participants - event.participant_count;

    // Calendar information
    const calendarEvent = {
        title: event.title,
        start: startDateObj.toISOString(),
        end: endDateObj.toISOString(),
        location: fullAddress,
        description: event.description.substring(0, 500) + '...'
    };

    // Calendar links
    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.title)}&dates=${calendarEvent.start.replace(/[-:]/g, '').replace('.000', '')}\/${calendarEvent.end.replace(/[-:]/g, '').replace('.000', '')}&details=${encodeURIComponent(calendarEvent.description)}&location=${encodedAddress}&sprop=&sprop=name:`;

    // Handle link copying
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
    };

    // Create ICS content for calendar downloads
    const createICSContent = () => {
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'CALSCALE:GREGORIAN',
            'BEGIN:VEVENT',
            `SUMMARY:${calendarEvent.title}`,
            `DTSTART:${calendarEvent.start.replace(/[-:]/g, '').replace('.000', '')}`,
            `DTEND:${calendarEvent.end.replace(/[-:]/g, '').replace('.000', '')}`,
            `LOCATION:${fullAddress}`,
            `DESCRIPTION:${calendarEvent.description.replace(/\n/g, '\\n')}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsContent);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Header with event title and action buttons */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
                    <p className="text-muted-foreground flex items-center mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formattedStartDate} · {formattedStartTime} - {formattedEndTime}
                    </p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <Link href={`https://app.happenings.dk/buy/${event.id}`}>
                        <Button className="flex-1 md:flex-none bg-lime-500 hover:bg-lime-600 transition-colors duration-300 ease-in-out" variant="default" size="lg">
                            Buy Ticket
                        </Button>
                    </Link>
                    <Button
                        className="flex-1 md:flex-none"
                        variant="outline"
                        size="lg"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')}
                    >
                        Get Directions
                    </Button>
                </div>
            </div>

            {/* Event image */}
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-md">
                {event.image && event.image.large ? (
                    <Image
                        src={event.image.large}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-200 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">{event.title}</span>
                    </div>
                )}
            </div>

            {/* Registration status banner */}
            <div className={`mb-8 p-4 rounded-lg flex items-center justify-between ${
                event.is_open ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
            }`}>
                <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                        event.is_open ? "bg-green-500" : "bg-red-500"
                    }`}></div>
                    <span className="font-medium">
                        {event.is_open ? "Registration is open" : "Registration is closed"}
                    </span>
                </div>

                {/*<div className="flex items-center">*/}
                {/*    <Users className="h-4 w-4 mr-2" />*/}
                {/*    <span>{event.participant_count} / {event.max_participants} participants</span>*/}
                {/*</div>*/}
            </div>

            {/* Main content area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column - Event details */}
                <div className="lg:col-span-2">
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle className="text-2xl">About The Event</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="prose max-w-none">
                                <div className="whitespace-pre-line">
                                    {event.description}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Location Map */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle className="text-xl">Location</CardTitle>
                            <CardDescription className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                {fullAddress}
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="w-full h-64 md:h-80 rounded-md overflow-hidden border">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    src={mapUrl}
                                    allowFullScreen
                                    title="Event Location"
                                />
                            </div>
                            <Button
                                variant="outline"
                                className="mt-4 w-full"
                                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')}
                            >
                                <MapPin className="h-4 w-4 mr-2" />
                                Open in Google Maps
                            </Button>
                        </CardContent>
                    </Card>

                    {/* FAQ Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What is this event about?</AccordionTrigger>
                                    <AccordionContent>
                                        This event is {event.title}. Please read the description above for more details.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is there an age limit for the event?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, you must be at least 18 years old to attend this event as alcohol will be served.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can I get a refund for my ticket?</AccordionTrigger>
                                    <AccordionContent>
                                        Please contact the organizer directly for their refund policy. Usually, tickets are non-refundable but may be transferable.
                                    </AccordionContent>
                                </AccordionItem>

                                {event.is_open && (
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>How can I buy tickets?</AccordionTrigger>
                                        <AccordionContent>
                                            You can buy tickets directly from this page by clicking the "Buy Ticket" button. Payment can be made through the secure checkout process.
                                        </AccordionContent>
                                    </AccordionItem>
                                )}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>

                {/* Right column - Event summary */}
                <div>
                    <Card className="sticky top-4">
                        <CardHeader>
                            <CardTitle className="text-xl">Event Details</CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            {/* Date & Time */}
                            <div className="flex items-start space-x-3">
                                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="font-medium">Date & Time</p>
                                    <p className="text-sm text-muted-foreground">{formattedStartDate}</p>
                                    <p className="text-sm text-muted-foreground">{formattedStartTime} - {formattedEndTime}</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="font-medium">Address</p>
                                    <p className="text-sm text-muted-foreground">{event.address.street}</p>
                                    <p className="text-sm text-muted-foreground">{event.address.postal_code} {event.address.city}</p>
                                </div>
                            </div>

                            {/* Participants */}
                            {/*<div className="space-y-2">*/}
                            {/*    <div className="flex items-center justify-between">*/}
                            {/*        <div className="flex items-center">*/}
                            {/*            <Users className="h-5 w-5 text-muted-foreground mr-2" />*/}
                            {/*            <p className="font-medium">Participants</p>*/}
                            {/*        </div>*/}
                            {/*        <p className="text-sm font-medium">{event.participant_count} / {event.max_participants}</p>*/}
                            {/*    </div>*/}
                            {/*    <Progress value={ticketPercentage} className="h-2" />*/}
                            {/*    <p className="text-xs text-muted-foreground text-right">*/}
                            {/*        {ticketsRemaining} tickets remaining*/}
                            {/*    </p>*/}
                            {/*</div>*/}

                            <Separator />

                            {/* Organizer */}
                            <div className="pt-2">
                                <p className="font-medium mb-2">See more from</p>
                                <Link href={`/page/${event.page.user_name}`} className="hover:opacity-70 transition-opacity duration-300 ease-in-out">
                                <div className="flex items-center mt-2 p-4 bg-gray-50 rounded-xl">
                                    {event.host.image && event.host.image.small ? (
                                        <Image
                                            src={event.host.image.small}
                                            alt={event.host.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full mr-3"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
                                    )}
                                    <span className="font-medium">{event.host.name}</span>
                                </div>
                                </Link>
                            </div>

                            <Separator />

                            {/* Action Buttons */}
                            <div className="pt-4 space-y-3">
                                <Link href={`https://app.happenings.dk/buy/${event.id}`}>
                                    <Button className="w-full bg-lime-500 hover:bg-lime-600 transition-colors duration-300 ease-in-out h-11 text-base" size="lg">
                                        Buy Ticket
                                    </Button>
                                </Link>

                                <div className="flex gap-2">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className="flex-1"
                                                    onClick={() => setIsShareDialogOpen(true)}
                                                >
                                                    <Share2 className="h-4 w-4 mr-2" />
                                                    Share
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Share this event with friends</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className="flex-1"
                                                    onClick={() => setIsCalendarDialogOpen(true)}
                                                >
                                                    <CalendarPlus className="h-4 w-4 mr-2" />
                                                    Calendar
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Add to your calendar</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Share Dialog */}
            <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Share This Event</DialogTitle>
                        <DialogDescription>
                            Share this event with friends via these links.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-2 py-4">
                        {copySuccess && (
                            <Alert className="mb-2 bg-green-50 text-green-800 border-green-200">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Success</AlertTitle>
                                <AlertDescription>Link copied to clipboard!</AlertDescription>
                            </Alert>
                        )}

                        <Button variant="outline" className="justify-start" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}>
                            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Share on Facebook
                        </Button>

                        <Button variant="outline" className="justify-start" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Join me at ${event.title}`)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}>
                            <svg className="w-5 h-5 mr-2" fill="#1DA1F2" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                            Share on Twitter
                        </Button>

                        <Button variant="outline" className="justify-start" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}>
                            <svg className="w-5 h-5 mr-2" fill="#0A66C2" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            Share on LinkedIn
                        </Button>

                        <Button variant="outline" className="justify-start" onClick={handleCopyLink}>
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                            </svg>
                            Copy Link
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Calendar Dialog */}
            <Dialog open={isCalendarDialogOpen} onOpenChange={setIsCalendarDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add to Calendar</DialogTitle>
                        <DialogDescription>
                            Add this event to your preferred calendar.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-2 py-4">
                        <Button variant="outline" className="justify-start" onClick={() => window.open(googleCalendarLink, '_blank')}>
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.5 22h-15A4.5 4.5 0 0 1 0 17.5v-15A4.5 4.5 0 0 1 4.5 3h15A4.5 4.5 0 0 1 24 7.5v15a4.5 4.5 0 0 1-4.5 4.5zM3 7.05V17.5A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5V7.05l-9 4.925-9-4.925zM19.5 5h-15A1.5 1.5 0 0 0 3 6.5v.325l9 4.925 9-4.925V6.5A1.5 1.5 0 0 0 19.5 5z" />
                            </svg>
                            Google Calendar
                        </Button>

                        <Button variant="outline" className="justify-start" onClick={() => {
                            const link = document.createElement('a');
                            link.href = createICSContent();
                            link.download = `${event.title.replace(/\s+/g, '-')}.ics`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}>
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.223 21.862H5.777A3.784 3.784 0 0 1 2 18.085V5.915a3.784 3.784 0 0 1 3.777-3.777h12.446A3.784 3.784 0 0 1 22 5.915v12.17a3.784 3.784 0 0 1-3.777 3.777zM5.777 4.138A1.779 1.779 0 0 0 4 5.915v12.17a1.779 1.779 0 0 0 1.777 1.777h12.446A1.779 1.779 0 0 0 20 18.085V5.915a1.779 1.779 0 0 0-1.777-1.777H5.777z" />
                                <path d="M12 17a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1zM15 14a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zM9 14a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zM12 10a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1z" />
                            </svg>
                            Apple Calendar (.ics)
                        </Button>

                        <Button variant="outline" className="justify-start" onClick={() => {
                            const link = document.createElement('a');
                            link.href = createICSContent();
                            link.download = `${event.title.replace(/\s+/g, '-')}.ics`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}>
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                            </svg>
                            Outlook Calendar (.ics)
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EventLandingPage;
