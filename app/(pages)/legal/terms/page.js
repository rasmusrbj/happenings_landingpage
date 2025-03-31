// page.js

import TermsComponent from "@/app/(pages)/legal/terms/TermsComponent";

export const metadata = {
    title: 'Happenings - Handelsbetingelser',
    description: 'Handelsbetingelser for Happenings Group A/S',
    openGraph: {
        title: 'Happenings - Handelsbetingelser',
        description: 'Handelsbetingelser for Happenings Group A/S',
        images: [
            {
                url: '/images/app_leaders.webp',
                width: 1200,
                height: 630,
                alt: 'Happenings App',
            },
        ],
        siteName: 'Happenings',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Happenings - Handelsbetingelser',
        description: 'Handelsbetingelser for Happenings Group A/S',
        images: ['/images/app_leaders.webp'],
    },
};

export default function TermsPage() {
    return <TermsComponent />;
}
