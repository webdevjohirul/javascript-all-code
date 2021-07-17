//basic code start
alert("Hello Google");
console.log("Hello World");
document.write("I love Bangladesh");

//javascript Keywords:
//break,case,catch,continue,debugger,default,delete,do,
//else,finally,for,function,if,in,instanceof,new,return,
//switch,this,throw,try,typeof,var,void,while,with.

typeof("Johirul"); //string
typeof(234); //number
typeof(true); //boolean
typeof(false); //boolean

var name = "Johirul";
document.write(name);
var name = "Islam";
document.write(name);

var name = "Johirul";
var name = "Islam";
document.write(name); //last variable print- Islam

var name = "Johrul Islam";
var age = 23;
document.write(name);
document.write(age);

var name;
var age;
name = "johirul";
age = 23;
document.write(name);
document.write(age);

var name, age, address;
name = " johirul";
age = 23;
address = "Netrakona";
document.write(name, age, address);
//basic code end

//number type
var num = 30;
console.log(typeof(num)); //number
var num = "30";
console.log(typeof(num)); //string
var num = true;
console.log(typeof(num)); //boolean
var num = false;
console.log(typeof(num)); //boolean

//convert type of number
var num = 40;
num = toString(num);
console.log(typeof(num)); //convert number to string
var num = "40";
num = parseInt(num);
console.log(typeof(num)); //convert string to number
var num = "40.23";
num = parseFloat(num);
console.log(typeof(num)); //convert string to number

//display number length
var num = 3.3567;
console.log(num.toFixed(1)); //print 3.4 --- Is calculated after the decimal
var num = 3.3567;
console.log(num.toFixed(2)); //print 3.36 --- Is calculated after the decimal
var num = 3.3567;
console.log(num.toPrecision(1)); //print 3 --- Total number is calculated
var num = 3.3567;
console.log(num.toPrecision(2)); //print 3.4 --- Total number is calculated

//convert type
console.log(Number("34")); //convert string to number
console.log(typeof(Number("34"))); //convert string to number type
console.log(Number("34.456")); //convert string to number
console.log(Number(true)); //print 1--- true value is 1
console.log(Number(false)); //print 0 -- false value is 0

//string concatenation
document.write("Johirul" + " Islam ");
var firstName = "Johirul";
var lastName = " Islam ";
var fullName = firstName + lastName;
document.write(fullName);
document.write("My Name Is " + fullName);
document.write("My Name Is " + fullName + "Soni ");
document.write("firstName : " + firstName + " lastName : " + lastName); //string concatenation

//text length
var text = "Bangladesh";
var len = text.length;
document.write(len); //print 10
document.write("Number of character " + len);
document.write("Number of character " + text.length);

var text = prompt("Enter your name : "); //prompt() function-- Take user input
var len = text.length;
document.write("Number of your name : " + len);

//text case
var text1 = "Bangladesh";
var text = text1.charAt(3); //variable.charAt(3) function-- print 3number character g
document.write(text); //print g
var text = text1.toUpperCase(); //variable.toUpperCase() function-- all letters will be capitalized
document.write(text); //print BANGLADESH
var text = text1.toLowerCase(); //variable.toLowerCase() function-- All letters will be lowercase
document.write(text); //print bangladesh

//word concat and character position
var text1 = "Bangladesh";
var text2 = " is a beautiful country";
var text = text1.concat(text2); //variable1.concat(variable2) function-- Adds two variables
document.write(text);
var text = text1.slice(3, 6); //variable.slice(num1, num2) function-- finding positions within a character
document.write(text); //print gla

//My task start
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName + " " + lastName + "<br/>";
document.write(fullName);
var nameLen = fullName.length + "<br/>";
document.write(nameLen);
var nameUpper = fullName.toUpperCase();
document.write(nameUpper);
var namePos = fullName.slice(1, 2);
document.write(namePos);
//My tast end

//Arithmetic operator--- +, -, *, /, %, **, ++,--
var a = 5;
var b = 4;
var c = 10;
document.write(a + b); //print 9
document.write(a - b); //print 1
document.write(a * b); //print 20
document.write(a / b); //print 1.25
document.write(a % b); //print 1
document.write(a ** b); //print 625
document.write(c++); //print 10--- again c++ then get return 11
document.write(++c); //print 11------ again ++c then get return 12
document.write(c--); //print 10--- again c-- then get return 9
document.write(--c); //print 9---- again c++ then get return 8

//Assignment operator--- =, +=, -=, *=, /=, %=, **=
var a = 8;
a += 2;
document.write(a); //print 10
var a = 8;
a -= 2;
document.write(a); //print 6
var a = 8;
a *= 2;
document.write(a); //print 16
var a = 8;
a /= 2;
document.write(a); //print 4
var a = 8;
a %= 2;
document.write(a); //print 0
var a = 8;
a **= 2;
document.write(a); //print 64

var num1 = 30;
var num2 = 20;
var sum, sub;
sum = num1 + num2;
document.write("Addition = " + sum + "<br/>");
sub = num1 - num2;
document.write("Subtraction = " + sub);

var num1 = prompt("Enter First Number : ");
var num2 = prompt("Enter Second Number : ");
var num1 = parseInt(num1, 10);
var num2 = parseInt(num2, 10);
var sum, sub;
sum = num1 + num2;
document.write("Addition = " + sum + "<br/>");
sub = num1 - num2;
document.write("Subtraction = " + sub);

