import { FC } from 'react'

import { bodySmall } from '../../../styles/typography'

interface ProgressBarProps {
    className?: string
    totalSteps: number
    currentStep: number
}

export const ProgressBar: FC<ProgressBarProps> = ({
    className,
    totalSteps,
    currentStep,
}: ProgressBarProps) => {
    return (
        <div
            className={`flex flex-col justify-center items-center ${
                className ? className : ''
            }`}
        >
            <span
                className={`${bodySmall} mb-2 text-neutral-700 dark:text-neutralDark-150`}
            >
                {currentStep} of {totalSteps}
            </span>
            <div className={`w-full h-2 bg-gray-200  rounded-full`}>
                <div
                    className="h-2 bg-primary dark:bg-primaryDark rounded-full transition-all"
                    style={{
                        width: `${
                            ((currentStep - 1) / (totalSteps - 1)) * 100
                        }%`,
                    }}
                />
            </div>
        </div>
    )
}
