"use client"
import { cn } from '@/lib/utils'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SlidingNumber } from '../sliding-number/sliding-number'
import ConcentricProgressCard, { ConcentricProgress } from '../concentric-progress/concentric-progress'
import { motion } from 'motion/react'

// --- MAIN GRID CONTAINER ---
const DashboardCards = () => {
    const salesChartData = [
        { month: 'Apr', height: '55%', active: false },
        { month: 'May', height: '48%', active: false },
        { month: 'June', height: '65%', active: false },
        { month: 'July', height: '38%', active: false },
        { month: 'Aug', height: '80%', active: true },
    ]

    return (
        <motion.div className="w-full max-w-5xl rounded-[2.5rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <ActiveShoppersCard />

            {/* Card 2 */}
            <MonthlySalesCard data={salesChartData} totalSales="$9,180" decimal=".89" />

            {/* Card 3 */}
            <ConcentricProgressCard valueLeft={68} valueRight={32} />

            <StorageUsedCard value={68} />

            <SalesReportCard />

            <ManufactoringProgressCard />
        </motion.div>
    )
}

export default DashboardCards


// --- 1: Active Shoppers Card ---
export const ActiveShoppersCard = ({ className }: { className?: string }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(179)
    }, [])
    return (
        <div className={cn(
            "w-full h-[20rem] px-8 py-8 border border-neutral-100 dark:border-none bg-white dark:bg-neutral-900 rounded-[2rem] flex flex-col",
            "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
            className
        )}>
            <h3 className='font-semibold tracking-wide text-lg text-neutral-800 dark:text-neutral-200'>Active Shoppers</h3>
            <h5 className='text-md font-semibold text-neutral-400 tracking-wide'>Europe</h5>
            <div className='flex flex-col mt-auto'>
                <h2 className='text-7xl text-neutral-700 dark:text-neutral-300 font-medium'>
                    <SlidingNumber number={count} transition={{ stiffness: 300, damping: 100, mass: 1 }} />
                </h2>
                <div className='flex gap-3 items-center'>
                    <span className='flex items-center justify-center bg-green-400/80 rounded-full p-1 text-green-900'><ArrowUpRight size={14} /></span>
                    <p className='text-green-600 text-md font-semibold'>18% today</p>
                </div>
            </div>
        </div>
    )
}


// --- 2: Monthly Sales Card ---
interface ChartItem {
    month: string
    height: string
    active: boolean
}

interface MonthlySalesCardProps {
    data: ChartItem[]
    totalSales: string
    decimal: string
    className?: string
}

