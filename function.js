
/*function greet(name){
    console.log("hello"+ " " + name + " " + "how are you ?")
}
greet("shivam");*/



/*function greet(call){
    console.log("hey"+" " + call )

}
greet("there")*/

//ADD
/*function add (a,b){
    console.log(a+b);
}
add(12,34)
add(34,56)*/

/*function add(a,b){
   return a+b
}
let a = 23
let b = 30
 let result = a+b
 console.log("sum of numbers",result);*/

 /*function num(a,b){
    return a*b
 }

   let a = 20
   let b = 10
   let product = a*b
   console.log("product of all", product);*/

   
//functiion scope
/*let bird = "mandarian duck"
function birdwatch(){
    let bird = "golden pheasant"
   // console.log(bird)
}
birdwatch();
console.log(bird);*/

//BLOCK SCOPE
/*if (true){
    let animal = "horse"
   // console.log(animal)//excute (it happns only in case of let and const)
}
    console.log(animal)//won excute*/

  //BUT IN VAR CASE
  /*if(true){
    var bird = ("sparrow")
   // console.log(bird);
  }
  console.log(bird);*/  // it will execute

//LEXICAL SCOPE

/*function outer(){
    let name = "parth"
    function inner(){
        let name = "aashu"
        console.log(name)
    
    function extrainner(){
      let name = "dev"
      console.log(name)
    }
  outer()
}
}*/

//FUNCTION EXPRESSION in this another syntex use as to define a function
//function add(a,b){
//return a*b;
//}

/*const sum = function(a,b){
  return a+b;

}
let a = 12
let b = 2
let count = a+b
console.log("print",count)*/

//HOF accept function as argument and return a function
/*function calltwice(fun){
  fun()
  fun()
}
function greet(heloo){
  //console.log("heyyyy");
greet()


}
//calltwice(greet);

function speak(action,num){

}
speak(greet,13);*/

//HOISTING
//var name ="parth"
/*console.log(name)
var name ="parth"
console.log(name)*/

/*console.log(name)
let name ="parth"
console.log(name)*/

/*person()
function person (){
  console.log("parth");
}*/

//BUT IN CASE OF FUNCTION EXPRESSION
/*person()
let person = function(){
console.log("parth")
}*/   //an error occured

// Write a function that returns the square of a number
/*function square(num){
  return num*num
} 

console.log(square(4));*/

//Write a function to convert Celsius to Fahrenheit

/*function Fahrenheit(Celsius){
  return (Celsius*9/5)+32
}
console.log(Fahrenheit(32));*/

//Write a function to find the area of a given Rectangle
 /*function area(length,breadth){
 return length*breadth
 }
 console.log("arae of rectangle",area(6,8));*/

//Write a function to find the area and perimeter of a Circle

/*function perimeter(radius){
return 2*Math.PI*radius
}
console.log(perimeter(12));*/
//area
/*function area(rad){
  return Math.PI*rad*rad
}
console.log(area(6));*/

//Write a function to reverse a number
// Count number of Vowels in String
/*function vowel(str){
   let count = 0
for(let i=0;i<str.length;i++){
  if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){//charAT BASICALLY FIND CHARACTER 
  

 count++
  }
}
return count
}
console.log(vowel("neelam"));*/

/*function check(str){
  for(let i=0;i<str.length;i++){
   // if(str.charAt(i)!=str.charAt(str.length-i-1))
    if(str.chartAT(i) == str.chartAt(str.length-i-1)){
      return true;
    }
  }
    return false;
  
}
console.log( check ,("madam"))*/

//Write a function to generate a random number
/*function random(num){
return Math.random()
}
console.log(random())*/


/*function fac(num) {
  if(num==1){
    return 1; // 
  }
  if(num==0 || num<0){
    return 0; // 
  }
  return num*fac(num-1);//n*(n-1).....sson num
}
console.log(fac(10));*/

//CALLBACK function used as a parameter
/*function greet(){
  console.log("heyy");
}
function add(a,b,callback){
  
  console.log(a+b)
  callback()
}
add(2,5,greet)*/


//MAP
/*let a =[2,3,6]
let b = a.map(function(val){
   return val*3
})

console.log(b);*/



//for each//doesnot return aaray
/*let arr = [2,3,6]
arr.forEach(function(value,index){
 // return val*2
  console.log(value,index);
}) 
//console.log(newarr);*/

