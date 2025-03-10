// lib/api-utils.js

const ID_TO_USERNAME = {
    "studenterlauget": "studenterlauget",
    "stud": "studenterlauget"
    // Add more mappings as needed
};

/**
 * Fetches data for an organization by ID
 * @param {string} id - The organization ID
 * @returns {Promise<Object>} - The organization data
 */
export async function fetchPageData(id) {
    if (!id) {
        throw new Error('Organization ID is required');
    }

    // Try to get the username from the mapping, or use the ID as username if not found
    const username = ID_TO_USERNAME[id.toLowerCase()] || id;

    try {
        // Direct fetch from the external API - this avoids the Next.js API route indirection
        const apiUrl = `https://share.happenings.dk/page/${username}`;
        console.log(`Direct fetch from: ${apiUrl}`);

        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json'
            },
            cache: 'no-store', // Ensure we're not using any cached responses
            method: 'GET',
            next: { revalidate: 60 } // Revalidate data every 60 seconds for static pages
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
