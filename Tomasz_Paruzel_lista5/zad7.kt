fun rozkład(n: Int, operations: (Int) -> Unit) {
    var i = 2
    var r = n
    while(r > 1) {
        if(r%i == 0) {
            r /= i
            operations(i)
        }
        else i++
    }
}

fun dzielniki(n: Int, operations: (Int) -> Unit) {
    var i = 0
    do {
        i++
        if(n%i == 0) {
            operations(i)
        }
    }
    while(i != n)
}


fun main() {
    print("120 = ")
    rozkład(120){ print(" $it") }
    println()
    print("150 = ")
    dzielniki(150){ print(" $it")}
}