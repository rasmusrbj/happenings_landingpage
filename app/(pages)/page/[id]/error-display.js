// app/page/[id]/error-display.js
'use client';

import { Button } from '@/components/ui/button';

export default function ErrorDisplay({ error }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-zinc-50">
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 max-w-lg w-full shadow-lg">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zinc-500 to-zinc-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-zinc-700 mb-4">Error Loading Organization</h1>
                </div>
                <p className="text-zinc-600 mb-4 text-center">{error}</p>
                <p className="text-zinc-500 mb-2">This could be due to:</p>
                <ul className="list-disc ml-6 mt-2 text-zinc-500 space-y-1">
                    <li>The organization ID may be incorrect</li>
                    <li>The API service may be temporarily unavailable</li>
                    <li>There might be a network issue</li>
                </ul>
                <Button
                    className="mt-6 w-full bg-zinc-600 hover:bg-zinc-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </Button>
            </div>
        </div>
    );
}
