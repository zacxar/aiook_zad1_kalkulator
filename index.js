var score = document.getElementById("score");
var mark = document.getElementById("mark");
var result = document.getElementById("result");

var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");

function firstCheck() {
    if(isNaN(parseInt(firstNumber.value))) {
        result.textContent = "Only numbers !!";
        this.value = "";
    }
    else {
        result.textContent = "";
    }
}

function secondCheck() {
    if(isNaN(parseInt(secondNumber.value))) {
        result.textContent = "Only numbers !!";
        this.value = "";
    }
    else {
        result.textContent = "";
    }
}

function addition() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if (!isNaN(first) && !isNaN(second)) {
        score.textContent = first + second;
        mark.textContent = "+";
    }
    else {
        result.textContent = "Please put some numbers in the given fields!";
    }
}

function subtraction() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if (!isNaN(first) && !isNaN(second)) {
        score.textContent = first - second;
        mark.textContent = "-";
    }
    else {
        result.textContent = "Please put some numbers in the given fields!";
    }
 }

 function multiplication() {
     let first = parseInt(firstNumber.value);
     let second = parseInt(secondNumber.value);

     if (!isNaN(first) && !isNaN(second)) {
         score.textContent = first * second;
         mark.textContent = "*";
     }
     else {
         result.textContent = "Please put some numbers in the given fields!";
     }
 }

 function division() {
     let first = parseInt(firstNumber.value);
     let second = parseInt(secondNumber.value);

     if (!isNaN(first) && !isNaN(second)) {
         if (second != 0) {
             score.textContent = first / second;
             mark.textContent = "/";
         }
         else {
             result.textContent = "You can't divide by 0!";
         }
     }
     else {
         result.textContent = "Please put some numbers in the given fields!";
     }
 }

 function exponentiation() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if (!isNaN(first) && !isNaN(second)) {
        let result = first;

        if(second === 0) {
            result = 1;
        }

        for(let i = 1; i < second;i++) {
            result = result * first;
        }

        score.textContent = result;
        mark.textContent = "^";
    }
    else {
        result.textContent = "Please put some numbers in the given fields!";
    }
}

function distance() {
    //55,55 60,-20
    let pointA = firstNumber.value.split(',');
    let pointB = secondNumber.value.split(',');

    if (pointA.length != 2 || pointB.length != 2
    || isNaN(pointA[0]) || isNaN(pointA[1])
    || isNaN(pointB[0]) || isNaN(pointB[1])) {
        result.textContent = "To calculate distance between two points put them in specified format (degrees only): [latitude,longitude]. If point is on the southern/western hemisphere, put '-' before latitude/longitude";
    }
    else {
        let r = 3440.1;

        let latA = Number(pointA[0]) * Math.PI / 180;
        let longA = Number(pointA[1]) * Math.PI / 180;
        let latB = Number(pointB[0]) * Math.PI / 180;
        let longB = Number(pointB[1]) * Math.PI / 180;
        // console.log("latA: " + latA);
        // console.log("\nlatB: " + latB);
        // console.log("\nlongA: " + longA);
        // console.log("\nlongB: " + longB);

        let longDiff = Math.abs(longA - longB);
        let latDiff = Math.abs(latA - latB);

        let c = Math.pow(Math.sin(latDiff / 2), 2) + Math.cos(latA) * Math.cos(latB) * Math.pow(Math.sin(longDiff / 2), 2);
        let result = 2 * r * Math.asin(Math.sqrt(c));

        score.textContent = result;
        mark.textContent = "<--->";
    }
}



































//
