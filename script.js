//print odds 1-20
function printOdd() {
    for (var i = 1; i <=20; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}

//decreasing multiples of 3
function ofThree() {
    for(var i = 100; i > 0; i--) {
        if (i % 3 ==0) {
            console.log(i);
        }
    }
}

//print the sequence
function printSeq() {
    var seq = [4, 2.5, 1, -0.5, -2, -3.5];
    for(var i = 0; i < seq.length; i++) {
        console.log(seq[i]);
    }
}

//stigma
function stigma() {
    sum = 0;
    for(i = 1; i <= 100; i++) {
        sum += i;
        console.log(sum);
    }
}

//factioral
function fact(){
    var product = 1;
    for(var i = 1; i <= 12; i++) {
        product *= i;
        console.log(product);
    }
}