//My task start
var num1 = prompt("Enter First Number : ");
var num2 = prompt("Enter Second Number : ");
var num1 = parseInt(num1, 10);
var num2 = parseInt(num2, 10);
var sum, sub, mul, div, rem;
sum = num1 + num2;
document.write(num1 + " + " + num2 + " = " + sum + "<br/>");
sub = num1 - num2;
document.write(num1 + " - " + num2 + " = " + sub + "<br/>");
mul = num1 * num2;
document.write(num1 + " * " + num2 + " = " + mul + "<br/>");
div = num1 / num2;
document.write(num1 + " / " + num2 + " = " + div + "<br/>");
rem = num1 % num2;
document.write(num1 + " % " + num2 + " = " + rem + "<br/>");

//rectangle area
var base = prompt("Enter base number");
var height = prompt("Enter height number");
var area = base * height;
document.write("Area = " + area);

var base = parseInt(prompt("Enter base number"));
var height = parseInt(prompt("Enter height number"));
var area = (base * height) / 2;
document.write("Area = " + area);

//fahrenheit to celsius
var fahrenheit = prompt("Enter fahrenheit number = ");
var celsius = (fahrenheit - 32) * 5 / 9;
document.write("Celsius = " + celsius);

//celsius to fahrenheit
var celsius = prompt("Enter celsius number = ");
var fahrenheit = (celsius * (9 / 5) + 32);
document.write("Fahrenheit = " + fahrenheit);

//Relational operator--- >, >=, <, <=, ==, ===, !=, !==
var num1 = 20;
var num2 = 20;
var num3 = "20";
var rel = Array(num1 > num2, num1 >= num2, num1 < num2, num1 <= num2);
var rel1 = num1 == num2; //== This symbol will check the same value
var rel2 = num1 == num3;
var rel3 = num1 === num2; //=== This symbol will check the same value and same data type
var rel4 = num1 === num3;
var rel5 = num1 != num2;
var rel6 = num1 !== num2;
var rel7 = num1 !== num3;
document.write(rel + "<br/>"); //print false,true,false,true
document.write(rel1 + "<br/>"); //print true- check same value
document.write(rel2 + "<br/>"); //print true- check same value not data type
document.write(rel3 + "<br/>"); //print true- check same value and same data type
document.write(rel4 + "<br/>"); //print false- check same value and not same data type
document.write(rel5 + "<br/>"); //print false- check value not equal
document.write(rel6 + "<br/>"); //print false- check value and data type not equal
document.write(rel7 + "<br/>"); //print true- check value and data type not equal

//Logical operator--- &&, ||, !
var num1 = 50;
var num2 = 30;
var num3 = 20;
//logical and operator &&
var logiAnd1 = num1 > num2 && num1 > num3; //All conditions must match
var logiAnd2 = num2 > num1 && num2 > num3; //All conditions must match
var logiAnd3 = num3 > num1 && num3 > num2; //All conditions must match
document.write(logiAnd1); //print ture--- all conditions match
document.write(logiAnd2); //print false--- all conditions not match
document.write(logiAnd3); //print false--- all conditions not match
//logical or operator ||
var logiOr1 = num1 > num2 || num1 > num3; //Any one condition must be matched
var logiOr2 = num2 > num1 || num2 > num3; //Any one condition must be matched
var logiOr3 = num3 > num1 || num3 > num2; //Any one condition must be matched
document.write(logiOr1); //print true--- Matching any one condition
document.write(logiOr2); //print true--- Matching any one condition
document.write(logiOr3); //print false--- Not matching any one condition
//logical not operator !
var logiNot1 = num1 > num2;
var logiNot2 = num1 < num2;
document.write(!logiNot1); //print false--- num1 is greater than num2--Conditions not match
document.write(!logiNot2); //print true--- num1 is less than num2--Conditions match

//if,else if, else
//number even odd
var num = 5;
if (num % 2 == 0)
    document.write("Even");
else
    document.write("Odd");

//positive negetive number
var num = prompt("Enter a number: ");
if (num > 0)
    document.write("Positive");
else if (num < 0)
    document.write("Negetive");
else
    document.write("Zero");

//My task-result sheet
var marks = prompt("Enter your marks: ");
if (marks > 100 || marks < 0) {
    document.write("Invalid Marks");
} else if (marks >= 80 && marks <= 100) {
    document.write("Your Grade : A+");
} else if (marks >= 70 && marks <= 79) {
    document.write("Your Grade : A");
} else if (marks >= 60 && marks <= 69) {
    document.write("Your Grade : A-");
} else if (marks >= 50 && marks <= 59) {
    document.write("Your Grade : B");
} else if (marks >= 40 && marks <= 49) {
    document.write("Your Grade : C");
} else if (marks >= 33 && marks <= 39) {
    document.write("Your Grade : D");
} else {
    document.write("You are FAIL");
}

//Determine the largest number of three numbers
var num1 = prompt("Enter First Number : ");
var num2 = prompt("Enter Second Number : ");
var num3 = prompt("Enter Third Number : ");
if (num1 > num2 && num1 > num3) {
    document.write("Large number : " + num1);
} else if (num2 > num1 && num2 > num3) {
    document.write("Large number : " + num2);
} else {
    document.write("Large number : " + num3);
}
//Determine vowel and consonant
var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    document.write("Letter is Vowel");
} else {
    document.write("Letter is Consonant");
}

