// app/api/page/[id]/route.js
import { NextResponse } from 'next/server';

// Map known IDs to their corresponding usernames
const ID_TO_USERNAME = {
    "studenterlauget": "studenterlauget",
    "stud": "studenterlauget"
    // Add more mappings as needed
};

export async function GET(request, { params }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json(
            { error: 'Organization ID is required' },
            { status: 400 }
        );
    }

    // Try to get the username from the mapping, or use the ID as username if not found
    const username = ID_TO_USERNAME[id.toLowerCase()] || id;

    try {
        // Log the URL we're trying to fetch
        const apiUrl = `https://share.happenings.dk/page/${username}`;
        console.log(`Fetching from: ${apiUrl}`);

        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json'
            },
            cache: 'no-store', // Ensure we're not using any cached responses
            method: 'GET'
        });

        // Log the response status and headers
        console.log(`Response status: ${response.status}`);
        console.log(`Response type: ${response.headers.get('content-type')}`);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response from API:', errorText);

            return NextResponse.json(
                {
                    error: 'Failed to fetch organization data',
                    status: response.status,
                    details: errorText.substring(0, 200) // Include a preview of the error
                },
                { status: response.status }
            );
        }

        // Try to parse the response as JSON
        let data;
        try {
            data = await response.json();
            console.log("Successfully parsed data:", Object.keys(data));
        } catch (parseError) {
            // If JSON parsing fails, return the text content
            const textContent = await response.text();
            console.error('Failed to parse JSON response:', parseError);
            console.error('Response content preview:', textContent.substring(0, 200));

            return NextResponse.json(
                {
                    error: 'Invalid JSON response from API',
                    details: textContent.substring(0, 200)
                },
                { status: 500 }
            );
        }

        // Return the JSON data without any caching headers
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching organization data:', error);

        return NextResponse.json(
            {
                error: 'Internal server error',
                message: error.message
            },
            { status: 500 }
        );
    }
}

export async function fetchPageData(id) {
    if (!id) {
        throw new Error('Organization ID is required');
    }

    // Try to get the username from the mapping, or use the ID as username if not found
    const username = ID_TO_USERNAME[id.toLowerCase()] || id;

    try {
        // Log the URL we're trying to fetch
        const apiUrl = `https://share.happenings.dk/page/${username}`;
        console.log(`Fetching from: ${apiUrl}`);

        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json'
            },
            cache: 'no-store', // Ensure we're not using any cached responses
            method: 'GET'
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response from API:', errorText);
            throw new Error(`Failed to fetch organization data: ${response.status}`);
        }

        // Try to parse the response as JSON
        const data = await response.json();

        // Handle different data formats
        if (!data.Page && data.Pages && data.Pages.length > 0) {
            // Handle case where we got a list of pages
            console.log("Received pages list instead of specific page");
            return {
                Page: data.Pages[0], // Use first page as fallback
                Events: data.Events || [],
                Posts: data.Posts || []
            };
        } else if (!data.Page) {
            throw new Error("Unexpected data format, missing 'Page' property");
        }

        return data;
    } catch (error) {
        console.error('Error fetching page data:', error);
        throw error;
    }
}
