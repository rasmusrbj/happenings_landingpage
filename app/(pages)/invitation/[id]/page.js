// app/invitation/[id]/page.js
import InvitationPage from "@/app/(pages)/invitation/InvitationPage";

// Server-side fetch function
async function getInvitationData(id) {
    if (!id) return null;

    try {
        const res = await fetch(`https://share.happenings.dk/invitation/${id}`, {
            next: { revalidate: 60 },
            cache: 'no-store' // Ensure we get fresh data each time
        });

        if (!res.ok) {
            console.error(`Failed to fetch invitation with status: ${res.status}`);
            return null;
        }

        const data = await res.json();

        // Process the data
        const start = data.Event.start_date.seconds * 1000;
        let isThereAnEndTime;
        let end = data.Event.end_date;

        if (data.Event.end_date == null) {
            end = "";
            isThereAnEndTime = false;
        } else {
            end = data.Event.end_date.seconds * 1000;
            isThereAnEndTime = true;
        }

        return { data, start, end, isThereAnEndTime };
    } catch (e) {
        console.error("Error fetching invitation data:", e);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { id } = params;
    const invitationData = await getInvitationData(id);

    if (!invitationData) {
        return {
            title: 'Happenings | Invalid Invitation',
        };
    }

    const { data } = invitationData;
    const event = data.Event;
    const eventImage = event.image.original;
    const url = `https://happenings.dk/invitation/${data.Invitation.id}`;

    return {
        title: `Happenings | Invitation for ${event.title}`,
        description: event.title,
        openGraph: {
            title: "Happenings | Invitation",
            description: event.title,
            images: [
                {
                    url: eventImage,
                    width: 800,
                    height: 600,
                    alt: "Event image",
                },
            ],
            url: url,
            type: 'website',
            siteName: 'Happenings',
        },
        twitter: {
            card: 'summary_large_image',
            title: "Happenings | Invitation",
            description: event.title,
            images: [eventImage],
        },
    };
}

export default async function Page({ params }) {
    const invitationData = await getInvitationData(params.id);

    // Pass the pre-fetched data to the client component
    return <InvitationPage initialData={invitationData} />;
}
