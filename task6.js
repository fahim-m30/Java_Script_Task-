function merge(intervals) 
{
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let i = 0; i < intervals.length; i++) 
    {
    if (
      result.length === 0 ||
      result[result.length - 1][1] < intervals[i][0]
    ) 
    {
      result.push(intervals[i]);
    } 
    else 
    {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        intervals[i][1]
      );
    }
    }

  return result;
}

const intervals = 
[
  [1, 3],
  [2, 5],
  [8, 10],
  [9, 12],
  [15, 18],
];

console.log(merge(intervals));