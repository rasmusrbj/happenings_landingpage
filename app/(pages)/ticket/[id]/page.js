// app/ticket/[id]/page.js
import TicketPage from "@/app/(pages)/ticket/TicketPage";

// Server-side fetch function
async function getTicketData(id) {
    if (!id) return null;

    try {
        const res = await fetch(`https://share.happenings.dk/ticket/${id}`, {
            next: { revalidate: 60 },
            cache: 'no-store' // Ensure we get fresh data each time
        });

        if (!res.ok) {
            console.error(`Failed to fetch ticket with status: ${res.status}`);
            return null;
        }

        return res.json();
    } catch (e) {
        console.error("Error fetching ticket data:", e);
        return null;
    }
}

export async function generateMetadata(props) {
    const id = props.params?.id;

    // Await the data
    const data = await getTicketData(id);

    if (!data) {
        return {
            title: 'Happenings | Ugyldig Billet',
        };
    }

    const fullName = data?.user?.full_name || '';
    const eventTitle = data?.event?.title || 'Event';
    const pageTitle = data?.event?.page?.name || '';
    const image = data?.user?.profile_image?.large || "/static/noProfilePic.png";

    return {
        title: `Happenings | Ticket for ${eventTitle}`,
        description: `${fullName} has a ticket for ${eventTitle} hosted by ${pageTitle}`,
        openGraph: {
            title: `Happenings | Ticket for ${eventTitle}`,
            description: `${fullName} has a ticket for ${eventTitle} hosted by ${pageTitle}`,
            images: [
                {
                    url: image,
                    width: 800,
                    height: 600,
                    alt: `${fullName}'s ticket for ${eventTitle}`,
                },
            ],
            type: 'website',
            siteName: 'Happenings',
        },
        twitter: {
            card: 'summary_large_image',
            title: `Happenings | Ticket for ${eventTitle}`,
            description: `${fullName} has a ticket for ${eventTitle} hosted by ${pageTitle}`,
            images: [image],
        },
    };
}

// Fetch data on the server side
export default async function Page({ params }) {
    const ticketData = await getTicketData(params.id);

    // Pass the pre-fetched data to the client component
    return <TicketPage initialData={ticketData} />;
}
