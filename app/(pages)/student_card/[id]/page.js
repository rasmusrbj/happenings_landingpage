// app/(pages)/student/[id]/page.js

import StudentCardClient from "./client";
import NavHeader from "@/app/(components)/universal/navigation/header/nav_bar";
import Footer from "@/app/(components)/universal/navigation/footer/footer";
import NavHeaderDark from "@/app/(components)/universal/navigation/header/nav_bar_dark";

// Define runtime
export const runtime = "edge";

// Server-side data fetching function for App Router
async function fetchStudentData(id) {
    try {
        const res = await fetch(`https://share.happenings.dk/student_card/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return await res.json();
    } catch (e) {
        console.error("Error fetching student data:", e);
        return null;
    }
}

// Metadata generation for App Router
export async function generateMetadata({ params }) {
    const data = await fetchStudentData(params.id);

    return {
        title: 'Happenings | Student Card',
        description: 'Your student card for your school.',
        openGraph: {
            title: 'Happenings | Student Card',
            description: 'Your student card for your school.',
            images: [{ url: '/static/party.png' }],
            url: 'https://happenings.dk',
            siteName: 'Happenings',
            type: 'website',
        },
    };
}

// Main page component
export default async function StudentCardPage({ params }) {
    // Fetch data using the id from the URL
    const data = await fetchStudentData(params.id);

    return (
        <>
            <NavHeaderDark/>
            <StudentCardClient data={data} />
            <Footer/>
        </>
    );
}
