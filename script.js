/////////////1///////// VARIABLES (var, let, const)///////////////////////

//-(1) var
//Definition:
//- 'var' is used to declare a variable.
//- It has function scope 
 // (available inside the function where it is declared).
//- It can be re-declared and updated.
//example 1
var name = "Rahul";  // We declared a variable 'name' using var.
 console.log(name);  //- It stores the string "Rahul".
    //op: rahul   //- console.log(name) prints "Rahul" in the console.
 
 //Example 2: Re-declaring with varCode:
var city = "Hyderabad"; // city is declared two times using var
 var city = "Mumbai";//- This is allowed with var.
console.log(city);
//op-Mumbai        //- Final value is "Mumbai", which is printed.

//Example 3: Inside function (function scope)Code:
function showDiscount() {
 var discount = 10;
 console.log("Discount is:", discount);
}
showDiscount();
// console.log(discount); // This will cause error if uncommented
//Explanation:
//- discount is declared with var inside the function.
//- It is accessible only inside showDiscount (function scope).
//- Outside the function, discount is not defined.

//(2) let
//Definition:
//- 'let' is used to declare a variable.
//- It has block scope (only available inside the block { } where it is declared).
//- It can be updated but cannot be re-declared in the same block.

//Example (Correct use): //Explanation:
let age = 20; //- 'age' is created using let with initial value 20.
age = 21;  //- We updated it to 21.
console.log( age);
//op- 21    - console.log(age) prints 21.

//Examples (Wrong Example– re-declaration):  ///Explanation:
 //let city = "Delhi"; //- 'city' is declared two times with let in the same block.
 //let city = "Mumbai"; 
 // Error
 //- JavaScript throws an error because let does not allow re-declaration in the same scope.
 
 //Wrong Example 2: Re-declare 
//let salary = 30000;
//let salary = 35000;
//console.log(salary);
//What happens:
//- JavaScript throws SyntaxError: Identifier 'salary' has already been declared.
//Reason:
//- With let, we cannot declare the same variable name in the same block again.
                        
//Example 2: Block scope (if block)Code:     //Explanation:
let offer = "No offer";   // We have two different offer variables.
if (true) {     //Inside the block: offer = "Festival Offer".
 let offer = "Festival Offer";// Outside the block: offer = "No offer".
 console.log("Inside block:", offer);
}
console.log("Outside block:", offer); // let keeps them separate because of block scope.
                   
//Example 3: Using in loop Code:  ////Explanation:
for (let i = 1; i <= 3; i++) {      //- i exists only inside the for loop because of let.
 console.log("i inside loop:", i);
}                                     //- After the loop ends, i is not available.
 //console.log(i);                     // Error if uncommented


 //(3) const
//Definition:
//- 'const' is used to declare a constant variable.
//- It has block scope.In JavaScript whose value cannot be reassigned.
// It must be given a value at the time of declaration.
// It cannot change (reassign) the variable later.

//Example 1       //Explanation
const PI = 3.14;  //pi is constant, its value cannot be changed.                 
console.log(PI);  // // - console.log prints Pi value: 3.14

//Example 2: Constant string Code:   //Explanation
const country = "India";      //-country stores "India". We cannot assign a new country to this const variable.
console.log("Country:", country);

//Eample 3 : if block scope
const a = 10;

if (true) {
  const a = 20; // different variable, only inside block
  console.log("Inside block:", a); // Output: 20
}

console.log("Outside block:", a);   // Output: 10 

//Example 4: const with array (we can change items, not the reference)Code:
const fruits = ["apple", "banana"]; //fruits is a const array.
                                   //- We are not changing the variable fruits itself,
                                   //  we are modifying its content.
fruits.push("mango");
console.log(fruits);           // output is ["apple", "banana", "mango"].

//Wrong Example 1: Reassign constCode:
//const bankName = "SBI";
//bankName = "HDFC";
//console.log(bankName);
//What happens:
//- JavaScript throws TypeError: Assignment to constant variable.
//Reason:
//- bankName is declared as const, so its value cannot be changed


////////////(2) //////////Data Types -Primitive Data Types in JavaScript////////////////////

//JavaScript has 7 primitive data types. They are the simplest form of data —
// They store a single value and are immutable (cannot be changed directly).

//--(1)1. String
//Definition:A string stores text inside quotes.
//code:                             //Explanation
let festivalName = "Diwali Utsav"; //festivalName holds text "Dharani Utsav".

                        //Strings are used when you need names, messages, or any textual data
