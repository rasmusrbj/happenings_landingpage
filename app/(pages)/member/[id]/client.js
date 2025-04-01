// app/(pages)/member/[id]/client.js
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/app/(components)/universal/navigation/footer/footer";
import NavHeader from "@/app/(components)/universal/navigation/header/nav_bar";

// Client component that handles animations and client-side rendering
export default function MemberCardClient({ data }) {
    // Extract user and organization data
    const name = data?.User?.full_name;
    const image = data?.User?.profile_image?.small;
    const organization = data?.Page?.name;
    const organizationImage = data?.Page?.image?.tiny;

    // If data exists, render the member card
    if (data) {
        return (
            <>
                <NavHeader />
            <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen flex justify-center items-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <Card className="backdrop-blur-sm bg-white/10 border-gray-700 shadow-xl overflow-hidden">
                        <CardHeader className="pb-2 text-center relative">
                            <div className="absolute top-2 right-2">
                                <Badge variant="success" className="bg-green-500 text-white flex items-center gap-1">
                                    <CheckCircle size={14} />
                                    <span>Valid</span>
                                </Badge>
                            </div>

                            <div className="flex items-center justify-center mb-4">
                                {organizationImage && (
                                    <div className="flex-shrink-0 mr-2">
                                        <Avatar className="h-8 w-8 border border-gray-400">
                                            <AvatarImage src={organizationImage} alt={organization} />
                                            <AvatarFallback>{organization?.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                )}
                                <CardTitle className="text-xl font-bold text-white">{organization}</CardTitle>
                            </div>

                            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-4" />
                        </CardHeader>

                        <CardContent className="flex flex-col items-center pb-6">
                            <div className="mb-4 relative">
                                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 rounded-full" />
                                <Avatar className="h-24 w-24 border-2 border-white/50 shadow-lg">
                                    <AvatarImage src={image || "/static/noProfilePic.png"} alt={name} />
                                    <AvatarFallback className="text-2xl">{name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </div>

                            <CardTitle className="text-2xl font-bold text-white text-center mb-1">{name}</CardTitle>
                            <CardDescription className="text-gray-300 text-center mb-6">User ID: {data.User.id}</CardDescription>

                            <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-center">
                                <p className="text-white font-medium">This membership card is valid</p>
                            </div>
                        </CardContent>

                        <CardFooter className="flex justify-between border-t border-gray-700 pt-4 bg-black/30">
                            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                                <Link href="/">Return Home</Link>
                            </Button>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <Link href={`/page/${data.Page.user_name}`}>View Page</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <div className="mt-4 text-sm text-gray-400 flex flex-row items-center gap-2 jusify-center">
                        <img
                            src="/logo.svg"
                            alt="Logo"
                            height={16}
                            width={12}
                        />
                        <p>Powered by Happenings</p>
                    </div>
                </motion.div>
            </div>
                <Footer/>
            </>
        );
    }

    // If no data, show error message
    return (
        <>
            <NavHeader/>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col justify-center items-center p-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="max-w-md bg-white/5 border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-xl text-red-400">Invalid Member Card</CardTitle>
                        <CardDescription className="text-gray-400">
                            This is not a valid membership card
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center pt-2">
                        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                            <Link href="/">Return Home</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
            <Footer/>
        </>
    );
}
