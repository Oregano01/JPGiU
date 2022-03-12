class Kwadrat {
    constructor(a) { this.a = a; }
    get bok() { return this.a; }
    set bok(a) { this.a = a; }
    get obwod() { return 4 * this.a; }
    set obwod(len) { this.a = len / 4; }
    get pole() { return this.a * this.a; }
    set pole(P) { this.a = Math.sqrt(P); }
    toString() { return `a=${this.bok}\nL=${this.obwod}\nP=${this.pole}\n`; }
}

let k = new Kwadrat(1);
console.log(k + '');

k.bok = 12;
console.log(k + '');

k.obwód = 12;
console.log(k + '');

k.pole = 12;
console.log(k + '');

class Koło {
    constructor(R) {
        this.r = R;
    }

    get promien() {
        return this.r;
    }

    set promien(R) {
        this.r = R;
    }

    get srednica() {
        return this.r * 2;
    }

    set srednica(R) {
        this.r = R / 2;
    }

    get pole() {
        return Math.PI * this.r ^ 2;
    }

    set pole(R) {
        this.r = Math.sqrt(R / Math.PI);
    }

    get obwod() {
        return 2 * Math.PI * this.r ^ 2;
    }

    set obwod(R) {
        this.r = R / (2 * Math.PI);
    }
    toString() { return `r=${this.promien}\nr*2=${this.srednica}\npole=${this.pole}\nobwód=${this.obwod}\n`; }

}

var l = new Koło(3);  // Koło o promieniu 3
console.log(l + '');

l.promień = 8;        // zmienia promień na 8
console.log(l + '');

l.średnica = 10;      // zmienia promień ma 5
console.log(l + '');

l.pole = 4;           // zmienia promień na sqrt(4/Pi)
console.log(l + '');

l.obwód = 7;          // zmienia promień na 3.5/Pi
console.log(l + '');

var tablica = [new Koło(4), new Koło(3), new Koło(9), new Kwadrat(9), new Kwadrat(7), new Kwadrat(2), new Koło(5.4)]

for (let arg of tablica) {
    var sumObw = 0;
    var sumPol = 0;
    sumObw += arg.obwod;
    sumPol += arg.pole;
}

console.log(sumObw)
console.log(sumPol)