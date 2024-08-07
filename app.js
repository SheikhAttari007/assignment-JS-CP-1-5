
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 01 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
// Q1: Write a script to greet your website visitor using JS alert box.
alert("hello world");  // ANS: 1...

// Q2: Write a script to display following message on your web page.
alert("Error! Please Enter a Valid Password"); //ANS: 2...

// Q3: Write a script to display following message on your web page. (Hint : Use line break)

alert("Wellocome to JS dunya...\nHappy Coding!"); // ANS: 3...

// Q4: Write a script to display following messages in sequence.
alert("Wellocome to JS land.");
alert("Happy Coding!\n ▢ Prevent this page from creating a aditional dialogs."); // ANS: 4...

// Q5: Generate the following message through browser’s developer console.
console.log("Hello... i can run JS Through my web browser's console."); // ANS: 5...

/* Q6: Practice placement of <script></script> element in
following sections of your project in exercise 6.

    a. Head
    b. Body (before your page’s HTML)
    c. Body (inside your page’s HTML)
    d. Body (after your page’s HTML) */

// (C) is the Right Answer ✅...





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 02 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
document.write("<br> <h1>CHAPTER 02</h1>")

// Q1: Declare a variable called username.
var username; // ANS 1...

// Q2: Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Haseeb Ahmed Sheikh"; // ANS 2...

/* Q3: Write script to
    a) Declare a JS variable, titled message.
    b) Assign “Hello World” to variable message
    c) Display the message in alert box.
*/

var message = "Hello world";
alert(message); // ANS 3...


// Q4: Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var studentName = "John Doe";
var studentAge = 15;
var studentData = "Certified Mobile Aplication Development.";

alert(studentName);
alert(studentAge);
alert(studentData); // ANS: 4...


// Q5: Write a script to display the following alert using one JS variable.

alert("Pizza\n Pizz\n Piz\n Pi\n P")



// Q6: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)...

var email = "rafey123890@gmail.com";
alert("My Email Address is: " + email); // ANS 6...


// Q7: Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box...

var lerner = "A smarter way to learn JavaScript";
alert("I Am Trying To Learn from the Book " + lerner); // ANS 7...


// Q8: Write a script to display this in browser through JS...
document.write("Yah! I can write HTML content through JavaScript."); //ANS 8...


// Q9: Store following string in a variable and show in alert and browser through JS...

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"); // ANS 9...





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 03 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
// Q1: Declare a variable called age & assign to it your age. Show your age in an alert box.
document.write("<br> <h1>CHAPTER 03</h1>")

var age = 15;

alert("I am " + age + " years old."); // ANS 1...


// Q2: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

if(localStorage.getItem('visitCount')) {
    // Increment the existing counter
    var count = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', count);
} else {
    // Initialize the counter if it doesn't exist
    localStorage.setItem('visitCount', 1);
}

// Display the visit count wherever you need to
var visitCount = localStorage.getItem('visitCount');
alert("You Have Visited This Site: " + visitCount + " Times"); // ANS 2...


//Q3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthdate = 2008;

document.write("<br>My birth year is " + birthdate + "<br> Data type of my deeclared variable is number.<br>"); // ANS 3...


/* Q4: A visitor visits an online clothing store
   www.xyzClothing.com . Write a script to store in variables
   the following information:
    a. Visitor’s name
    b. Product title
    c. Quantity i.e. how many products a visitor wants to order
    Show the following message in your browser: “John
    Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
 */

var visitorName = prompt("Tell me the Your Name Please...");
var productTitle = prompt("Can You Please Put The Product-name.");
var ordered = prompt("How many Products You Want.");

document.write("<strong>" + visitorName + "</strong> ordered <strong>" + ordered + " " + productTitle + "</strong> On XYZ Closing Store.." ); // ANS: 4...






/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 04 >>>>>>>>>>>>>>>>>>>>>>>>>>> */
// Q1: Declare 3 variables in one statement.
document.write("<br> <h1>CHAPTER 04</h1>")
var x, y, z;
var x = 5, y = 10, z = 15; // ANS: 1..


// Legal Variable Names
var firstName; // Starts with a letter and uses camelCase.
var _age; // Starts with an underscore.
var $salary; // Starts with a dollar sign.
var user3; // Contains a number but doesn't start with it.
var my_variable; // Uses underscores for separation.

// Illegal Variable Names
/* var 123name;  Starts with a number, which is not allowed.
   var: Reserved keyword in JavaScript, which is not allowed
   var my-variable; Contains a hyphen, which is not allowed in variable names.
   var first name; Contains a space, which is not allowed in variable names.
   var @username; Starts with a symbol other than _ or $. */ 
// ANSWER OF THIS QOUESTIONS>>>



/* Q2: 3. Display this in your browser
    a) A heading stating “Rules for naming JS variables”
    b) Variable names can only contain ______, ______,
    ______ and ______.
    For example $my_1stVariable
    c) Variables must begin with a ______, ______ or
    _____. For example $name, _name or name
    d) Variable names are case _________
    e) Variable names should not be JS _________
 */

document.write("<br> <h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain. NUMBER $ and For example $my_1stVariable");
document.write("Variables must begin with a $ _ and leters...")
document.write("Variable names are case. sensitive like rafey and RAFEY both are different variables in js...");
document.write("Variable names should not be JS. like this for catch case and var let const");






