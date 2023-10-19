// console.log(process.env);


const { TERM, HOMEBREW_PREFIX } = process.env;

console.table(TERM, HOMEBREW_PREFIX);

// const adios = {
//     "ola": "Ola mundo",
//     "Vala": "Me deus"
// }
// let { ola } = adios;

// console.log(ola);

const characters = ['Flash', "Superman", "Batman"];
const [flash, superm, bat] = characters;

console.log(bat);