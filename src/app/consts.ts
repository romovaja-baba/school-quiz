import { QuestionType } from "../types";

export const TEST_QUESTIONS: QuestionType[] = [
    {
        title: 'Что такое CSS?',
        options: [
            'Язык программирования',
            'Язык описания стилей',
            'База данных',
            'Фреймворк для JavaScript',
        ],
        type: 'single',
    },
    {
        title: 'Какие библиотеки можно использовать для создания пользовательских интерфейсов?',
        options: ['React', 'Vue', 'Django', 'Angular'],
        type: 'multiple',
    },
    {
        title: 'Какой тег используется для создания ссылки в HTML?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        type: 'single',
    },
    {
        title: 'Что такое Flexbox в CSS?',
        options: [
            'Метод верстки на основе сетки',
            'Способ выравнивания элементов',
            'Новая версия Bootstrap',
            'Анимация CSS',
        ],
        type: 'single',
    },
    {
        title: 'Какие методы доступны в JavaScript для работы с DOM?',
        options: [
            'getElementById()',
            'querySelector()',
            'map()',
            'filter()',
        ],
        type: 'multiple',
    },
    {
        title: "Что делает свойство 'display: none;'?",
        options: [
            'Скрывает элемент, но оставляет его в потоке документа',
            'Полностью удаляет элемент с веб-страницы',
            'Делает элемент прозрачным',
            'Изменяет цвет элемента на прозрачный',
        ],
        type: 'single',
    },
    {
        title: 'Как работает media query в CSS?',
        options: [
            'Изменяет стили в зависимости от типа браузера',
            'Изменяет стили в зависимости от устройства или размера экрана',
            'Определяет анимации для медиа-контента',
            'Подключает внешние медиа-файлы',
        ],
        type: 'single',
    },
    {
        title: "Что такое 'state' в React?",
        options: [
            'Свойство компонента, которое хранит данные',
            'Функция, которая управляет рендерингом компонента',
            'Функция для изменения структуры HTML',
            'Класс для создания UI-компонентов',
        ],
        type: 'single',
    },
    {
        title: 'Какие CSS-препроцессоры вы знаете?',
        options: ['SASS', 'LESS', 'Stylus', 'JavaScript'],
        type: 'multiple',
    },
    {
        title: 'Какие проблемы может решить использование системы сборки модулей в JavaScript?',
        options: [
            'Уменьшение размера файлов',
            'Поддержка модульного кода',
            'Автоматическая минификация кода',
            'Запуск кода на сервере',
        ],
        type: 'multiple',
    },
    {
        title: 'Опишите, что такое CSS Grid?',
        options: [],
        type: 'long',
    },
    {
        title: 'Какой ваш любимый язык программирования?',
        options: [],
        type: 'short',
    },
];
