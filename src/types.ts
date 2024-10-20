export type QuestionVariationType = 'single' | 'multiple' | 'short' | 'long';
export type AnswerType = string | number[] | number;

export interface QuestionType {
    title: string;
    options?: string[];
    type: QuestionVariationType;
}

export interface QuizType {
    questions: QuestionType[];
    answers: AnswerType[];
    isTimed: boolean;
}
