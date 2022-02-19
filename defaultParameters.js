function addNum(x = 10, y = 15){
    return x + y;
}

const sum = addNum(2);
console.log(sum);

function myAdd(x = 1, y = x, z = x + y){
    return x + y + z;
}
const myNum = myAdd(5);
console.log(myNum);