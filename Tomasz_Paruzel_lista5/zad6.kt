// class Rozkład(var n:Int=1){
//     var i=2
//     operator fun iterator()=this
//     operator fun hasNext()=n>1
//     operator fun next():Int { while(n%i!=0) i++; n/=i; return i}
//     }

class Dzielnik(var n: Int = 1) {
    var dzielnik = 1
    operator fun iterator() = this
    operator fun hasNext() = n > dzielnik
    operator fun next(): Int {
        while(n%dzielnik !=0) {
            dzielnik++
        }
        return dzielnik++
    }
}

fun main(){
    // print("120 =")
    // for(x in Rozkład(120))
    //     print(" $x")
    // println()
    print("150 =")
    for(y in Dzielnik(150))
        print(" $y")
    }