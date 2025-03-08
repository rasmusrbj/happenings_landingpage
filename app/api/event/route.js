import { NextResponse } from 'next/server';

export async function GET(request) {
    // Get the eventId from the query parameters
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get('id');

    if (!eventId) {
        return NextResponse.json(
            { error: 'Event ID is required' },
            { status: 400 }
        );
    }

    try {
        // Make a request to the Happenings API
        const response = await fetch(`https://share.happenings.dk/event/${eventId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        // Parse the response data
        const data = await response.json();

        // Return the data
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching event data:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch event data' },
            { status: 500 }
        );
    }
}