const MonthlySalesCard = ({ data, totalSales, decimal, className }: MonthlySalesCardProps) => {
    return (
        <div className={cn(
            "w-full h-[20rem] p-8 border border-neutral-100 dark:border-none bg-white dark:bg-neutral-900 rounded-[2rem] flex flex-col",
            "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
            className
        )}>
            <div>
                <h3 className='font-medium tracking-wide text-lg text-neutral-800 dark:text-neutral-200'>Monthly Sales</h3>
                <div className='mt-8 flex items-baseline'>
                    <span className='text-5xl text-neutral-700 dark:text-neutral-300 font-bold tracking-tight'>{totalSales}</span>
                    <span className='text-2xl text-neutral-500 dark:text-neutral-400 font-semibold'>{decimal}</span>
                </div>
            </div>

            {/* chart section */}
            <div className='flex items-end justify-between mt-auto h-28 w-full'>
                {data.map((item, index) => (
                    <div key={item.month} className='flex flex-col items-center flex-1 gap-2'>
                        <div className="h-26 w-full flex items-end justify-center">
                            <motion.div
                                className={cn(
                                    'w-7 rounded-full',
                                    item.active
                                        ? 'bg-violet-500'
                                        : 'bg-gray-200 dark:bg-gray-800'
                                )}
                                initial={{ height: 0 }}
                                animate={{ height: item.height }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                            />
                        </div>
                        <span className={cn(
                            'text-sm font-semibold tracking-wide',
                            item.active ? 'text-violet-600 dark:text-violet-500' : 'text-neutral-400 dark:text-neutral-500'
                        )}>
                            {item.month}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}


// --- 3: Storage Used Card ---
const StorageUsedCard = ({
    value,
    className,
}: {
    value: number
    className?: string
}) => {
    return (
        <div className={cn(
            "w-full h-[20rem] p-8 border border-neutral-100 dark:border-none bg-white dark:bg-neutral-900 rounded-[2rem] flex flex-col justify-between",
            "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
            className
        )}>
            <h3 className="font-semibold tracking-wide text-lg text-neutral-800 dark:text-neutral-200">Storage Used</h3>

            <div className="relative flex-1 flex items-center justify-center min-h-0">
                <ConcentricProgress
                    rings={[{ value: value, strokeClass: 'stroke-yellow-400 dark:stroke-yellow-500' }]}
                    sizeClass="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48"
                />
                <span className="absolute flex flex-col items-center text-neutral-700 dark:text-neutral-300 font-bold tracking-tight">
                    <span className="text-3xl">{value}%</span>
                    <span className='text-xs text-neutral-400 dark:text-neutral-500 font-medium'>Total Storage</span>
                </span>
            </div>
        </div>
    )
}


// --- 4: Sales Report Card ---
const SalesReportCard = ({ className }: { className?: string }) => {
    const [sales, setSales] = useState(0)
    const [change, setChange] = useState(0)
    useEffect(() => {
        setSales(17900)
        setChange(18)
    }, [])
    return (
        <div className={cn(
            'w-full h-[20rem] p-8 border border-neutral-100 dark:border-none bg-white dark:bg-neutral-900 rounded-[2rem] flex flex-col justify-between',
            "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
            className
        )}>
            <div className='flex justify-between items-center'>
                <h3 className="font-semibold tracking-wide text-lg text-neutral-800 dark:text-neutral-200">Sales Report</h3>
                <div className='flex gap-2 items-center bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200'>
                    <span className='text-xs font-medium text-neutral-700 dark:text-neutral-200'>This Week</span>
                    <ChevronDown size={14} className='text-neutral-700 dark:text-neutral-200' />
                </div>
            </div>
            <div className='flex flex-col mt-auto'>
                <h2 className='text-7xl text-neutral-700 dark:text-neutral-300 font-medium'>
                    <SlidingNumber number={sales} transition={{ stiffness: 200, damping: 100, mass: 1 }} />
                </h2>
                <div className='flex gap-3 items-center'>
                    <span className='flex items-center justify-center bg-green-400/80 rounded-full p-1 text-green-900'><ArrowUpRight size={14} /></span>
                    <p className='text-green-600 text-md font-semibold'>{change}% today</p>
                </div>
            </div>
        </div>
    )
}


// --- 5: Manufacturing Progress Card ---
interface ProgressData {
    name: string
    value: number
    color: string     // tailwind color classes
    textColor: string // tailwind text classes
}

interface ManufactoringProgressCardProps {
    title?: string
    subtitle?: string
    data?: ProgressData[]
    className?: string
}

const defaultProgressData: ProgressData[] = [
    {
        name: 'Madrid',
        value: 45,
        color: 'bg-violet-600 dark:bg-violet-500',
        textColor: 'text-violet-700 dark:text-violet-400',
    },
    {
        name: 'Lisbon',
        value: 80,
        color: 'bg-green-500 dark:bg-green-400',
        textColor: 'text-green-500 dark:text-green-400',
    },
]

const ProgressRow = ({ item }: { item: ProgressData }) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        setValue(item.value)
    }, [item.value])

    return (
        <div key={item.name} className='flex flex-col gap-2'>
            {/* label and percentage */}
            <div className="flex items-center justify-between">
                <span className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>{item.name}</span>
                <span className={`text-xs font-medium ${item.textColor}`}><SlidingNumber number={value} />%</span>
            </div>
            {/* progress bar */}
            <div className="w-full h-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={cn("w-full h-2.5 bg-neutral-100 rounded-full", item.color)}
                />
            </div>
        </div>
    )
}

const ManufactoringProgressCard = ({
    title = "Manufacturing",
    subtitle = "SS24 Progress",
    data = defaultProgressData,
    className = ''
}: ManufactoringProgressCardProps) => {
    return (
        <div className={cn(
            "w-full h-[20rem] p-8 border border-neutral-100 dark:border-none dark:bg-neutral-900 rounded-[2rem] flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
            className
        )}>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="font-semibold tracking-wide text-lg text-neutral-800 dark:text-neutral-200">{title}</h3>
                    <h4 className='text-md font-medium text-neutral-400 tracking-wide'>{subtitle}</h4>
                </div>
            </div>

            {/* progress indicator */}
            <div className='flex flex-col gap-6 mt-auto'>
                {data.map((item) => (
                    <ProgressRow key={item.name} item={item} />
                ))}
            </div>
        </div>
    )
}
