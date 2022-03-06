function* dzielniki(n) {
   for ( i = 2; i<n; i++ ) {
        if (n % i === 0){
            yield i;
         }
       }
    }


var g = dzielniki(9);

function wypisz(gen) {
    for (let x of gen)
        console.log(x);
}

function wypisz2(gen) {
    while (!(x = gen.next()).done)
        console.log(x.value);
}

wypisz(g);
// wypisz2(g);