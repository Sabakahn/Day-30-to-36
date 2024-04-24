function filterGreaterThenTen (numbers:number[]):number[]{
    return numbers.filter(numbers=>numbers>(0));
}
const numbers: number[] =[5,10,15,20,25];
console.log(filterGreaterThenTen(numbers));