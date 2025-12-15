// ✅ 1. for loop
console.log("🔁 for loop:");
for (let i = 1; i <= 5; i++) {
  console.log("  Count:", i);
}

// ✅ 2. while loop
console.log("\n🔁 while loop:");
let j = 1;
while (j <= 5) {
  console.log("  Count:", j);
  j++;
}

// ✅ 3. do...while loop
console.log("\n🔁 do...while loop:");
let k = 1;
do {
  console.log("  Count:", k);
  k++;
} while (k <= 5);

// ✅ 4. for...of loop (for Arrays)
console.log("\n🔁 for...of loop (Array):");
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("  Fruit:", fruit);
}

// ✅ 5. for...in loop (for Objects)
console.log("\n🔁 for...in loop (Object):");
const person = { name: "Ramu", age: 18, city: "Hyderabad" };
for (let key in person) {
  console.log(`  ${key}: ${person[key]}`);
}

// ✅ 6. Loop with break and continue
console.log("\n🔁 Loop with break & continue:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("  Skipping 3 (continue)");
    continue;
  }
  if (i === 5) {
    console.log("  Breaking at 5");
    break;
  }
  console.log("  Number:", i);
}
