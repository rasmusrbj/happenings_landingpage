// page.js

import HelpDeskComponent from "@/app/(pages)/help/HelpDeskComponent";

export const metadata = {
    title: 'Happenings Help Center',
    description: 'Find answers to common questions and learn how to use the Happenings app',
    openGraph: {
        title: 'Happenings Help Center',
        description: 'Find answers to common questions and learn how to use the Happenings app',
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
        title: 'Happenings Help Center',
        description: 'Find answers to common questions and learn how to use the Happenings app',
        images: ['/images/app_leaders.webp'],
    },
};

export default function HelpDeskPage() {
    return <HelpDeskComponent />;
}
