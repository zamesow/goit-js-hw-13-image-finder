// import './js/с - post';
import './js/r - get';
// import './js/u - patch';
// import './js/d - delete';

fetch('').then(response => {
    if (response.ok) {
        return response.json();
    }

    throw new Error(response.statusText);
})