function calculateTriangle() {
    var sideA = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
    if (isNaN(sideA) || sideA <= 0) {
        alert('Incorrect data');
        return;
    }

    var sideB = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
    if (isNaN(sideB) || sideB <= 0) {
        alert('Incorrect data');
        return; 
    }

    var sideC = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
    if (isNaN(sideC) || sideC <= 0) {
        alert('Incorrect data');
        return; 
    }

    var semiPerimeter = (sideA + sideB + sideC) / 2;
    var triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    triangleArea = triangleArea.toFixed(3);
    alert('Площа трикутника: ' + triangleArea);

    var isRightTriangle = (sideA ** 2 + sideB ** 2 === sideC ** 2) || (sideA ** 2 + sideC ** 2 === sideB ** 2) || (sideB ** 2 + sideC ** 2 === sideA ** 2);
    alert('Цей трикутник є прямокутним: ' + isRightTriangle);
}

calculateTriangle();