console.log(festivalName);  //output:Diwali Utsav

//--(2)2. Number
//Definition: Numbers store numeric values (both integer and decimal).
//code:                        //Explanation
let monthlyTemperature = 28.6;  //28.6 is a number.
console.log(monthlyTemperature);//Numbers are used for calculations like age, salary, scores, etc
      //output: 28.6

//--(3)3. Boolean
//Definition:A boolean stores only true or false.
//code:                      //Explanatiom
let isAccountVerified = false; //Booleans are used for conditions like login status, form validation, etc
console.log(isAccountVerified);
       //output: False

//--(4)4.4. Undefined
//Definition: A variable declared but not assigned any value is undefined.
//code:                     //Explanation
let nextUpdateTime;          //No value is given → JS automatically assigns undefined.
console.log(nextUpdateTime);
        //ourput: Undefined
 
//--(5)5. Null
//Definition: null represents empty or intentionally no value.
//code:                    //Explanation
let upcomingEvent = null;  //You manually assign null to show the value is empty for now.
console.log(upcomingEvent);
         //output: Null   


//(2b)--------------------OBJECT ----------------
//An object in JavaScript is a data structure that stores information in key–value pairs.
//Each key (also called a property name) points to a value, 
// and the value can be anything — string, number, boolean, function, or even another object.

//Example Code:
let student = {
    name: "Ritika Mehra", //student is an object storing multiple details about a student.
    age: 21,
    course: "B.Tech",
    isPlaced: false
};
                           //We can access fields with dot notation (student.name).
console.log(student.name); //student.name → Accesses the value of the name key.
console.log(student.age);  //student.age → Accesses age.
console.log(student.course);  //Objects group related data in one structure.
console.log(student.isPlaced);


//-----------------------Array ----------------------
//An array is an ordered collection of values stored in a single variable.
//Items inside an array are stored in a sequence.
// and each value is accessed using its index number, starting from 0.
//Arrays allow fast searching, looping, and organizing list-based data.

//Example Code:
let skills = ["React", "SQL", "Node.js", "Python"]; //Arrays store multiple values in order.

                             //skills is an array storing a list of technical skills.

console.log(skills[0]); //skills[0] → First value
console.log(skills[1]); //skills[1] → Second value
console.log(skills[2]); //skills[2] → Third value
console.log(skills[3]); //skills[3] → Fourth value

///////////3////////////////////-JavaScript Operators////////////////////////////////
//There are different types of JavaScript operators:
//Arithmetic Operators
//Assignment Operators
//Comparison Operators
//Logical Operators

//(1)1. Arithmetic Operators
//Definition: Arithmetic operators perform mathematical calculations like -
// addition, subtraction, multiplication, division, and remainder.

//Example code:
let initialScore = 45;
let bonusScore = 15;
                                          //Explanation
console.log(initialScore + bonusScore);   // Addition 45 + 15 = 60
console.log(initialScore - bonusScore);   // Subtraction 45 - 15 = 30
console.log(initialScore * 2);            // Multiplication 45 * 2 = 90
console.log(initialScore / 5);            // Division 45 / 5 = 9
console.log(initialScore % 7);            // Modulus 45 % 7 = 3 → remainder after dividing 45 by 7
          //Arithmetic operators help perform math calculations in programs.


//(2)2. Comparison Operators
//Definition: Comparison operators compare two values and return a boolean (true/false).
//>, <, >=, <=, ==, ===, !=, !==

//example code1:
let heightA = 168;
let heightB = 172;

console.log(heightA > heightB);   // greater than
console.log(heightA < heightB);   // less than
console.log(heightA == 168);      // equal to (value only)
console.log(heightB === "172");   // strict equal (value + type)
console.log(heightA != heightB);  // not equal

//example code2:
//Real-life: check age for voting code
let vote  = 19;
console.log("Can vote?", vote >= 18);

console.log(5 == "5"); // true (only value compared)
console.log(5 === "5"); // false (value + type compared)


//(3)3. Logical Operators
//Definition:Logical operators combine multiple conditions and return true/false based on logic.

//example code1:
let hasID = true;
let hasTicket = false;

console.log(hasID && hasTicket);  // AND-&& returns true only if both conditions are true.
console.log(hasID || hasTicket);  // OR - || returns true if any one condition is true
console.log(!hasTicket);          // NOT -! reverses the value (true → false, false → true).
                //output:false,true,true

