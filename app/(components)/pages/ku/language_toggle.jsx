"use client";

import { useState } from "react";

export default function LanguageToggle({ onChange }) {
  const [language, setLanguage] = useState("danish");

  const handleToggle = (newLanguage) => {
    setLanguage(newLanguage);
    
    // Call the onChange prop if it exists
    if (onChange) {
      onChange(newLanguage);
    }
    
    // Dispatch a custom event that other components can listen for
    const event = new CustomEvent("languageChange", {
      detail: newLanguage
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="fixed top-20 sm:top-24 right-4 z-30 bg-white rounded-full shadow-md">
      <div className="flex items-center p-1 rounded-full">
        <button
          onClick={() => handleToggle("danish")}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            language === "danish"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Switch to Danish"
        >
          Dansk
        </button>
        <button
          onClick={() => handleToggle("english")}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            language === "english"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Switch to English"
        >
          English
        </button>
      </div>
    </div>
  );
}