//Switch
//digit spelling
var digit = prompt("Enter any digit: ");
switch (digit) {
    case "0":
        document.write("Zero");
        break;
    case "1":
        document.write("One");
        break;
    case "2":
        document.write("Two");
        break;
    case "3":
        document.write("Three");
        break;
    case "4":
        document.write("Fore");
        break;
    case "5":
        document.write("Five");
        break;
    case "6":
        document.write("Six");
        break;
    case "7":
        document.write("Seven");
        break;
    case "8":
        document.write("Eight");
        break;
    case "9":
        document.write("Nine");
        break;
    case "10":
        document.write("Ten");
        break;
    default:
        document.write("Invalid Number");
}

//My task- determine vowel and consonant
var letter = prompt("Enter any letter");
letter = letter.toLowerCase();
switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel");
        break;
    default:
        document.write("Consonant");
}

//for loop statment
var x;
for (x = 1; x <= 10; x++) {
    document.write(" " + x); //print 1 2 3 4 5 6 7 8 9 10
}
for (x = 2; x <= 10; x = x + 2) {
    document.write(" " + x); //print 2 4 6 8 10--- even number
}
for (x = 1; x <= 9; x = x + 2) {
    document.write(" " + x); //print 1 3 5 7 9--- odd number
}
for (x = 10; x >= 1; x--) {
    document.write(" " + x); //print 10 9 8 7 6 5 4 3 2 1
}

//determine numbers sum using for loop statment
var x;
var sum = 0;
for (x = 1; x <= 10; x++) {
    sum = sum + x;
}
document.write(sum); //print 55--- (1-10) numbers sum

//Take user input numbers sum for loop statment
var x;
var s = parseInt(prompt("Enter start number: "));
var e = parseInt(prompt("Enter end number: "));
var sum = 0;
for (x = s; x <= e; x = x + 1) {
    sum = sum + x;
}
document.write(sum);

//while loop statment
var i = 1;
while (i <= 5) {
    document.write(" " + i);
    i = i + 1;
}

//determine numbers sum using while loop statment
var i = 1;
var sum = 0;
while (i <= 5) {
    sum = sum + i;
    i = i + 1;
}
document.write(sum); //print 15--- (1-5) numbers sum

//My Task
var i = 1;
var sum = 0;
while (i <= 50) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write(" " + i);
        sum = sum + i;
    }
    i = i + 1;
}
document.write(" Sum: " + sum);

//Take user input numbers sum while loop statment
var s = parseInt(prompt("Enter start number: "));
var e = parseInt(prompt("Enter end number: "));
var i = s;
sum = 0;
while (i <= e) {
    sum = sum + i;
    i = i + 1;
}
document.write(" " + sum);

//do while loop statment
var i = 1;
do {
    document.write(" " + i);
    i++;
} while (i <= 20);

//for loop use break
var i;
for (i = 1; i <= 100; i++) {
    if (i == 10) {
        break;
    }
    document.write(" " + i); //print 1 2 ...... 9
}

//for loop use continue
var i;
for (i = 1; i <= 50; i++) {
    if (i == 10) {
        continue;
    }
    document.write(" " + i);
}

var i;
for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) { //Odd number
        continue;
    }
    document.write(" " + i);
}

var i;
for (i = 1; i <= 50; i++) {
    if (i % 2 !== 0) { //Even number
        continue;
    }
    document.write(" " + i);
}

//Ternary operator//
var num = Number(prompt("Enter a number : "));
var result = num > 0 ? "Positive" : num < 0 ? "Negetive" : "Zero";
document.write(result);

//My task--select the largest and smallest number by the ternary operator
var num1 = Number(prompt("Enter a first number : "));
var num2 = Number(prompt("Enter a second number : "));
var num3 = Number(prompt("Enter a third number : "));
var largNum = num1 > num2 && num1 > num3 ? document.write("Large number: " + num1) : num2 > num1 && num2 > num3 ? document.write("Large number: " + num2) : num3 > num1 && num3 > num2 ? document.write("Large number: " + num3 + "<br/>") :
    document.write(largNum);
var smallNum = num1 < num2 && num1 < num3 ? document.write("Small number: " + num1) : num2 < num1 && num2 < num3 ? document.write("Small number: " + num2) : num3 < num1 && num3 < num2 ? document.write("Small number: " + num3) :
    document.write(smallNum);

//function
function sqaure() {
    var num = 5;
    var result = num * num;
    document.write("sqaure : " + result + "<br/>");
}
sqaure(); //print 25

function sqr(num) {
    var result = num * num;
    document.write("sqaure : " + result + "<br/>");
}
sqr(6); //print 36
function sqar(num1, num2) {
    var result = num1 * num2;
    document.write("sqaure : " + result + "<br/>");
}
sqar(4, 5); //print 20

function sum(num1, num2) {
    var result = num1 + num2;
    document.write("Sum : " + result + "<br/>");
}
sum(23, 27); //print 50

function sup(num1, num2) {
    var result = num1 - num2;
    return result;
}
var x = sup(9, 7);
document.write(x); //print 2

