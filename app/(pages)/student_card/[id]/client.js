// app/(pages)/student/[id]/client.js
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StudentCard from "@/app/(pages)/student_card/StudentCardComponent";

export default function StudentCardClient({ data }) {
    // Extract data
    const name = data?.User?.full_name;
    const image = data?.User?.profile_image?.small;
    const organization = data?.Organization?.name;
    const organizationImage = data?.Organization?.image?.tiny;

    // If data exists, render the student card
    if (data) {
        return (
            <div className="bg-white dark:bg-slate-900 min-h-screen flex justify-center items-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center items-center"
                >
                    <StudentCard
                        images={
                            image == null ? (
                                <Image
                                    height={60}
                                    width={60}
                                    className="rounded-full"
                                    src="/static/noProfilePic.png"
                                    alt=""
                                />
                            ) : (
                                <Image
                                    height={60}
                                    width={60}
                                    className="rounded-full"
                                    src={image}
                                    alt=""
                                />
                            )
                        }
                        title={"This student card is valid"}
                        body={name}
                        organizationImage={organizationImage}
                        organization={organization}
                        studentData={data} // Pass the full data object to StudentCard
                    />
                </motion.div>
            </div>
        );
    }

    // If no data, show error message
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col justify-center items-center p-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="max-w-md dark:bg-slate-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-xl text-red-500 dark:text-red-400">Invalid Student Card</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400">
                            This student card is NOT valid
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center pt-2">
                        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                            <Link href="/">Go back</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}
