const numbers = [1, 2, 3, 5, 6, 9, 10, 15];

function missnumber(arr) 
{

    const missing = [];

    for (let i = 0; i < arr.length - 1; i++) 
    {

        let current = arr[i];
        let next = arr[i + 1];
        while (current + 1 < next) 
        {
            current++;
            missing.push(current);

        }

    }
    return missing;
}
console.log(missnumber(numbers));