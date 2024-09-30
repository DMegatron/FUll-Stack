
var bmi = 0;

function calculate(){
    var height = document.querySelector(".height").value;
    var weight = document.querySelector(".weight").value;

    if(/^-?\d+(\.\d+)?$/.test(height) === false || /^-?\d+(\.\d+)?$/.test(weight) === false){
        return;
    }

    var heightUnit = document.querySelector(".height-unit").value;
    var weightUnit = document.querySelector(".weight-unit").value;

    if(heightUnit === "Cm"){
        height = eval(height/100);
    }

    else if(heightUnit === "Inches"){
        height = eval(height*0.0254);
    }

    else if(heightUnit === "Feet"){ 
        height = eval(height*0.3048);
    }

    else if(heightUnit === "Km"){
        height = eval(height*1000);
    }

    if(weightUnit === "Pound"){
        weight = eval(weight*0.453592);
    }

    else if(weightUnit === "Ton"){
        weight = eval(weight*1000);
    }

    bmi = eval(weight/(height**2)).toFixed(1);
    if(bmi <= 50 && bmi >= 10){
        document.querySelector(".bmi").style.height = "79px";
        animateBmi(bmi);
    }
    else{
        document.querySelector(".bmi").style.height = "106px";
        document.querySelector(".bmi").innerHTML = `${bmi} 💀`;
    }
    rotateGauge(getRotationDegree(bmi));
}

function getRotationDegree(value) {
    if (value < 16) {
        return (value / 16) * 33;
    } else if (value >= 16 && value <= 17) {
        return 33 + (value - 16) * (63 - 33);
    } else if (value > 17 && value <= 18.5) {
        return 63 + (value - 17) * (93 - 63) / 1.5;
    } else if (value > 18.5 && value <= 25) {
        return 93 + (value - 18.5) * (124 - 93) / (25 - 18.5);
    } else if (value > 25 && value <= 30) {
        return 124 + (value - 25) * (154 - 124) / (30 - 25);
    } else if (value > 30 && value <= 35) {
        return 154 + (value - 30) * (185 - 154) / (35 - 30);
    } else if (value > 35 && value <= 40) {
        return 185 + (value - 35) * (215 - 185) / (40 - 35);
    } else {
        return 230;
    }
}

function rotateGauge(angle) {
    const gauge = document.querySelector(".gauge");
    gauge.style.transform = `translate(-50%, -50%) rotate(${angle-35}deg)`;
    console.log(angle);
    if (bmi > 40) {
        gauge.style.transform = `translate(-50%, -50%) rotate(193deg)`;
        setTimeout(() => {
            gauge.classList.add('vibrate');
        }, 600);
    } else {
        gauge.classList.remove('vibrate');
    }
}

function animateBmi(bmi) {
    let i = 0;
    const interval = 10;
    const step = 1;
    
    const bmiElement = document.querySelector(".bmi");

    const timer = setInterval(() => {
        if (i >= bmi) {
            clearInterval(timer);
            i = bmi;
        }
        bmiElement.innerHTML = i;
        i += step;
    }, interval);
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
var buttons = document.querySelectorAll('#reset, #autoinc, #autodec, #stop');

if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    if (localStorage.getItem('darkMode') !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


function enableDarkMode() {
    darkModeToggle.innerHTML = '☀️';
    document.body.style.backgroundColor = 'black';
    document.querySelector('.calculate-btn').style.color = 'white';
    document.body.style.color = 'white';
    
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    darkModeToggle.innerHTML = '🌑';
    document.body.style.backgroundColor = 'white';  
    document.querySelector('.calculate-btn').style.color = 'black';
    document.body.style.color = 'black';
    localStorage.setItem('darkMode', 'disabled');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});