class GeometryUtility {
    constructor(SQUARE_SIDE) {
        this.SQUARE_SIDE = SQUARE_SIDE;
    }

    // Погрешность
    EPS = 1e-6;

    // Функция, возводящая число в квадрат
    f2(value) {
        return value * value;
    }


    // Функция, считающая расстояние от точки (x, y) до центра квадрата данной стороны
    DistanceFromPointToCenterOfSquare(x, y) {
        const Cx = this.SQUARE_SIDE / 2;
        const Cy = this.SQUARE_SIDE / 2;
        return Math.sqrt(this.f2(Cx - x) + this.f2(Cy - y));
    }


    // Функция проверяющая, что первое число больше второго
    bigger(value1, value2) {
        return (value1 - value2) > this.EPS;
    }


    // Функция, провеяющая, что точка x, y находится внутри данного квадрата
    IsPointInCirle(x, y) {
        return !this.bigger(this.DistanceFromPointToCenterOfSquare(x, y), this.SQUARE_SIDE / 2);
    }


    // Функция, генерирующая случаную точку внутри квадарта с целыми координатами
    GeneratePointInSquare() {
        const Px = Math.random() * this.SQUARE_SIDE;
        const Py = Math.random() * this.SQUARE_SIDE;

        return [Px, Py];
    }
}

export default GeometryUtility