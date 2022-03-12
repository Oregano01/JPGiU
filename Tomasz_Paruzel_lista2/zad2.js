function Fibo() {
    this.a = 0n;
    this.b = 1n;
}

Fibo.prototype.next = function() {
    this.current = this.a;
    [this.a, this.b] = [this.b, this.a + this.b];
    return {value: this.current, done: false}
}

let z2 = new Fibo()

function wypisz(gen) {
    for (i=0;i<200;i++) {
        console.log(gen.next().value);
    }
}

wypisz(z2)