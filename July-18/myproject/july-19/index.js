
//Unique Array
function removeDuplicates(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  
  const arrays = [1, 2, 3, 2, 4, 1, 5];
  const uniqueArray = removeDuplicates(arrays);
  
  console.log(uniqueArray);

//In set of elements Indentify and print duplicate elements that repeats more than 3 times  
const array = [1, 2, 3, 2, 4, 1, 5, 2, 2, 2, 3, 3, 3, 3, 6];

const occurrenceCounts = {};
const duplicates = [];

for (let i = 0; i < array.length; i++) {
  const currentElement = array[i];
  if (occurrenceCounts[currentElement] === undefined) {
    occurrenceCounts[currentElement] = 1;
  } else {
    occurrenceCounts[currentElement]++;
  }
}

for (const element in occurrenceCounts) {
  if (occurrenceCounts[element] > 3) {
    duplicates.push(Number(element)); 
  }
}

console.log(duplicates);

//3
const n = 4;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i * 2; j++) {
    process.stdout.write(j <= i ? j : "");
  }
  console.log();
}
//4
const na = 987654;
const nStr = na.toString();
let evenDigits = "";

for (let i = 0; i < nStr.length; i++) {
  const digit = parseInt(nStr[i]);
  if (digit % 2 === 0) {
    evenDigits += digit.toString();
  }
}

const result = parseInt(evenDigits);

console.log(result);
