// Arithmetic Operators
console.log("🔢 Arithmetic Operators:");
let a = 10, b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
console.log("a++ =", a++);  // Post-increment
console.log("++b =", ++b);  // Pre-increment
console.log("\n");

// Assignment Operators
console.log("📝 Assignment Operators:");
let x = 5;
console.log("x =", x);
x += 2;
console.log("x += 2 →", x);
x *= 3;
console.log("x *= 3 →", x);
x %= 4;
console.log("x %= 4 →", x);
console.log("\n");

// Comparison Operators
console.log("🔍 Comparison Operators:");
let c = "10";
console.log("a == c:", a == c);      // true
console.log("a === c:", a === c);    // false
console.log("a != c:", a != c);      // false
console.log("a !== c:", a !== c);    // true
console.log("a > b:", a > b);        // true
console.log("a <= b:", a <= b);      // false
console.log("\n");

// Logical Operators
console.log("🤔 Logical Operators:");
let isTrue = true;
let isFalse = false;
console.log("true && false:", isTrue && isFalse);
console.log("true || false:", isTrue || isFalse);
console.log("!true:", !isTrue);
console.log("\n");

// String Operators
console.log("🧵 String Operators:");
let str1 = "Hello";
let str2 = "World";
console.log("str1 + str2:", str1 + " " + str2);
str1 += " Everyone";
console.log("str1 += Everyone →", str1);
console.log("\n");

// Type Operators
console.log("📌 Type Operators:");
console.log("typeof a:", typeof a);
console.log("typeof str1:", typeof str1);
console.log("[] instanceof Array:", [] instanceof Array);
console.log("\n");

// Bitwise Operators
console.log("🧮 Bitwise Operators:");
console.log("5 & 1 =", 5 & 1);   // 1
console.log("5 | 1 =", 5 | 1);   // 5
console.log("~5 =", ~5);         // -6
console.log("5 << 1 =", 5 << 1); // 10
console.log("5 >> 1 =", 5 >> 1); // 2
