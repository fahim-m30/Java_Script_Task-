function stack(str) 
{
  let arr = [];

  let pairs = 
  {
    ")": "(",
    "}": "{",
    "]": "[",
    ">": "<",
  };

  for (let i = 0; i < str.length; i++) 
    {
    let ch = str[i];

    if (ch === "(" || ch === "{" || ch === "[" || ch === "<") 
    {
      arr.push(ch);
    } 
    else 
    {
      let last = arr.pop();

      if (last !== pairs[ch]) 
       {
        console.log(arr);
        return false;
       }
    }
  }

  console.log(arr);
  return arr.length === 0;
}

console.log(stack("{[()]}"));
console.log(stack("{[(])}"));
console.log(stack("({[]})"));
console.log(stack("((("));
console.log(stack("()[]{}<>"));