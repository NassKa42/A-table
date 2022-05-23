let Int1 = 0;
let Int2 = 0;
let Int3 = 0;


function button1() {
    document.getElementById("button1").innerHTML="Seconde";
    
    if (Int1 === 1) {
        document.getElementById("button1").innerHTML="Première";
    }

    if (Int1 === 2) {
        document.getElementById("button1").innerHTML="Terminale";
    }

    if (Int1 === 3) {
        Int1 = 0
    }
    
    Int1 += 1;

}


function button2() {
    document.getElementById("button2").innerHTML="Seconde";

    if (Int2 === 1) {
        document.getElementById("button2").innerHTML="Première";
    }

    if (Int2 === 2) {
        document.getElementById("button2").innerHTML="Terminale";
    }

    if (Int2 === 3) {
        Int2 = 0
    }
    
    Int2 += 1;

}


function button3() {
    document.getElementById("button3").innerHTML="Seconde";

    if (Int3 === 1) {
        document.getElementById("button3").innerHTML="Première";
    }

    if (Int3 === 2) {
        document.getElementById("button3").innerHTML="Terminale";
    }

    if (Int3 === 3) {
        Int3 = 0
    }
    
    Int3 += 1;

}




