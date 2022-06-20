using Listy;

class Program {
    static void Main(string[] args) {
        Lista lista = new Lista(9);
        Console.WriteLine("\nLista z losowymi elementami między 1 a 100, długość = n: ");
        Console.WriteLine(lista);
        lista = new Lista();
        Console.WriteLine("\nLista z losowymi elementami z przedziału 1 a 100, długość z przdziału 1..5:");
        Console.WriteLine(lista);
    }
}