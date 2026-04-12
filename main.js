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
  
//returns a random whole number between min and max  
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//returns random item for an array
function randomFrom(arr) {
  return arr[randomInt(0, arr.length - 1)];
}

//returns a random birthdate based on the age range
function randomBirthdate(minAge, maxAge) {
  const today = new Date();
//one year in miliseconds
const oneYearMs = 365.25 * 24 * 60 * 60 * 1000

//the oldest possible birthdate calculated by substracting maxAge years from today's date
const oldestBirthdate = new Date (today - maxAge * oneYearMs);

//the youngest possible birthdate
const youngestBirthdate = new Date (today - minAge * oneYearMs);

//convert both dates to milliseconds
const oldestMs = oldestBirthdate.getTime();
const youngestMs = youngestBirthdate.getTime();

//pick a random value between the oldest and youngest birthdate
const randomMs = oldestMs + Math.random() * (youngestMs - oldestMs);
return dtoOut;
}

