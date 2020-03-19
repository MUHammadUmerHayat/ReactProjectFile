const arr = [10, 20, 30, 40];

const sum = arr.reduce(reducer, 5);

function reducer(acc, value) {
  return acc + value;
}

console.log("Sum = ", sum);

console.log("=================================");

const items = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];

const { id, name } = items.reduce(item => {
  return item;
});
