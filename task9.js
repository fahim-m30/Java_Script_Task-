function dCl(value, map = new WeakMap()) 
{
  if (value === null || typeof value !== "object") 
  {
    return value;
  }

  if (value instanceof Date) 
  {
    return new Date(value);
  }

  if (map.has(value))
  {
      return map.get(value);
  }

  let copy = Array.isArray(value) ? [] : {};

  map.set(value, copy);

  for (let key in value) 
  {
    copy[key] = dCl(value[key], map);
  }

  return copy;
}

const person = 
{
  name: "Fahim",
  age: 25,
  skills: ["HTML", "CSS", "JavaScript","Git","GitHub","Tailwind CSS","MongoDB"],
  address: 
  {
    city: "Dhaka",
    country: "Bangladesh",
  },
  birthday: new Date("2002-07-31"),
};

person.self = person;

const clonedPerson = dCl(person);

clonedPerson.name = "Mahdi";
clonedPerson.skills.push("React");
clonedPerson.address.city = "Shirajganj";
clonedPerson.birthday.setDate(20);
clonedPerson.birthday.setMonth(10);
clonedPerson.birthday.setFullYear(2002);

console.log("Original:");
console.log(person);

console.log("Cloned:");
console.log(clonedPerson);