//Tes Soal 3 Output 1

let rowCount1 = 6;
let outputOne = "";
for (let i = 1; i <= rowCount1; i++) {
    for (let j = 0; j < i; j++) {
    outputOne += "*";
    }
    outputOne += "\n";
}
console.log(outputOne);


//Tes soal 3 Output 2

let rowCount2 = 5;
let outputTwo = "";
for (let i = 1; i <= rowCount2; i++) {

  // spaces
    for (let j = 0; j < rowCount2 - i; j++) {
    outputTwo += " ";
    }

  // Star
    for (let k = 0; k < i; k++) {
    outputTwo += "*";
    }
    outputTwo += "\n";
}
console.log(outputTwo);