// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch
console.log(1);

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500),
  );
    
    // return Promise.resolve(fruits[name]);
}

console.log(2);

async function asyncMakeSmoothie() {
    console.time('asyncMakeSmoothie');
   try {
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');    
    const fruits = await Promise.all([apple, kiwi, berry]);
    
    console.log(fruits);
    
    return fruits;
   } catch (error) {
       console.log('Ошибка');
    }
    console.timeEnd('asyncMakeSmoothie');
}

console.log(3);
// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const berry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, berry]);
//     console.log(fruits);
//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

asyncMakeSmoothie().then(fruits => console.log(fruits));

console.log(4);
// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }
