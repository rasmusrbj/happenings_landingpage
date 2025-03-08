'use client';

import { useParams } from 'next/navigation';
import EventLandingPage from "@/app/(pages)/event/EventLandingPage";

export default function EventPage() {
    const params = useParams();
    const { eventId } = params;

    return (
        <main>
            <EventLandingPage eventId={eventId} />
        </main>
    );
}