//My task-- calculator by user input
var n1 = Number(prompt("Enter first number : "));
var n2 = Number(prompt("Enter second number : "));

function addition(num1, num2) {
    var result = num1 + num2;
    document.write("Addition : " + result + "<br/>")
}

function subtraction(num1, num2) {
    var result = num1 - num2;
    document.write("Subtraction : " + result + "<br/>")
}

function multiple(num1, num2) {
    var result = num1 * num2;
    document.write("Multiple : " + result + "<br/>")
}

function divisition(num1, num2) {
    var result = num1 / num2;
    document.write("Divisition : " + result + "<br/>")
}

function remainder(num1, num2) {
    var result = num1 % num2;
    document.write("Remainder : " + result + "<br/>")
}
addition(n1, n2);
subtraction(n1, n2);
multiple(n1, n2);
divisition(n1, n2);
remainder(n1, n2);

//Array method
var names = new Array(5);
names[0] = "johirul";
names[1] = "Sany";
names[2] = "julfa";
names[3] = "samin";
names[4] = "hridoy";
document.write(names[3]); //print samin
document.write(names);

var names = ["johirul", "sany", "julfa", "samin", "hridoy"];
document.write(names[3]); //print samin
document.write(names);

//array push --- last name add 
var names = ["johirul", "sany", "julfa", "samin", "hridoy"];
names.push("ashik"); //Another name will be added
document.write(names[5]); //print ashik
document.write(names);

//array unshift --- first name add
var names = ["sany", "julfa", "hridoy"];
names.unshift("johirul");
document.write(names);

//array pop --- last name remove 
var names = ["johirul", "sany", "julfa", "samin", "hridoy"];
names.pop(); //last name remove
document.write(names);

//array shift --- first name remove 
var names = ["johirul", "sany", "julfa"];
names.shift();
document.write(names); //first name remove

//array concat
var country1 = ["Bangladesh", "canada"];
var country2 = ["japan", "nepal"];
var country = country1.concat(country2);
document.write(country);

//array splice --- new name adding
var names = ["johirul", "sany", "ashik"];
names.splice(2, 0, "julfa", "hridoy");
document.write(names);

//array splice --- name removing
var names = ["johirul", "sany", "julfa", "hridoy", "ashik"];
names.splice(1, 2);
document.write(names);

//array slice --- name removing
var names = ["johirul", "sany", "julfa", "hridoy", "ashik"];
var newArray = names.slice(1);
document.write(newArray);

//array sort --- name sorting
var names = ["johirul", "sany", "julfa", "hridoy", "ashik"];
var sortNames = names.sort();
document.write(sortNames);

//array number sort --- number sorting
var numbers = [23, 1, 34, 43, 12, 23, 53, 56, 67];
numbers.sort(function(a, b) {
    return a - b;
})
document.write(numbers);

//array number reverse --- number reverseing
var numbers = [23, 1, 34, 43, 12, 23, 53, 56, 67];
numbers.sort(function(a, b) {
    return b - a;
})
document.write(numbers);

//array reverse --- name reversing
var names = ["johirul", "sany", "julfa", "hridoy", "ashik"];
var sortNames = names.sort();
names.reverse();
document.write(sortNames);

//loop array
var num = [10, 20, 30, 40, 50];
for (var i = 0; i < 5; i++) {
    document.write(" " + num[i]);
}

//loop array sum
var num = [10, 20, 30, 40, 50];
var sum = 0;
for (var i = 0; i < 5; i++) {
    document.write(" " + num[i]);
    sum = sum + num[i];
}
document.write(" Sum : " + sum);

//loop array sum -- user input
var num = new Array();
for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Enter a number : "));
}
var sum = 0;
for (var i = 0; i < 5; i++) {
    document.write(num[i]);
    sum = sum + num[i];
}
document.write(" sum : " + sum);

//object method --- multiple value store
var student1 = {
    name: "johirul islam",
    age: 23,
    lang: ["Bengali", "English", "Hindi"]
}
document.write(student1.name);

//object constructor add
function Student(name, age, lang) {
    this.name = name;
    this.age = age;
    this.lang = lang;
    this.display = function() {
        document.write(this.name);
        document.write(this.age);
        document.write(this.lang);
    }
}
var student1 = new Student("johirul", 23, ["Bengali", "English", "Hindi"]);
var student2 = new Student("sany", 21, ["hindi", "bangla", "english"]);
var student3 = new Student("hridoy", 20, ["arabia", "hindi", "bangla"]);
student1.display();
student2.display();
student3.display();

//object constructor add other method
class Student {
    constructor(name, age, lang) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.display = function() {
            document.write(this.name);
            document.write(this.age);
            document.write(this.lang);
        };
    }
}
var student1 = new Student("johirul", 23, ["Bengali", "English", "Hindi"]);
var student2 = new Student("sany", 21, ["hindi", "bangla", "english"]);
var student3 = new Student("hridoy", 20, ["arabia", "hindi", "bangla"]);
student1.display();
student2.display();
student3.display();

class myClass {
    hello() {
        console.log("Hello world");
    }
}
var obj = new myClass();
obj.hello();

//static mode
class myClass {
    static hello() {
        console.log("Hello world");
    }
}
myClass.hello();

