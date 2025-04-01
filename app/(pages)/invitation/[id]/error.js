// app/invitation/[id]/error.js
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <Alert variant="destructive" className="max-w-md mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>An error occured</AlertTitle>
                <AlertDescription>
                    We could not find the invitation. Please try again, or contact <a className="text-blue-500">support</a>
                </AlertDescription>
            </Alert>
            <Button onClick={() => reset()} variant="outline">
                Try again
            </Button>
        </div>
    );
}
