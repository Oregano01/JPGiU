class Prostokat(var a: Double, var b: Double) {
    var pole: Double 
        get() = a*b
        set(value) {
            b = Math.sqrt(value)
            a = b
        }
    
    var obwod: Double 
        get() = 2* (a+b)
        set(value) {
            b = value /4
            a=b
        }
    
    val przekatna: Double
        get() = Math.sqrt(a*b + b*b)

    override fun toString() = "Prostokat: $a x $b"
}

fun main() {

    var prostokaty = listOf(
        Prostokat(3.6,5.0),
        Prostokat(9.7,4.4),
        Prostokat(55.0,6.6)
    )

    for(p in prostokaty) {
        //a
        println(p.toString())
    }
    println()
        //b
    prostokaty.forEach { println( it.toString())}
    println()

    println("By Pole: "+ prostokaty.sortedBy{it.pole})
    println("By Obwod: "+ prostokaty.sortedBy{it.obwod})
    println("By Przekatna: "+ prostokaty.sortedBy{it.przekatna})
    println("By a: "+ prostokaty.sortedBy{it.a})
    println("By b: "+ prostokaty.sortedBy{it.b})
    
}