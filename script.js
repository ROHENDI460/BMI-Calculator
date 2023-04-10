function checkNumber(num) {
    return num == 0 ? false : true;
}

function checkResult() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    if(checkNumber(weight) && checkNumber(height)) {
        const result = (weight/Math.pow(height/100, 2)).toFixed(1);
        let Categories;
        if(result >= 30) {
            Categories = "Obesity"
        } else if(result >= 25 && result <= 29.99) {
            Categories = "Overweight"
        } else if(result >= 18.5 && result <= 24.99) {
            Categories = "Normal weight"
        } else if(result <= 18.5) {
            Categories = "Underweight"
        } 
        document.getElementById("hasil").innerHTML = "Your BMI is <b>" + result + "</b> which means You are <b>" + Categories + "</b>";
    }

}