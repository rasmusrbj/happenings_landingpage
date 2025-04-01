// app/invitation/[id]/loading.js
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
    return (
        <div className="pb-20">
            {/* Skeleton for the invitation bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm py-3 px-4">
                <div className="max-w-3xl mx-auto flex items-center gap-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-5 w-48" />
                    </div>
                </div>
            </div>

            <div className="pt-20 max-w-3xl mx-auto px-4">
                {/* Skeleton for event image */}
                <Skeleton className="w-full h-60 sm:h-80 md:h-96 mb-4 rounded-lg" />

                {/* Skeleton for button */}
                <Skeleton className="w-full h-12 mb-6 rounded-md" />

                {/* Skeleton for event title */}
                <Skeleton className="h-8 w-3/4 mb-4" />

                {/* Skeleton for date and time section */}
                <div className="flex items-start gap-3 mb-6 mt-6">
                    <Skeleton className="h-9 w-9 rounded-lg" />
                    <div className="w-full">
                        <Skeleton className="h-5 w-32 mb-2" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-28" />
                    </div>
                </div>

                {/* Skeleton for address section */}
                <div className="flex items-start gap-3 mb-6">
                    <Skeleton className="h-9 w-9 rounded-lg" />
                    <div className="w-full">
                        <Skeleton className="h-5 w-24 mb-2" />
                        <Skeleton className="h-4 w-52 mb-1" />
                        <Skeleton className="h-4 w-36" />
                    </div>
                </div>

                {/* Skeleton for host section */}
                <div className="flex items-start gap-3 mb-6">
                    <Skeleton className="h-9 w-9 rounded-lg" />
                    <div className="w-full">
                        <Skeleton className="h-5 w-20 mb-2" />
                        <Skeleton className="h-4 w-44" />
                    </div>
                </div>

                {/* Skeleton for description section */}
                <Card className="mb-6 border-gray-200">
                    <CardContent className="pt-6">
                        <Skeleton className="h-5 w-28 mb-3" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
