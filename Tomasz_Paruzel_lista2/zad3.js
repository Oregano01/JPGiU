function* fragment(iter, skip, limit=1) {
    for (let x of iter) {
        if (skip!=0) {
            skip--;
        }
        else if (limit!=0)
        {
            yield x;
            limit--;
        }
    if (limit===0) 
        break;
    }
}

function* Fibonacci() {
    var f1 = 0n;
    var f2 = 1n;
    while (true) {
        var current = f1;
        f1 = f2;
        f2 = current + f1;
        yield current;
        }
    }

for (let x of fragment(Fibonacci(), 50, 1))
    console.log(x)