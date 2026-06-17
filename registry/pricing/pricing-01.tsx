"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SlidingNumber } from '@/registry/sliding-number/sliding-number'

// --- Types ---
interface CardData {
    title: string
    tag: string
    tagVariant: 'dark' | 'green'
    priceValue: number
    priceSuffix?: string
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
            priceValue: 15000,
            priceSuffix: "+",
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
            priceValue: 15000,
            features: [
                "Single page",
                "3 full design concepts",
                "Full copywriting/messaging",
                "2-4 week delivery",
                "Custom animations/illustrations",
                "Framer/Webflow/NextJS development",
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
            priceValue: 20000,
            features: [
                "Multiple pages",
                "3 full design concepts",
                "Full copywriting/messaging",
                "2-4 week delivery",
                "Custom animations/illustrations",
                "Framer/Webflow/NextJS development",
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
            priceValue: 7500,
            features: [
                "Logo, type, colors",
                "Brand assets",
                "Brand guidelines",
                "2 week delivery",
                "5 full brand explorations",
                "Ready-to-use brand kit",
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
    priceValue: 10000,
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
    <svg width="20" height="20" viewBox="0 0 622 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <g clipPath="url(#clip0_5072_3775)">
            <path d="M351.419 255.568L411.978 324.79L493.418 376.827L507.584 256.005L493.418 137.908L410.418 183.621L351.419 255.568Z" fill="#00832D" />
            <path d="M0.00283051 365.583V468.541C0.00283051 492.049 19.0851 511.136 42.5983 511.136H145.556L166.876 433.344L145.556 365.583L74.9198 344.263L0.00283051 365.583Z" fill="#0066DA" />
            <path d="M145.556 -7.62939e-06L0.00283051 145.554L74.9247 166.822L145.556 145.554L166.488 78.7145L145.556 -7.62939e-06Z" fill="#E94235" />
            <path d="M0.00526047 365.629H145.556V145.551H0.00526047V365.629Z" fill="#2684FC" />
            <path d="M586.398 61.6293L493.416 137.91V376.827L586.782 453.404C600.758 464.352 621.204 454.374 621.204 436.607V78.0861C621.204 60.1224 600.271 50.193 586.396 61.6317" fill="#00AC47" />
            <path d="M351.419 255.568V365.583H145.556V511.136H450.825C474.338 511.136 493.418 492.049 493.418 468.541V376.827L351.419 255.568Z" fill="#00AC47" />
            <path d="M450.825 -7.62939e-06H145.556V145.554H351.419V255.568L493.42 137.905V42.5979C493.42 19.0847 474.338 0.00241891 450.825 0.00241891" fill="#FFBA00" />
        </g>
        <defs>
            <clipPath id="clip0_5072_3775">
                <rect width="621.2" height="512" fill="white" />
            </clipPath>
        </defs>
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
    <div className="bg-background rounded-2xl p-6 flex flex-col gap-4 flex-1 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">{card.title}</p>
            <div className="flex items-center gap-2 border border-neutral-200/20 dark:border-neutral-700 rounded-full px-2 py-1.5 w-fit shadow-sm">
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
            <span className="text-4xl font-bold tracking-tight">
                $<SlidingNumber number={card.priceValue} thousandSeparator="," />
                {card.priceSuffix && <span>{card.priceSuffix}</span>}
            </span>
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
    <div className="bg-background rounded-2xl p-6 flex items-center justify-between flex-1 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <div>
            <p className="text-sm text-neutral-500">1 week trial</p>
            <p className="text-3xl font-bold tracking-tight">
                $<SlidingNumber number={2500} thousandSeparator="," />
            </p>
        </div>
        <CtaButton text="Send Message" icon="telegram" />
    </div>
)

// --- Main export ---
export default function Pricing() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className='w-full h-full min-h-screen bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center'>

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
