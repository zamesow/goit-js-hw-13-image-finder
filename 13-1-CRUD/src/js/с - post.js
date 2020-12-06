const BASE_URL = 'http://localhost:4040';

function addBook(book) {
    // настройки для бекенда
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books`, options).then(res => res.json()).then(console.log);
}

// вызываем ф-цию вместе с экземпляром книги и потом её рендерим
// addBook({
//     title: "Тестовая книга по CSS",
//     author: "ZTN",
//     genres: ["CSS"],
//     rating: 1.5,
// }).then(renderBook);

// addBook({
//     title: "Тестовая книга по HTML",
//     author: "ZTN",
//     genres: ["HTML"],
//     rating: 1.6,
// }).then(renderBook).catch(error => console.log('Это ошибка'));

// function renderBook(book) {
//     console.log('Пришел ответ от бекенда, можно рисовать');
//     console.log(book);
// }