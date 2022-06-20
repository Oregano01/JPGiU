using System;
namespace Listy;

class Lista {
    public List<int> lista = new List<int>();
    public static Random rnd = new Random();
    public Lista(int n) {
        for (int i = 0; i<n ; i++) {
            lista.Add(rnd.Next(1, 101));
        }
    }
    public Lista() {
        for (int i = 0; i < rnd.Next(1, 6); i++) {
            lista.Add(rnd.Next(1, 101));
        }
    }
    public override string ToString() {
        return string.Join(" ", lista);
    }
}

class Lista1 : Lista, IComparable<Lista1> {
    public Lista1(): base() {}
    public Lista1(int n) : base(n) {}
    public int CompareTo(Lista1 other) {
        
    }
    
}

