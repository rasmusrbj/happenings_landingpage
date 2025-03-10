import React, { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

// Country codes for popular countries
const countryCodes = [
    { label: "🇩🇰 Denmark", value: "+45", code: "DK" },
    { label: "🇺🇸 United States", value: "+1", code: "US" },
    { label: "🇬🇧 United Kingdom", value: "+44", code: "GB" },
    { label: "🇪🇸 Spain", value: "+34", code: "ES" },
    { label: "🇫🇷 France", value: "+33", code: "FR" },
    { label: "🇳🇱 Netherlands", value: "+31", code: "NL" },
    { label: "🇩🇪 Germany", value: "+49", code: "DE" },
    { label: "🇮🇹 Italy", value: "+39", code: "IT" },
    { label: "🇨🇦 Canada", value: "+1", code: "CA" },
    { label: "🇧🇪 Belgium", value: "+32", code: "BE" },
    { label: "🇸🇪 Sweden", value: "+46", code: "SE" },
    { label: "🇳🇴 Norway", value: "+47", code: "NO" },
    { label: "🇫🇮 Finland", value: "+358", code: "FI" },
    { label: "🇵🇹 Portugal", value: "+351", code: "PT" },
    { label: "🇮🇪 Ireland", value: "+353", code: "IE" },
    { label: "🇦🇹 Austria", value: "+43", code: "AT" },
    { label: "🇨🇭 Switzerland", value: "+41", code: "CH" },
    { label: "🇬🇷 Greece", value: "+30", code: "GR" },
    { label: "🇵🇱 Poland", value: "+48", code: "PL" },
].sort((a, b) => a.label.localeCompare(b.label));

// Set Denmark as default for the demo, but you can change this
const defaultCountry = countryCodes.find(c => c.code === "DK");

const PhoneInput = ({ value, onChange, error }) => {
    const [open, setOpen] = useState(false);
    const [countryCode, setCountryCode] = useState(defaultCountry);

    // Parse the phone number if it already has a country code
    const [phoneNumber, setPhoneNumber] = useState(() => {
        if (value && value.includes(' ')) {
            return value.split(' ')[1] || '';
        }
        return value || '';
    });

    const handleCountryChange = (code) => {
        // Find the country object from the countryCodes array
        const selectedCountry = countryCodes.find(c => c.code === code);

        if (selectedCountry) {
            setCountryCode(selectedCountry);
            updateCombinedValue(selectedCountry.value, phoneNumber);
        }
        setOpen(false);
    };

    const handlePhoneChange = (e) => {
        const newPhone = e.target.value;
        setPhoneNumber(newPhone);
        if (countryCode && countryCode.value) {
            updateCombinedValue(countryCode.value, newPhone);
        }
    };

    const updateCombinedValue = (code, number) => {
        onChange(`${code} ${number}`);
    };

    return (
        <div className="flex w-full space-x-2">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-32 justify-between"
                    >
                        {countryCode ? countryCode.label.split(" ")[0] + " " + countryCode.value : "Select..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-0">
                    <div className="bg-white rounded-md shadow-md max-h-64 overflow-y-auto">
                        <div className="p-2">
                            <input
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Search country..."
                            />
                        </div>
                        <div className="py-2">
                            {countryCodes.map((country) => (
                                <div
                                    key={country.code}
                                    className={`flex items-center px-2 py-1.5 cursor-pointer hover:bg-gray-100 ${
                                        countryCode?.code === country.code ? "bg-blue-50" : ""
                                    }`}
                                    onClick={() => handleCountryChange(country.code)}
                                >
                                    <Check
                                        className={`mr-2 h-4 w-4 ${
                                            countryCode?.code === country.code ? "opacity-100" : "opacity-0"
                                        }`}
                                    />
                                    {country.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
            <Input
                className="flex-1"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={handlePhoneChange}
            />
        </div>
    );
};

export default PhoneInput;
