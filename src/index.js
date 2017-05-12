/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    return fn(array);

}

let arr = [1, 'button', true, 523, 'str'];

function properySearch(arr) {
    for(let i = 0; i < arr.length; i++){
        return arr[i];
    }

};
forEach( arr, properySearch);

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(arr, properySearch) {
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */

function deleteProperty(obj, prop) {
    debugger;
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
    if(obj.hasOwnProperty(prop)){
        return true;
    } else{
        return false;
    }
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
    for(let prop in obj){
        propsInArr.push(prop);
        //console.log(prop);
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
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
