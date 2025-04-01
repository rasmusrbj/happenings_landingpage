// page.js

import PrivacyComponent from "@/app/(pages)/legal/privacy/PrivacyComponent";

export const metadata = {
    title: 'Happenings - Privatlivspolitik',
    description: 'Privatlivspolitik for Happenings Group A/S',
    openGraph: {
        title: 'Happenings - Privatlivspolitik',
        description: 'Privatlivspolitik for Happenings Group A/S',
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
        title: 'Happenings - Privatlivspolitik',
        description: 'Privatlivspolitik for Happenings Group A/S',
        images: ['/images/app_leaders.webp'],
    },
};

export default function PrivacyPage() {
    return <PrivacyComponent />;
}
