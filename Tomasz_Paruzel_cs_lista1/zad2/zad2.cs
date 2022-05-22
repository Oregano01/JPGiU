using System;

namespace zad2 {
    class Liczby {
        private int operacje;
        private int pobrania;
        private int nadania;
        private int wartości;

        public Liczby(int val, int operations) {
            wartości = val;
            operacje = operations;
        }

        public int wartosc
            {
                get
                {
                    pobrania++;
                    if (pobrania < operacje) {
                        return wartosc;
                    }
                    else
                    {
                        Console.WriteLine("Nieautoryzowana próba dostępu : pobranie wartości");
                        return -1;
                    }
                }
 
                set
                {
                    nadania++;
                    if (nadania < operacje) {
                        wartosc = value;
                    }
                    else
                    {
                        Console.WriteLine("Nieautoryzowana próba dostępu : nadanie wartości");
                    }
                }
            }

        public void Ureguluj()
        {
            pobrania = 0;
            nadania = 0;
        }
        public void WypiszStan()
        {
            Console.WriteLine("Operacje pobrań : " + pobrania);
            Console.WriteLine("Operacje nadań : " + nadania);
        }
    

        static void Main(String[] args) {
            Liczby test = new Liczby(10,10);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            test.wartosc = 2;
            Console.WriteLine(test.wartosc);
            test.WypiszStan();
            Console.WriteLine(test.wartosc);
            test.WypiszStan();
            test.Ureguluj();
            test.WypiszStan();
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            test.wartosc=1;
            test.WypiszStan();

        }
    }
}