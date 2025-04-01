// components/cards/member_card.js
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const MemberCard = ({
                        organizationImage,
                        images,
                        title,
                        name,
                        organization,
                        membershipId
                    }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm"
        >
            <Card className="overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-xl">
                {/* Card Header with Organization */}
                <div className="relative p-6 pb-0">
                    <div className="absolute top-4 right-4 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle size={12} className="text-green-500" />
                        <span className="text-green-400 text-xs font-medium">Valid</span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                        {organizationImage && (
                            <Avatar className="h-6 w-6 ring-2 ring-white/10">
                                <AvatarImage src={organizationImage} alt={organization} />
                                <AvatarFallback>{organization?.charAt(0)}</AvatarFallback>
                            </Avatar>
                        )}
                        <h3 className="text-sm font-medium text-white/80">{organization}</h3>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                </div>

                {/* Card Content with Member Details */}
                <CardContent className="pt-6 pb-8 flex flex-col items-center">
                    <div className="relative mb-5">
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                        <div className="relative">
                            {typeof images === 'object' ? (
                                images
                            ) : (
                                <Avatar className="h-20 w-20 ring-2 ring-white/20">
                                    <AvatarImage src={images || "/static/noProfilePic.png"} alt={name} />
                                    <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
                    <p className="text-sm text-gray-400 mb-6">
                        {membershipId && `ID: ${membershipId}`}
                    </p>

                    <div className="w-full">
                        <div className="w-full h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded flex items-center justify-center">
                            <p className="text-white text-sm font-medium">{title}</p>
                        </div>
                    </div>

                    {/* QR Code Placeholder - Can be replaced with actual QR code */}
                    <div className="mt-6 p-2 bg-white rounded-lg">
                        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-500">QR Code</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default MemberCard;
