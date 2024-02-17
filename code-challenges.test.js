// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Explain your code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("divisibleByThree", () => {
    it("returns if the number inside is evenly divisible by three", () => {
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
//ReferenceError: divisibleByThree is not defined

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

    //psudo code:
        //input:create function that takes an object as a parameter
        //create a variable to extract the numerical value from the object
        //create conditional to see if numerical value is divisible by 3
        //output: number is/is not, divisible by 3
            

const divisibleByThree = (obj) => {
    let number = obj.number
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}  
console.log(divisibleByThree(object1));
// Explain your code:
    //takes an object as a parameter
            //created a variable named number that takes the numerical value from the object
            //the if statement compairs the values and checks to see if the numbers are divisible by 3 and returns the appropriate statement

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("allFirstCaps", () => {
    it("returns an array with all the words capitalized at the 0 indes", () => {
        expect(allFirstCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allFirstCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// ReferenceError: allFirstCaps is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
    //Psudo code
        //create function that takes in array as parameter
        //create variable to store new array
        //for loop to iterate over each word in array
        //use charAt to start at 0 index
        //use toUpperCase to capatalize that index
        //use slice to create new string
        //use toLowerCase to make the rest of the words lower case
        //output "Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
            // ["Temperature", "Database", "Chopsticks", "Mango"]
const allFirstCaps = (arr) => {
    let capWords = [];
    for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        capWords.push(capWord)
    }
    return capWords
}        
// console.log(allFirstCaps(randomNouns2));
// Explain your code:   
    //create function that takes in parameter
    //created variable capWords to hold new array
    //used a for loop to iterate over each word in the array
    //created word variable to get the current word at that index
    //used charAt, toUpperCase, slice and toLowercase to capatalize the first letter at the 0 index and convert the rest of the word to lowercase
    //used the .push method to add the capitalized word to the array
    //and finally returned the array with the first letter capitalized
