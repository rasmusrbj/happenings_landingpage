'use client';
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import NavHeaderDark from "@/app/(components)/universal/navigation/header/nav_bar_dark";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

const HelpDesk = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const helpArticles = [
        {
            id: "reset-password",
            category: "account",
            title: "How to reset your password (if logged in)",
            content: (
                <div className="space-y-4">
                    <p>You can change your password in the app by following these steps:</p>
                    <ol className="space-y-2 pl-5 list-decimal">
                        <li>Open the app and tap on <strong>Menu</strong> in the bottom navigation</li>
                        <li>Select <strong>Settings</strong></li>
                        <li>Tap on <strong>Account and Security</strong></li>
                        <li>Select <strong>Password</strong></li>
                        <li>Enter your current password and your new password</li>
                        <li>Tap <strong>Save</strong> to update your password</li>
                    </ol>
                    <div className="bg-slate-100 p-4 rounded-md mt-4">
                        <p className="text-sm text-slate-700">
                            <strong>Note:</strong> For security reasons, your new password must be at least 8 characters long and include a combination of letters, numbers, and special characters.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "upload-profile-image",
            category: "profile",
            title: "How to upload a profile image",
            content: (
                <div className="space-y-4">
                    <p>You can upload or update your profile image by following these steps:</p>
                    <ol className="space-y-2 pl-5 list-decimal">
                        <li>Open the app and tap on <strong>Menu</strong> in the bottom navigation</li>
                        <li>Select <strong>Profile</strong></li>
                        <li>In the top right corner, tap the <strong>...</strong> button</li>
                        <li>Select <strong>Upload or take a photo</strong></li>
                        <li>Choose to either take a new photo or select one from your gallery</li>
                        <li>Crop and adjust the image as needed</li>
                        <li>Tap <strong>Save</strong> to update your profile image</li>
                    </ol>
                    <div className="bg-slate-100 p-4 rounded-md mt-4">
                        <p className="text-sm text-slate-700">
                            <strong>Tip:</strong> Profile images work best when they have equal width and height (square format).
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "transfer-ticket",
            category: "events",
            title: "How to transfer a ticket to a friend",
            content: (
                <div className="space-y-4">
                    <p>You can transfer a ticket you've purchased to a friend by following these steps:</p>
                    <ol className="space-y-2 pl-5 list-decimal">
                        <li>Open the app and tap on <strong>Wallet</strong> in the navigation</li>
                        <li>Find and tap on the ticket you want to transfer</li>
                        <li>In the top right corner, tap the <strong>...</strong> menu button</li>
                        <li>Select <strong>Transfer ticket</strong> from the action sheet</li>
                        <li>A list of your friends will appear</li>
                        <li>Find the friend you want to transfer the ticket to</li>
                        <li>Tap the <strong>switch</strong> icon next to their name and image</li>
                        <li>Confirm the transfer when prompted</li>
                    </ol>
                    <div className="bg-slate-100 p-4 rounded-md mt-4">
                        <p className="text-sm text-slate-700">
                            <strong>Important:</strong> You can only transfer tickets to users who are already your friends in the app. If you need to transfer a ticket to someone who isn't your friend yet, you'll need to add them as a friend first.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "friend-requests",
            category: "social",
            title: "How to view and respond to friend requests",
            content: (
                <div className="space-y-4">
                    <p>You can view and respond to friend requests by following these steps:</p>
                    <ol className="space-y-2 pl-5 list-decimal">
                        <li>Open the app and tap on <strong>Menu</strong> in the bottom navigation</li>
                        <li>Select <strong>Friends</strong> from the list of shortcuts</li>
                        <li>Tap on the <strong>Users icon</strong> in the top right corner</li>
                        <li>You'll see a list of pending friend requests</li>
                        <li>For each request, choose to either <strong>Accept</strong> or <strong>Decline</strong></li>
                    </ol>
                    <div className="bg-slate-100 p-4 rounded-md mt-4">
                        <p className="text-sm text-slate-700">
                            <strong>Tip:</strong> When you accept a friend request, you'll immediately be able to see each other's profiles, share events, and transfer tickets.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "password-unavailable",
            category: "account",
            title: "How to reset your password (not logged in)",
            content: (
                <div className="space-y-4">
                    <p>We recommend that you try and look for your invitation in your spam folder, before you reach out to us, and if it is not there, you change your password in the app by following these steps:</p>
                    <ol className="space-y-2 pl-5 list-decimal">
                        <li>Open the app and tap on <strong>Need help?</strong> just below the e-mail and password fields</li>
                        <li>Select <strong>I forgot my password</strong></li>
                        <li>Enter your<strong>e-mail</strong></li>
                        <li>Select <strong>Send email</strong></li>
                        <li>Open your e-mail app</li>
                        <li>Enter your new password and confirm it once again</li>
                        <li>Tap <strong>Save</strong> to update your password</li>
                    </ol>
                    <div className="bg-slate-100 p-4 rounded-md mt-4">
                        <p className="text-sm text-slate-700">
                            <strong>Note:</strong> For security reasons, your new password must be at least 8 characters long and include a combination of letters, numbers, and special characters.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "claim-club",
            category: "club",
            title: "How to get access to a club/page on Happenings as an admin",
            content: (
                <div className="space-y-4">
                    <p>If you are a club admin, you can claim your club by follwing these very simple steps:</p>
                    <ol className="space-y-2 pl-5 list-decimal">
                        <li>Open your e-mail, and enter <strong>support@happenings.dk</strong></li>
                        <li>Add your <strong>club name</strong> in the <strong>subject field</strong></li>
                        <li>Add your <strong>role in the club</strong></li>
                        <li>Attach your <strong>phone-number</strong></li>
                        <li>If your club has a website, it is valid to send a mail from the domain of the club</li>
                        <li>Attach proof that you are a club admin</li>
                        <li>Once ready <strong>Send</strong> the e-mail</li>
                        <li>You will hear back in the blink of an eye</li>
                    </ol>
                    <div className="bg-slate-100 p-4 rounded-md mt-4">
                        <p className="text-sm text-slate-700">
                            <strong>Note:</strong> Documentation can be anything from a legal document to proof that you currently manage the existing Facebook page or Instagram account. We will ask for further information, if we feel required to.
                        </p>
                    </div>
                </div>
            ),
        },
    ];

    const filteredArticles = searchQuery ? helpArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.props.children.some(child =>
                child.type === 'ol' && child.props.children.some(step =>
                    typeof step.props?.children === 'string' &&
                    step.props.children.toLowerCase().includes(searchQuery.toLowerCase())
                )
        )
    ) : helpArticles;

    return (
        <>
            <NavHeaderDark />
            <div className="container mx-auto max-w-5xl py-8 pt-40 px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Happenings Help Center</h1>
                    <p className="text-slate-600">Find answers to common questions and learn how to use the app</p>
                </div>

                <div className="relative mb-8">
                    <Input
                        type="text"
                        placeholder="Search for help..."
                        className="w-full h-12 pl-12"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                </div>

                {searchQuery && (
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">
                            {filteredArticles.length > 0
                                ? `Search Results for "${searchQuery}"`
                                : "No results found"}
                        </h2>
                    </div>
                )}

                <Accordion type="single" collapsible className="w-full">
                    {filteredArticles.map(article => (
                        <AccordionItem key={article.id} value={article.id}>
                            <AccordionTrigger className="text-left font-medium">
                                {article.title}
                            </AccordionTrigger>
                            <AccordionContent>
                                {article.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-12 bg-slate-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Need more help?</h2>
                    <p className="mb-4">Can't find what you're looking for? Get in touch with our support team.</p>
                    <Link href="https://m.me/happenings.dk">
                        <Button className="bg-blue-600 hover:bg-blue-700">Contact Support</Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HelpDesk;
