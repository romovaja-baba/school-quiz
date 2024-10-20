import React, { useEffect, useState } from 'react';
import { Timer } from './Timer.tsx';
import { ProgressBar } from './ProgressBar.tsx';
import { Question } from './Question.tsx';
import { AnswerType, QuestionType } from '../../types.ts';

interface QuizProps {
    questions: QuestionType[];
    onSubmit: () => void;
}

export const Quiz = ({ questions, onSubmit }: QuizProps) => {
    const initialAnswers = JSON.parse(localStorage.getItem('quizAnswers') || '[]');
    const initialIndex = parseInt(localStorage.getItem('currentIndex') || '0', 10);

    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [answers, setAnswers] = useState<AnswerType[]>(initialAnswers.length ? initialAnswers : Array(questions.length).fill(null));
    const isLastQuestion = currentIndex === questions.length - 1;

    useEffect(() => {
        localStorage.setItem('quizAnswers', JSON.stringify(answers));
        localStorage.setItem('currentIndex', currentIndex.toString());
    }, [answers, currentIndex]);

    const resetQuizState = () => {
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('currentIndex');
        localStorage.removeItem('secondsLeft');
    };

    const handleNextQuestion = (answer: AnswerType) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentIndex] = answer;
        setAnswers(updatedAnswers);

        if (!isLastQuestion) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onSubmit();
            resetQuizState();
        }
    };

    return (
        <div className='p-4 w-1/2 mx-auto bg-white shadow-lg rounded-lg'>
            <div className='flex gap-3 items-center'>
                <h1 className='text-4xl font-semibold'>Тестирование</h1>
                <Timer />
            </div>
            <ProgressBar currentStep={currentIndex} totalSteps={questions.length} />
            {questions.length > 0 && (
                <Question
                    key={currentIndex}
                    title={questions[currentIndex].title}
                    type={questions[currentIndex].type}
                    options={questions[currentIndex].options}
                    handleNextQuestion={handleNextQuestion}
                    isLastQuestion={isLastQuestion}
                />
            )}
        </div>
    );
};
