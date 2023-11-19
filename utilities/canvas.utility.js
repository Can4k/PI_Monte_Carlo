class CanvasUtility {
    constructor(canvas, width, height) {
        canvas.height = height;
        canvas.width = width;

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }


    // Цвет точки внутри окружности
    GREEN_HEX = '#00FF00'

    // Цвет точки вне окружности
    RED_HEX = '#FF0000'


    // Функция печати точки с данной задержкой
    async PrintPoint(x, y, delay, IsPointInCircle) {
        this.ctx.fillStyle = IsPointInCircle ? this.GREEN_HEX : this.RED_HEX;

        // Делаем синхронную операцию
        if (!delay) {
            return this.ctx.fillRect(x, y, 1, 1);
        }

        // Делаем асинхронную операцию
        return new Promise((res, rej) => {
            setTimeout(() => res(this.ctx.fillRect(x, y, 1, 1)), delay);
        });
    }
}

export default CanvasUtility