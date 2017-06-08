// import { assert } from 'chai';
// import { loadAndSortTowns } from '../index';

/**
 * ДЗ 6.2 - Создать страницу с текстовым полем для фильтрации городов
 *
 * Страница должна предварительно загрузить список городов из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * и отсортировать в алфавитном порядке.
 *
 * При вводе в текстовое поле, под ним должен появляться список тех городов,
 * в названии которых, хотя бы частично, есть введенное значение.
 * Регистр символов учитываться не должен, то есть "Moscow" и "moscow" - одинаковые названия.
 *
 * Во время загрузки городов, на странице должна быть надпись "Загрузка..."
 * После окончания загрузки городов, надпись исчезает и появляется текстовое поле.
 *
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 *
 * *** Часть со звездочкой ***
 * Если загрузка городов не удалась (например, отключился интернет или сервер вернул ошибку),
 * то необходимо показать надпись "Не удалось загрузить города" и кнопку "Повторить".
 * При клике на кнопку, процесс загруки повторяется заново
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна загружать список городов из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * И возвращать Promise, которой должен разрешиться массивом загруженных городов
 *
 * @return {Promise<Array<{name: string}>>}
 */
function loadTowns() {

    return new Promise(function(resolve, reject){

        let xhr = new XMLHttpRequest();
        let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

        xhr.open('GET', url, true);
        xhr.send();
        xhr.addEventListener('load', function () {

            if(xhr.status < 400){
                let towns = JSON.parse(xhr.responseText);
                let townsArr = [];

                for (let i = 0; i < towns.length; i++) {
                    townsArr.push(towns[i].name);
                }

                let sortedTowns = townsArr.sort();
                let returnedArr = [];

                for (let i = 0; i < sortedTowns.length; i++) {
                    returnedArr.push({name:sortedTowns[i]});
                }

                resolve(returnedArr);
            }
            else{
                reject();
            }
        })
    });
}

/**
 * Функция должна проверять встречается ли подстрока chunk в строке full
 * Проверка должна происходить без учета регистра символов
 *
 * @example
 * isMatching('Moscow', 'moscow') // true
 * isMatching('Moscow', 'mosc') // true
 * isMatching('Moscow', 'cow') // true
 * isMatching('Moscow', 'SCO') // true
 * isMatching('Moscow', 'Moscov') // false
 *
 * @return {boolean}
 */
function isMatching(full, chunk) {

    let fullStr = full.toLowerCase();
    let chunkStr = chunk.toLowerCase();

    if(fullStr.indexOf(chunkStr)){
        return fullStr;
    }
    else{
        return false;
    }

}

let loadingBlock = homeworkContainer.querySelector('#loading-block');
let filterBlock = homeworkContainer.querySelector('#filter-block');
let filterInput = homeworkContainer.querySelector('#filter-input');
let filterResult = homeworkContainer.querySelector('#filter-result');
let townsPromise;



function myFunc(arrayTowns) {
    townsPromise = loadTowns();
    townsPromise.then(function(){
        homeworkContainer.appendChild(filterInput);


    });



}




filterInput.addEventListener('keyup', function() {
});

export {
    loadTowns,
    isMatching
};
