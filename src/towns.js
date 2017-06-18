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

    return require('./index.js').loadAndSortTowns();
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

    if (fullStr.indexOf(chunkStr) !== -1) {

        return true;
    }

    return false;
}

let loadingBlock = homeworkContainer.querySelector('#loading-block');
let filterBlock = homeworkContainer.querySelector('#filter-block');
let filterInput = homeworkContainer.querySelector('#filter-input');
let filterResult = homeworkContainer.querySelector('#filter-result');
let townsPromise;

function myFunc() {
    townsPromise = loadTowns();
    townsPromise.then(function(townsList) {

            loadingBlock.innerHTML = '';
            filterResult.innerHTML = '';
            homeworkContainer.appendChild(filterInput);
            homeworkContainer.appendChild(filterResult);

            for (let i = 0; i < townsList.length; i++) {
                if (filterInput.value !== '') {
                    if (isMatching(townsList[i].name, filterInput.value)) {
                        let newTown = document.createElement('div');

                        newTown.innerText = townsList[i].name;
                        filterResult.appendChild(newTown);
                    }
                }
            }
        },
        function () {

            console.log('файл не удалось загрузить');
            loadingBlock.innerHTML = '';
            filterBlock.innerHTML = '';

            let div = document.createElement('div');
            let buttonRepeat = document.createElement('button');

            div.innerText = 'Не удалось загрузить города';
            buttonRepeat.innerText = 'Повторить';
            filterBlock.appendChild(div);
            filterBlock.appendChild(buttonRepeat);

            buttonRepeat.addEventListener('click', function () {
                return myFunc();
            });

        });
}

filterInput.addEventListener('keyup', function() {

    myFunc();

});

export {
    loadTowns,
    isMatching
};
