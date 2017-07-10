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
let cookieObj = {};
let cookieFilteringObj = {};

function isMatching(full, chunk) {
    let fullStr = full.toLowerCase();
    let chunkStr = chunk.toLowerCase();

    if (fullStr.indexOf(chunkStr) !== -1) {

        return true;
    }

    return false;
}

function createCookie(name, value){
    document.cookie = name + '=' + value + ';expires=Thu, 31 Dec 2019 12:00:00 UTC';
    // cookiesArray.push(name);
    cookieObj[name] = value;
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
        let deleteButton = document.createElement('INPUT');

        for (let key in cookieObj){
            if (key == cookieName) {
                let changedRow = document.getElementById(cookieName);
                let arrTd = changedRow.getElementsByTagName('TD');

                changedRow.remove();
                arrTd[1].innerText = cookieObj[key];

                // clear inputs
                addNameInput.value = ' ';
                addValueInput.value = ' ';
            }
            else {
                row.appendChild(cellName);
                row.appendChild(cellValue);
                row.appendChild(cellDelete);
                listTable.appendChild(row);
                row.setAttribute('id', cookieName);
                deleteButton.setAttribute('type', 'submit');
                deleteButton.setAttribute('name', cookieName);
                deleteButton.setAttribute('value', 'Delete');
                cellName.innerText = cookieName;
                cellValue.innerText = cookieValue;
                cellDelete.appendChild(deleteButton);
            }
        }

        createCookie(cookieName, cookieValue);
        addNameInput.value = '';
        addValueInput.value = '';

        deleteButton.addEventListener('click', function () {
            let nameForDelete = this.getAttribute('name');
            let deleteTr = document.getElementById(nameForDelete);

            deleteCookie(nameForDelete);
            deleteTr.remove();
        });
}

function clearTable() {
    let trArrayForRemoving = listTable.getElementsByTagName('TR');

    for (let i = 0; i < trArrayForRemoving.length; i++) {

        trArrayForRemoving[i].remove();
    }
}

addButton.addEventListener('click', () => {
    let cookieName = addNameInput.value;
    let cookieValue = addValueInput.value;

    if (cookieName && cookieValue){
        fillTable(cookieName, cookieValue);
    }
});

filterNameInput.addEventListener('keyup', function() {

        // если в поле для фильтрации есть значение
        if (filterNameInput.value !== '') {
            // for (let i = 0; i < cookiesArray.length; i++) {
            for (let key in cookieObj) {
                // console.log('key', key);
                if (isMatching(key, filterNameInput.value)) {
                    let shownTr = document.getElementById(key);
                    console.log('shownTr: ', shownTr);
                    cookieFilteringObj[key] = cookieObj[key];
                    // clearTable();
                    fillTable(key, cookieFilteringObj[key]);
                }

                cookieFilteringObj = {}; //очищем объект после каждого ввода в инпут
            }
        }
        // если поле для фильтрации пустое
        else if (filterNameInput.value == ''){
            for (let key in cookieObj) {
                fillTable(key, cookieObj[key]);
            }
            console.log('cookieObj', cookieObj);
        }
});