//example code2:
//Real-life: Loan eligibility (salary and age)Code:
let personAge = 25;
let monthlySalary = 40000;
let eligibleForLoan = (personAge >= 21) && (monthlySalary >= 30000);
console.log("Eligible for loan?", eligibleForLoan);
                                 //output: Eligible for loan? true


//(4)4. Assignment Operators
//Definition: Assignment operators assign or update values in variables.

//example code1:
let points = 50;

console.log(points += 20);   // add and assign
console.log(points -= 10);   // subtract and assign
console.log(points *= 2);    // multiply and assign
console.log(points /= 5);    // divide and assign
                   //output: 70,60,120,24

//Example code2:Real-life: Bank balance updateCode:
let balance = 1000;
balance += 500; // deposit
console.log("After deposit:", balance);
balance -= 200; // withdrawal
console.log("After withdrawal:", balance);
                   //output: After deposit: 1500, After withdrawal: 1300


/////////////////////////4. Conditional Statements ///////////////////////////
// Definition :-Conditional statements are programming instructions that allow the computer to make decisions.
//They check whether a condition is true or false, and based on that, the program chooses which block of code to run.
//Conditional statements help your program decide what to do next based on a condition.

//-(1) if Statement — The if statement runs a block of code only when the condition inside it is true.
//Runs code when the condition is true

//-(2)else if Statement — The else if statement is used when you want to check multiple conditions.
//If the first if condition is false, the program checks the next condition using else if.
//Checks more conditions if the first one is false

//-(3)else Statement — The else statement runs when all previous conditions are false.
//It acts as a default block.
//Runs code when no conditions are true

//example code:

let score = 92; // student marks

if (score >= 95) {
    console.log("Grade: A+ (Outstanding)");
}
else if (score >= 80) {
    console.log("Grade: A (Excellent)");
}
else if (score >= 65) {
    console.log("Grade: B (Good)");
}
else if (score >= 50) {
    console.log("Grade: C (Average)");
}
else {
    console.log("Grade: Fail");
}
                           //Explanation:  //output: Grade: A (Excellent)
                                //The program checks each condition one by one.
                               //score = 92
                               //First condition: score >= 95 → false
                               //Second condition: score >= 80 → true
                               //So it prints Grade: A (Excellent)
                              //Once a condition is true, JavaScript stops checking the rest.

//2.switch statement-A switch statement compares a value against different case options 
// and runs the matching block.It is used when you need to choose one option from many
//  (like menus, modes, levels, choices).
//example code:
let menuChoice = 4; // user-selected menu number

switch (menuChoice) {
    case 1:
        console.log("You ordered: Veg Burger");
        break;

    case 2:
        console.log("You ordered: Cheese Pizza");
        break;

    case 3:
        console.log("You ordered: Masala Dosa");
        break;

    case 4:
        console.log("You ordered: Cold Coffee");
        break;

    case 5:
        console.log("You ordered: Fresh Lime Juice");
        break;

    default:
        console.log("Invalid menu option. Please choose again.");
}
//Explanation    //output: You ordered: Cold Coffee
//switch(menuChoice) checks the value 4.
//It compares it with each case:
//case 1 → not match
//case 2 → not match
//case 3 → not match
//case 4 → ✔ match
//So it prints “You ordered: Cold Coffee”.
//break stops the switch from running the rest.
//default runs only if no case matched.

///////////////////////////////////////5.LOOPS////////////////////////////////////////////////

///LOOPS — Definition-A loop is a programming structure that repeats a block of code 
// multiple times until a condition becomes false.Loops help you perform the same task again
//  and again without writing repeated code manually.

//-- Print numbers from 1■20 using: for, while, do■while.

//*FOR LOOP — Definition
//A for loop repeats code a fixed number of times.
//It has 3 parts: start value, condition, increment/decrement.
// Print numbers 1 to 20 using for loop
//example code:
for (let i = 1; i <= 20; i++) {
    console.log(i);
}                      //Explanation:let i = 1 → loop starts at 1
                                     //i <= 20 → loop runs until 20
                                    //i++ → increases by 1 each time

//*WHILE LOOP — Definition
//A while loop repeats code as long as the condition is true.
//example code:
// Print numbers 1 to 20 using while loop
let num = 1;

while (num <= 20) {
    console.log(num);
    num++; // increase number
}                      //Explanation:Starts at 1
                       //Keeps printing until 20
                      //Stops when num > 20

//*DO-WHILE LOOP — Definition
//A do-while loop runs the code at least once, even if the condition is false.

