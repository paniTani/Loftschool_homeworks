/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами(Должна передавать: элемент, индекс, массив)
 */

let arr1 = [1, 2, 3, 4, 5];

function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

function propertySearch(item, ind, arr) {
    console.log('arr[' + ind + ']:' + arr[ind] + ';' + ' ' + 'ind:' + ind + ';' + '  ' + 'arr: ' + arr);
}

forEach(arr1, propertySearch);

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */

let basicArr = [7, 8, 9];

function map(arr, propertySearch) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(propertySearch(arr[i], i, arr));
    }

    return newArr;
}
function propertyFunc(item, ind, array) {

    return array[ind] * 2;
}
map(basicArr, propertyFunc);

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
/* 1) должна вызывать функцию для каждого элемента и передавать предыдущий результат первым аргументом
 2) должна учитывать initial;
 3) если initial не указан, то при первой итерации в prev передается первый элемент массива;
 4) должна передавать элемент вторым аргументом;
 5) должна передавать индекс элемента третьим аргументом;
 6) должна передавать сам массив четвертым аргументом;
 7) не должна изменять оригинальный массив;
 8) общая проверка работоспособности. */

let thisArr = [1, 2, 3, 4, 5];

function reduce(array, fn, initial) {
    // debugger;

    let prev;
    let i;

    if (initial == undefined) {
        prev = array[0];
        i = 1;
    } else {
        prev = initial;
        i = 0;
    }

    for (i; i < array.length; i++) {

        prev = fn(prev, array[i], i, array);
    }

    return prev;
}
function myFunc(previousValue, currentItem, index, arr) {
    let result = previousValue + currentItem;

    return result;
}
reduce(thisArr, myFunc, 7);

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */

function deleteProperty(obj, prop) {
    delete obj[prop];
}

let dog = {
    name: 'Jack',
    color: 'brown',
    woof: true
};

deleteProperty(dog, 'color');

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {

        return true;
    }

    return false;
}

let car = {
    model: 'Ford',
    color: 'red',
    type: 'sedan'
};

console.log(hasProperty(car, 'type'));
console.log(hasProperty(car, 'wheel'));

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    let propsInArr = [];

    for (let prop in obj) {
        propsInArr.push(prop);
    }

    return propsInArr;
}

let book = {
    name: 'Martin Eden',
    language: 'english',
    pages: 450,
    interesting: true
};

getEnumProps(book);

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */

function upperProps(obj) {
    let arr = [];

    for (let key in obj) {
        arr.push(key.toUpperCase());
    }

    return arr;
}

let human = {
    firstName: 'Chris',
    lastName: 'Burn',
    age: 27,
    language: 'eng'
};

upperProps(human);

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */

/* let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let returnedArr = [];*/

// function slice(array, from, to) {}
/*
    function negativeFrom(par) {
        from = (array[array.length - 1] + from);
        console.log('-from: ', from);

        return par;
    }

    function negativeTo(par) {
        to = (array[array.length - 1] + to);
        console.log('-to: ', to);

        return par;
    }

    if (from < 0 && to < 0) {
        negativeFrom(from);
        negativeTo(to);

        for (let i = from; i < to; i++) {
            returnedArr.push(array[i]);
        }

        return returnedArr;
    }

    else if (from >= 0 && to < 0) {
        negativeTo(to);

        for (let i = from; i < to; i++) {
            returnedArr.push(array[i]);
        }

        return returnedArr;}

    else {
        for (let i = from; i < to; i++) {
            returnedArr.push(array[i]);
        }

        return returnedArr;
    }
}

slice(arr, 1, 7);*/

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить
 это значение в квадрат
 */

let sportShopPrices = {
    sneakers: 2,
    ball: 3,
    trousers: 4,
    tShirt: 5
};

function createProxy(object) {

    let proxy = new Proxy(object, {
        set(obj, prop, value) {

            obj[prop] = value ** 2;

            return true;
        }
    });

    return proxy;
}

createProxy(sportShopPrices, { a: 7, b: 8 });

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    // slice,
    createProxy
};
