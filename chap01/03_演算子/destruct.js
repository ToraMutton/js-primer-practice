const array1 = [1, 2];
const array2 = [3, 4, 5, 6];

const [a, b] = array1;
const [x, y, ...others] = array2;

console.log(a);
console.log(b);
console.log(x);
console.log(y);
console.log(others)

const myPC = {
  "cpu": "Ryzen 7 7700",
  "gpu": "RX 9060xt 16GB"
}
console.log(myPC.cpu);

const { cpu, gpu } = myPC;
console.log(cpu);
console.log(gpu);