//class inheritance
class parent {
    hello1() {
        console.log("Hello One function");
    }
    hello2() {
        console.log("Hello two function");
    }
}
class child extends parent {

}
var obj = new child();
obj.hello1();
obj.hello2();

class parent {
    hello1() {
        console.log("Hello One function");
    }
    hello2() {
        console.log("Hello two function");
    }
}
class child extends parent {
    demo() {
        super.hello1();
        super.hello2();
    }
}
var obj = new child();
obj.demo();

//math object
//math sqrt
var x = Math.sqrt(25);
document.write(x); //print 5
//math abs
var x = Math.abs(-5);
document.write(x); //print 5
//math sin
var x = Math.sin(2);
document.write(x); //print 0.9092974268256817
//math pow
var x = Math.pow(2, 4);
document.write(x); //print 16
//math floor
var x = Math.floor(2.4);
document.write(x); //print 2
//math ceil
var x = Math.ceil(4.8);
document.write(x); //print 5
//math round
var x = Math.round(4.5);
document.write(x); //print 5 --- (.5-.9)
//math round
var x = Math.round(4.4);
document.write(x); //print 4 --- (.1-.4)
//math max
var x = Math.max(23, 45, 2, 34, 56);
document.write(x); //print 56
//math min
var x = Math.min(23, 43, 12, 45, 22, );
document.write(x); //print 12
//math random
var x = Math.random();
document.write(x); //print random number

//create guessing game
var numOfWon = 0;
var numOfLost = 0;
for (var i = 1; i <= 10; i++) {
    var guessNum = parseInt(prompt("Enter a number from 1 to 10 : "));
    var randomNum = Math.floor(Math.random() * 5) + 1;
    if (guessNum == randomNum) {
        console.log("You have won");
        numOfWon++;
    } else {
        console.log("You have lost. Random number was " + randomNum);
        numOfLost++;
    }
}
console.log("Number of win : " + numOfWon);
console.log("Number of lost : " + numOfLost);

//Date object
var date = new Date();
document.write(date);
var year = date.getFullYear();
document.write(year);
var month = date.getMonth();
document.write(month);
var currentDate = date.getDate();
document.write(currentDate);
var currentDay = date.getDay();
document.write(currentDay);
var currentHour = date.getHours();
document.write(currentHour);
var currentMinute = date.getMinutes();
document.write(currentMinute);
var currentSecond = date.getSeconds();
document.write(currentSecond);
var currentMiliSecond = date.getMilliseconds();
document.write(currentMiliSecond);
var time = date.getTime();
document.write(time);

//how to select html element
//getElementById() --- innerHTML
//<h1 id="heading1">Hello World</h1>
document.getElementById("heading1").innerHTML = "Hello Google";

//getElementsByClassName() --- innerHTML
//<h1 class="heading2">Hello Bangladesh</h1>
//<h1 class="heading2">Hello Bangladesh</h1>
document.getElementsByClassName("heading2")[1].innerHTML = "Hello Canada";

//getElementsByTagName() --- innerHTML
//<h1>Hello German</h1>
document.getElementsByTagName("h1")[3].innerHTML = "Hello Japan";

//querySelector() --- innerHTML
//<h2 id="query1">This is Bangladesh</h2>
//<h2 class="query2">This is canada</h2>
document.querySelector("#query1").innerHTML = "This is query change one";
document.querySelector(".query2").innerHTML = "This is query change two";
//<h3>This is japan</h3>
document.querySelector("h3").innerHTML = "This is query change three";
//<a href="#">Link 0</a>
document.querySelector("a").innerHTML = "Link change one";
//<ul>
//  <li><a href="#">Link 1</a></li>
//</ul>
document.querySelector("li a").innerHTML = "Link change two";
//<div class="myDiv">
//    <a href="#">Link 2</a>
//</div>
document.querySelector("div a").innerHTML = "Link change three";

//querySelectorAll() --- innerHTML
//<p>This is paragraph</p>
document.querySelectorAll("p")[0].innerHTML = "Paragraph text change";

//button, onclick, function() --- innerHTML
function myButtonId() {
    document.querySelector("#buttonId").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, est!"
}

function myButtonCls() {
    document.querySelector(".buttonCls").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
}

function htmlBtn() {
    document.querySelector("#btnImg").src = "img/html.png"
}

function cssBtn() {
    document.querySelector("#btnImg").src = "img/css.png";
}

function jsBtn() {
    document.querySelector("#btnImg").src = "img/javascript.png";
}

//getElementsByTagName() --- style,href,title
//<a href="#">Link 3</a>
document.getElementsByTagName("a")[3].style.textDecoration = "none";
document.getElementsByTagName("a")[3].href = "https://github.com/johirulshaky/";
document.getElementsByTagName("a")[3].title = "Github Profile";
document.getElementsByTagName("a")[3].style.fontSize = "25px";
document.getElementsByTagName("a")[3].style.color = "red";
document.getElementsByTagName("a")[3].style.textShadow = "1px 2px 3px green";
document.getElementsByTagName("a")[3].style.border = "1px solid gray";
document.getElementsByTagName("a")[3].style.fontWeight = "bold";
document.getElementsByTagName("a")[3].style.textTransform = "uppercase";

