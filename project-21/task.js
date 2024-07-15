// fizz buzz task no 1


function fizzBuzz(){

    for(let i =0 ; i <=100 ; i++){
      if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
      }
      else if(i%3==0){
        console.log("Fizz");
      }
      else if(i%5==0){
        console.log("Buzz");
      }
      else{
        console.log(i);
      }
    }
}
// fizzBuzz();


// palindrome task no 2
function isPalindrome(input){
  let reverse=""
  for(let i = input.length-1 ; i>=0;i-- ){
       reverse+=input[i]
  }

  if(reverse==input){
    console.log("it is a palindrome");
  }
  else {
    console.log("It is not a palindrome")
  }
}

// console.log("moon")
// isPalindrome("moon")

// console.log("moom")
// isPalindrome("moom")


//find the largest element in the array task no 3
function findLargest(arr){

  let max=-100000
  for (let i = 0 ; i < arr.length ; i++){
    if(arr[i]>max) max=arr[i]
  }
  return max
}

// let result=findLargest([1,2,4,55,3,5])
// console.log("the largest element in the array is")
// console.log(result)


//find the character occurance of a string task no 4

function findOccurance(string){
  occurance={}
  for( let i = 0 ; i < string.length;i++){
     if(occurance[string[i]]===undefined){
      occurance[string[i]]=1
     }
     else{
      occurance[string[i]]+=1
     }
     
  }
  return occurance
}

// console.log("the occurance of characters in the string hello")
// let result=findOccurance("hello");
// console.log(result)



//find the largest character in the string task no 5
function findLargestString(string){

  let max='A'
  for (let i = 0 ; i < string.length ; i++){
    if(string[i]>string) max=string[i]
  }
  return max
}

// console.log("the largest character in the string helloz")
// result=findLargestString("helloz")
// console.log(result)


//find the factorial for given number task no 6
function findFactorial(){

  let num=parseInt(prompt("Enter a number"))
  
  let fact=1
  for(let i = 1 ; i <= num ; i++){
     fact*=i;
  }
  return fact;
}

// console.log("program to find factorial of a number");
// let result=findFactorial();
// console.log(result);


//convert celsius to fahrennhiet task no 7
function fahrenheitConvertion(cel){
  return (9/5)*cel+32
}

// let result=fahrenheitConvertion(20)
// console.log("covertion of celsius to fahrenhiet")
// console.log(result);


//find the missing values in a given range
function findMissingValue(arr){

  for(let i =1 ; i < arr.length ; i++){
    if(arr[i-1]+1 !=arr[i]){
      return arr[i-1]+1
    }
  }
}
let result=findMissingValue([1,2,3,4,6])
console.log("the missing value from the array [1,2,3,4,6]")
console.log(result)
