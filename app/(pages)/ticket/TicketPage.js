// app/(pages)/ticket/TicketPage.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import NavHeaderDark from "@/app/(components)/universal/navigation/header/nav_bar_dark";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

// Ticket Card Component
const TicketCard = ({
                        image,
                        title,
                        fullName,
                        id,
                        eventTitle,
                        pageTitle,
                        pageImage,
                        pageUserName,
                        notUsed,
                        timeUsed,
                        isUsed
                    }) => {
    return (
        <Card className="w-full max-w-md overflow-hidden shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-white">
                        <AvatarImage src={image} alt={fullName} />
                        <AvatarFallback>{fullName?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-xl">{fullName}</CardTitle>
                        <p className="text-sm text-blue-100">{id}</p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{eventTitle}</h3>
                    <div className="flex items-center space-x-2">
                        {pageImage && (
                            <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                <Image
                                    src={pageImage}
                                    alt={pageTitle || 'Event page'}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <span className="text-sm text-gray-600">{pageTitle}</span>
                    </div>
                    <p className="text-xs text-gray-500">@{pageUserName}</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    {isUsed ? (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Billet er brugt</AlertTitle>
                            <AlertDescription>
                                {timeUsed}
                            </AlertDescription>
                        </Alert>
                    ) : (
                        <Alert variant="default" className="bg-green-50 border-green-200">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <AlertTitle className="text-green-800">{title}</AlertTitle>
                            <AlertDescription className="text-green-700">
                                {notUsed}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="flex justify-center pt-4">
                    <Badge variant="outline" className="px-4 py-2">
                        {id}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
};

// Updated to receive data directly rather than fetching it
export default function TicketPage({ initialData }) {
    // No loading state needed as data is passed from server
    const [error] = useState(!initialData);

    if (!initialData || error) {
        return (
            <>
                <NavHeaderDark />
            <div className="flex justify-center items-center min-h-screen">
                <Alert variant="destructive" className="max-w-md">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Invalid ticket</AlertTitle>
                    <AlertDescription>
                        This is NOT a valid ticket.
                    </AlertDescription>
                </Alert>
            </div>
                <Footer />
            </>
        );
    }

    const data = initialData;
    const fullName = data?.user?.full_name;
    const image = data?.user?.profile_image?.large ?? "/static/noProfilePic.png";
    const eventTitle = data?.event?.title;
    const pageTitle = data?.event?.page?.name;
    const pageImage = data?.event?.page?.image?.large;
    const pageUserName = data?.event?.page?.user_name;
    const id = data?.event?.short_id;
    const isUsed = data?.is_used;

    let timeUsed = '';
    if (data?.time_used?.seconds) {
        const timeUsedDate = new Date(data.time_used.seconds * 1000);
        timeUsed = `This ticket was swiped at ${timeUsedDate.toLocaleDateString("da-DK", {
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).slice(5)}`;
    }

    return (
        <>
            <NavHeaderDark />
        <div className="flex justify-center items-center min-h-screen py-12 px-4">
            <div className="w-full max-w-md">
                <TicketCard
                    image={image}
                    title="This ticket is valid"
                    fullName={fullName}
                    id={id}
                    eventTitle={eventTitle}
                    pageTitle={pageTitle}
                    pageImage={pageImage}
                    pageUserName={pageUserName}
                    notUsed="This ticket has not yet been swiped"
                    timeUsed={timeUsed}
                    isUsed={isUsed}
                />
            </div>
        </div>
            <Footer/>
        </>
    );
}
