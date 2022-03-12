function Fibo() {
    this.a = 0n;
    this.b = 1n;
}

Fibo.prototype.next = function () {
    this.current = this.a;
    [this.a, this.b] = [this.b, this.a + this.b];
    return { value: this.current, done: false }
}

let z2 = new Fibo()

for (i = 0; i < 200; i++) {
    console.log(i + 1, " = ", z2.next().value);
}


