//funkcja z gwiazdką, która zwraca dzilniki liczby 'n'
function* dzielniki(n) {
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            yield i;
        }
    }
}

//funkcja wypisujaca wszystkie liczby pierwsze do liczby 'n'
function* pierwsze(n) {
    for (i = 1; i < n; i++) {
        var notPrime = false;
        for (j = 2; j < i; j++) {
            if (i % j === 0 && j !== i) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            yield i;
        }
    }
}

//funkcja rozkładająca liczbę 'n' na czynniki pierwsze
function* rozkład(n) {
    for (i = 2; n != 1;) {
        if (n % i == 0) {
            yield i;
            n /= i;
        }
        else {
            i++;
        }
    }
}

//funkcja sklej
function sklej(gen, glue = ',') {
    let skl = '';
    for (let arg of gen) {
        skl += arg + glue
    }
    console.log(skl);
    return skl;


}

//funkcja suma
function suma(gen) {
    var s = 0;
    for (let arg of gen)
        s += arg;

    console.log(s)
    return s;

}

//funkcja iloczyn
function iloczyn(gen) {
    var ilo = 1;
    for (let arg of gen) {
        ilo *= arg;
    }
    console.log(ilo);
    return ilo;

}

//przypisanie naszych funkcji do argumentu w celu póżniejszego wykorzystania w kolejnych funkcjach
var g = dzielniki(27);
var p = pierwsze(12);
var r = rozkład(18);

function wypisz(gen) {
    for (let x of gen)
        console.log(x);
}

function wypisz2(gen) {
    while (!(x = gen.next()).done)
        console.log(x.value);
}


//Sprawdzamy funkcjonowanie funkcji trzema metodami
// console.log(Array.from(p));
//  wypisz(r);
// wypisz2(g);

sklej(r);
// suma(g);
// iloczyn(p);