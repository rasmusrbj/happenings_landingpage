import { NextResponse } from 'next/server';

// Claims API configuration
const CLAIMS_API_URL = 'https://api.claim.happenings.cloud/api/v1/claims';
const CLAIMS_API_KEY = 'sCmuYkxqqvzueDwvOsNl_RYb8NuY8XEnVimHw_E2TaU';

export async function POST(request) {
    try {
        // Check if API key is configured
        if (!CLAIMS_API_KEY) {
            console.error('HAPPENINGS_API_KEY not configured');
            return NextResponse.json(
                { error: 'Service configuration error' },
                { status: 500 }
            );
        }

        // Check content type to determine if this is a file upload
        const contentType = request.headers.get('content-type') || '';
        const isFormData = contentType.includes('multipart/form-data');

        let apiEndpoint = CLAIMS_API_URL;
        let body;
        let headers = {
            'X-API-KEY': CLAIMS_API_KEY
        };

        if (isFormData) {
            // Handle file upload - forward the form data as-is
            body = await request.formData();
            // For form data, don't set Content-Type header (let browser set it with boundary)
        } else {
            // Handle JSON data - convert to form-encoded for the API
            const jsonData = await request.json();
            const formData = new URLSearchParams();
            formData.append('claim_data', JSON.stringify(jsonData));
            body = formData.toString();
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        // Make request to Happenings API
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: headers,
            body: body
        });

        // Get response data
        const responseData = await response.json();

        if (!response.ok) {
            console.error('Claims API error:', response.status, responseData);
            return NextResponse.json(
                { 
                    error: responseData.detail || 'Failed to submit claim',
                    status: response.status
                },
                { status: response.status }
            );
        }

        // Return successful response
        return NextResponse.json(responseData);

    } catch (error) {
        console.error('Error processing claim submission:', error);
        return NextResponse.json(
            { error: 'Internal server error while processing claim' },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        // Check if API key is configured
        if (!CLAIMS_API_KEY) {
            return NextResponse.json(
                { error: 'Service configuration error' },
                { status: 500 }
            );
        }

        // Get query parameters for filtering
        const { searchParams } = new URL(request.url);
        const skip = searchParams.get('skip') || '0';
        const limit = searchParams.get('limit') || '10';
        const status = searchParams.get('status') || '';

        // Build query string
        const queryParams = new URLSearchParams({
            skip,
            limit,
            ...(status && { status })
        });

        // Make request to Happenings API
        const response = await fetch(`${CLAIMS_API_URL}?${queryParams}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': CLAIMS_API_KEY
            }
        });

        const responseData = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { 
                    error: responseData.detail || 'Failed to fetch claims',
                    status: response.status
                },
                { status: response.status }
            );
        }

        return NextResponse.json(responseData);

    } catch (error) {
        console.error('Error fetching claims:', error);
        return NextResponse.json(
            { error: 'Internal server error while fetching claims' },
            { status: 500 }
        );
    }
}