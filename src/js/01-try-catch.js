try {
    console.log('Внутри try до myVar');
    
    // myVar;

    console.log('Внутри try после myVar');
} catch (error) {
    console.log('Ошибкама');
}



setTimeout(() => {
    try {
        myVar;
    } catch (error) {
        console.log(error.stack);
        console.log('Ошибкама 2');
    }
    
}, 1000);

console.log('После try...catch');