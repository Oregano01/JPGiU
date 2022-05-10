using System;
using System.Text;

class MultiTable
{
    public static void Main(string[] args) {

        Console.WriteLine("Podaj liczbe naturalną: ");
        int x = int.Parse(s: Console.ReadLine());
        Console.WriteLine("\n");
        // Console.WriteLine(x);

        for (int i=0; i<=x; i++) {
            Console.Write("{0, 4}", i);
        }
        Console.WriteLine("\n");

        for (int i=1; i<=x; i++) {
            Console.Write("{0, 4}", i);

            for (int j=1; j<=x; j++) {
                Console.Write("{0, 4}", i*j);
            }
        Console.WriteLine("\n");
        }
    }
}