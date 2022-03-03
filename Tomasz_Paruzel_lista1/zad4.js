// class Kwadrat {
//     constructor(a) { this.a = a; }
//     get bok() { return this.a; }
//     set bok(a) { this.a = a; }
//     get obwód() { return 4 * this.a; }
//     set obwód(len) { this.a = len / 4; }
//     get pole() { return this.a * this.a; }
//     set pole(P) { this.a = Math.sqrt(P); }
//     toString() {return 'a=${this.bok}\nL=${this.obwód}\nP=${this.pole}\n';}
//     }
// let k = new Kwadrat(1);
// console.log(k.bok, k.obwód, k.pole);
// console.log(k+"");

// k.bok = 12;
// console.log(k.bok, k.obwód, k.pole);
// console.log(k+"");

// k.obwód = 12;
// console.log(k.bok, k.obwód, k.pole);
// console.log(k+"");

// k.pole=12;
// console.log(k.bok, k.obwód, k.pole);
// console.log(k+"");

class Koło {
    constructor(R) {
        this.r = R;
    }

    get promień() {
        return this.r;
    }

    set promień(R) {
        this.r = R;
    }

    get średnica() {
        return this.r * 2;
    }

    set średnica(R) {
        this.r = R/2;
    }

    get pole() {
        return Math.PI*this.r^2;
    }

    set pole(R) {
        this.r = Math.sqrt(R/Math.PI);
    }

    get obwód() {
        return 2*Math.PI*this.r^2;
    }

    set obwód(R) {
        this.r = R/(2*Math.PI);
    }
    toString() {return 'r=${this.promień}\nr*2=${this.średnica}\npole=${this.pole}\nobwód=${this.obwód}\n';}

}

var l=new Koło(3);  // Koło o promieniu 3
console.log(l.promień, l.średnica, l.pole, l.obwód);
console.log(l+"");

l.promień=8;        // zmienia promień na 8
console.log(l.promień, l.średnica, l.pole, l.obwód);
console.log(l+"");

l.średnica=10;      // zmienia promień ma 5
console.log(l.promień, l.średnica, l.pole, l.obwód);
console.log(l+"");

l.pole=4;           // zmienia promień na sqrt(4/Pi)
console.log(l.promień, l.średnica, l.pole, l.obwód);
console.log(l+"");

l.obwód=7;          // zmienia promień na 3.5/Pi
console.log(l.promień, l.średnica, l.pole, l.obwód);
console.log(l+"");