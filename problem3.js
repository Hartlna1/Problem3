/* 
Programmer: 	Nanette K. Hartley
Language: 		JavaScript
Filename:  		problem3.js
Date: 			11/5/2013
Description: 	Project Euler problem 3; finds the largest prime factor of 600851475143. 
				Modified program to allow user input so the largest prime factor of any number can be found.
*/

//declaration of variables and constants
var BR = "<br />";						//HTML line break
var ES = " ";							//HTML extra space
var LE = ".";							//HTML line end
var factors = new Array;				//array for all factors
var primeFactors = new Array;			//array for prime factors
var num = 0;							//user's number to work with
var divisor = 1; 						//divisor for use in primary loop
var factor = 1;							//sets up the factor variable for later use
var div = 1; 							//sets up the div variable for later use
notPrime = 0; 							//if not prime is not 0, then the number is not prime
var notFactor = 0;						//if the factor is passed in and is not divisible by divisor, then not factor 

//Welcome the user to the program
document.write("Hello, and welcome to the largest prime factor calculator!" + BR);
document.write("This program will ask you what number you want to work with, and then give back the largest prime factor and a " + BR);
document.write("list of all factors." + BR + BR);

//Getting user input
var num = prompt("What number do you want to use?");
document.write("You chose to work with " + num + LE + BR + BR);

divisor = num; 
document.write("The value of divisor is " + divisor + LE + BR + BR);

// Processing input to provide output 
for (var i = 0; divisor >= 1; divisor--)		//for loop to determine all factors
{
	document.write("I am now inside the first for loop" + BR);
	document.write("The value of num is now " + num + BR);
	document.write("The value of i is now " + i + BR);
	document.write("The value of divisor is now " + divisor + BR + BR);
	if(num % divisor == 0)					//if number is leaves no modulus when divided by divisor, then it is a factor of num
	{
		document.write("I am now inside the first if loop." + BR);
		factors[i] = divisor;					//divisor is pushed to factor array
		document.write("I am a factor pushed to the factor array: " + factors[i] + BR);

		factor = divisor; 						//set divisor to factor to check if prime
		document.write("I am the new factor for checking " + factor + ES + BR);
		div = factor - 1; 						//set div to factor so all values below can be checked
		document.write("I am the new div for checking " + div + ES + BR + BR);
		for (var j = 0; div >= 2; div--)		//for loop checks all values from 2 to factor -1 to see if they give no modulus
		{
			document.write("I am now inside the second loop. " + BR);
			document.write("The value of j is now " + j + BR);
			document.write("The value of div is now " + div + BR);
			document.write("The value of factor is now " + factor + BR + BR);
			if (factor % div != 0)					//if the number has no modulus from 2 to factor -1, then it is prime
			{
				document.write("I am now inside the second if loop." + BR + BR);
				document.write("The value of factor is " + factor + BR);
				document.write("The value of div is now " + div + BR);
			}
			else
			{
				notPrime++;
				document.write("The factor " + factor + " is not prime." + BR);
			}
			j++;
			document.write("Value of notPrime is " + notPrime + BR);
		}
		if (notPrime == 0)
		{
			document.write("Made it into the if notPrime statement!" + BR);
			primeFactors[j] = factor;
			document.write("The factor " + factor + " is prime." + BR);
		}

	}
	i++; 
}

//Output of data
//document.write("The largest prime factor is " + primeFactors[0] + LE + BR + BR);

//Thank the user and end the program
document.write("Thank you for using our program!" + BR + BR);