// app/page/[id]/components/TabNavigation.js
import * as Tabs from '@radix-ui/react-tabs'
import { cn } from '@/app/lib/utils'

const TAB_MAPPING = {
    1: { value: 'feed', label: 'Feed' },
    2: { value: 'events', label: 'Events' },
    3: { value: 'photos', label: 'Photos' },
    4: { value: 'jobs', label: 'Jobs' },
    5: { value: 'benefits', label: 'Benefits' },
    6: { value: 'articles', label: 'Articles' }
}

export default function TabNavigation({ tabs = [] }) {
    return (
        <Tabs.List className="flex border-b border-gray-200 dark:border-slate-700 mb-6">
            {tabs.map(tabId => (
                <TabTrigger
                    key={tabId}
                    value={TAB_MAPPING[tabId].value}
                    label={TAB_MAPPING[tabId].label}
                />
            ))}
            <TabTrigger value="info" label="Info" />
        </Tabs.List>
    )
}

function TabTrigger({ value, label }) {
    return (
        <Tabs.Trigger
            value={value}
            className={cn(
                "flex-1 py-3 px-4 text-sm font-medium text-gray-500 dark:text-slate-400",
                "hover:text-gray-700 dark:hover:text-slate-300",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                "data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400",
                "data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-400",
                "transition-all duration-200"
            )}
        >
            {label}
        </Tabs.Trigger>
    )
}