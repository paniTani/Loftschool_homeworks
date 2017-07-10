/**
 * ДЗ 7.2 - Создать редактор cookie с возможностью фильтрации
 *
 * На странице должна быть таблица со списком имеющихся cookie:
 * - имя
 * - значение
 * - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)
 *
 * На странице должна быть форма для добавления новой cookie:
 * - имя
 * - значение
 * - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)
 *
 * Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено
 *
 * На странице должно быть текстовое поле для фильтрации cookie
 * В таблице должны быть только те cookie, в имени или значении которых есть введенное значение
 * Если в поле фильтра пусто, то должны выводиться все доступные cookie
 * Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 * Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 * то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена
 *
 * Для более подробной информации можно изучить код тестов
 *
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');
let filterNameInput = homeworkContainer.querySelector('#filter-name-input');
let addNameInput = homeworkContainer.querySelector('#add-name-input');
let addValueInput = homeworkContainer.querySelector('#add-value-input');
let addButton = homeworkContainer.querySelector('#add-button');
let listTable = homeworkContainer.querySelector('#list-table tbody');

// let cookiesArray = [];
let cookieObj = getCookies();
let cookieFilteringObj = {};

function getCookies() {
    return document.cookie
        .split('; ')
        .filter(Boolean)
        .map(cookie => cookie.match(/^([^=]+)=(.+)/))
        .reduce((obj, [, name, value]) => {
            obj[name] = value;

            return obj;
        }, {});
}

function isMatching(full, chunk) {
    if (~full.toUpperCase().indexOf(chunk.toUpperCase())) {
                return true;
            }

            return false;
}

function createCookie(name, value){
    document.cookie = name + '=' + value + ';expires=Thu, 31 Dec 2019 12:00:00 UTC';
    // cookiesArray.push(name);
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function fillTable(cookieName, cookieValue) {
    // if (cookieName && cookieValue) {
        let row = document.createElement('TR');
        let cellName = document.createElement('TD');
        let cellValue = document.createElement('TD');
        let cellDelete = document.createElement('TD');
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Удалить';
        row.appendChild(cellName);
        row.appendChild(cellValue);
        row.appendChild(cellDelete);
        listTable.appendChild(row);
        row.setAttribute('id', cookieName);
                //deleteButton.setAttribute('type', 'submit');
        deleteButton.setAttribute('name', cookieName);
                //deleteButton.setAttribute('value', 'Delete');
        cellName.innerText = cookieName;
        cellValue.innerText = cookieValue;
        cellDelete.appendChild(deleteButton);
            
        

        //addNameInput.value = '';
        //addValueInput.value = '';

        deleteButton.addEventListener('click', function (e) {
            let nameForDelete = e.target.getAttribute('name');
            let deleteTr = document.getElementById(nameForDelete);

            deleteCookie(nameForDelete);
            deleteTr.remove();
        });
}

function clearTable() {
    for (let i = 0; i < listTable.childNodes.length; i++) {
        listTable.childNodes[i].remove();
        i--;
    }
}

addButton.addEventListener('click', () => {
    clearTable();
    let cookieName = addNameInput.value;
    let cookieValue = addValueInput.value;
    createCookie(cookieName, cookieValue);
    let cookieObj = getCookies();
    for (let key in cookieObj){
        if (filterNameInput.value) {
            if (isMatching(key, filterNameInput.value)) {
                fillTable(key, cookieObj[key]); 
            }
        } else {
            fillTable(key, cookieObj[key]); 
        }
    }
});

filterNameInput.addEventListener('keyup', function() {
        clearTable();
        let cookieObj = getCookies();
        // если в поле для фильтрации есть значение
        if (filterNameInput.value !== '') {
            for (let key in cookieObj) {
                if (isMatching(key, filterNameInput.value) || isMatching(cookieObj[key], filterNameInput.value)) {
                    fillTable(key, cookieObj[key]); 
                }
            }
        }
        // если поле для фильтрации пустое
        else if (filterNameInput.value == ''){
            let cookieObj = getCookies();
            for (let key in cookieObj){
               fillTable(key, cookieObj[key]); 
           }
        }
});
window.onload = () => {
    clearTable();
    let cookieObj = getCookies();
    for (let key in cookieObj){
       fillTable(key, cookieObj[key]); 
   }
}