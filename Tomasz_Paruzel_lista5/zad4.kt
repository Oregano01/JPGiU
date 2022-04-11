interface Masywny {val masa: Double}

class Osoba (override val masa: Double): 
Masywny {
    override fun toString() = "Osoba o masie: $masa kg"
}

class Zwierze (override val masa: Double): 
Masywny {
    override fun toString() = "Zwierze o masie: $masa kg"
}

class Bagaz (override val masa: Double): 
Masywny {
    override fun toString() = "Bagaz o masie: $masa kg"
}

class Auto (override val masa: Double): 
Masywny {
    override fun toString() = "Auto o masie: $masa kg"
}

fun main() {
    var cargo = listOf (
        Osoba(78.5),
        Zwierze(9.6),
        Bagaz(24.6),
        Auto(1490.0)
    )
    //a
    println(cargo.sortedWith(Comparator {
        a, b -> when {
            b.masa > a.masa -> 1
            b.masa < a.masa -> -1
            else -> 0
        }
    }))
    println()
    //b
    var lacznaMasa = cargo.fold(0.0, {suma, a -> suma + a.masa}) //1602.7
    println("Laczna masa: "+ lacznaMasa+ " kg")
    println("Srednia masa: "+ lacznaMasa / cargo.size +" kg")
    println()
    //c
    cargo.filter{it.masa > lacznaMasa/cargo.size}.forEach{println("Mase wieksza od sredniej: "+ lacznaMasa/cargo.size +" kg ma "+it)}
}