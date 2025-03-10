// app/page/[id]/error-display.js
'use client';

import { Button } from '@/components/ui/button';

export default function ErrorDisplay({ error }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-red-700 mb-4">Error Loading Organization</h1>
                <p className="text-red-600 mb-4">{error}</p>
                <p className="text-gray-600">This could be due to:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                    <li>The organization ID may be incorrect</li>
                    <li>The API service may be temporarily unavailable</li>
                    <li>There might be a network issue</li>
                </ul>
                <Button
                    className="mt-6 w-full"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </Button>
            </div>
        </div>
    );
}
