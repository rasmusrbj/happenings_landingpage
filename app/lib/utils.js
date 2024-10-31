import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function formatDate(seconds) {
    const date = new Date(seconds * 1000)
    return new Intl.DateTimeFormat('da-DK', {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
    }).format(date)
}

export function formatTime(date) {
    return date.toLocaleTimeString('da-DK', {
        hour: '2-digit',
        minute: '2-digit'
    })
}

export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch (err) {
        console.error('Failed to copy:', err)
        return false
    }
}