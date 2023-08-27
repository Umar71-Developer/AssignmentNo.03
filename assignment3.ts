 /*- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
 - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
 - Write a program that uses a while loop to print the first 25 integers.
 - Write a program that uses a while loop to print the first 10 even numbers.
 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.*/


 //Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
 function arr(array:number[],index:number,value:number) {
    array.splice(index,0,value);
    return array;
    
 }
  var thisarray:Number[] = [2,4,5,6,7,8,8,6,5,4,4];
  console.log(thisarray,0,560);

//   Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
console.log("solution");
  function Additem(cart:string[]) {
    cart.splice(cart.length-2,0,"sandwich")
    return cart;}
  function Removeitem(cart:string[]){
    cart.splice(cart.length-1,1);
  }
  function UpdateItem(cart:string[]){
    cart.splice(cart.length-3,1, "cake")
    return cart
  }
var cart:string[] = ["coke", "Pizza", "Burger", "Shuarma", "Zinger"]
 console.log(`Before item adding ${cart}`);
 Additem(cart);
 console.log(`After add item ${cart}`);
console.log(`Before Remove item ${cart}`);
Removeitem(cart);
console.log(`After add items${cart}`);
console.log(`Before update items${cart}`);
UpdateItem(cart);
console.log(`After Update Item ${cart}`);
//Write a program that uses a while loop to print the first 25 integers.
var index:number = 0;
while (index<=25) {
  console.log(index);
  index++
  
}
//Write a program that uses a while loop to print the first 10 even numbers.
let m:number = 1; 

 while (m<=10) {
  if (m%2==0) {
    console.log(m);
    
  }
  m++;

 }

 
//  Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number
function factorial(n:number) {
  if(n<0){
    console.log("factorial is not defined by negative number");
    
  }
  else if (n==0) {
    console.log(1);
    
  }
  else{
    var num:number = 1;
    while (n>0) {
      num +=n
      n-=1
      console.log(num);
      
      
    }
  }
}
factorial(5)

// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

var numbers:number[] = [23, 34, -34, -99, 45, 76, 50];
numbers = numbers.filter(function(x){
    return x > -1;
})
console.log(numbers);
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

let num:number = 10;
let i:number   = 1;
let sum:number= 0;
while ( i<=num) {
    sum +=i;
    i++;
}
console.log(sum);
