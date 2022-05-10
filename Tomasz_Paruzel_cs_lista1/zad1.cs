using System;

class MultiTable
{
    public static void Main(string[] args) {

        Console.WriteLine("Podaj liczbe naturalną: ");
        int x = int.Parse(Console.ReadLine());
        Console.WriteLine("\n");
        // Console.WriteLine(x);

        for (int i=0; i<=x; i++) {
            Console.Write("{0, 3}", i);
        }
        Console.WriteLine("\n");

        for (int i=1; i<=x; i++) {
            Console.WriteLine("{0, 3}", i);

            for (int j=1; j<=x; j++) {
                Console.Write(String.Format("{0, 3", j));
            }
        }
    }
}