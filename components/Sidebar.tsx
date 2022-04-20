import {
    BellIcon,
    BriefcaseIcon,
    ChipIcon,
    CreditCardIcon,
    GlobeIcon,
    HomeIcon,
    PlayIcon,
    PlusIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

const sidebar = [
    { link: '/dashboard', label: 'Dashboard', icon: BellIcon },
    { link: '/initial', label: 'Initial', icon: PlayIcon },
    { link: '/food', label: 'Food', icon: ShoppingCartIcon },
    { link: '/clothes', label: 'Clothes', icon: CreditCardIcon },
    { link: '/electronics', label: 'Electronics', icon: ChipIcon },
    { link: '/house', label: 'House', icon: HomeIcon },
    { link: '/studies', label: 'Studies', icon: BriefcaseIcon },
    { link: '/vacations', label: 'Vacations', icon: GlobeIcon },
    { link: '/extras', label: 'Extras', icon: PlusIcon },
]

function Sidebar() {
    const links = sidebar.map((item) => (
        <li key={item.label}>
            <Link key={item.label} href={item.link}>
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <item.icon className="w-7 h-7 px-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    {item.label}
                </a>
            </Link>
        </li>
    ))
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">{links}</ul>
            </div>
        </aside>
    )
}

export default Sidebar
