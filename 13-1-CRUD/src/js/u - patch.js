const BASE_URL = 'http://localhost:4040';



function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
    body: JSON.stringify(update),
};

return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

// updateBookById({ title: 'Большая новая книга по NodeJS' }, 24);
// updateBookById({ rating: 3 }, 23);
// updateBookById({ rating: 2, author: 'Zames' }, 22);