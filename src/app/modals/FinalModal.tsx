import React from "react";

export const FinalModal = () => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white rounded-lg shadow-lg p-6 max-w-sm text-center'>
                <h2 className='text-xl font-semibold mb-4'>Тест пройден</h2>
                <p className='text-gray-700'>Результаты теста будут отправлены позже.</p>
            </div>
        </div>
    );
};