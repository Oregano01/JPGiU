function* Fibonacci() {
var f1 = 0n;
var f2 = 1n;
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
        console.log(gen.next().value);
    }
}

wypisz(F)