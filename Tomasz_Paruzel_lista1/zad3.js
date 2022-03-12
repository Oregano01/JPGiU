function suma(arg) {
    let result = 0;
    for (let arg of arguments) {
        if (typeof arg === 'number')
            result += arg;
        else if (Array.isArray(arg))
            result += suma(...arg);
    }
    return result;
}



console.log(suma(1, 2, 3, 10, [], 20, 30, "marek", { a: 4 }));     //66
console.log(suma(1, 2, 3, [4, 5, "aa"], 10, "asda"));          //25
console.log(suma(1, 2, 3, [4, 5, [5, 5]], 10));                //35