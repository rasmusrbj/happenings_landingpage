// app/page/[id]/loading-spinner.js
'use client';

export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50">
            <div className="relative">
                <div className="w-12 h-12 border-4 border-t-zinc-600 border-r-transparent border-b-zinc-600 border-l-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-12 h-12 border-4 border-t-bronze-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin animate-reverse delay-75"></div>
            </div>
            <p className="mt-4 text-zinc-500 text-sm animate-pulse">Loading organization...</p>
        </div>
    );
}