/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 05 >>>>>>>>>>>>>>>>>>>>>>>>>>> */
document.write("<br> <h1>CHAPTER 05</h1>")

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
//answer:
// var a = +prompt("enter your number")
// var b = +prompt("enter your number")
// c = a+b
// document.write("sum of   " + a +" and  "+ b +" = "+c)


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
//answer:
//////////////subtraction//////
// var a = +prompt("enter your number")
// var b = +prompt("enter your number")
// c = a-b
// document.write("sub of   " + a +" and  "+ b +" = "+c)



//////////////////multiplication/////////

// var a = +prompt("enter your number")
// var b = +prompt("enter your number")
// c = a*b
// document.write("multiplication of   " + a +" and  "+ b +" = "+c)


////////////division ///////////
// var a = +prompt("enter your number")
// var b = +prompt("enter your number")
// c = a/b
// document.write("Divison of   " + a +" and  "+ b +" = "+c)



/////////////modulus///////////


// var a = +prompt("enter your number")
// var b = +prompt("enter your number")
// c = a%b
// document.write("modulus of   " + a +" and  "+ b +" = "+c)



// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
//answer:

var math 

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
//answer:
// console.log("value after variable declaration is ??" + math)


// c. Initialize the variable with some number.
//answer:

// var num = 20;

// d. Show the value of variable in your browser like “Initial
// value: 5”.
//answer:

var sum = 5;
console.log("initial value " + sum)

// e. Increment the variable.
//answer:
sum++;


// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

//answer

  
 console.log("value after increment is " + sum)


//g. Add 7 to the variable.
// //answer:
 sum +=7;


// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
//answer:

console.log("value after addition is " +  sum)

// i. Decrement the variable.
//answer:
sum--;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
//answer:
console.log("value after decrement is: "+ sum)

// k. Show the remainder after dividing the variable’s value
// by 3.
//answer:
var remainder = sum % 3;

// l. Output : “The remainder is : 0”.
//answer:
console.log ("this remainder "+ remainder)

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
//answer:
var ticket_price = 600;
var total_cost = ticket_price*5;
console.log("total cost of buy 5 ticket moives  " +total_cost+"PKR")


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// answer

var a = 4;
count1=a*1;
count2=a*2
count3=a*3;
count4=a*4
count5=a*5;
count6=a*6
count7=a*7;
count8=a*8
count9=a*9;
count10=a*10

console.log("4 x 1 = "+count1+"\n"+  "4 x 2 = "+count2+"\n"+ "4 x 3 = "+count3+"\n"+"4 x 4 = "+count4+"\n"+"4 x 5 = "+count5+"\n"+"4 x 6 = "+count6+"\n"+"4 x 7 = "+count7+"\n"+"4 x 8 = "+count8+"\n"+"4 x 9 = "+count9+"\n"+"4 x 10 = "+count10+"\n")


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
//answer:
//////a
var tem_C = 40;
////////b
// Fahrenheit = ?
cen = (tem_C*9/5)+32
console.log(cen)



/////////c
var fahrenheit = 104

////d
// celsius_temp
//c(F-32)*5/9
celsius_temp=(fahrenheit-32)*5/9
console.log(celsius_temp)
//celsius_temp = 40;
console.log("Convert it to Celsius & output Fahrenheit temperature  "+fahrenheit+"   is celsius_temp   "+celsius_temp)


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables



// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// answer:
var price_item1 = 60;
var price_item2 = 40;
var Qty_item1 = 1;
var Qty_item2 = 3;
totalcost = (price_item1*Qty_item1)+(price_item2*Qty_item2)
console.log("price item1 is = 60\n"+"QTY item1 = 1\n"+"price item2 = 40\n"+"Qty item2 = 3\n"+"totalcost your order  = "+totalcost)



// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
//answer:


var obtained_marks =804;
var total_marks =980;
percentage = (obtained_marks/total_marks)*100;
console.log("total marks = 980\nobtained marks = 804 \npercentage = "+percentage)



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
//answer:

var us_dollar = 10;
rate_usdollar = 104.80
var sauid_riyals=25;
rate_saudirayials = 28;
convert = (us_dollar*rate_usdollar)+(sauid_riyals*rate_saudirayials)
console.log("Total currency in PKR :  "+convert)


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
//answer:
var num3= 10 ;

count =(num3+5)*10/2;
console.log(count)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
//answer:

var current_year = 2024;
var birth_year = 2001;
age1 = 23;
age2= 22;
age1= current_year - birth_year
age2= (current_year - birth_year)-1;
console.log("They are either "+age1 +" or " + age2  + "  years old" )


// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
//answer:
////////////////circumference/////////
var radius =20;
circumference=2*3.142*radius;
console.log(circumference)
//////////////area///////////
area = (3.142*radius **2)
console.log(area)

console.log("circumference "+circumference+"  area "+area)


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
//answer:
var favorite_snack = "chocolatechip"
var current_age = 15;
var max_age = 65;
var amount_snack_per_day =3;
cal=(max_age-current_age)*amount_snack_per_day
console.log("ou will need "+cal+" to last you until the ripe old age of  "+max_age)