//array reduce//define an array in single value
// let arr = [2,6,8,9]
// let arr1 = arr.reduce(function(acc,curr){
//   return acc+curr
// })
// console.log(arr1);

//arrow
/*let num = () => console.log(23);
num()*/

//.FIND
/*let name = ["parth","shiv","lucky"]
let fname = name.find(person)
function person(arr){
  return arr == "harry";
}
console.log(fname)*

/*let name = ["parth","shiv","lucky"]
let fname = name.find(person)
function person(arr){
  return arr == "shiv";
}
console.log(fname)*/

/*let name = ["parth","shiv","lucky"]
let fname = name.findIndex(person)
function person(arr){
  return arr == "shiv";
}
console.log(fname);*/

//filter
// let a = [3,4,6,8,12,14,16]
// let b = a.filter((val,index,check) => check)
// //function val(checkval){
//   //return checkval < 10
// //}
// console.log(b)

//every
/*let name = ["dog","dig","log","lag","bag"]
let things = name.every(val)
function val(checkvalue){
  return name => name[o] == "d"
}
console.log(name)*/

//some

/*let name = [4,6,8,10,12]
let things = name.some(val)
function val(checkvalue){
  return checkvalue < 5
}
console.log(things)*/

/*let name = [4,6,8,10,12]
let things = name.every(val)
function val(checkvalue){
  return checkvalue < 5
}
console.log(things)*/

//arrow
//let add = (a,b) => a+b;console.log(add(6,8))
//DEFAULT PARAMETER
/*function greet (msg = "hey"){
  console.log(msg)
}
greet()*/

//SPREAD add oldarray in new array
/*let arr = [2,4,34,56,66]
let arr1 = [...arr,7,8,9]
console.log(arr1)*/
 //spread object
/*let pet = {
  animal : "dog",
  lifespan : 15
}
 let wildanimal = {
  animal1 : "tiger"

 }

let domestic = {...pet,
reproduction : "sexual"
, ...pet,wildanimal
}
console.log(domestic)*/

//destructing array
/*let name = ["niya","jiya","riya","simi"]
let [a,b,c,d] = name;
console.log(a)
console.log(b)
console.log(c)
console.log(d)*/

//let text = "person"
/*function val(){
  //console.log(text)
  let text = "check"
  console.log(text)
}
val();*/

/*function person(){
  //let val = "hello"//will execute
  console.log(val)
}
person();
//let val = "hello"//error ,outside function*/
 
/*if(true) {
  let val = "string"
  console.log(val)

 }*/

 /*if(true) {
  let val = "string"
  console.log(val)
 }
 console.log(val)*/
//but in case of variable var

 /*if(true) {
  var val = "string"
  //console.log(val)
 }
 console.log(val)*/

 // lexical scope //it can access var in same scope or outside (parent var include)

 /*let a = 10; 

let func = function (){ // outermost function
    let b = 20;
    console.log( a, b);
    let innerFunc= function (){ // innermost function
        let c = 30;
        console.log( a, b, c);
    }
    innerFunc();
    //return;
    func(); //function call
console.log( a);*/


//function expression function used as variable
/*let func = function(){
  console.log("hello")
}
 func();*/

 //hof
/*function abc(){
  console.log("print value")
}

function val(func){
 console.log("print number")
 func()
}

val(abc);*/

/*function callbackFunction(){
  console.log('I am  a callback function');
}


function higherOrderFunction(func){
  console.log('I am higher order function')
  func()
}

higherOrderFunction(callbackFunction);*/


//return
 /*function val (){
  console.log("return func 1")
 }
   function  val1(){
    console.log("retun func 2")
    return val()
   }
    //val1(val);*/


    /*function add (a,b){
      return a+b
    }
    function sub(a,b){
      return a-b
    }
    function mul(a,b){
      return a*b
    }
    function div(a,b){
      return a/b
    }
    function cal(a,b,check){
    return  check(a,b)
    }
    console.log(cal(12,6,add));
    console.log(cal(12,6,sub));
    console.log(cal(12,6,mul));
    console.log(cal(12,6,div));
//hoisting
/*var a = 4;

function greet() {
    b = 'hello';
    console.log(b); 
    var b ;
}

greet(); 
//console.log(b);//error b notdefined*/

