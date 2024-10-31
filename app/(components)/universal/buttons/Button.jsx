// app/(components)/universal/buttons/Button.jsx
import { cva } from 'class-variance-authority'
import { cn } from '@/app/lib/utils'

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700",
                black: "bg-black text-white hover:bg-gray-800 active:bg-gray-900",
                white: "bg-white text-black hover:bg-gray-100 active:bg-gray-200",
                outlined: "border border-blue-600 text-blue-600 hover:bg-blue-50",
                destructive: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700",
                muted: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
                green: "bg-emerald-600 text-white hover:bg-emerald-500 active:bg-emerald-700",
                ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100",
                link: "text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 px-3 text-xs",
                md: "h-10 px-4",
                lg: "h-12 px-8 text-base",
                icon: "h-9 w-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

export function Button({
                           className,
                           variant,
                           size,
                           children,
                           ...props
                       }) {
    return (
        <button
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {children}
        </button>
    )
}

Button.displayName = "Button"