import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q') || '';
        const limit = parseInt(searchParams.get('limit') || '20');
        const offset = parseInt(searchParams.get('offset') || '0');

        // Make request to Happenings pages API
        const apiUrl = 'https://share.happenings.dk/pages';
        console.log(`Fetching pages from: ${apiUrl} with query: "${query}"`);

        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'HappeningsLandingPage/1.0'
            },
            cache: 'no-store',
            timeout: 10000 // 10 second timeout
        });

        if (!response.ok) {
            console.error('Pages API error:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Error response body:', errorText);
            return NextResponse.json(
                { 
                    error: `Failed to fetch pages from Happenings API: ${response.status} ${response.statusText}`,
                    details: errorText
                },
                { status: response.status }
            );
        }

        const responseText = await response.text();
        console.log('Raw response length:', responseText.length);
        
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('Failed to parse JSON response:', parseError);
            console.error('Response was:', responseText.substring(0, 500));
            return NextResponse.json(
                { error: 'Invalid JSON response from pages API' },
                { status: 500 }
            );
        }

        console.log('Pages API response structure:', typeof data, Object.keys(data || {}));

        // Extract pages from response (adjust based on actual API structure)
        let allPages = [];
        if (data && data.Pages && Array.isArray(data.Pages)) {
            allPages = data.Pages;
            console.log('Found Pages array with', allPages.length, 'items');
        } else if (Array.isArray(data)) {
            allPages = data;
            console.log('Data is array with', allPages.length, 'items');
        } else if (data && typeof data === 'object') {
            // Check if there are pages in other possible structures
            const possibleKeys = ['pages', 'data', 'results', 'items'];
            for (const key of possibleKeys) {
                if (data[key] && Array.isArray(data[key])) {
                    allPages = data[key];
                    console.log(`Found pages in ${key} with`, allPages.length, 'items');
                    break;
                }
            }
            if (allPages.length === 0) {
                console.error('No array found in response structure:', Object.keys(data));
                return NextResponse.json(
                    { error: 'No pages array found in API response' },
                    { status: 500 }
                );
            }
        } else {
            console.error('Unexpected API response structure:', typeof data, data);
            return NextResponse.json(
                { error: 'Unexpected response format from pages API' },
                { status: 500 }
            );
        }

        // Transform the data to match our component expectations
        const transformedPages = allPages.map(page => {
            try {
                return {
                    id: page.user_name || page.id || page._id || 'unknown',
                    name: page.name || 'Unnamed Organization',
                    description: page.description || '',
                    image: page.image?.medium || page.image?.small || page.image || '',
                    member_count: parseInt(page.member_count) || 0,
                    verified: Boolean(page.verified),
                    type: page.page_type || page.type || 'Organization'
                };
            } catch (transformError) {
                console.error('Error transforming page:', page, transformError);
                return {
                    id: 'error',
                    name: 'Error loading organization',
                    description: 'There was an error loading this organization',
                    image: '',
                    member_count: 0,
                    verified: false,
                    type: 'Organization'
                };
            }
        }).filter(page => page.id !== 'error'); // Remove error entries

        console.log('Transformed', transformedPages.length, 'pages successfully');

        // Apply search filter if query provided
        let filteredPages = transformedPages;
        if (query.trim()) {
            const searchTerm = query.toLowerCase().trim();
            filteredPages = transformedPages.filter(page => {
                try {
                    return (
                        (page.name && page.name.toLowerCase().includes(searchTerm)) ||
                        (page.description && page.description.toLowerCase().includes(searchTerm)) ||
                        (page.id && page.id.toLowerCase().includes(searchTerm)) ||
                        (page.type && page.type.toLowerCase().includes(searchTerm))
                    );
                } catch (filterError) {
                    console.error('Error filtering page:', page, filterError);
                    return false;
                }
            });
            console.log('Filtered to', filteredPages.length, 'pages for query:', query);
        }

        // Apply pagination
        const results = filteredPages.slice(offset, offset + limit);
        console.log('Returning', results.length, 'results');

        return NextResponse.json({
            pages: results,
            total: filteredPages.length,
            hasMore: offset + limit < filteredPages.length,
            query: query,
            debug: {
                totalPages: allPages.length,
                transformedPages: transformedPages.length,
                filteredPages: filteredPages.length,
                returnedPages: results.length
            }
        });

    } catch (error) {
        console.error('Error searching pages:', error);
        return NextResponse.json(
            { error: 'Internal server error while searching pages' },
            { status: 500 }
        );
    }
}