//for each//caals function for each element



//map //new array

/*let a =[9,3.8,10]
let b = a.map(function(val){
   return val*3
})

console.log(b);*/

//arrow
/*let x = function(x, y) {//nrml function
  return x * y;
}*/
/*let num = (a,b) => a+b ;console.log(2+3);
num()*/

/*let greet = x => console.log(x);
greet(); */
//find
/*let num = [3,5,7,8.10] //excute until condition wont false
  let item = num.find(val)
  function val(find){
    return find  < 5
  }
  console.log(item)
  //filter
  /*let age = [32, 33, 16, 40];
let result = age.filter(checkval);

function checkval(age) {
  return age >= 18;
}
console.log(result)*/

//every
/*let name = ["dog","dig","log","lag","bag"]
let things = name.every(val)
function val(checkvalue){
  return name => name[o] == "d"
}
console.log(things)*/

//some

/*let name = [4,6,8,10,12]
let things = name.some(val)
function val(checkvalue){
  return checkvalue < 5
}
console.log(things)*/

//reduce ==simple value
/*let a =[4,5,7,9]
function val(x,y){
  return x+y
}
let arr = a.reduce(val)


console.log(arr);*/
//spread

/*let arr = [2,4,34,56,66]
let arr1 = [...arr,7,8,9,...arr]
console.log(arr1)*/

//spread object
/*let pet = {
  animal : "dog",
  lifespan : 15
}
 let wildanimal = {
  animal1 : "tiger"

 }

let domestic = {...pet,
reproduction : "sexual"
, ...pet,...wildanimal
}
console.log(domestic)*/

//destructing array extracting multiple value stored in objec array
/*let name = ["niya","jiya","riya","simi"]
let [a,b,c,d] = name;
console.log(a)
console.log(b)
console.log(c)
console.log(d)*/
//for each
/*const num =[3,5,7,9]
 num.forEach(func)
function func(index,item){
console.log(index,item);
}*/
 
//reduce
// let numbers = [0,1,1,2,3,5,8];
//  let arr = numbers.reduce((a,b)=> a +b)
//  if (arr == 20){
//   console.log("this is fibonacci")
//  }else{
//   console.log("this is not a fibonacci")
//  }
// // function func(x,y){
    
// //     return x-y
// // }
// console.log(arr);


//hof
/*function abc(){
  console.log("print value")
}
function val(func){
 console.log("print number")
 func() 
}
val(abc);*/
//callback
function add (a,b){
      return a+b
    }
    function sub(a,b){
      return a-b
    }
    function mul(a,b){
      return a*b
    }
    function div(a,b){
      return a/b
    }
    function cal(a,b,callback){
    return  callback(a,b)
    }
    console.log(cal(12,6,add));
    console.log(cal(12,6,sub));
    console.log(cal(12,6,mul));
    console.log(cal(12,6,div));
//hof
/*function call(){
  console.log("hey")
}
 function highorder(func){
  func()
 }
highorder(call)//function as an argument*/
/*function sayname(name){
  name()
  name()
}
function callmyname(){
  console.log("hello world")
}
function val(item,num){
 
  for(let i=0;i<num;i++){
    item()
  }
}
  

val(callmyname,13);*/

/*let a =[3,4,6]
 a.forEach(val)
function val(index,item){
  if(item ==2){
  console.log(index);
  }
}*/
 /*let a =[4,7,9]
 let b = a.map(arr => arr*3) 
 console.log(b);*/

 /*const numbers = [1, 2, 3];

// Callback function
const callback = (num) => {
  console.log(num * 2);
};

// forEach takes the callback function and 
calls it for each element in the array
numbers.forEach(callback);*/
 
//  let n=5
// for(let i=1;i<=n;i++){
//    let str = ""
   
//   for(let j=1;j<=i;j++){
//      str += j
//   }

//   console.log(str);
// }

// function fibonacci(n) {
//   const series = [0, 1];

//   for (let i = 2; i < n; i++) {
//     const nextNumber = series[i - 1] + series[i - 2];
//     series.push(nextNumber);
//   }

//   return series;
// }

// // Example: Generate Fibonacci series with 10 numbers
// const result = fibonacci(10);
// console.log(result);









































































































































































































    


