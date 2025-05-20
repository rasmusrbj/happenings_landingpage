'use client';

import React, { useState, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Import Shadcn components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
    CheckCircle,
    Users,
    Calendar,
    Ticket,
    Shield,
    Target,
    Upload,
    FileText,
    Building,
    Mail,
    Phone,
    User,
    Briefcase,
    MessageSquare,
    CheckCircle2,
    Clock,
    AlertTriangle,
    X,
    CreditCard,
    Megaphone,
    BarChart3,
    BadgeCheck
} from 'lucide-react';
import NavHeader from "@/app/(components)/universal/navigation/header/nav_bar";
import PhoneInput from "@/app/(pages)/claim/PhoneInput";
import PageSelector from "@/app/(pages)/claim/PageSelector";
import Footer from "@/app/(components)/universal/navigation/footer/footer";
import NavHeaderDark from "@/app/(components)/universal/navigation/header/nav_bar_dark";

const features = [
    {
        name: "Get Verified",
        description: "Show students that your profile is verified",
        icon: <BadgeCheck className="h-6 w-6 text-zinc-600" />
    },
    {
        name: "Digital Membership Cards",
        description: "Make it easy for members to identify themselves and target your posts",
        icon: <CreditCard className="h-6 w-6 text-zinc-600" />
    },
    {
        name: "Sell Tickets with No Fees",
        description: "Save money and make it easier for members to buy tickets",
        icon: <Ticket className="h-6 w-6 text-zinc-600" />
    },
    {
        name: "Direct Communication",
        description: "Reach your audience with important announcements",
        icon: <Megaphone className="h-6 w-6 text-zinc-600" />
    },
    {
        name: "Detailed Insights",
        description: "Access data on visits and interest in your business",
        icon: <BarChart3 className="h-6 w-6 text-zinc-600" />
    },
    {
        name: "Be Present Where Students Are",
        description: "Reach more potential members on Happenings",
        icon: <Users className="h-6 w-6 text-zinc-600" />
    }
];

function ClaimPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const fileInputRef = useRef(null);

    // Get page_id from URL params if available
    const pageIdFromUrl = searchParams.get('page_id') || '';

    // Form state
    const [formData, setFormData] = useState({
        pageId: pageIdFromUrl,
        position: "",
        message: "",
        email: "",
        firstName: "",
        familyName: "",
        fullName: "",
        phone: "",
        pageName: ""
    });

    // Page selection state
    const [selectedPage, setSelectedPage] = useState(null);

    // File upload state
    const [uploadedFile, setUploadedFile] = useState(null);
    const [fileDescription, setFileDescription] = useState("");

    // UI state
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitProgress, setSubmitProgress] = useState(0);
    const [success, setSuccess] = useState(false);
    const [claimId, setClaimId] = useState(null);

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
            phone: value
        });

        if (errors.phone) {
            setErrors({
                ...errors,
                phone: null
            });
        }
    };

    // Handle page selection
    const handlePageIdChange = (pageId) => {
        setFormData({
            ...formData,
            pageId: pageId
        });

        if (errors.pageId) {
            setErrors({
                ...errors,
                pageId: null
            });
        }
    };

    const handlePageSelect = (page) => {
        setSelectedPage(page);
        if (page) {
            // Auto-fill page name if selected from search
            setFormData({
                ...formData,
                pageId: page.id,
                pageName: page.name
            });
        } else {
            setFormData({
                ...formData,
                pageName: ""
            });
        }
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type and size
            const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
            const maxSize = 10 * 1024 * 1024; // 10MB

            if (!allowedTypes.includes(file.type)) {
                setErrors({
                    ...errors,
                    file: "Please upload a PDF, JPEG, or PNG file."
                });
                return;
            }

            if (file.size > maxSize) {
                setErrors({
                    ...errors,
                    file: "File size must be less than 10MB."
                });
                return;
            }

            setUploadedFile(file);
            setErrors({
                ...errors,
                file: null
            });
        }
    };

    // Remove uploaded file
    const removeFile = () => {
        setUploadedFile(null);
        setFileDescription("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.pageId || formData.pageId.length < 2) {
            newErrors.pageId = "Page ID is required (minimum 2 characters).";
        }

        if (!formData.position || formData.position.length < 2) {
            newErrors.position = "Position is required (minimum 2 characters).";
        }

        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.firstName || formData.firstName.length < 1) {
            newErrors.firstName = "First name is required.";
        }

        if (!formData.familyName || formData.familyName.length < 1) {
            newErrors.familyName = "Family name is required.";
        }

        // Phone validation with country code
        if (formData.phone && !/^\+\d{1,4}\s\d{5,}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number with country code.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit claim to API
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitProgress(10);

        try {
            // Prepare claim data
            const claimData = {
                page_id: formData.pageId,
                position: formData.position,
                message: formData.message || "",
                user_info: {
                    email: formData.email,
                    first_name: formData.firstName,
                    family_name: formData.familyName,
                    full_name: `${formData.firstName} ${formData.familyName}`.trim(),
                    phone: formData.phone || "",
                    page_name: formData.pageName || ""
                }
            };

            setSubmitProgress(30);

            // If there's a file, use form data, otherwise use JSON
            let response;
            if (uploadedFile) {
                const formDataToSend = new FormData();
                formDataToSend.append('claim_data', JSON.stringify(claimData));
                formDataToSend.append('document', uploadedFile);
                if (fileDescription) {
                    formDataToSend.append('document_description', fileDescription);
                }

                response = await fetch('/api/claims', {
                    method: 'POST',
                    body: formDataToSend
                });
            } else {
                response = await fetch('/api/claims', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(claimData)
                });
            }

            setSubmitProgress(70);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Failed to submit claim');
            }

            const result = await response.json();
            setSubmitProgress(100);

            // Success
            setClaimId(result._id);
            setSuccess(true);

            // Reset form
            setFormData({
                pageId: pageIdFromUrl,
                position: "",
                message: "",
                email: "",
                firstName: "",
                familyName: "",
                fullName: "",
                phone: "",
                pageName: ""
            });
            setSelectedPage(null);
            removeFile();

        } catch (error) {
            console.error('Error submitting claim:', error);
            setErrors({
                submit: error.message || "There was a problem submitting your claim. Please try again."
            });
            setSubmitProgress(0);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return (
            <>
                <NavHeaderDark />
                <div className="min-h-screen bg-zinc-50">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="mb-8">
                                <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                                </div>
                                <h1 className="text-3xl font-bold text-zinc-700 mb-4">
                                    Claim Submitted Successfully!
                                </h1>
                                <p className="text-lg text-zinc-600 mb-6">
                                    Your claim has been received and is now pending review.
                                </p>

                                {claimId && (
                                    <Badge variant="outline" className="bg-zinc-100 text-zinc-600 border-zinc-200 px-4 py-2">
                                        <FileText className="h-4 w-4 mr-2" />
                                        Claim ID: {claimId}
                                    </Badge>
                                )}
                            </div>

                            <Card className="bg-white border-zinc-200 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-zinc-700 mb-4">What happens next?</h3>
                                    <div className="space-y-4 text-left">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-bronze-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Clock className="h-3 w-3 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-zinc-700">Review Process</p>
                                                <p className="text-sm text-zinc-500">We'll review your claim within 24-48 hours</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-bronze-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Mail className="h-3 w-3 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-zinc-700">Email Confirmation</p>
                                                <p className="text-sm text-zinc-500">You'll receive an email update at your provided address</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle2 className="h-3 w-3 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-zinc-700">Account Setup</p>
                                                <p className="text-sm text-zinc-500">Once approved, we'll help you set up your page</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="mt-8 space-y-4">
                                <Button
                                    onClick={() => {
                                        setSuccess(false);
                                        setClaimId(null);
                                        setSelectedPage(null);
                                    }}
                                    className="bg-zinc-600 hover:bg-zinc-700 text-white"
                                >
                                    Submit Another Claim
                                </Button>
                                <div>
                                    <Link href="/" className="text-zinc-500 hover:text-zinc-600 underline">
                                        Return to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <NavHeader />
            <div className="min-h-screen bg-zinc-50">
                {/* Hero Section */}
                <div className="relative bg-white">
                    <div className="container mx-auto px-4 py-16 lg:py-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge className="bg-bronze-400 text-white border-0 mb-6">
                                <Building className="h-4 w-4 mr-2" />
                                Page Management
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-700 mb-6">
                                Claim Your Page
                            </h1>
                            <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                                Take control of your page on Happenings and manage your community.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

                        {/* Features Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <Card className="bg-white border-zinc-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-zinc-700 flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-bronze-400" />
                                        Why Claim Your Page?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-zinc-700 mb-1">{feature.name}</h3>
                                                <p className="text-sm text-zinc-500">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Testimonial */}
                            <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-0 shadow-lg overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative p-6 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                                        <div className="relative">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                    JM
                                                </div>
                                                <div>
                                                    <cite className="text-sm font-semibold text-zinc-700 not-italic">Julie Meyer</cite>
                                                    <p className="text-xs text-zinc-500">Club Master @ Juridisk Diskussionsklub</p>
                                                </div>
                                            </div>
                                            <blockquote className="text-zinc-700 font-medium leading-relaxed">
                                                "Claiming our page transformed how we manage our community. Everything is now centralized and professional."
                                            </blockquote>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Claim Form */}
                        <div className="lg:col-span-8">
                            <Card className="bg-white border-zinc-200 shadow-sm">
                                <CardHeader className="border-b border-zinc-100">
                                    <CardTitle className="text-2xl text-zinc-700 flex items-center gap-2">
                                        <FileText className="h-6 w-6 text-bronze-400" />
                                        Submit Page Claim
                                    </CardTitle>
                                    <CardDescription className="text-zinc-500">
                                        Fill out the form below to request management access to your page.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="p-8">
                                    {errors.submit && (
                                        <Alert className="mb-6 bg-red-50 border-red-200">
                                            <AlertTriangle className="h-4 w-4 text-red-600" />
                                            <AlertDescription className="text-red-700">
                                                {errors.submit}
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    {isSubmitting && (
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-zinc-600">Submitting claim...</span>
                                                <span className="text-sm text-zinc-600">{submitProgress}%</span>
                                            </div>
                                            <Progress value={submitProgress} className="h-2" />
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {/* Page Information */}
                                        <div className="space-y-6">
                                            <h3 className="text-lg font-semibold text-zinc-700 border-b border-zinc-100 pb-2">
                                                Page Information
                                            </h3>

                                            <PageSelector
                                                value={formData.pageId}
                                                onChange={handlePageIdChange}
                                                selectedPage={selectedPage}
                                                onPageSelect={handlePageSelect}
                                                disabled={isSubmitting}
                                            />
                                            {errors.pageId && (
                                                <p className="text-sm text-red-500 flex items-center gap-1">
                                                    <AlertTriangle className="h-4 w-4" />
                                                    {errors.pageId}
                                                </p>
                                            )}

                                            <div className="space-y-2">
                                                <Label htmlFor="position" className="text-zinc-700 font-medium">
                                                    Your Position <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="position"
                                                    name="position"
                                                    placeholder="e.g., President, Manager, Board Member"
                                                    value={formData.position}
                                                    onChange={handleChange}
                                                    className="border-zinc-300 focus:border-bronze-400 focus:ring-bronze-400"
                                                    disabled={isSubmitting}
                                                />
                                                {errors.position && (
                                                    <p className="text-sm text-red-500 flex items-center gap-1">
                                                        <AlertTriangle className="h-4 w-4" />
                                                        {errors.position}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="pageName" className="text-zinc-700 font-medium">
                                                    Page Name
                                                </Label>
                                                <Input
                                                    id="pageName"
                                                    name="pageName"
                                                    placeholder="Official page name"
                                                    value={formData.pageName}
                                                    onChange={handleChange}
                                                    className="border-zinc-300 focus:border-bronze-400 focus:ring-bronze-400"
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>

                                        {/* Personal Information */}
                                        <div className="space-y-6">
                                            <h3 className="text-lg font-semibold text-zinc-700 border-b border-zinc-100 pb-2">
                                                Contact Information
                                            </h3>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName" className="text-zinc-700 font-medium">
                                                        First Name <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="firstName"
                                                        name="firstName"
                                                        placeholder="First name"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        className="border-zinc-300 focus:border-bronze-400 focus:ring-bronze-400"
                                                        disabled={isSubmitting}
                                                    />
                                                    {errors.firstName && (
                                                        <p className="text-sm text-red-500 flex items-center gap-1">
                                                            <AlertTriangle className="h-4 w-4" />
                                                            {errors.firstName}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="familyName" className="text-zinc-700 font-medium">
                                                        Family Name <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="familyName"
                                                        name="familyName"
                                                        placeholder="Last name"
                                                        value={formData.familyName}
                                                        onChange={handleChange}
                                                        className="border-zinc-300 focus:border-bronze-400 focus:ring-bronze-400"
                                                        disabled={isSubmitting}
                                                    />
                                                    {errors.familyName && (
                                                        <p className="text-sm text-red-500 flex items-center gap-1">
                                                            <AlertTriangle className="h-4 w-4" />
                                                            {errors.familyName}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-zinc-700 font-medium">
                                                    Email Address <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="border-zinc-300 focus:border-bronze-400 focus:ring-bronze-400"
                                                    disabled={isSubmitting}
                                                />
                                                <p className="text-xs text-zinc-500 flex items-center gap-1">
                                                    <Mail className="h-3 w-3" />
                                                    Updates about your claim will be sent here
                                                </p>
                                                {errors.email && (
                                                    <p className="text-sm text-red-500 flex items-center gap-1">
                                                        <AlertTriangle className="h-4 w-4" />
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-zinc-700 font-medium">
                                                    Phone Number
                                                </Label>
                                                <PhoneInput
                                                    value={formData.phone}
                                                    onChange={handlePhoneChange}
                                                    disabled={isSubmitting}
                                                />
                                                <p className="text-xs text-zinc-500 flex items-center gap-1">
                                                    <Phone className="h-3 w-3" />
                                                    Optional - for verification if needed
                                                </p>
                                                {errors.phone && (
                                                    <p className="text-sm text-red-500 flex items-center gap-1">
                                                        <AlertTriangle className="h-4 w-4" />
                                                        {errors.phone}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Additional Information */}
                                        <div className="space-y-6">
                                            <h3 className="text-lg font-semibold text-zinc-700 border-b border-zinc-100 pb-2">
                                                Additional Information
                                            </h3>

                                            <div className="space-y-2">
                                                <Label htmlFor="message" className="text-zinc-700 font-medium">
                                                    Message
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Provide context about your role or why you should manage this page..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="border-zinc-300 focus:border-bronze-400 focus:ring-bronze-400 min-h-[100px]"
                                                    disabled={isSubmitting}
                                                />
                                                <p className="text-xs text-zinc-500">
                                                    Optional - additional information to support your claim
                                                </p>
                                            </div>

                                            {/* File Upload */}
                                            <div className="space-y-4">
                                                <Label className="text-zinc-700 font-medium">
                                                    Supporting Documents
                                                </Label>

                                                {!uploadedFile ? (
                                                    <div
                                                        className="border-2 border-dashed border-zinc-300 rounded-lg p-6 text-center hover:border-bronze-400 transition-colors cursor-pointer"
                                                        onClick={() => fileInputRef.current?.click()}
                                                    >
                                                        <Upload className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
                                                        <p className="text-sm text-zinc-600 mb-1">Upload supporting documents</p>
                                                        <p className="text-xs text-zinc-500">PDF, JPEG, PNG up to 10MB</p>
                                                        <input
                                                            ref={fileInputRef}
                                                            type="file"
                                                            accept=".pdf,.jpg,.jpeg,.png"
                                                            onChange={handleFileUpload}
                                                            className="hidden"
                                                            disabled={isSubmitting}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="border border-zinc-300 rounded-lg p-4">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="flex items-center gap-2">
                                                                <FileText className="h-5 w-5 text-bronze-400" />
                                                                <span className="text-sm font-medium text-zinc-700">{uploadedFile.name}</span>
                                                                <Badge variant="outline" className="bg-zinc-100 text-zinc-600 border-zinc-200">
                                                                    {(uploadedFile.size / 1024 / 1024).toFixed(1)} MB
                                                                </Badge>
                                                            </div>
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={removeFile}
                                                                className="text-zinc-500 hover:text-red-600"
                                                                disabled={isSubmitting}
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                        <Input
                                                            placeholder="Optional description for this document..."
                                                            value={fileDescription}
                                                            onChange={(e) => setFileDescription(e.target.value)}
                                                            className="text-xs border-zinc-300 focus:border-bronze-400 focus:ring-bronze-400"
                                                            disabled={isSubmitting}
                                                        />
                                                    </div>
                                                )}

                                                {errors.file && (
                                                    <p className="text-sm text-red-500 flex items-center gap-1">
                                                        <AlertTriangle className="h-4 w-4" />
                                                        {errors.file}
                                                    </p>
                                                )}

                                                <p className="text-xs text-zinc-500">
                                                    Optional: Upload documents that verify your role
                                                </p>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-6 border-t border-zinc-100">
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-zinc-600 hover:bg-zinc-700 text-white font-medium py-3 text-base h-auto"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                        Submitting Claim...
                                                    </>
                                                ) : (
                                                    <>
                                                        <FileText className="h-4 w-4 mr-2" />
                                                        Submit Page Claim
                                                    </>
                                                )}
                                            </Button>

                                            <p className="text-xs text-zinc-500 text-center mt-3">
                                                By submitting, you confirm the information is accurate and you have authority to manage this page.
                                            </p>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default function ClaimPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-zinc-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-zinc-600">Loading...</p>
                </div>
            </div>
        }>
            <ClaimPageContent />
        </Suspense>
    );
}
