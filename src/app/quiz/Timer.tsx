import React, { useEffect, useState } from 'react';

interface TimerProps {
    minutes?: number;
}

export const Timer = ({ minutes = 10 }: TimerProps) => {
    const [secondsRemaining, setSecondsRemaining] = useState<number>(
        () => Number(localStorage.getItem('secondsLeft')) || minutes * 60
    );

    useEffect(() => {
        if (secondsRemaining > 0) {
            const interval = setInterval(() => {
                setSecondsRemaining((prevSeconds) => {
                    const newSeconds = prevSeconds - 1;
                    localStorage.setItem('secondsLeft', newSeconds.toString());
                    return newSeconds;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [secondsRemaining]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs
            .toString()
            .padStart(2, '0')}`;
    };

    return (
        <div className='border text-gray-800 px-4 py-2 rounded-lg text-center text-sm font-bold shadow'>
            {formatTime(secondsRemaining)}
        </div>
    );
};
