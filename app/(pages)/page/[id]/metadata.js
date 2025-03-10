// app/page/[id]/metadata.js
import { fetchPageData } from '@/app/api/page/route';

// This is a server component that will generate the metadata
export async function generateMetadata({ params }) {
    const { id } = params;

    // Fetch the data for this organization
    try {
        const data = await fetchPageData(id);

        if (!data || !data.Page) {
            return {
                title: 'Page | Happenings',
                description: 'View page details and events',
            };
        }

        const page = data.Page;
        const firstEvent = data.Events && data.Events.length > 0 ? data.Events[0] : null;

        // Base metadata
        const metadata = {
            title: `${page.name} | Happenings`,
            description: page.description || `Check out ${page.name}'s events and posts on Happenings`,
            openGraph: {
                title: page.name,
                description: page.description || `Check out ${page.name}'s events and posts on Happenings`,
                type: 'website',
                locale: 'en_US',
                siteName: 'Happenings',
            },
            twitter: {
                card: 'summary_large_image',
                title: page.name,
                description: page.description || `Check out ${page.name}'s events and posts on Happenings`,
            }
        };

        // Add organization image if available
        if (page.image && page.image.medium) {
            metadata.openGraph.images = [{ url: page.image.medium }];
            metadata.twitter.images = [{ url: page.image.medium }];
        }

        // If there's an upcoming event with an image, include that too
        if (firstEvent && firstEvent.image && firstEvent.image.medium) {
            // If we already have an org image, add the event image as additional
            if (metadata.openGraph.images) {
                metadata.openGraph.images.push({ url: firstEvent.image.medium });
                metadata.twitter.images.push({ url: firstEvent.image.medium });
            } else {
                metadata.openGraph.images = [{ url: firstEvent.image.medium }];
                metadata.twitter.images = [{ url: firstEvent.image.medium }];
            }

            // If the first event has a title, include it in the description
            if (firstEvent.title) {
                const eventInfo = `Upcoming event: ${firstEvent.title}`;
                metadata.description = `${metadata.description}. ${eventInfo}`;
                metadata.openGraph.description = `${metadata.openGraph.description}. ${eventInfo}`;
                metadata.twitter.description = `${metadata.twitter.description}. ${eventInfo}`;
            }
        }

        return metadata;
    } catch (error) {
        console.error('Error generating metadata:', error);
        // Fallback metadata
        return {
            title: 'Page | Happenings',
            description: 'View page details and events',
        };
    }
}
