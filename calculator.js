var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn){
    item.addEventListener('click', (e) =>{
        btntext=e.target.innerText;
        if (btntext=='x'){
            btntext='*';
        }

        if (btntext=='÷'){
            btntext='/';
        }
        screen.value+=btntext;
    });
}

function sin(){
    screen.value=Math.sin(screen.value);
}

function cos(){
    screen.value=Math.cos(screen.value);
}

function tan(){
    screen.value=Math.tan(screen.value);
}

function pow(){
    screen.value=Math.pow(screen.value, 2);
}

function sqrt(){
    screen.value=Math.sqrt(screen.value, 2);
}

function log(){
    screen.value=Math.log(screen.value);
}

function pi(){
    screen.value=3.141592653589;
}

function e(){
    screen.value=2.718281828459;
}

function fact(){
    var i, number, f;

    f=1;
    number=screen.value;
    for(i=1; i<=number; i++){
        f=f*i;

        screen.value=f;
    }
}

function backspace(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}

function modulo(){
    let value = parseFloat(screen.value);
    screen.value = screen.value / 100;
}


function calculate(){
    try{
        if (screen.value.trim() === "") {
            screen.value = "ERROR";
            return;
        }
        
        // Evaluate the expression
        let result = eval(screen.value);
        
        // Check if the result is valid (not undefined or NaN)
        if (result === undefined || isNaN(result)) {
            throw new Error("Invalid result");
        }
        
        screen.value = result;
    }
    catch(error){
        screen.value="ERROR";
    }
}