//create html element
//<div id="createElement">
//<h4>Create Element1</h4>
//<h4>Create Element2</h4>
//</div>
document.getElementById("createElement").appendChild(document.createElement("h4").appendChild(document.createTextNode("Create last Element by javascript")));

//remove html element
document.getElementById("createElement").removeChild(document.getElementsByTagName("h4")[0]);

//Create HTML elements before specific tags
document.getElementById("createElement").insertBefore(document.createElement("h4").appendChild(document.createTextNode("Create HTML elements before specific tags")), document.getElementsByTagName("h4")[0]);

//create html elements before specific tags --- other method
var myDiv = document.getElementById("createElement");
var heading = document.createElement("h4");
var textHead = document.createTextNode("Create HTML elements before specific tags 2");
heading.appendChild(textHead);
var headingN = document.getElementsByTagName("h4")[0];
myDiv.insertBefore(heading, headingN);

//add,replace and remove class in html element
document.getElementById("createElement").classList;
document.getElementById("createElement").classList.add("myClass");
document.getElementById("createElement").classList.replace("myClass", "listClass");
document.getElementById("createElement").classList.remove("listClass");

//javascript click image slider
var photos = ["img/html.png", "img/css.png", "img/javascript.png", "img/jquery.png"];
var imgTag = document.querySelector("img");
var count = 0;

function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    };
};

function prev() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    imgTag.src = photos[count];
};

//HTML element style change by javascript
//classList.add(),classList.remove()
function addStyle() {
    document.querySelector("#paraId").classList.add("paraClass");

    //javascript build-in style
    // var myStyle = document.querySelector("#paraId")
    // myStyle.style.color = "red";
    // myStyle.style.fontSize = "30px";
    // myStyle.style.fontWeight = "bold";
    // myStyle.style.fontStyle = "italic";
    // myStyle.style.textShadow = "1px 2px 3px green";
    // myStyle.style.background = "#f1f1f1";
    // myStyle.style.width = "260px";
    // myStyle.style.padding = "10px";
    // myStyle.style.border = "1px solid #d1d1d1";
    // myStyle.style.boxShadow = "0px 3px 10px 0px gray";
    // myStyle.style.cursor = "pointer";
    // myStyle.style.transition = ".5s"
};

function removeStyle() {
    document.querySelector("#paraId").classList.remove("paraClass");
};

//addEvenListener()
document.querySelector("#clickStyle").addEventListener("click", function() {
    document.querySelector("#clickStyle").classList.add("headingClass");
});
document.querySelector("#clickStyle").addEventListener("mouseout", function() {
    document.querySelector("#clickStyle").classList.remove("headingClass");
});

//Event Listeners with multiple elements
var len = document.querySelectorAll(".myButton").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        document.querySelectorAll("h1")[1].innerHTML = text + " is clicked";
    });
};
//other method
// document.querySelectorAll(".myButton")[0].addEventListener("click", function() {
//     var text = this.innerHTML;
//     document.querySelectorAll("h1")[1].innerHTML = text + " is clicked";
// })
// document.querySelectorAll(".myButton")[1].addEventListener("click", function() {
//     var text = this.innerHTML;
//     document.querySelectorAll("h1")[1].innerHTML = text + " is clicked";
// })
// document.querySelectorAll(".myButton")[2].addEventListener("click", function() {
//     var text = this.innerHTML;
//     document.querySelectorAll("h1")[1].innerHTML = text + " is clicked";
// })


//How to add audio play + add animation + Keypress listener
for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".myBtn")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);
    });
};

document.addEventListener("keypress", function(even) {
    var text = even.key;
    audioPlay(text);
    playAnimation(text);
});

function audioPlay(text) {
    switch (text) {
        case "a":
            var audio = new Audio("sounds/a.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/b.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("sounds/c.mp3");
            audio.play();
            break;
    };
};

function playAnimation(text) {
    document.querySelector("." + text).classList.add("playAnim");
    setTimeout(function() {
        document.querySelector("." + text).classList.remove("playAnim");
    }, 1000);
};

//Keypress listener
var count = 0;
document.querySelector("#keyTextArea").addEventListener("keypress", function(even) {
    count++;
    var text = even.key;
    document.querySelector("#keyPress").innerHTML = "You have press " + text + " count " + count;
});

//Error Handling | try, catch, finally block
try {
    alert("Hello World");
    alert(x); //this is error
    alert("Hello Google"); //not print
} catch (error) { //If try block error found, the catch will work
    console.log("Inside catach block");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Hello World");
    console.log("Hello Google");
}

//Error Handling | throw keyword
document.querySelector("#checkBtn").addEventListener("click", function() {
    var num = document.querySelector("#numTextField").value;
    try {
        if (num < 5) {
            throw "Input is too low";
        } else if (num > 10) {
            throw "Input is too high"
        } else {
            console.log("Input is " + num);
        }
    } catch (error) {
        console.log(error)
    }
})

//Canvas | draw bangladesh flag 
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
0
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(8, 8, 390, 290);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 386, 286);
var centerX = c.width / 2;
var centerY = c.height / 2;
ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

//variable and function declarations in ES6
//will work inside of if condition
var x = 5;
if (true) {
    var x = 6;
}
document.write(x); //print 6
//will work outside of if condition
let x = 5;
if (true) {
    let x = 6;
}
document.write(x); //print 5

