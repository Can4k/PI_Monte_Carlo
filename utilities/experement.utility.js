import CanvasUtility from "./canvas.utility.js";
import GeometryUtility from "./geometry.utility.js";

class ExperimentUtility {
    constructor(
        canvas, delay, points, side,
        POINTS_IN_CIRCLE_CONTAINER, TOTAL_POINTS_CONTAINER, PI_RESULT_CONTAINER
    ) {
        this.POINTS_IN_CIRCLE_CONTAINER = POINTS_IN_CIRCLE_CONTAINER;
        this.TOTAL_POINTS_CONTAINER = TOTAL_POINTS_CONTAINER;
        this.PI_RESULT_CONTAINER = PI_RESULT_CONTAINER;

        this.CanvasController = new CanvasUtility(canvas, side, side);
        this.GeometryController = new GeometryUtility(side);

        this.TARGET_NUMBER_OF_POINTS = points;
        this.DELAY = delay; 
    }


    OUTPUT_FIX = 5;


    // Задаём состояние эксперемента
    ExperimentState = {
        TOTAL_NUMBER_OF_POINTS: 0,
        POINTS_IN_CIRCLE: 0,
    };


    // Функция которая создает точку
    async MakePoint() {
        const [Px, Py] = this.GeometryController.GeneratePointInSquare();

        const PointInCircle = this.GeometryController.IsPointInCirle(Px, Py);

        this.ExperimentState.POINTS_IN_CIRCLE += PointInCircle;
        this.ExperimentState.TOTAL_NUMBER_OF_POINTS++;

        await this.CanvasController.PrintPoint(Px, Py, this.DELAY, PointInCircle);

        this.UpdateStatisticsVisualisation();
    };


    // Функция, которая обновляет содержимое внутри визуализаторов
    UpdateStatisticsVisualisation() {
        this.POINTS_IN_CIRCLE_CONTAINER.innerText = this.ExperimentState.POINTS_IN_CIRCLE;
        this.TOTAL_POINTS_CONTAINER.innerText = this.ExperimentState.TOTAL_NUMBER_OF_POINTS;
        this.PI_RESULT_CONTAINER.innerText = (4 * this.ExperimentState.POINTS_IN_CIRCLE / this.ExperimentState.TOTAL_NUMBER_OF_POINTS).toFixed(this.OUTPUT_FIX);
    };


    // Функция старта
    async Start() {
        while (this.ExperimentState.TOTAL_NUMBER_OF_POINTS < this.TARGET_NUMBER_OF_POINTS) {
            await this.MakePoint();
        }
    };
}

export default ExperimentUtility