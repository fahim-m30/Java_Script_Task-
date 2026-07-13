Array.prototype.myMap = function (callback) 
{
    const result = [];
    for (let i = 0; i < this.length; i++) 
    {
        const item = this[i];
        const newValue = callback(item, i, this);
        result.push(newValue);
    }
    return result;
};

const nums = [1, 2, 3];
const doubled = nums.myMap(function (value) 
{
    return value * 2;
});
console.log("Result:", doubled);

const numberValues = [10, 20, 30];
const addIndex = numberValues.myMap(function (value, index) 
{
    return value + index;
});
console.log("Add Index:", addIndex);

const fruits = ["Apple", "Banana", "Mango"];
const names = fruits.myMap(function (value, index, array) 
{
    return `${index + 1}. ${value} (Total: ${array.length})`;
});
console.log("Names:", names);

const empty = [];
const emptyResult = empty.myMap(function (value) 
{
    return value;
});
console.log("Empty Array:", emptyResult);
