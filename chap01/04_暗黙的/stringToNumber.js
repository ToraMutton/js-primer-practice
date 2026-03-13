const pcInfo = "メモリ容量は32GB、16GB×2枚です";

const specValues = pcInfo.match(/\d+/g).map(Number);

console.log(specValues);

console.log(Number.parseInt === parseInt);
