function checkPackingList(...items) {
  const num = items.length;
  console.log(`今回の持ち物は${num}個です`);
  console.log(items);
}

const basicSet = ["財布", "スマホ", "充電器"];
checkPackingList(...basicSet);
