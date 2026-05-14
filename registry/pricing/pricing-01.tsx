"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

// --- Types ---
interface CardData {
    title: string
    tag: string
    tagVariant: 'dark' | 'green'
    price: string
    period?: string
    features: string[]
    ctaText: string
    ctaIcon: 'meet' | 'telegram'
}

interface TabItem {
    label: string
    card: CardData
}

// --- Data ---
const TABS: TabItem[] = [
    {
        label: "Product",
        card: {
            title: "Custom scope",
            tag: "Add development",
            tagVariant: "dark",
            price: "$15,000+",
            features: [
                "IOS/android/web/desktop apps",
                "Dedicated project manager + senior designers",
                "Deep UX research",
                "Rapid iteration and feedback cycles",
                "Figma + NextJS handoff",
                "Frontend Development",
            ],
            ctaText: "Book Intro Call",
            ctaIcon: "meet",
        },
    },
    {
        label: "Landing",
        card: {
            title: "Custom scope",
            tag: "Add development",
            tagVariant: "dark",
            price: "$3,500+",
            features: [
                "Single landing page",
                "Mobile responsive design",
                "Figma + NextJS handoff",
                "Frontend Development",
            ],
            ctaText: "Book Intro Call",
            ctaIcon: "meet",
        },
    },
    {
        label: "Full Site",
        card: {
            title: "Custom scope",
            tag: "Add development",
            tagVariant: "dark",
            price: "$8,000+",
            features: [
                "Multi-page website",
                "CMS integration",
                "Dedicated project manager",
                "Deep UX research",
                "Figma + NextJS handoff",
                "Frontend Development",
            ],
            ctaText: "Book Intro Call",
            ctaIcon: "meet",
        },
    },
    {
        label: "Brand",
        card: {
            title: "Custom scope",
            tag: "Add development",
            tagVariant: "dark",
            price: "$5,000+",
            features: [
                "Brand identity + guidelines",
                "Logo design",
                "Color system + typography",
                "Figma design system",
            ],
            ctaText: "Book Intro Call",
            ctaIcon: "meet",
        },
    },
]

const RETAINER_CARD: CardData = {
    title: "Design/dev retainer",
    tag: "Most Popular",
    tagVariant: "green",
    price: "$10,000",
    period: "/mo",
    features: [
        "Full team access",
        "Flexible, evolving scope",
        "Daily updates mon-fri",
        "Dedicated project manager",
    ],
    ctaText: "Book Intro Call",
    ctaIcon: "meet",
}

const MeetIcon = () => (
    <svg viewBox="0 0 48 48" width="20" height="20" fill="none">
        <path fill="#00832d" d="M23 16H9a2 2 0 00-2 2v12a2 2 0 002 2h14V16z" />
        <path fill="#00ac47" d="M23 16v16l8-4v-8l-8-4z" />
        <path fill="#e94235" d="M39 12l-8 4v16l8 4V12z" />
        <path fill="#ffba00" d="M7 30v4a2 2 0 002 2h4l2-6H7z" />
        <path fill="#0266c8" d="M13 16H9a2 2 0 00-2 2v4h6v-6z" />
        <path fill="#00832d" d="M13 36h4l2-6h-8l2 6z" />
    </svg>
)

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20">
        <circle cx="12" cy="12" r="12" fill="#2AABEE" />
        <path
            fill="white"
            d="M17.5 6.5l-11 4.25 3 1 1.5 4.75 2-2.5 3 2.5 1.5-10z"
        />
    </svg>
)

// --- Sub-components ---
const CtaButton = ({ text, icon }: { text: string; icon: 'meet' | 'telegram' }) => (
    <button
        className={cn(
            'flex items-center gap-2.5 py-3 px-5 rounded-full font-medium text-sm w-fit transition-opacity hover:opacity-80',
            icon === 'telegram'
                ? 'bg-neutral-100 text-neutral-800 dark:bg-neutral-200'
                : 'bg-foreground text-background'
        )}
    >
        {icon === 'meet' ? <MeetIcon /> : <TelegramIcon />}
        {text}
    </button>
)

const MainCard = ({ card }: { card: CardData }) => (
    <div className="bg-background rounded-2xl p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">{card.title}</p>
            <div className="flex items-center gap-2">
                <span
                    className={cn(
                        'w-2 h-2 rounded-full',
                        card.tagVariant === 'green' ? 'bg-green-500' : 'bg-neutral-900 dark:bg-neutral-100'
                    )}
                />
                <span className="text-sm font-bold">{card.tag}</span>
            </div>
        </div>

        <div className="flex items-baseline gap-0.5">
            <span className="text-4xl font-bold tracking-tight">{card.price}</span>
            {card.period && <span className="text-lg text-neutral-500">{card.period}</span>}
        </div>

        <div className="flex flex-col gap-3 flex-1">
            {card.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5">
                    <Check size={14} className="text-neutral-400 shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                </div>
            ))}
        </div>

        <CtaButton text={card.ctaText} icon={card.ctaIcon} />
    </div>
)

const TrialCard = () => (
    <div className="bg-background rounded-2xl p-6 flex items-center justify-between">
        <div>
            <p className="text-sm text-neutral-500">1 week trial</p>
            <p className="text-3xl font-bold tracking-tight">$2,500</p>
        </div>
        <CtaButton text="Send Message" icon="telegram" />
    </div>
)

// --- Main export ---
export default function Pricing() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className='w-full h-full min-h-screen bg-neutral-100 flex items-center justify-center'>

            <div className="w-full max-w-4xl mx-auto  py-16 px-4">
                <h2 className="text-4xl font-bold text-center mb-10">Pricing</h2>

                <div className="grid grid-cols-2 gap-4 items-start">
                    {/* Left column */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-1 bg-background rounded-full px-2 py-1.5 w-full border border-neutral-200 dark:border-neutral-700">
                            {TABS.map((tab, i) => (
                                <button
                                    key={tab.label}
                                    onClick={() => setActiveTab(i)}
                                    className={cn(
                                        'px-4 py-1.5 rounded-full text-sm transition-all',
                                        activeTab === i
                                            ? 'bg-background shadow-sm font-bold border border-neutral-200 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100'
                                            : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium'
                                    )}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <MainCard card={TABS[activeTab].card} />
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-4">
                        <MainCard card={RETAINER_CARD} />
                        <TrialCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