let x = 11;
for (let x = 1; x <= 10; x++) {
    document.write(x); //print 12345678910
}

let x = 11;
for (let x = 1; x <= 10; x++) {
    //document.write(x);
}
document.write(x); //print 11;

const x = 11;
if (true) {
    x = 10; //const value not changeable
} //console: Uncaught TypeError

let x = 23;
let y = 22;
let sum = x + y;
document.write(`sum is ${sum}`);

//Es6 function system
const add = (x, y) => {
    let sum = x + y;
    document.write(sum);
}
add(20, 30);

//hoisting
x = 20;
if (true) {
    y = 10;
    console.log(`y = ${y}`);
    var y;
}
console.log(`x= ${x}`);
var x;

//strict mode
"use strict" //not commentable
x = 20;
console.log(`x = ${x}`); //print Uncaught ReferenceError

//default parameter
"use strict"

function message() {
    console.log("welcome guys")
}
message();

function message(text = "This is default parameter") {
    console.log(`${text}`)
}
message("I love javascript Es6");
message(); // print default parameter text

//rest parameter
function printNum(x, y, ...z) {
    console.log(`x = ${x}, y= ${y}, z = ${z}`)
}
printNum(10, 20, 30, 40, 50);

//spread operator
function addNumbers(x, y, z) {
    return x + y + z;
}
let numbers1 = [1, 2, 3]
console.log(addNumbers(...numbers1));
let numbers2 = [5, 6, 7, ...numbers1]
console.log(...numbers2);

let p1 = {
    Name: "Johirul Islam",
    Age: 23
}
let p2 = {
    Occupation: "Student",
    Nationality: "Bangladesh"
}
let p = {...p1, ...p2 }
console.log(p);

//object literals
function studentInfo1(name, age) {
    return {
        name,
        age
    }
}
console.log(studentInfo1("Johirul", 23))

let message = {
    body() {
        return 'Hi, I am object function'
    }
}
console.log(message.body())

//for...of loop
const names = ["Johirul", "Soniya", "Khadiza"]
for (let name of names) {
    console.log(name)
}
//for...in loop
let students = {
    Id: 101,
    Name: 'Johirul Islam',
    cgpa: 4.00
}
for (let x in students) {
    console.log(`${x}: ${students[x]}`)
}

//forEach
var numbers = [10, 20, 30, 40];
numbers.forEach(function(x) {
    console.log(x)
})

var numbers = [10, 20, 30, 40];
var squareNumbers = [];
numbers.forEach(function(x) {
    squareNumbers.push(x * x);
})
console.log(squareNumbers);

var numbers = [10, 20, 30, 40];
console.log(numbers);
numbers.forEach(function(x, index, arr) {
    arr[index] = x + 5;
})
console.log(numbers);

//map function
var numbers = [2, 3, 4, 5];
var sqrNumbers = numbers.map(function(x) {
    return x * x;
})
console.log(sqrNumbers);

var myMap = new Map();
myMap.set("key1", "Bangladesh");
myMap.set("key2", "India");
myMap.set("key3", "Canada");
myMap.set("key4", "Nepal");
myMap.set("key5", "China");

console.log(myMap.keys());
console.log(myMap.values());

for (let myKey of myMap.keys()) {
    console.log(myKey);
}
for (let myValue of myMap.values()) {
    console.log(myValue);
}

myMap.delete("key1")
console.log(myMap.values());

console.log(myMap.get("key4"));

if (myMap.has("key2")) {
    console.log("Yes");
} else {
    console.log("No");
}

myMap.clear();
console.log(myMap.values());

//set function
var mySet = new Set();
mySet.add("Bangladesh");
mySet.add("India");
mySet.add("China");
mySet.add("Canada");
mySet.add("Nepal");
mySet.add("Vutan");

console.log(mySet);

mySet.delete("India");
console.log(mySet);

console.log(mySet.size);

console.log(mySet.values());

if (mySet.has("Canada")) {
    console.log("Yes");
} else {
    console.log("No");
}

console.log(mySet.clear());

//filter function
var numbers = [34, 45, 23, 12, 43, 2, 12, 3, 1, ];
var newNumbers = numbers.filter(function(x) {
    return x > 25;
})
console.log(newNumbers);

//Arrow function
const message1 = () => {
        console.log("Hi i am message1");
    }
    //short //const message1 = () => console.log("Hi i'm message1");
message1();

const message2 = () => {
        return "Hi i am message2";
    }
    //short //const message2 = () => "Hi i am message2";
console.log(message2());

const addNum1 = (num1, num2) => console.log(num1 + num2);
addNum1(12, 34);

const addNum2 = (num1, num2) => num1 + num2
console.log(addNum2(23, 32));

var students = [{
        Id: 101,
        Name: "Johirul Islam",
        Gpa: 4.32
    },
    {
        Id: 102,
        Name: "Soniya Islam",
        Gpa: 4.10
    },
    {
        Id: 103,
        Name: "Samin",
        Gpa: 2.82
    },
    {
        Id: 104,
        Name: "Abir",
        Gpa: 2.32
    },
    {
        Id: 105,
        Name: "Salma",
        Gpa: 5.00
    }
]
const studentName = () => students.filter((x) => x.Gpa > 3).map((y) => y.Name, Gpa);
console.log(studentName());

