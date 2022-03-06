function suma(args) {
    let result = 0;
    for (var i = 0; i < arguments.length; i++)
    {
        if(isNaN(args)) 
        {
            result = result + i.value;
        }
      
    }
    return result;
}

console.log(suma(1,2,3,10,[],20,30,"marek",{a:4}));