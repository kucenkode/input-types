import { defineStore } from "pinia";
import { ref } from "vue";

export const useInputsStore = defineStore('input-types', () => {
    const types = ref([{
        name: 'button',
        description: 'Означает, что элемент — обычная кнопка. Она может добавлять товары в корзину или избранное, переключать слайдеры или закрывать всплывающие окна.',
        ex: `<input type = "button">`
    }, 
    {
        name: 'checkbox',
        description: 'это элемент (галочка или птичка) HTML-формы, который может иметь два состояния: отмечен и не отмечен.',
        ex: `<input type = "checkbox">`
    },
    {
        name: 'color',
        description: 'Он отображает выбранный цвет, а при нажатии на него появляется специальное диалоговое окно для установки цвета.',
        ex: `<input type = "color">`
    },
    {
        name: 'date',
        description: 'Элементы <input> типа date создают поля ввода и позволяют пользователю ввести дату, либо использовать text box для автоматической проверки контента или использовать специальный интерфейс date picker.',
        ex: `<input type = "date">`,
    }, 
    {
        name: 'datetime-local',
        description: 'это тип ввода, который позволяет пользователю выбрать как дату, так и время в локальной системе, включая год, месяц и день, а также время в часах и минутах.',
        ex: `<input type = "datetime-local">`,
    }, 
    {
        name: 'email',
        description: 'это тип ввода, который используется для ввода и редактирования адреса электронной почты.',
        ex: `<input type = "email">`,
    },
    {
        name: 'file',
        description: 'позволяет пользователю выбрать один файл или более из файлового хранилища своего устройства.',
        ex: `<input type = "file">`,
    }, 
    {
        name: 'image', 
        description: 'По нажатию на картинку (изображение) происходит отправка связанной формы.',
        ex: `<input type = "image" src= "">`,
    },
    {
        name: 'month', 
        description: 'это тип ввода в HTML5, который позволяет пользователю выбрать месяц и год из выпадающего календаря.',
        ex: `<input type = "month">`,
    },
    {
        name: 'number', 
        description: 'Поле для ввода чисел похоже на обычное текстовое поле, но со стрелками, которые позволяют увеличивать и уменьшать значение.', 
        ex: `<input type = "number">`,
    },
    {
        name: 'password',
        description: 'это элемент в HTML, который позволяет пользователю безопасно вводить пароль.',
        ex: `<input type = "password">`,
    },
    {
        name: 'radio',
        description: 'Атрибут type="radio" в элементе <input> создаёт круглую кнопку-переключатель для выбора одного из нескольких вариантов.',
        ex: `<input type = "radio">`,
    },
    {
        name: 'range',
        description: 'Он определяет элемент управления для ввода числа, точное значение которого не имеет значения. Диапазон по умолчанию — от 0 до 100.',
        ex: `<input type = "range">`,
    }, 
    {
        name: 'reset',
        description: 'Тег input с атрибутом type в значении reset создаёт кнопку сброса полей HTML-формы.',
        ex: 
        `
        <form> 
            <input type="password">
            <input type = "reset">
        </form>
        `,
    },
    {
        name: 'search',
        description: 'Он позволяет пользователям вводить поисковые запросы.',
        ex: `<input type = "search">`
    },
    {
        name: 'text', 
        description: 'это элемент в HTML, который позволяет пользователю вводить текст в форму, например, имя, адрес, адрес электронной почты и т. д.',
        ex: `<input type = "text">`
    },
    {
        name: 'url',
        description: 'Он обеспечивает проверку URL, гарантируя, что введённое значение — правильно отформатированный веб-адрес.',
        ex: `<input type = "url">`
    }]);

    const showInputs = ref(false);

    return {
        types,
        showInputs
    }
});