// 1. シンボルの作成
const secretKey1 = Symbol("spec");
const secretKey2 = Symbol("spec");

// 2. オブジェクトへの登録
const myPC = {
  model: "Trapezium-08",
  [secretKey1]: "電圧最適化済み",
  [secretKey2]: "隠しブーストクロック"
};

console.log(secretKey1 === secretKey2);

console.log(myPC[secretKey1]);

// console.log("秘匿情報: " + secretKey1);
