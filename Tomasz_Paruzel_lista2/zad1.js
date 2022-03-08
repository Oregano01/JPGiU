function* Fibonacci() {
var f1 = 0;
var f2 = 1;
while (true) {
    var current = f1;
    f1 = f2;
    f2 = current + f1;
    yield current;
    }
}

var F = Fibonacci();

function wypisz(gen) {
    for (i=0;i<200;i++) {
        console.log(BigInt(gen.next().value));
    }
}

function wypisz1(gen) {
    for (i=0;i<200;i++) {
        console.log(BigInt(gen.next().value));
        
    }
}

wypisz1(F)