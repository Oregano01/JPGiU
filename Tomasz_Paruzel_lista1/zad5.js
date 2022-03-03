function* dzielniki(n) {
    var index = 2;
    let liczba = n;
    while (liczba > 1) {
        if (liczba % index ==0) {
            liczba /= index;
        }
        else
        {
            yield index++
        }
    }
}

var gen = dzielniki();

console.log(dzielniki(6))

