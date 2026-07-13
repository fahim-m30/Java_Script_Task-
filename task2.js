const orders =
[
  { customer: "Alice", amount: 120 },
  { customer: "Bob", amount: 50 },
  { customer: "Alice", amount: 80 },
  { customer: "John", amount: 40 },
  { customer: "Bob", amount: 70 },
];

const result = orders.reduce((A, order) => 
{

  if (!A[order.customer]) 
  {
    A[order.customer] = 
    {
      total: 0,
      orders: 0,
    };
  }

  A[order.customer].total += order.amount;
  A[order.customer].orders++;

  return A;
}, {});
console.log(result);