//example code:
// Print numbers 1 to 20 using do-while loop
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 20);    //Explanation:Runs once first
                               //Then checks the condition
                               //Continues until 20


///----------5(b). Print Values From Array Using: for..of / for..in]---------------------------

//*for..of — Definition
//for..of loop is used to print values from an array (each item directly).
//example code:
let colors = ["Red", "Blue", "Green", "Yellow"];
// Print values using for..of
for (let value of colors) {           //explanation
    console.log(value);             //value = each element in the array
}                       //output Prints: Red, Blue, Green, Yellow


//*for..in — Definition
//for..in loop is used to iterate through indexes (keys) of the array.
//example code:
// Print index and value using for..in
for (let index in colors) {
    console.log(index, colors[index]);   //Explanation
}                                     //index = position → 0,1,2,3
                                  //colors[index] = value at each index



////////////////////////////////6./Function — Definition///////////////////////////////////////

//A function is a reusable block of code that performs a specific task.
//It runs only when it is called and can take inputs (called parameters) and
//  return an output (using return).
//A function is a set of instructions that you can use again and again whenever needed.
//ex code:
function sayHello() {
    console.log("Hello!");
}

sayHello(); // calling the function

//(1)1*. Named Function — Definition
//A named function has a specific name.
//You can call it anywhere in your program using that name.
// Named function
//ex code:
function greetStudent() {
    console.log("Welcome to the JavaScript class!");
}

greetStudent(); // calling the function   //Explanation
                    //The function name is greetStudent.
                   //When we call it, it prints the message.

///(2)2.* Anonymous Function — Definition
//An anonymous function is a function without a name.
//It is usually stored in a variable.

// Anonymous function stored in a variable
let findSquare = function(num) {
    return num * num;
};

console.log(findSquare(7));     //Explanation
                              //No name is given to the function.
                //It is assigned to the variable findSquare, and we call that variable like a function.


//(3)3*. Arrow Function — Definition
//An arrow function is a shorter way to write functions using =>.

// Arrow function
let calculateAge = (birthYear) => {
    return 2025 - birthYear;
};

console.log(calculateAge(2000));   //Explanation
                                //Uses arrow syntax =>.
                           //Short, clean, and commonly used in modern JavaScript.


 //6(b)------------------. Function with Default Parameters — Definition-----------------------------

//A function with default parameters uses a value if the user does not pass anything.

// Function with default parameters
function sendMessage(name = "Student", message = "Keep learning JavaScript!") {
    console.log(name + ", " + message);
}

sendMessage();                       // uses default values
sendMessage("Riya", "You are doing great!");
                            //Explanation
                           //If no value is given,
                          //name becomes "Student"
                      //message becomes "Keep learning JavaScript!"
                        //When values are provided, they replace the defaults.



      ////////////////////////// /7./ Higher-Order Function — Definition//////////////////////////////

//A higher-order function is a function that takes another function as an argument, or returns a function.
//A function that works with another function.
    ///////////////////////////  //Callback Function — Definition///////////////////////////////////////
//A callback function is the function that is passed as an argument to another function.
//The higher-order function calls it later (hence the name callback).

//Example: Function that Accepts Another Function
// Higher-order function
// Higher-order function
function performTask(taskFunction) {
    console.log("Starting the task...");
                         // calling the callback function
    console.log("Task completed!");
}

// Callback function
function cleanRoom() {
    console.log("Cleaning the room...");
}

                         // Calling the higher-order function
performTask(cleanRoom());    //Explanation
                          //performTask → Higher-order function
                         //It receives another function as an argument.
                        //cleanRoom → Callback function
                        //It is passed into performTask.
                        //Inside performTask, the callback is executed using:

//example 2-
function sendSMS(message) {
 console.log("SMS sent:", message);
}
function processPayment(amount, callbackFn) {
 console.log("Payment of", amount, "processed.");
                   //callbackFn("Your payment of " + amount + " is successful.");
}
processPayment(500, sendSMS)    //Explanation:
            //- processPayment is a higher order function (it receives callbackFn).
            //- sendSMS is a callback function.
           //- After payment is processed, we call callbackFn to simulate sending SMS.


/////8//////////////////////////. Spread Operator (…) — Definition////////////////////////////////////

//The spread operator (...) expands (spreads) elements of an array or object into individual items.
//Use case:
//Merging arrays // Copying arrays // 
//Passing array values as separate arguments
//exampler code:
let fruitss = ["Apple", "Banana", "Mango"];
let vegetables = ["Carrot", "Potato", "Spinach"];

                      // Using spread to merge both arrays
