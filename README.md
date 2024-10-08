# Events Registration App
## Опис

[Events Registration App]() — це веб-додаток, який дозволяє користувачам реєструватися на події, переглядати деталі подій та організовувати їх. Додаток має зручний інтерфейс для створення, перегляду, сортування та фільтрації подій.

### Зміст

- [Встановлення](#встановлення)
- [Запуск](#зупуск)
- [API ендпоінти](#API-ендпоінти)
- [Структура бази даних](#структура-бази-даних)
- [Використані технології](#використані-технології)

## Функції

- Створення та управління подіями
- Реєстрація учасників на події
- Отримання списку зареєстрованих учасників для конкретної події
- Сортування та пагінація списку подій

## Технології, які використовуються

- Node.js
- Express.js
- MongoDB (або ваша обрана база даних)
- Mongoose (для моделювання бази даних)

## Встановлення

 1. Клонування репозиторію
```
git clone https://github.com/yourusername/events-registration-backend.git
```
2. Перейти у відповідну папку:
cd events-registration-app
npm install
3. Запуск проекту:
```
npm run start
```

### API ендпоінти

- GET /api/events: Отримати всі події
- POST /api/event/create: Створити нову подію
- POST /api/event/:eventId/register: Зареєструвати учасника на подію
- GET /api/event/:eventId/participants: Отримати учасників, зареєстрованих на конкретну подію

              |

[Ihor Zolotoverkh](www.linkedin.com/in/ihor-zolotoverkh)
