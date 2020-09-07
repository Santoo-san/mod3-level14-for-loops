//oude stijl
//while loop
let colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

//oude stijl
//for loop

console.log("FORLOOP_____________________________");

for (let j = 0; j < colors.length; j++) {
  console.log(colors[j]);
}

//nieuwe stijl
//array methods

console.log("Nieuwe stijl_____________________________");
colors.forEach((element) => console.log(element));

//vragen
//1. while lkoop = 4 regels, for loop = 2 regels
//2. for each neemt 1 regel in beslag
//3. for each meer intuitief. '' je moet dit op elk element uitvoeren''
//4.
console.log("vraag 4_____________________________");
const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
//geen iteratie, je logt gewoon alles (denk ik?)
