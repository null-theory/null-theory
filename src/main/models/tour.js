export const TourEntity = {
    title: {
        type: "string",
        required: true,
        description: "Название тура (например, 'Бурабай')"
    },
    image: {
        type: "string",
        required: true,
        description: "URL изображения тура"
    },
    price: {
        type: "string",
        required: true,
        description: "Цена тура (например, 'KZT 17 900')"
    },
    description: {
        type: "string",
        required: true,
        description: "Краткое описание тура"
    },
    dates: {
        type: "array",
        required: true,
        description: "Список доступных дат в формате ['Қазан: 18, 19', 'Қараша: 1, 9']"
    },
    buttonText: {
        type: "string",
        required: false,
        default: "Турды брондау",
        description: "Текст кнопки бронирования"
    }
};