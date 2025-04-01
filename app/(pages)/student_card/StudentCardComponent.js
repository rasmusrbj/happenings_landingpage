// components/cards/student_card.js
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, MapPin, Mail, Calendar, School, Clock } from "lucide-react";
import { motion } from "framer-motion";
// import { QRCodeSVG } from 'qrcode.react'; // Optional - You can use this if you have it installed

const StudentCard = ({
                         images,
                         title,
                         body,
                         organization,
                         organizationImage,
                         studentData
                     }) => {
    // Format data
    const studentId = studentData?.User?.id || '';
    const studentEmail = studentData?.User?.student_email || studentData?.User?.email || '';
    const studentCity = studentData?.User?.address?.city || '';
    const studentCountry = studentData?.User?.address?.country || '';

    // Format birthday if available
    const formatBirthday = () => {
        if (studentData?.User?.unverified_birthday?.seconds) {
            const birthdayDate = new Date(studentData.User.unverified_birthday.seconds * 1000);
            return birthdayDate.toLocaleDateString('da-DK');
        }
        return '';
    };

    // Format issue date
    const formatIssueDate = () => {
        if (studentData?.User?.created_at?.seconds) {
            const createdDate = new Date(studentData.User.created_at.seconds * 1000);
            return createdDate.toLocaleDateString('da-DK');
        }
        return new Date().toLocaleDateString('da-DK');
    };

    // Calculate expiry date (1 year from issue)
    const formatExpiryDate = () => {
        if (studentData?.User?.created_at?.seconds) {
            const createdDate = new Date(studentData.User.created_at.seconds * 1000);
            const expiryDate = new Date(createdDate);
            expiryDate.setFullYear(expiryDate.getFullYear() + 1);
            return expiryDate.toLocaleDateString('da-DK');
        }

        const today = new Date();
        const expiryDate = new Date();
        expiryDate.setFullYear(today.getFullYear() + 1);
        return expiryDate.toLocaleDateString('da-DK');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm"
        >
            <Card className="overflow-hidden bg-white dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-gray-700 shadow-xl">
                {/* Card Header with Organization */}
                <div className="relative p-6 pb-0">
                    <div className="absolute top-4 right-4 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle size={12} className="text-green-600 dark:text-green-500" />
                        <span className="text-green-600 dark:text-green-400 text-xs font-medium">Valid</span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                        {organizationImage && (
                            <Avatar className="h-8 w-8 ring-2 ring-gray-100 dark:ring-white/10">
                                <AvatarImage src={organizationImage} alt={organization} />
                                <AvatarFallback>{organization?.charAt(0)}</AvatarFallback>
                            </Avatar>
                        )}
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">{organization}</h3>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                </div>

                {/* Card Content with Student Details */}
                <CardContent className="pt-6 pb-6 flex flex-col items-center">
                    <div className="relative mb-5">
                        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-500/20 blur-xl rounded-full" />
                        <div className="relative">
                            {typeof images === 'object' ? (
                                images
                            ) : (
                                <Avatar className="h-40 w-40 ring-2 ring-gray-100 dark:ring-white/20">
                                    <AvatarImage src={images || "/static/noProfilePic.png"} alt={body} />
                                    <AvatarFallback className="text-lg">{body?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{body}</h2>

                    {/* Student Information */}
                    <div className="w-full space-y-2 mt-2 mb-4">
                        {studentEmail && (
                            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                <Mail size={12} className="flex-shrink-0" />
                                <span className="truncate">{studentEmail}</span>
                            </div>
                        )}

                        {(studentCity || studentCountry) && (
                            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                <MapPin size={12} className="flex-shrink-0" />
                                <span>{[studentCity, studentCountry].filter(Boolean).join(', ')}</span>
                            </div>
                        )}

                        {studentId && (
                            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                <School size={12} className="flex-shrink-0" />
                                <span>Student ID: {studentId}</span>
                            </div>
                        )}
                    </div>

                    <div className="w-full">
                        <div className="w-full h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded flex items-center justify-center">
                            <p className="text-white text-sm font-medium">{title}</p>
                        </div>
                    </div>

                    {/* QR Code - Using placeholder or QRCodeSVG if available */}
                    <div className="mt-6 p-3 bg-white rounded-lg">
                        {/* If you have qrcode.react installed, you can use this */}
                        {/* <QRCodeSVG value={qrValue} size={96} includeMargin /> */}

                        {/* Placeholder if QRCodeSVG is not available */}
                        <div className="w-96 h-24 bg-gray-100 border border-gray-200 flex flex-col items-center justify-center rounded">
                            <span className="text-xs text-gray-500 mb-1">Student Card ID</span>
                            <span className="text-xs font-mono bg-gray-50 px-2 py-1 rounded border border-gray-200">{studentId}</span>
                        </div>
                    </div>

                    {/* Date Information */}
                    <div className="w-full mt-4 grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                        <div className="flex items-center gap-1">
                            <Calendar size={10} className="flex-shrink-0" />
                            <span>Issued: {formatIssueDate()}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                            <Clock size={10} className="flex-shrink-0" />
                            <span>Expires: {formatExpiryDate()}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default StudentCard;