//Destructuring array and objects
//array destructure
let numbers = [10, 20, 30, 40, 50]
let [num1, num2, ...z] = numbers
console.log(num1);
console.log(z);
//swap variables
let a = 10,
    b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);
//object destructure
const studentInfo = {
    id: 101,
    fullName: "Johirul Islam",
    gpa: 3.59
}
const { id, fullName, gpa } = studentInfo;
console.log(id);
console.log(fullName);
console.log(id, fullName, gpa);
//nested object destructure
const Info = {
    fullName: "Johirul Islam",
    address: {
        permanentAddress: "Mohangonj",
        currentAddress: "Netrakona"
    },
    language: {
        native: "Bangla",
        beginner: "English"
    }
}
const { fullName, address, language } = Info;
console.log(address.permanentAddress, address.currentAddress)
console.log(fullName, address, language);
//destructuring function parameters
const studentInfo = ({ id, fullName }) => {
    console.log(`${id}, ${fullName}`)
}
const student = {
    id: 101,
    fullName: "Johirul Islam"
}
studentInfo(student)

//array methods  find()  findIndex()
let numbers = [9, 33, 12, 43, 54, 64, 73]
const evenNumber = (value, index, array) => {
    if (value % 2 === 0)
        return value;
}
let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex = numbers.findIndex(evenNumber);
console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);
//object methods  find()  findIndex()
const students = [{
        name: "samin",
        id: 101,
        gpa: 2.50
    },
    {
        name: "soni",
        id: 102,
        gpa: 3.50
    },
    {
        name: "Johirul",
        id: 103,
        gpa: 4.50
    },
    {
        name: "khadiza",
        id: 104,
        gpa: 5
    }
]
console.log(students.find(x => x.gpa > 4));

//String methods  startsWith, endsWith, includes
const message = "Today is friday";
console.log(message.startsWith('Today')); //print true
console.log(message.startsWith('today')); //print false --- this method case sensitive
console.log(message.endsWith('friday')); //print true
console.log(message.endsWith('Friday')); //print false  --- this method case sensitive
console.log(message.includes('is')); //print true
console.log(message.includes('Is')); //print false  --- this method case sensitive

//ES6 modules
import { text, setText } from './myModule.js'
console.log(text);
setText("good bye es6 module");
console.log(text);

// ES6 class modules
class student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    set studentName(name) {
        this.name = name;
    }
    get studentInfo() {
        return this.id + " " + this.name
    }
}
let s1 = new student(101, "Johirul");
console.log(s1);
s1.studentName = "Samin";
console.log(s1.name);
console.log(s1.studentInfo);

// Synchronous vs Asynchronous programming
const taskOne = () => {
    console.log("task1");
}
const dataLoading = () => {
    console.log("Task2, Data Loading");
}
const taskTwo = () => {
    setTimeout(dataLoading, 2000);
}
const taskThree = () => {
    console.log("task3");
}
taskOne();
taskTwo();
taskThree()

//callback and higher order function
function square(x) {
    console.log(`square is ${x}:${x*x}`);
}
square(5);

function higherOrderFunction(num, callback) {
    callback(num)
}
higherOrderFunction(6, square);

const taskOne = (callback) => {
    console.log("task1");
    callback();
};
const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task2, Data Loading");
        callback();
    }, 2000);
};
const taskThree = () => {
    console.log("task3");
};

taskOne(() => {
    taskTwo(() => {
        taskThree();
    });
});

// promise -- pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = true;
    if (completedPromise) {
        resolve("completed promise 1");
    } else {
        reject(new Error("not completed promise 1"));
    }
});
const promise2 = new Promise((resolve, reject) => {
    resolve("completed promise 2");
});
promise1
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    });
promise2.then((res) => console.log(res));
// Promise.all([promise1, promise2])
//     .then((res) => console.log(res));

//promise race
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("completed promise 3");
    }, 2000);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("completed promise 4");
    }, 1000);
})
Promise.race([promise3, promise4]).then((res) => console.log(res));

//promise chaining
const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task 1 is completed");
    });
};
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 is completed");
        }, 2000);
    });
};
const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("task 3 is completed");
    });
};
const taskFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 4 is completed");
        }, 3000)
    });
};
const taskFive = () => {
    return new Promise((resolve, reject) => {
        reject("task 5 is not completed");
    });
};

taskOne()
    .then((res) => console.log(res))
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))
    .then(taskFour)
    .then((res) => console.log(res))
    .then(taskFive)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

//async await
const taskSix = () => {
    return new Promise((resolve, reject) => {
        resolve("task 6 is completed");
    });
};
const taskSeven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 7 is completed");
        }, 3000)
    });
};
const taskEight = () => {
    return new Promise((resolve, reject) => {
        reject("task 8 is not completed");
    });
};

const callAllTasks = async() => {
    try {
        const task6 = await taskSix();
        console.log(task6);
        const task7 = await taskSeven();
        console.log(task7);
        const task8 = await taskEight();
        console.log(task8);
    } catch (error) {
        console.log(error);
    }
}
callAllTasks();

//coding standard
/**
 * addNumbers function will add 2 numbers
 * @param {number} x - first number
 * @param {number} y - second number
 */

function addNumbers(x, y) {
    console.log(x + y)
}

addNumbers(32, 48);

//end javascript code