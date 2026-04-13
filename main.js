//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {
  // 10 male names
  const maleNames = [
    "Ozzy", "Jan", "Tomas", "Martin", "Lukas",
    "Petr", "Ondrej", "Marek", "David", "Michal"
  ];

  // 10 male surnames
  const maleSurnames = [
    "Novak", "Svoboda", "Novotny", "Dvorak", "Cerny",
    "Prochazka", "Kucera", "Vesely", "Horacek", "Blazek"
  ];

  // 10 female names
  const femaleNames = [
    "Tereza", "Jana", "Lucie", "Petra", "Katerina",
    "Martina", "Eva", "Lenka", "Monika", "Veronika"
  ];

  // 10 female surnames (Czech female surnames end with -ova or -a)
  const femaleSurnames = [
    "Novakova", "Svobodova", "Novotna", "Dvorakova", "Cerna",
    "Prochrazkova", "Kucerova", "Vesela", "Horackova", "Blazkova"
  ];

  // Possible workload values
  const workloads = [10, 20, 30, 40];

  // Returns a random whole number between min and max (inclusive)
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Returns a random item from an array
  function randomFrom(arr) {
    return arr[randomInt(0, arr.length - 1)];
  }

  // Returns a random birthdate as an ISO string based on the age range
  function randomBirthdate(minAge, maxAge) {
    const today = new Date();

    // One year in milliseconds (365.25 days accounts for leap years)
    const oneYearMs = 365.25 * 24 * 60 * 60 * 1000;

    // The oldest possible birthdate - subtract maxAge years from today
    const oldestBirthdate = new Date(today - maxAge * oneYearMs);

    // The youngest possible birthdate - subtract minAge years from today
    const youngestBirthdate = new Date(today - minAge * oneYearMs);

    // Convert both dates to milliseconds so we can pick a random moment between them
    const oldestMs = oldestBirthdate.getTime();
    const youngestMs = youngestBirthdate.getTime();

    // Pick a random millisecond value between the oldest and youngest birthdate
    const randomMs = oldestMs + Math.random() * (youngestMs - oldestMs);

    // Create a new date from that random millisecond value and return it as ISO string
    const randomDate = new Date(randomMs);
    return randomDate.toISOString();
  }

  // This is the list we will fill up and return at the end
  const employees = [];

  // Generate one employee at a time, repeat dtoIn.count times
  for (let i = 0; i < dtoIn.count; i++) {

    // Randomly pick gender - 0 means male, 1 means female
    let gender;
    let name;
    let surname;

    if (randomInt(0, 1) === 0) {
      gender = "male";
      name = randomFrom(maleNames);
      surname = randomFrom(maleSurnames);
    } else {
      gender = "female";
      name = randomFrom(femaleNames);
      surname = randomFrom(femaleSurnames);
    }

    const birthdate = randomBirthdate(dtoIn.age.min, dtoIn.age.max);
    const workload = randomFrom(workloads);

    // Build the employee object and add it to the list
    const employee = {
      gender: gender,
      birthdate: birthdate,
      name: name,
      surname: surname,
      workload: workload
    };

    employees.push(employee);
  }

  const dtoOut = employees;
  return dtoOut;
}

// --- TEST ---
const dtoIn = {
  count: 10,
  age: {
    min: 19,
    max: 35
  }
};

console.log(main(dtoIn));
