//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {
//defining arrays of male and female names and workloads
const maleNames = [
  "Tomas", "Petr", "Marek", "Ozzy", "Jan", "Nikolas", "Sebastian", "Milan", "Norbert", "Bonifac"
];
const maleSurnames = [
  "Ruzicka", "Lichy", "Ztraceny", "Skocdopole", "Novotny", "Cerny", "Nemec", "Prochazka", "Nejezchleb", "Vintrlik"
];
const femaleNames = [
  "Alena", "Radmila", "Beata", "Daniela", "Julie", "Mahulena", "Silvie", "Vendula", "Marcela", "Olga"
];
const femaleSurnames = [
  "Rysava", "Krizova", "Vlckova", "Stastna", "Bednarova", "Stejskalova", "Nemcova", "Vesela", "Novotna", "Bartuskova"
];
const workload = [10, 20, 30, 40];
  
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
return dtoOut;
}

