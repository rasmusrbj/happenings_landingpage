// app/page/[id]/loading-spinner.js
'use client';

export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-10 h-10 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
        </div>
    );
}
