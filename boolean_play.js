// JSの真偽値の実験

// 1. 基本
console.log(typeof true);
console.log(!!1);
console.log(!!0);

// 2. 文字列
console.log(!!"ちゃちゃまる");
console.log(!!"");
console.log(!!"0");

// 3. オブジェクト・配列
console.log(!![]);
console.log(!!{});

// 4. その他
console.log(!!null);
console.log(!!undefined);
