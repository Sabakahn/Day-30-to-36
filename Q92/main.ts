function removeLastElement <T> (arr: T[]):T | undefined
{
    return arr.pop();
}
    const fruits :any [] =["Apple","Banana","Cherry"];

console.log(removeLastElement(fruits));
console.log(fruits);
