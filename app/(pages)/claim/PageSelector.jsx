'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
    Search, 
    Building, 
    Users, 
    Verified, 
    CheckCircle2,
    Loader2,
    AlertTriangle 
} from 'lucide-react';

export default function PageSelector({ 
    value = '', 
    onChange, 
    selectedPage = null,
    onPageSelect,
    disabled = false 
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    
    const searchRef = useRef(null);
    const dropdownRef = useRef(null);

    // Debounced search
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchQuery.trim() || !hasSearched) {
                handleSearch(searchQuery);
            }
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    // Handle clicking outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = async (query) => {
        setIsLoading(true);
        setError(null);
        
        try {
            console.log('Searching for:', query);
            const response = await fetch(`/api/pages/search?q=${encodeURIComponent(query)}&limit=10`);
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
                console.error('Search API error:', response.status, errorData);
                throw new Error(errorData.error || `API error: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Search response:', data);
            
            if (data.debug) {
                console.log('Debug info:', data.debug);
            }
            
            setSearchResults(data.pages || []);
            setHasSearched(true);
            
            if (query.trim() && (!data.pages || data.pages.length === 0)) {
                setError('No pages found matching your search. Try different keywords or check the spelling.');
            }
        } catch (err) {
            console.error('Search error:', err);
            setError(`Failed to search pages: ${err.message}. Please try again or contact support if the problem persists.`);
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setSearchQuery(newValue);
        onChange(newValue);
        
        if (!isOpen && newValue) {
            setIsOpen(true);
        }
    };

    const handlePageClick = (page) => {
        onChange(page.id);
        onPageSelect(page);
        setIsOpen(false);
        setSearchQuery('');
    };

    const handleInputFocus = () => {
        setIsOpen(true);
        if (!hasSearched) {
            handleSearch(''); // Load initial results
        }
    };

    const clearSelection = () => {
        onChange('');
        onPageSelect(null);
        setSearchQuery('');
        setIsOpen(true);
        searchRef.current?.focus();
    };

    return (
        <div className="space-y-2" ref={dropdownRef}>
            <Label className="text-zinc-700 font-medium">
                Page <span className="text-red-500">*</span>
            </Label>
            
            {selectedPage ? (
                // Show selected page
                <Card className="border-zinc-300">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {selectedPage.image ? (
                                    <img 
                                        src={selectedPage.image} 
                                        alt={selectedPage.name}
                                        className="w-10 h-10 rounded-lg object-cover"
                                    />
                                ) : (
                                    <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center">
                                        <Building className="h-5 w-5 text-zinc-500" />
                                    </div>
                                )}
                                
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-semibold text-zinc-700">{selectedPage.name}</h4>
                                        {selectedPage.verified && (
                                            <Verified className="h-4 w-4 text-blue-500" />
                                        )}
                                    </div>
                                    <p className="text-sm text-zinc-500 line-clamp-1">{selectedPage.description}</p>
                                    <div className="flex items-center gap-4 mt-1">
                                        <Badge variant="outline" className="bg-zinc-50 text-zinc-600 border-zinc-200 text-xs">
                                            ID: {selectedPage.id}
                                        </Badge>
                                        {selectedPage.member_count > 0 && (
                                            <div className="flex items-center gap-1 text-xs text-zinc-500">
                                                <Users className="h-3 w-3" />
                                                {selectedPage.member_count.toLocaleString()} members
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={clearSelection}
                                className="text-zinc-500 hover:text-zinc-700"
                                disabled={disabled}
                            >
                                Change
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                // Show search input
                <div className="relative">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <Input
                            ref={searchRef}
                            type="text"
                            placeholder="Search for your page..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            className="pl-10 border-zinc-300 focus:border-bronze-400 focus:ring-bronze-400"
                            disabled={disabled}
                        />
                    </div>

                    {/* Search Results Dropdown */}
                    {isOpen && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-zinc-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                            {isLoading ? (
                                <div className="p-4 text-center">
                                    <Loader2 className="h-5 w-5 animate-spin mx-auto mb-2 text-zinc-400" />
                                    <p className="text-sm text-zinc-500">Searching pages...</p>
                                </div>
                            ) : error ? (
                                <div className="p-4 text-center">
                                    <AlertTriangle className="h-5 w-5 mx-auto mb-2 text-red-500" />
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            ) : searchResults.length > 0 ? (
                                <div className="py-2">
                                    {searchResults.map((page) => (
                                        <button
                                            key={page.id}
                                            type="button"
                                            onClick={() => handlePageClick(page)}
                                            className="w-full p-3 hover:bg-zinc-50 text-left transition-colors"
                                            disabled={disabled}
                                        >
                                            <div className="flex items-center gap-3">
                                                {page.image ? (
                                                    <img 
                                                        src={page.image} 
                                                        alt={page.name}
                                                        className="w-8 h-8 rounded object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-8 h-8 bg-zinc-100 rounded flex items-center justify-center">
                                                        <Building className="h-4 w-4 text-zinc-500" />
                                                    </div>
                                                )}
                                                
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-medium text-zinc-700 truncate">{page.name}</h4>
                                                        {page.verified && (
                                                            <Verified className="h-3 w-3 text-blue-500 flex-shrink-0" />
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-zinc-500 truncate">{page.description}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant="outline" className="bg-zinc-50 text-zinc-600 border-zinc-200 text-xs">
                                                            {page.type}
                                                        </Badge>
                                                        {page.member_count > 0 && (
                                                            <div className="flex items-center gap-1 text-xs text-zinc-500">
                                                                <Users className="h-3 w-3" />
                                                                {page.member_count.toLocaleString()}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : hasSearched ? (
                                <div className="p-4 text-center">
                                    <Building className="h-8 w-8 mx-auto mb-2 text-zinc-300" />
                                    <p className="text-sm text-zinc-500 mb-2">No pages found</p>
                                    <p className="text-xs text-zinc-400">
                                        Try different keywords or check the page name
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>
            )}
            
            <p className="text-xs text-zinc-500">
                Search and select the page you want to claim management access for
            </p>
        </div>
    );
}