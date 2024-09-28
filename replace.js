let product = [
    {name : "iphone", price : "$600"},
    {name : "MI", price : "$200"},
    {name : "oppo", price : "$250"},
    {name : "poco", price : "$150"}
];
function compareBy(propertyName){
    return function (a,b){
        let x = a[propertyName],
            y = b[propertyName];

            if(x > y){
                return 1
            }
            else if(x < y){
           return -1;
            }
            else{
                return 0;
            }
    };
}

console.log("product sorted by price :");
product.sort(compareBy('price'));
console.table(product);

console.log("product sorted by name :");
product.sort(compareBy('name'));
console.table(product);