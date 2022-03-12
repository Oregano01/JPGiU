function fa(a, b) {
    return b - a;
}

console.log([1, 2, 3, 271, 12313, 123, 21313, 541, 42].sort(fa));

function fb(a, b) {
    return a % 10 - b % 10;
}

console.log([1, 2, 3, 271, 12313, 123, 21313, 541, 42].sort(fb));

function fc(a, b) {
    return a % 100 - b % 100;
}

console.log([1, 2, 3, 271, 12313, 123, 21313, 541, 42].sort(fc));

function fd(a, b) {
    let sumA = 0;           //Suma obliczanej liczby 'a'
    let sumB = 0;           //Suma obliczanej liczby 'b'
    var aa = a;
    var bb = b;
    let d = 10;

    for (let i = 0; i < String(a).length; i++)       //Funkcja oblicza sume podanej liczby poprzez kolejne wybieranie
    {                                           // i sumowanie cyfr. Liczba 'a' została podmieniona na string w celu określenia 
        sumA += aa % d;                           // długości liczby.
        aa = (aa - aa % d) / d;
    }

    for (let i = 0; i < String(b).length; i++) {
        sumB += bb % d;
        bb = (bb - bb % d) / d;
    }
    return sumA - sumB;
}

console.log([1, 2, 3, 271, 12313, 123, 21313, 541, 42].sort(fd));
