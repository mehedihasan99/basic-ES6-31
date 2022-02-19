// with two 
const x = (x, y) => x * y;
const multi = x(10, 30);
console.log(multi);
// with three
const addThree = (x, y, z) => x + y + z;
const sum1 = addThree(30, 12, 11);
console.log(sum1);
// with 
const getOne = x => x*10;
const tenTimes = getOne(10);
console.log(tenTimes);
// with no parameter
const myName = () => "this is mehedi hasan";
const myName1 = myName();
console.log(myName1);
// with multiline
const doMath = (x, y) => {
    const sum = x + y;
    const mul = x * y;
    const sub = mul - sum;
    const result = sub / 2;
    return result;
}
const result = doMath(10, 20);
console.log(result);