let foodItems = [...fruitss, ...vegetables];

console.log(foodItems);   //Explanation
                           //fruits spreads each fruit individually
                           //vegetables spreads each vegetable
                           //Both arrays are combined into one new array


                        
/////8(b) /-------------------Rest Operator (…) — Definition------------------------------------

//The rest operator (...) collects multiple values into a single array inside a function.
// Use case:
//1.Functions that accept unlimited arguments
//2.Grouping multiple values

//Example: Add Unlimited Numbers Using Rest (NEW CODE)
// Rest operator to accept unlimited numbers
function addNumbers(...nums) {
    let total = 0;

    for (let number of nums) {
        total += number;  // add each number
    }

    return total;
}

console.log(addNumbers(5, 10, 20));       // 35
console.log(addNumbers(2, 4, 6, 8, 10));  // 30 //Explanation
                                       //nums collects all arguments into an array → [5, 10, 20]
                                       //Loop adds all numbers together
                                       // Function works for any number of inputs
    //Operator	    Purpose	         Example
    //Spread (…)	Expand items	let arr2 = [...arr1]
    //Rest (…)	    Collect items	function fn(...values)


///////////////////////////9////-Destructuring — Definition/////////////////////////////////////////

//Destructuring is a feature in JavaScript that allows you to extract
 //values from objects or arrays and store them into separate variables easily.

 //(1)1*. Object Destructuring
//Definition:Object destructuring lets you extract specific properties from 
// an object into variables with the same name.
//example code:
let candidate = {
    alias: "Rohit",
    Age: "20",
    course: "Computer Science"
};

                                 // Object Destructuring
let { alias, Age, course } = student;

console.log(alias);
console.log(Age);
console.log(course);   //Explanation
                    //{ name, Age, course } = student
                    //pulls those properties out of the student object
                    // Now each value is stored in its own variable.

//EXAMPLE Real-life: user profilECode:
    let profile = {
 username: "siri123",
 email: "siri@example.com",
 City: "Hyderabad"
};
let { username, email, City } = profile;
console.log("Username:", username);
console.log("Email:", email);
console.log("City:", city);   //Explanation:
                        //- { username, email, city } = profile extracts values by key name.
                       //- Now we can use username directly


//(2)2*. Array Destructuring
//Definition:Array destructuring lets you extract values from an array based on position (index).
//example 
let colours = ["Red", "Blue", "Green"];

// Array Destructuring
let [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);    //Explanation:[first, second, third] = colors
                        //assigns:first → "Red"
                        //second → "Blue"
                        //third → "Green"
                        // Values are extracted based on index order

//EXAMPLE Real-life: coordinates Code:
let coordinates = [17.3850, 78.4867];
let [latitude, longitude] = coordinates;
console.log("Latitude:", latitude);
console.log("Longitude:", longitude);
                                     //Explanation:
                            //- [latitude, longitude] = coordinates takes values in order



  /////////////////10.////Generator Function — Definition/////////////////////////////////////////////
//A generator function is a special type of function that can pause and resume its execution.
//It uses the function* keyword and produces values one at a time using the yield keyword.
//A generator returns values step-by-step instead of all at once

// Example: Generator that Yields 3 Messages
// 
function* messageGenerator() {
    yield "First message: Welcome!";
    yield "Second message: Keep learning!";
    yield "Third message: You are doing great!";
}

// Create generator object
let gen = messageGenerator();

// Printing each yielded value
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
                    //Explanation 1. Defining a generator 
                    // function* messageGenerator() { ... } 
                    // function* creates a generator function.
                    // 2. Yielding messages
                    // yield "First message: Welcome!"; 
                    // Each yield returns one value and pauses the function.
                    //3. Creating the generator object
                    // let gen = messageGenerator();
                    // This does not run the function immediately.
                    // It prepares the generator.
                    // 4. Getting values using next()
                    // gen.next().value;
                    // next() runs the generator until the next yield.
                    // value prints the yielded message.
//example
//Real-life: step-by-step process messagesCode:
function* steps() {
 yield "Step 1: Login to the system";
 yield "Step 2: Select your course";
 yield "Step 3: Start the test";
}
let process = steps();
console.log(process.next().value);
console.log(process.next().value);
console.log(process.next().value);
                      //Explanation:
                      // - steps is a generator function.
                      // - Each call to next() returns an object with value and done.
                      // - We access the value using .value.-
                      //  The messages come one by one in order.




