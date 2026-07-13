function check(str) 
{
    let count = {};
    for (let char of str) 
        {
        if (count[char]) 
        {
            count[char]++;
        } 
        else 
        {
            count[char] = 1;
        }
    }
    for (let char of str) 
        {
        if (count[char] === 1) 
        {
            return char;
        }
    }

    return null;
}
console.log(check("javascript"));
console.log(check("aabbccd"));   
console.log(check("aabbcc"));    