// 🌐 Using var (function-scoped)
var x1 = 5;
var y1 = 6;
var z1 = x1 + y1;
console.log("Using var →", z1);  // Output: 11

// 🧪 Using let (block-scoped, temporary variable)
let x2 = 6;
let y2 = 6;
let z2 = x2 + y2;
console.log("Using let →", z2);  // Output: 12

// 🔒 Using const (block-scoped, constant)
const a = 7;
const b = 8;
const sum = a + b;
console.log("Using const →", sum);  // Output: 15
