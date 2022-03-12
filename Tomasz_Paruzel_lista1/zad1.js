// funkcja sprawdzająca, czy podana wartość 'a' jest większa od argumentu 'n'
function bigger(n) {
    return (a) => a > n;
}

// funkcja sprawdzająca, czy podana wartość 'a' jest mniejsza od argumentu 'n'
function smaller(n) {
    return (a) => a < n;
}

// funkcja sprawdzająca, czy podany argument 'a' znajduje się w przedziale 'x','y'
function between(x, y) {
    return (a) => x < a && a < y;
}

console.log([2, 31, 5, 3, 6].filter(bigger(3)));        //wypisujemy wartości większe od 3  -   31, 5, 6
console.log([2, 31, 5, 3, 6].find(bigger(10)));
console.log([2, 31, 5, 3, 6].findIndex(bigger(3)));
console.log([2, 31, 5, 3, 6].findIndex(bigger(31)));
console.log([2, 31, 5, 3, 6].every(bigger(10)));        //sprawdzamy, czy wszystkie argumenty są większe od 10 - false
console.log([2, 31, 5, 3, 6].every(bigger(2)));         //sprawdzamy, czy wszystkie argumenty są większe od 2 - false
console.log([2, 31, 5, 3, 6].every(bigger(1)));         //sprawdzamy, czy wszystkie argumenty są większe od 1 - true
console.log([2, 31, 5, 3, 6].some(bigger(1)));          //sprawdzamy, czy jakieś argumenty są wieksze od 1  -   true
console.log([2, 31, 5, 3, 6].some(bigger(30)));         //sprawdzamy, czy jakieś argumenty są większe od 30 -   true
console.log([2, 31, 5, 3, 6].some(bigger(31)));         //sprawdzamy, czy jakies argumenty są większe od 31 -   false

console.log([2, 31, 5, 3, 6].filter(smaller(3)));
console.log([2, 31, 5, 3, 6].filter(smaller(31)));

console.log([2, 31, 5, 3, 6].filter(between(4, 10)));