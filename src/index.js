/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
         if(!arr.length == 0 || Array.isArray(arr)){
            console.log('good');
         } else{
            throw new Error();
         }
 - fn не является функцией (с текстом "fn is not a function")
         if( typeof(f) == 'function'){
            console.log("it's a function");
         } else{
            throw new Error();
         }
 Зарпещено использовать встроенные методы для работы с массивами
 */

let arr1 = [4,2,8,6,4];
function isAllTrue(array, fn) {
    return function(){
      return function fn(array){

      };
    };
}

function filtering(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

        if (typeof(arr[i]) === 'number') {
            console.log(true);
            counter++;
        }
        /*else{
         throw new Error(2);
         //console.log(false);
         }*/
    }
    //console.log('Counter:' + ' '+ counter);
    //console.log('arr.length:' + ' ' + arr.length);
    try {
        if (counter == arr.length) {
            console.log("True in array");
            return true;
        } else {
            console.log("False in array");
            throw new Error();
            //return false;
        }
    } catch{

    }

}
/*try{
    filtering(arr1);
}*/
isAllTrue(arr1, filtering(arr1));















/*var arr = [1,3,5];
var counter = 0;

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);

    if(typeof(arr[i]) === 'number'){
        console.log(true);
        counter++;
    } else{
        console.log(false);
    }
}
console.log('Counter:' + ' '+ counter);
console.log('arr.length:' + ' ' + arr.length);

if(counter == arr.length){
    console.log("True in array")
}else{
    console.log("False in array");
}*/



/*function isAllTrue(array, fn) {
}*/


/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator() {
}

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
