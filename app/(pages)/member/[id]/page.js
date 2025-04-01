// app/(pages)/member/[id]/page.js
import MemberCardClient from "./client";

// Define runtime
export const runtime = "edge";

// In App Router, we use this function instead of getServerSideProps
async function fetchMemberData(id) {
    try {
        const res = await fetch(`https://share.happenings.dk/member/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return await res.json();
    } catch (e) {
        console.error("Error fetching member data:", e);
        return null;
    }
}

// Metadata generation for App Router
export async function generateMetadata({ params }) {
    const data = await fetchMemberData(params.id);

    if (!data) {
        return {
            title: 'Happenings | Invalid Member Card',
        };
    }

    return {
        title: 'Happenings | Member Card',
        description: 'Get your member card.',
        openGraph: {
            title: 'Happenings | Member Card',
            description: 'Get your member card.',
            images: data?.User?.profile_image?.small ? [{ url: data.User.profile_image.small }] : [{ url: '/favicon.ico' }],
            url: 'https://happenings.social/member',
            siteName: 'Happenings',
            type: 'website',
        },
    };
}

// Main page component
export default async function MemberCardPage({ params }) {
    const data = await fetchMemberData(params.id);

    // Pass the data to the client component
    return <MemberCardClient data={data} />;
}
