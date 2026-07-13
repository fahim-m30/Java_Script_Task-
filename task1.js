function Object(obj, parent = "", output = {}) 
{

    for (let key in obj) 
    {
        let fullKey = parent ? parent + "." + key : key;

        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) 
        {
            Object(obj[key], fullKey, output);
        } 
        else 
        {  
            output[fullKey] = obj[key];
        }
    }

    return output;
}

// Input
const obj = {
    name: "Joy",
    address: {
        city: "Dhaka",
        country: {
            code: "BD",
            name: "Bangladesh"
        }
    },
    age: 25
};
const Output = Object(obj);
console.log(Output);
console.log(JSON.stringify(Output, null, 2));