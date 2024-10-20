import React, { useState } from 'react';
import { Quiz } from './quiz/Quiz.tsx';
import { TEST_QUESTIONS } from './consts.ts';
import { FinalModal } from "./modals/FinalModal.tsx";

const App = () => {
    const [inProcess, setInProcess] = useState(true);
    return (
        <div className='h-screen flex items-center justify-center'>
            {inProcess ? (
                <Quiz
                    questions={TEST_QUESTIONS}
                    onSubmit={() => setInProcess(false)}
                />
            ) : (
                <FinalModal />
            )}
        </div>
    );
}

export default App;
