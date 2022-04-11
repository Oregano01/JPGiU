class Osoba(var imie:String, var nazwisko:String) {
    override fun toString()="$imie $nazwisko"
}
var osoby=listOf(
    Osoba("Jan","Kowalski"),
    Osoba("Ewa","Nowak"),
    Osoba("Artur","Kowalski"),
    Osoba("Adam","Nowak")
)

fun main() {
    //a
    println(osoby.sortedBy {it.imie})

    //b
    println(osoby.sortedWith(Comparator<Osoba> {
        a,b -> when {
            a.imie > b.imie -> 1
            a.imie < b.imie -> -1
            else -> 0
        }
    }))

    //c
    println(osoby.sortedWith(Comparator<Osoba> {
        a,b -> when {
            a.nazwisko > b.nazwisko -> 1
            a.nazwisko < b.nazwisko -> -1
            a.imie > b.imie -> 1
            a.imie < b.imie -> -1
            else -> 0        }
    }))

    //d
    println(osoby.sortedBy {it.nazwisko + " " + it.imie})
}