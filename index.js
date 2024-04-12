// 1. Write a program that checks if a given number is even or odd.
// function check(n){
//     if (n%2==0){
//         return ("even")
//     }
//     else{
//         return ("odd")
//     }
// }
// console.log(check(9))


// 2. Create a function that takes two numbers as parameters and returns the larger one.
// function larger(a,b){
//     if (a>b){
//         return ("a is greater")
//     }
//     else{
//         return ("b is greater")
//     }
// }
// console.log(larger(78,4))


// 3. Write a function that determines if a given year is a leap year
// function leap_year(a){
//     if (a%400==0 || a%100!=0 && a%4==0){
//         return ("leap year")
//     }
//     else{
//         return ("not leap year")
//     }
// }
// console.log(leap_year(2001));


// 4. Implement a program that checks whether a given character is a vowel or consonant.
// function check_character(x){
//     if (x=="a" || x=="e" || x=="i" || x=="o" || x=="u" || x=="A" || x=="E" || x=="I" || x=="O" || x=="U"){
//         return ("vowel")
//     }
//     else{
//         return ("constant")
//     }
// }
// console.log(check_character("A"));


// 5. Create a function that takes three numbers as input and returns the largest among them.
// let largest=(x,y,z)=>{
//     if (x>y && x>z){
//         return("x is largest")
//     }
//     else if (y>x && y>z){
//         return("y is largest")
//     }
//     else{
//         return("z is largest")
//     }
// }
// console.log(largest(2,78,4))


// 6. Write a program that checks if a given number is positive, negative, or zero.
// let check_number=(s)=>{
//     if (s>0){
//         return("positive")
//     }
//     else if (s<0){
//         return("negative")
//     }
//     else{
//         return("zero")
//     }
// }
// console.log(check_number(-33))


// 7. Implement a function that calculates the grade of a student based on their score.
// let grade=(score)=>{
//     if (score >= 90) {
//         return("A")
//     } else if (score >= 80) {
//         return("B")
//     } else if (score >= 70) {
//       return("C")
//     } else if (score >= 60) {
//       return("D")
//     } else {
//         return("E")
//     }
// }
// console.log(grade(65))


// 8. Create a program that determines if a given string is a palindrome.
// let palindrome=(str)=>{
//     let s=str;
//     let rev="";
//     for (let i=str.length-1; i>=0; i--){
//         rev+=str[i]
//     }
//     if (s===rev){
//         return "yes";
//     }
//     else{
//         return "no"
//     }
// }
// console.log(palindrome("madam"))


// 9. Write a function that checks whether a person is eligible to vote based on their age.
// let eligible=(age)=>{
//     if (age>=18){
//         return "eligible for voting"
//     }
//     else{
//         return "not eligible"
//     }
// }
// console.log(eligible(3))


// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
// let sides=(a,b,c)=>{
//     if (a==b & b==c & c==a){
//         return "equilateral triangle"
//     }
//     else if  (a==b || b==c ||c==a){
//         return "isoscales triangle"
//     }
//     else {
//         return "scalene triangle"
//     }
    
// }
// console.log(sides(6,9,3))






// QUESTION NUMBER 1
// Given length and breadth of a rectangle, return the area of the rectangle.
// let area=(l,b)=>{
//     let a=l*b
//     return(a)
// }
// console.log(area(2,3))


// QUESTION NUMBER 2
// Take a number and print the square of the number.
// let square=(n)=>{
//     return (n**2)
// }   
// console.log(square(5))


// QUESTION NUMBER 3
// Take two numbers and only print the integer part when a is divided by b.
// let integer_part=(x,y)=>{
//     let a=x/y
//     let b=a/10
//     return b
// }
// console.log(integer_part(3,10))


// QUESTION NUMBER 4
// Take a number and print out the last digit of the number.
// let last_igit=(c)=>{
//     a=c%10
//     return a
// }
// console.log(last_igit(123))


// QUESTION NUMBER 5
// Take a number and find the cube of that number.
// let cube=(x)=>{
//     return (x**3)
// }
// console.log(cube(3))


// QUESTION NUMBER 6
// Take a 3 digit number and print the reverse of that number. Ex - 235 = 532
// let reverse=(m)=>{
//     let rev=0
//     while (m>0){
//         rev=rev*10+(m%10)
//         m=Math.floor(m/10)
//     }  
//     return rev  
// }
// console.log(reverse(123))


// QUESTION NUMBER 7
// Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7
// let first_digit=(num)=>{
//     let string=num.toString();
//     let first=string.charAt(0)
//     let first_digit=parseInt(first)
//     return first_digit
// }
// console.log(first_digit(723))


// QUESTION NUMBER 8
// Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
// let first_digit = (num) => {
//     let string = num.toString();
//     let first = parseInt(string.charAt(0)); 
//     let last = parseInt(string.charAt(string.length - 1));
//     return first + last;
// };
// console.log(first_digit(723)); 


// QUESTION NUMBER 9
// Take salary of five employees and print the average salary of all the employees.
// let average_emp=(a,b,c,d,e)=>{
//     let emp=(a+b+c+d+e)/5
//     return emp
// }
// console.log(average_emp(12,34,67,89,43))


// QUESTION NUMBER 10
// Take two numbers and swap them. Ex - a = 10, b=5; => a=5, b=10;
// let swap=(a,b)=>{
//    let x=a 
//    a=b
//    b=x
//    return [a,b]
// }
// console.log(swap(6,7))