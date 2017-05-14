/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами(Должна передавать: элемент, индекс, массив)
 */

let arr1 = [1, 'button', true, 523, 'str'];

function forEach(array, fn){
    return fn(array);
}

let propertySearch = function(arr) {

    for(let i=0; i < arr.length; i++){

        console.log('arr['+i+']:' + arr[i] + ';' + ' ' + 'i:' + i + ';' + '  ' + 'arr: ' + arr);

    }
};
forEach(arr1, propertySearch);

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
let basicArr = [7,8,9];
let newArr = [];

function map(arr, properySearch) {

    return properySearch(arr);
}

let propertyFunc = function(arr) {

    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
        console.log('newArr['+i+']:' + newArr[i] + ';' + ' ' + 'i:' + i + ';' + '  ' + 'newArr: ' + newArr);
    }
};

map(basicArr, propertyFunc);

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */

let thisArr = [1,2,3,4,5];
let init = 2;

function reduce(array, fn, initial) {
    return fn(array, initial);
}

function workingFunction(thisArr, init){

    let result = init;
    for(let i = 0; i < thisArr.length; i++){
        result += thisArr[i];
    }
    return result;
}

reduce(thisArr, workingFunction, init);

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
    return Object.keys(obj);
}

let human = {
    firstName: "Chris",
    lastName: "Burn",
    age: 27,
    language: "eng"
};

upperProps(human);

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */

let arr = [0,1,2,3,4,5,6,7,8];
let returnedArr = [];

function slice(array, from, to) {

    function negativeFrom(par){
        from = (array[array.length - 1] + from);
        console.log('-from: ', from);
        return par;
    }

    function negativeTo(par){
        to = (array[array.length - 1] + to);
        console.log('-to: ', to);
        return par;
    }

    if(from < 0 && to < 0){

        negativeFrom(from);
        negativeTo(to);

        for(let i = from; i < to; i++){
            returnedArr.push(array[i]);
        }
        return returnedArr;
    }

    else if(from >= 0 && to < 0){
        negativeTo(to);

        for(let i = from; i < to; i++){
            returnedArr.push(array[i]);
        }
        return returnedArr;
    }

    else{
        for(let i = from; i < to; i++){
            returnedArr.push(array[i]);
        }
        return returnedArr;
    }
}

slice(arr, 1, 7);

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить
 это значение в квадрат
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
