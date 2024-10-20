import React, { useState } from 'react';
import { AnswerType, QuestionVariationType } from '../../types';

interface QuestionProps {
    title: string;
    options?: string[];
    correctAnswer?: number | number[];
    type: QuestionVariationType;
    handleNextQuestion: (answer: AnswerType) => void;
    isLastQuestion: boolean;
}

export const Question = ({
    title,
    options,
    type,
    handleNextQuestion,
    isLastQuestion,
}: QuestionProps) => {
    const [answerText, setAnswerText] = useState('');
    const [chosenOption, setChosenOption] = useState(-1);
    const [chosenOptions, setChosenOptions] = useState<number[]>([]);

    const isNoAnswer =
        ((type === 'long' || type === 'short') && !answerText) ||
        (type === 'multiple' && chosenOptions.length === 0) ||
        (type === 'single' && chosenOption === -1);

    const handleMultipleOptionChange = (index: number) => {
        setChosenOptions(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const handleSubmit = () => {
        if (type === 'short' || type === 'long') {
            handleNextQuestion(answerText);
        } else if (type === 'single') {
            handleNextQuestion(chosenOption);
        } else if (type === 'multiple') {
            handleNextQuestion(chosenOptions);
        }
    };

    const buttonClass = isNoAnswer
        ? 'bg-gray-300 cursor-not-allowed'
        : 'bg-red-500 hover:bg-red-600';

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            
            {type === 'single' && (
                <form className="space-y-4">
                    {options?.map((option, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                id={`option-${index}`}
                                type="radio"
                                name="answer"
                                className="w-4 h-4 text-red-500 focus:ring-red-500 border-gray-300"
                                checked={chosenOption === index}
                                onChange={() => setChosenOption(index)}
                            />
                            <label htmlFor={`option-${index}`} className="ml-2 text-gray-700">
                                {option}
                            </label>
                        </div>
                    ))}
                </form>
            )}

            {type === 'multiple' && (
                <form className="space-y-4">
                    {options?.map((option, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                id={`multiple-option-${index}`}
                                type="checkbox"
                                className="w-4 h-4 text-red-500 focus:ring-red-500 border-gray-300"
                                checked={chosenOptions.includes(index)}
                                onChange={() => handleMultipleOptionChange(index)}
                            />
                            <label htmlFor={`multiple-option-${index}`} className="ml-2 text-gray-700">
                                {option}
                            </label>
                        </div>
                    ))}
                </form>
            )}

            {(type === 'short' || type === 'long') && (
                <input
                    className="mt-4 p-2 border rounded-md w-full"
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    placeholder={type === 'short' ? "Введите короткий ответ" : "Введите длинный ответ"}
                    maxLength={type === 'short' ? 15 : undefined}
                />
            )}

            <button
                disabled={isNoAnswer}
                onClick={handleSubmit}
                className={`mt-6 w-1/4 py-2 rounded-md text-white ${buttonClass}`}
            >
                {isLastQuestion ? 'Завершить' : 'Ответить'}
            </button>
        </div>
    );
};
