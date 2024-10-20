import React from 'react';

interface ProgressBarProps {
    totalSteps: number;
    currentStep: number;
}

export const ProgressBar = ({ totalSteps, currentStep }: ProgressBarProps) => {
    const getSectionClass = (index: number) => {
        if (index < currentStep) return 'bg-black';
        if (index === currentStep) return 'bg-red-800';
        return 'bg-gray-400';
    };

    return (
        <div className="flex justify-between w-full h-8 gap-1">
            {Array(totalSteps).fill(null).map((_, index) => (
                <div
                    key={index}
                    className={`flex-grow h-1/4 my-auto rounded-lg ${getSectionClass(index)}`}
                />
            ))}
        </div>
    );
};
