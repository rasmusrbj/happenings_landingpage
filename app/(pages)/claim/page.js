'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// Import Shadcn components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Users, Calendar, Ticket, Shield, Target, CreditCard } from 'lucide-react';
import NavHeader from "@/app/(components)/universal/navigation/header/nav_bar";
import PhoneInput from "@/app/(pages)/claim/PhoneInput";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

const benefits = [
    "Completely free, forever",
    "No strings attached",
    "Access it anywhere, anytime",
    "Maximum security and privacy",
    "Manage events with ease",
    "Collect payments automatically",
];

const features = [
    {
        name: "Safety",
        description: "Students can only join with a valid student email.",
        icon: <Shield className="h-8 w-8 text-blue-500" />
    },
    {
        name: "Audiences",
        description: "Reach students from specific years, studies, levels, etc.",
        icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
        name: "Memberships",
        description: "Decide how people can join, payment dues, etc.",
        icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
        name: "Engagement",
        description: "Create albums, polls, posts... to activate your members.",
        icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
        name: "Events",
        description: "Or just, happenings? Create, share, and congregate.",
        icon: <Calendar className="h-8 w-8 text-blue-500" />
    },
    {
        name: "Tickets",
        description: "Sell tickets, or just keep track of who's coming. No fees.",
        icon: <Ticket className="h-8 w-8 text-blue-500" />
    },
];

export default function ClaimMyClubPage() {
    // Form state
    const [formData, setFormData] = useState({
        personalName: "",
        email: "",
        clubName: "",
        phoneNumber: ""
    });

    // Error state
    const [errors, setErrors] = useState({});

    // Success state
    const [success, setSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for this field when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Handle phone number change from PhoneInput component
    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            phoneNumber: value
        });

        // Clear error for this field when user types
        if (errors.phoneNumber) {
            setErrors({
                ...errors,
                phoneNumber: null
            });
        }
    };

    /// Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.personalName || formData.personalName.length < 2) {
            newErrors.personalName = "Name must be at least 2 characters.";
        }

        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.clubName || formData.clubName.length < 2) {
            newErrors.clubName = "Club name must be at least 2 characters.";
        }

        // Check if phone number contains a country code and at least 5 digits
        if (!formData.phoneNumber || !/^\+\d{1,4}\s\d{5,}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Please enter a valid phone number with country code.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch('/api/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                        recipient: "onboarding@happenings.social"
                    }),
                });

                if (response.ok) {
                    // Show success message
                    setSuccess(true);

                    // Reset form
                    setFormData({
                        personalName: "",
                        email: "",
                        clubName: "",
                        phoneNumber: ""
                    });

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                } else {
                    throw new Error('Failed to submit form');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrors({
                    ...errors,
                    submit: "There was a problem submitting your request. Please try again."
                });
            }
        }
    };

    return (
        <>
        <NavHeader />
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            {/* Hero Section with Background Image */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
                <div className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
                            Claim Your Club Today
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                            Build your community with Happenings — whether it's a study group, a social club, or an activist circle.
                        </p>
                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                                <Link href="#request-form" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                                    Get Started Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                        <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,133.3C672,128,768,160,864,186.7C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 -mt-6 relative z-10">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Features Column - Visual Cards */}
                    <div className="lg:col-span-7 space-y-8">
                        <Card className="border-none shadow-lg overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                <CardTitle className="text-2xl">Centralize Your Student Community</CardTitle>
                                <CardDescription className="text-blue-100">
                                    Multiple platforms consolidated into one cohesive tool
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                                            <div className="mb-4">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Testimonial */}
                        <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50">
                            <CardContent className="p-8">
                                <div className="relative">
                                    <svg className="absolute top-0 left-0 h-16 w-16 text-blue-200 transform -translate-x-6 -translate-y-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p className="relative text-lg text-gray-600 italic mt-6 ml-4">
                                        "Happenings transformed how we manage our club. Everything from event planning to member management is now seamless."
                                    </p>
                                    <div className="mt-4 ml-4">
                                        <p className="text-base font-medium text-gray-900">Julie Meyer</p>
                                        <p className="text-sm text-gray-500">Club Master, Juridisk Diskussionsklub, KU</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-5">
                        <Card id="request-form" className="sticky top-8 border-none shadow-xl overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                <CardTitle className="text-2xl">Request Your Club Access</CardTitle>
                                <CardDescription className="text-blue-100">
                                    Fill out the form below and we'll help you get started
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                {success && (
                                    <Alert className="mb-6 bg-green-50 text-green-800 border border-green-200 rounded-lg">
                                        <div className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <AlertDescription>
                                                Thank you for your submission! We'll contact you soon to get your club onboarded.
                                            </AlertDescription>
                                        </div>
                                    </Alert>
                                )}

                                {errors.submit && (
                                    <Alert className="mb-6 bg-red-50 text-red-800 border border-red-200 rounded-lg">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <AlertDescription>
                                                {errors.submit}
                                            </AlertDescription>
                                        </div>
                                    </Alert>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="personalName" className="text-gray-700 font-medium">Your Name</Label>
                                        <Input
                                            id="personalName"
                                            name="personalName"
                                            placeholder="John Doe"
                                            value={formData.personalName}
                                            onChange={handleChange}
                                            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        {errors.personalName && (
                                            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.personalName}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <p className="text-sm text-gray-500 flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            We'll never share your email with anyone else
                                        </p>
                                        {errors.email && (
                                            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="clubName" className="text-gray-700 font-medium">Club Name</Label>
                                        <Input
                                            id="clubName"
                                            name="clubName"
                                            placeholder="Photography Club"
                                            value={formData.clubName}
                                            onChange={handleChange}
                                            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        {errors.clubName && (
                                            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.clubName}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">Phone Number</Label>
                                        <PhoneInput
                                            value={formData.phoneNumber}
                                            onChange={handlePhoneChange}
                                        />
                                        <p className="text-sm text-gray-500 flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            For quick communications about your club setup
                                        </p>
                                        {errors.phoneNumber && (
                                            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.phoneNumber}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 transition-all duration-300 transform hover:-translate-y-1"
                                        size="lg"
                                    >
                                        Claim My Club
                                    </Button>
                                </form>
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-4 bg-gray-50 p-6">
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="flex -space-x-2">
                                        <img src="/sl.webp" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                        <img src="/jdku.webp" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                        <img src="/elsa.webp" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                    </div>
                                    <p className="text-sm text-gray-600">Join 500+ club leaders</p>
                                </div>
                                <Separator />
                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you'll be joining hundreds of student leaders who are building vibrant communities with Happenings.
                                </p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>


            {/* Footer with Wave */}
            <div className="relative mt-16">
                <div className="absolute inset-x-0 top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                        <path fill="#3b82f6" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="relative bg-blue-50 pt-24 pb-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Ready to get started?</h2>
                            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                                Join the community of student leaders using Happenings to build better club experiences.
                            </p>
                            <div className="mt-8">
                                <Link href="#request-form" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                    Claim your club now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </>
    );
}
