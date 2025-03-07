'use client';
import React from 'react';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Users, Share2, CalendarPlus } from 'lucide-react';

const ResponsivePreview = () => {
    const [activeView, setActiveView] = useState('desktop');

    return (
        <div className="w-full p-4 space-y-6">
            <div className="flex justify-center gap-4 mb-2">
                <Button
                    variant={activeView === 'mobile' ? "default" : "outline"}
                    onClick={() => setActiveView('mobile')}
                >
                    Mobile View
                </Button>
                <Button
                    variant={activeView === 'desktop' ? "default" : "outline"}
                    onClick={() => setActiveView('desktop')}
                >
                    Desktop View
                </Button>
            </div>

            <div className={`mx-auto bg-gray-100 rounded-xl p-4 transition-all duration-300 ${
                activeView === 'mobile' ? 'max-w-sm' : 'max-w-4xl'
            }`}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className={`p-4 ${activeView === 'mobile' ? 'flex flex-col gap-3' : 'flex justify-between items-center'}`}>
                        <div>
                            <h1 className={`font-bold ${activeView === 'mobile' ? 'text-xl' : 'text-2xl'}`}>Draw Party for Kapsejladsen 2025</h1>
                            <p className="text-gray-500 flex items-center mt-1 text-sm">
                                <Calendar className="h-4 w-4 mr-1" />
                                21 Mar 2025 · 17:00 - 02:00
                            </p>
                        </div>

                        <div className={`flex gap-2 ${activeView === 'mobile' ? 'w-full' : ''}`}>
                            <Button className={`${activeView === 'mobile' ? 'flex-1' : ''}`} size="sm">Buy Ticket</Button>
                            <Button className={`${activeView === 'mobile' ? 'flex-1' : ''}`} variant="outline" size="sm">Get Directions</Button>
                        </div>
                    </div>

                    {/* Event Image */}
                    <div className="w-full h-40 bg-gradient-to-r from-purple-500 via-pink-500 to-red-200 flex items-center justify-center">
                        <span className="text-white font-semibold">Event Image</span>
                    </div>

                    {/* Event Content */}
                    <div className={`p-4 ${activeView === 'desktop' ? 'grid grid-cols-3 gap-6' : ''}`}>
                        {/* Main Content */}
                        <div className={`${activeView === 'desktop' ? 'col-span-2' : 'mb-4'}`}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>About The Event</CardTitle>
                                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 w-fit">
                                        Open for Registration
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p>The excitement is building, and the moment of truth is finally here – who will go head-to-head at Kapsejladsen 2025?</p>
                                    <p className="mt-2">We invite the entire university to a legendary night, where Klubben and the Aula set the stage for this year's wildest draw!</p>
                                </CardContent>
                            </Card>

                            {activeView === 'mobile' && (
                                <Card className="mt-4">
                                    <CardHeader>
                                        <CardTitle>Details</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Date & Time</p>
                                                <p className="text-sm text-gray-500">21 Mar 2025</p>
                                                <p className="text-sm text-gray-500">17:00 - 02:00</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Address</p>
                                                <p className="text-sm text-gray-500">(KLUBBEN) Fuglesangs Allé 4</p>
                                                <p className="text-sm text-gray-500">8210 Aarhus V</p>
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="pt-2">
                                            <p className="font-medium text-lg">Price: 40 DKK</p>
                                            <p className="text-sm text-gray-500">This includes wardrobe!</p>
                                        </div>

                                        <Button className="w-full">Buy Ticket</Button>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        {/* Sidebar */}
                        {activeView === 'desktop' && (
                            <div className="col-span-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Details</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Date & Time</p>
                                                <p className="text-sm text-gray-500">21 Mar 2025</p>
                                                <p className="text-sm text-gray-500">17:00 - 02:00</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Address</p>
                                                <p className="text-sm text-gray-500">(KLUBBEN) Fuglesangs Allé 4</p>
                                                <p className="text-sm text-gray-500">8210 Aarhus V</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <Users className="h-5 w-5 text-gray-400 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Participants</p>
                                                <p className="text-sm text-gray-500">82 / 875 registered</p>
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="pt-2">
                                            <p className="font-medium text-lg">Price: 40 DKK</p>
                                            <p className="text-sm text-gray-500">This includes wardrobe!</p>
                                        </div>

                                        <div className="pt-4 space-y-2">
                                            <Button className="w-full">Buy Ticket</Button>

                                            <div className="flex gap-2">
                                                <Button variant="outline" className="flex-1">
                                                    <Share2 className="h-4 w-4 mr-2" />
                                                    Share
                                                </Button>

                                                <Button variant="outline" className="flex-1">
                                                    <CalendarPlus className="h-4 w-4 mr-2" />
                                                    Calendar
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsivePreview;
