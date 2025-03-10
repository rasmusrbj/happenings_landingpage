// app/page/[id]/page.js

import { Suspense } from 'react';
import { fetchPageData } from '/app/lib/api-utils';
import OrganizationContent from './organization-content';
import ErrorDisplay from './error-display';
import LoadingSpinner from './loading-spinner';

// This is a server component that fetches data and passes it to the client component
export default async function OrganizationPage({ params }) {
    const { id } = params;

    try {
        // Fetch data on the server (this runs at build time for static pages)
        const pageData = await fetchPageData(id);

        // Wrap the client component in a Suspense boundary for loading states
        return (
            <Suspense fallback={<LoadingSpinner />}>
                <OrganizationContent
                    initialData={pageData}
                    id={id}
                />
            </Suspense>
        );
    } catch (error) {
        // Handle error state
        return (
            <ErrorDisplay
                error={`Failed to load organization: ${error.message}`}
            />
        );
    }
}
