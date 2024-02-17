// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Alpha 2024"
 console.log(cohort.split(" "))

// a) Your answer: this will log two strings in an array split at the space ['Alpha', '2024']

// b) Verify and explain: prediction was correct the .split() method can be used to split a string into an array at the indicated point. In this case it was the space that was where it split.

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: this will log 'Hello, LEARN Student' because it is taking name as a parameter and in the console.log youre passing LEARN Studend as the arguement.

// b) Verify and explain: i was wrong i got undefined because its missing the return statement and arrow functions need a return statement.

//that was sneeky Trish -_- but it reminded me that arrow functions need returns


// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer: this will log the odd numbers in the array due to the modulo 2 which is NOT strictly equal to 0. if it was % 2 === 0 that would log all the even numbers in the array.

// b) Verify and explain: prediction was correct, the modulo 2 bang equal equal zero logs all the odd numbers in the array

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: this will log 'Javascript' in the object because you are using the dot notation to call on the key(languages) and the 0 index for the value(javascript).

// b) Verify and explain: my prediction was correct, using the dot notation accesses the languages(key) property and specifying zero index [0] you are accessing the first element in the array which happened to be javascript.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Alpha"
    this.year = 2024
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: im guessing this will add the name george to the this.student but thats a hunch. 

// b) Verify and explain: my hunch was correct however im not really sure why. Research: George is passed as an argument to the constructor and that value(george) is assigned to the student property because of the class costructor(name).