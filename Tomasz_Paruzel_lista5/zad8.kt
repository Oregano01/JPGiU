operator fun Int.times(text: String): String {
    var res=""
    text.forEach{
        var char = it
        repeat(this) {
            res += char
        }
    }
     return res
}

fun main() {
    println(3* "Ala ma kota")
}