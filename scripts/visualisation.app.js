import ExperementUtility from '../utilities/experement.utility.js'


// Задаем минимальные константы
const MIN_SIDE = 200;
const MIN_TARGET_NUMBER_OF_POINTS = 1;


// Задаем дефолтные константы
const DEFAULT_SIDE = 200;
const DEFAULT_POINTS_NUMBER = 10000;
const DEFAULT_DELAY = 1;


// Получаем данные из query params
const urlParams = new URLSearchParams(window.location.search);
const SQUARE_SIDE = Math.max(MIN_SIDE, +(urlParams.get('side') ?? DEFAULT_SIDE));
const TARGET_NUMBER_OF_POINTS = Math.max(MIN_TARGET_NUMBER_OF_POINTS, +(urlParams.get('points') ?? DEFAULT_POINTS_NUMBER));
const DELAY = +(urlParams.get('delay') ?? DEFAULT_DELAY);


// Получаем контейнеры данных
const POINTS_IN_CIRCLE_CONTAINER = document.getElementById('points-in-circle');
const TOTAL_POINTS_CONTAINER = document.getElementById('points-total');
const PI_RESULT_CONTAINER = document.getElementById('pi-result');


// Записываем данные в title
document.title = + TARGET_NUMBER_OF_POINTS + ', ' + SQUARE_SIDE + '×' + SQUARE_SIDE;


// Создаем эксперемент
const experement = new ExperementUtility(
    document.querySelector('canvas'),
    DELAY,
    TARGET_NUMBER_OF_POINTS,
    SQUARE_SIDE,
    POINTS_IN_CIRCLE_CONTAINER,
    TOTAL_POINTS_CONTAINER,
    PI_RESULT_CONTAINER,
);


// Начинаем эксперемент
experement.Start();


// Получаем объекты, видимость которы нужно изменять
const Field = document.getElementById('field');
const LoadingLabel = document.getElementById('loading');


// Событие при загрузки страницы
window.addEventListener('load', () => {
    LoadingLabel.style.display = 'none';
    Field.style.display = 'revert';
});