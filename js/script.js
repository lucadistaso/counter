var counter = 0;

function incrementa(){
    counter++;
    document.getElementById("number").innerHTML = counter;
}

function decrementa(){
    if(counter != 0){
        counter--;
    }

    document.getElementById("number").innerHTML = counter;
}

function reset(){
    counter = 0;
    document.getElementById("number").innerHTML = counter;
    }
