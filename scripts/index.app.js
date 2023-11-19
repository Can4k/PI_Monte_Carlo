// Получаем инпуты данных
const NumberOfPointsConatainer = document.getElementById('number-of-points');
const SquareSideContainer = document.getElementById('square-side');
const DelayContainer = document.getElementById('delay');


// Функция, которая генерирует параметры для страницы визуализации
function GeneratePage() {
    const NumberOfPoints = NumberOfPointsConatainer.value;
    const SquareSide = SquareSideContainer.value;
    const Delay = DelayContainer.value;

    let QueryParamsString = "";

    if (NumberOfPoints !== '') {
        QueryParamsString += `&points=${NumberOfPoints}`;
    }

    if (SquareSide !== '') {
        QueryParamsString += `&side=${SquareSide}`;
    }

    if (Delay !== '') {
        QueryParamsString += `&delay=${Delay}`;
    }

    window.open(`/visualisation.html${QueryParamsString.length ? '?' + QueryParamsString : ''}`, "_blank");
}