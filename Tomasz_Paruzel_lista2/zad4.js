Array.prototype.wspak = function* () {
    for (var i = this.length -1; i >= 0; i--) {
        yield this[i];
    }
}

for (let x of [2, 3, 44, 5, 11, 4].wspak())
    console.log(x)