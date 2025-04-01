// app/(pages)/invitation/InvitationPage.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import {
    Calendar,
    MapPin,
    Users,
    Share2,
    CalendarPlus,
    AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import NavHeaderDark from "@/app/(components)/universal/navigation/header/nav_bar_dark";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

// Invitation Top Bar Component
const InvitationBar = ({ profilePicture, invitationName, title }) => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm py-3 px-4">
            <div className="max-w-6xl px-3 mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-white">
                        <AvatarImage src={profilePicture || ''} alt={invitationName} />
                        <AvatarFallback>{invitationName?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <p className="text-sm">
                            <span className="font-semibold text-blue-600">{invitationName}</span>
                            <span className="text-gray-700"> has invited you to</span>
                        </p>
                        <p className="font-bold text-gray-900 truncate max-w-[250px]">{title}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Happenings Logo */}
                    <Link href="/" className="hidden md:block">
                        <div className="flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Happenings"
                            width={16}
                            height={24}
                        />
                            <p className="text-sm text-gray-900 font-semibold">
                                Happenings
                            </p>
                            <>|</>
                        </div>
                    </Link>

                    {/* Claim Club Button */}
                    <Link href="/claim">
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-xs md:text-sm border-blue-400 text-blue-600 hover:bg-blue-50"
                        >
                            From a Club/Council?
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default function InvitationPage({ initialData }) {
    const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
    const [isCalendarDialogOpen, setIsCalendarDialogOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    // Reset copy success message after 2 seconds
    React.useEffect(() => {
        if (copySuccess) {
            const timer = setTimeout(() => setCopySuccess(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copySuccess]);

    // If no data, show error
    if (!initialData) {
        return (
            <>
                <NavHeaderDark />
                <div className="flex justify-center items-center min-h-screen p-4">
                    <Alert variant="destructive" className="max-w-md">
                        <AlertTitle>Invalid Invitation</AlertTitle>
                        <AlertDescription>
                            We couldn't find the invitation you're looking for.
                        </AlertDescription>
                    </Alert>
                </div>
                <Footer />
            </>
        );
    }

    const { data, start, end, isThereAnEndTime } = initialData;

    const invitation = data.Invitation.inviter;
    const profilePicture = invitation.profile_image.original;
    const event = data.Event;
    const eventImage = event.image?.original || '/static/placeholder-event.jpg';
    const isEventFree = data.IsFree;
    const isUsed = data.Invitation.is_used;
    const eventAddress = event.address.street;
    const eventCity = event.address.city;
    const eventPostalCode = event.address.postal_code;
    const eventHostName = event.host.name;
    const hostImage = event.host.image?.small;
    const eventDescription = event.description;
    const startDate = new Date(start);
    const endDate = isThereAnEndTime ? new Date(end) : null;

    // Format date and time
    const formattedDate = format(startDate, 'EEEE, MMMM d, yyyy');
    const formattedStartTime = format(startDate, 'h:mm a');
    const formattedEndTime = isThereAnEndTime ? format(endDate, 'h:mm a') : '';

    // Location info
    const fullAddress = `${eventAddress}, ${eventPostalCode} ${eventCity}`;
    const encodedAddress = encodeURIComponent(fullAddress);
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAnEwrMkNOFDCZqxWDOKDeez6_zdxPbvRg&q=${encodedAddress}`;

    // Participants info if available
    const hasParticipantInfo = event.participant_count !== undefined && event.max_participants;
    const participantPercentage = hasParticipantInfo
        ? Math.min(Math.round((event.participant_count / event.max_participants) * 100), 100)
        : null;
    const ticketsRemaining = hasParticipantInfo
        ? event.max_participants - event.participant_count
        : null;

    // Calendar export information
    const calendarEvent = {
        title: event.title,
        start: startDate.toISOString(),
        end: endDate ? endDate.toISOString() : new Date(startDate.getTime() + 2 * 60 * 60 * 1000).toISOString(),
        location: fullAddress,
        description: event.description ? event.description.substring(0, 500) + '...' : ''
    };

    // Calendar links
    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.title)}&dates=${calendarEvent.start.replace(/[-:]/g, '').replace('.000', '')}\/${calendarEvent.end.replace(/[-:]/g, '').replace('.000', '')}&details=${encodeURIComponent(calendarEvent.description)}&location=${encodedAddress}&sprop=&sprop=name:`;

    // Handle link copying
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
    };

    // Create ICS content
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

    if (isUsed) {
        return (
            <>
                <NavHeaderDark />
                <div className="flex justify-center items-center min-h-screen p-4">
                    <Alert variant="destructive" className="max-w-md">
                        <AlertTitle>Invitation Already Used</AlertTitle>
                        <AlertDescription>
                            This invitation has already been used.
                        </AlertDescription>
                    </Alert>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <NavHeaderDark />
            <div className="container mx-auto px-4 py-8 max-w-6xl pt-20 pb-20">
                {/* Invitation Bar */}
                <InvitationBar
                    profilePicture={profilePicture}
                    invitationName={invitation.full_name}
                    title={event.title}
                />

                {/* Header with event title and date */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 mt-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
                        <p className="text-muted-foreground flex items-center mt-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            {formattedDate} · {formattedStartTime} {isThereAnEndTime ? `- ${formattedEndTime}` : ''}
                        </p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        <Link href={`https://app.happenings.dk/invitation/${data.Invitation.id}`}>
                            <Button className="flex-1 md:flex-none bg-lime-500 hover:bg-lime-600 transition-colors duration-300 ease-in-out" variant="default" size="lg">
                                Buy Ticket
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Event image */}
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-md">
                    <Image
                        src={eventImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        priority
                    />
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column - Event details */}
                    <div className="lg:col-span-2">
                        {/* Event Description */}
                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle className="text-2xl">About The Event</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="prose max-w-none">
                                    <div className="whitespace-pre-line">
                                        {eventDescription}
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
                                        <p className="text-sm text-muted-foreground">{formattedDate}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {formattedStartTime} {isThereAnEndTime ? `- ${formattedEndTime}` : ''}
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p className="text-sm text-muted-foreground">{eventAddress}</p>
                                        <p className="text-sm text-muted-foreground">{eventPostalCode} {eventCity}</p>
                                    </div>
                                </div>

                                {/* Participants if available */}
                                {hasParticipantInfo && (
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Users className="h-5 w-5 text-muted-foreground mr-2" />
                                                <p className="font-medium">Participants</p>
                                            </div>
                                            <p className="text-sm font-medium">{event.participant_count} / {event.max_participants}</p>
                                        </div>
                                        <Progress value={participantPercentage} className="h-2" />
                                        <p className="text-xs text-muted-foreground text-right">
                                            {ticketsRemaining} tickets remaining
                                        </p>
                                    </div>
                                )}

                                <Separator />

                                {/* Organizer */}
                                <div className="pt-2">
                                    <p className="font-medium mb-2">Organizer</p>
                                    <div className="flex items-center mt-2 p-4 bg-gray-50 rounded-xl">
                                        {hostImage ? (
                                            <Image
                                                src={hostImage}
                                                alt={eventHostName}
                                                width={40}
                                                height={40}
                                                className="rounded-full mr-3"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                                                <span className="font-medium text-gray-600">{eventHostName.charAt(0)}</span>
                                            </div>
                                        )}
                                        <span className="font-medium">{eventHostName}</span>
                                    </div>
                                </div>

                                <Separator />

                                {/* Action Buttons */}
                                <div className="pt-4 space-y-3">
                                    <Link href={`https://app.happenings.dk/invitation/${data.Invitation.id}`}>
                                        <Button className="w-full bg-lime-500 hover:bg-lime-600 transition-colors duration-300 ease-in-out h-11 text-base" size="lg">
                                            Buy Ticket
                                        </Button>
                                    </Link>

                                    {isEventFree && (
                                        <div className="flex justify-center py-1">
                                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                                Free entrance
                                            </Badge>
                                        </div>
                                    )}

                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() => setIsShareDialogOpen(true)}
                                        >
                                            <Share2 className="h-4 w-4 mr-2" />
                                            Share
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() => setIsCalendarDialogOpen(true)}
                                        >
                                            <CalendarPlus className="h-4 w-4 mr-2" />
                                            Calendar
                                        </Button>
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
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#4285F4">
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
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                                </svg>
                                Download (.ics)
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <Footer />
        </>
    );
}
