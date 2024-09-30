var count

if(localStorage.getItem('count') != null){
    count = localStorage.getItem('count');
    }
else{
    count = 0;
}
document.getElementById('counter').innerHTML = count;

function inc(){
    count++;
    document.getElementById('counter').innerHTML = count;
    localStorage.setItem('count', count);
}

function dec(){
    if(count == 0){
        return
    }
    count--;
    document.getElementById('counter').innerHTML = count;
    localStorage.setItem('count', count);
}

function reset(){
    count = 0;
    document.getElementById('counter').innerHTML = count;
    localStorage.setItem('count', count);
}

var intervalId
var del
function autoInc (){
    stop()
    del = parseInt(document.getElementById('del').value)*1000;
    intervalId = setInterval(function(){
        inc();
    }, del);
}

function autoDec (){
    stop()
    del = parseInt(document.getElementById('del').value)*1000;
    intervalId = setInterval(function(){
        dec();
        if(count == 0){
            clearInterval(intervalId);
        }
    }, del);
}

function stop(){
    clearInterval(intervalId);
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
    document.body.style.color = 'white';
    buttons.forEach(button => {
        button.style.border = '2px solid white';
    });
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    darkModeToggle.innerHTML = '🌑';
    document.body.style.backgroundColor = 'white';
    buttons.forEach(button => {
        button.style.border = '2px solid black';
    });    
    document.body.style.color = 'black';
    localStorage.setItem('darkMode', 'disabled');
}


document.addEventListener('keydown', function(event) {
    if(event.key == 'ArrowUp'){
        inc();
    }
    if(event.key == 'ArrowDown'){
        dec();
    }
    if(event.key == 'r' || event.key == 'R'){
        reset();
    }
});

document.getElementById('del').addEventListener('keydown', function(event) {
    if(event.key == 'Enter'){
        autoInc();
    }
});


