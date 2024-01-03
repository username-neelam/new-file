//calculae area of given array
// const radius = [4,5,7]
//   const area = function (radius){
//     let output =[]
//     for(let i =0;i<radius.length;i++){
//       output.push(Math.PI * radius[i]*radius[i])
      
//     } return output
       
//     }
//       console.log(area(radius));

//       const circumference = function (radius){
//         let output =[]
//         for(let i =0;i<radius.length;i++){
//           output.push( 2*Math.PI * radius[i])
          
//         } return output
           
//         }
//           console.log(circumference(radius));

//           const diameter = function (radius){
//             let output =[]
//             for(let i =0;i<radius.length;i++){
//               output.push(2* radius[i])
              
//             } return output
               
//             }
//               console.log(diameter(radius));
//functional programming
// const radius = [4,5,7]
//   const area = function (radius){
//     return Math.PI*radius*radius
//   }
//   const circumference = function(radius){
//     return 2*Math.PI *radius
//   }
//   const diameter = function(radius){
//     return 2*radius
//    } 
//   const cal = function(radius,logic){
//     let output =[]
//     for(let i=0;i<radius.length;i++){
//         // let output =[]
//         output.push(logic(radius[i]))
        
//     }
//     return output
// }
//   console.log(cal(radius,area));
//   console.log(cal(radius,circumference));
//  console.log(cal(radius,diameter));
//execution of program
// var n =2
// function square(num){
// var ans = num*num
// return ans
// }
// var square1 = console.log(square(n));
// var square2 = console.log(square(4));
//hoisting
// var x= 4
// function getname(){
// console.log("hello world");
// }
// getname();
// console.log(x);

// getname();
// console.log(x);
// var x= 4
 //function getname(){
// console.log("hello world");
//  }
//  console.log(getname)

// getname();
// console.log(x);
// //var x= 4
// function getname(){
// console.log("hello world");
// }
//in case of arrow
//getname();//not defined cx this is not a function
// console.log(x);
// console.log(getname);
// var x= 4
// var getname = () => console.log("hello world");
//window and this
// var a = 2
// function x(){
//     var b = 2
// }
// console.log(b);

//but if i put  this
// var a = 2
// function x(){
//     var b = 2
// }
// console.log(this.b);
// console.log(a)
//    function x(){
//      var i =1
//      setTimeout(function(){
//         console.log(i);    
//       },1000);
//       console.log("hello world");
//        }
//     x();
//map
// let arr =[4,6,9]
// let a = arr.map(double)
// function double(x){
//    return x*2
// }

// //    let a = arr.map(double)
//     console.log(a);
//  let arr = [3,8,6,9]
//  function max(acc,curr){
//      acc = curr
//     return curr>acc

//  } 
//  let result = arr.map(max);
//  console.log(result);

// let arr = [
//  {firstName:"John", lastName:"Doe", age:50 },
//   {firstName:"raghav", lastName:"sharma", age:67},
//   {firstName:"ravi", lastName:"yadav", age:34},
//   {firstName:"umesh", lastName:"garg", age:53}
// ] 
// const result = arr.map((x) => x.firstName + " " + x.lastName)
   
// console.log(result)
// console.log('tut3');
// // Variables in js
// // var, let, const
// var name = 'harry';
// var channel;
// var marks = 3454;
// marks = 0;
// channel = 'CodeWithHarry'
// console.log(name, channel, marks);
// // Rules for creating JavaScript Variables
// /*
// 1. Cannot start with numbers
// 2. Can start with letter, numbers, _ or $
// 3. Are case sensitive
// */
// var city = 'Delhi';
// console.log(city);

// const ownersName = 'Hari Ram';
// // ownersName = 'Harry'; // Cannot do this (error)
// console.log(ownersName);
// const fruit = 'Orange';

// {
//  let city = 'Rampur';   
//  city = 'Kolkata';
//  console.log(city);
// }
// console.log(city);


// const arr1 = [12,23,12,53, 3];
// console.log(arr1)
// console.log(a);
// var a = 10
// console.log(a);
// var a = 1000
// console.log(a);
// console.log(a);  
// let  a = 10
// console.log(a);
// // let  a = 1000
// // console.log(a); 
// let  a = 10
// console.log(a);
//   a = 1000
// console.log(a)
//   const a = 10
// console.log(a);
//   a = 1000//type error
// console.log(a)
// let a;
// var b =1
//  a = 10

//  console.log(a);

// const a;

//  console.log(a);//misin initializer

// let a;
// console.log(a);
//arrays
// let marks = [77,88,68,79]
// marks[4] = 98
// marks[1] = 99
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks.length);
// console.log(typeof marks)
//sum of given array
//  let marks = [85,97,44,80,68]
//  let sum = 0
//  for(let i =0;i<marks.length;i++){
//     sum  += marks[i]
//  }
//  console.log(sum);
//average
// let marks = [85,97,44,80,68]
//  let sum = 0
//  for(let i =0;i<marks.length;i++){
//     sum  += marks[i]
//  }
//  let avg = sum/marks.length
//  console.log("avg is"+ " " + avg);
//given items = [300,576,456,688,900] 
//each item has 10% of find final value
// let items = [300,576,456,688,900]
// //step1 = each item / 10
// for(let i =1;i<=items.length;i++){
//     let val = items[i]/ 10
//     items[i]-=val
// }
// console.log(val);
//push=add in end
// let items = ["kurta","pant","jeans"]
// items.push("kurti")
// console.log(items);
//pop
// let items = ["kurta","pant","jeans"]
// items.pop()
// console.log(items)
//to string
// let marks= [40,66,78,88]
// marks.toString("")
// console.log(marks);
//concat
// let marks = [34,55,78]
// let items = [45,66,77]
//  let x = marks.concat(items)
//  console.log(x);
//unshift//similar to push but it add from start
// let x = [5,7,4,35]
// x.unshift(3)
// console.log(x)
//shift//remove from start
// let x = [5,7,4,35]
// x.shift(3)
// console.log(x)
//creat an array to store company
// let comp = ["bloomberg","micrsoft","uber","google","ibm","netflix"]
// //remove firts company
// // comp.shift()
// // console.log(comp);
// //remove uber and add old
// // comp.splice(2,1,"ola")
// // console.log(comp);
// //add amazon at end
// comp.push("amazon")
// console.log(comp);
//functions
// function funcname(){
//     console.log("hello world")
//     console.log("hello functions")
// } 
// funcname();
// funcname();

// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,3);
// sum(333,578);
// function sum(a,b){
//   return a+b
// }
//  let value = sum(2,3)
// console.log(value);
//arrow functions
// let result = (x,y) => {
//   console.log(x+y)
// }
// result(5,7);

// const grret = () => {
//     console.log("hello world")
//     console.log("hey")
// }
// grret();
// function vowels(x){
//     let count =0
// for(let i=0;i<x.length;i++){
//     if(x[i]=="a"||x[i]=="e"||x[i]=="i"||x[i]=="o"||x[i]=="u"){
//         count++
//     }
// }
//    console.log(count);
// }
// vowels("neelam");
// vowels("vivek");
//same with arrow
// let vowels = (x) => {
//     let count = 0
//  for(let i=0;i<x.length;i++){
//     if((x[i]=="a"||x[i]=="e"||x[i]=="i"||x[i]=="o"||x[i]=="u")){
//         count++
//  }
// }
//      console.log(count)
// }
// vowels("neelam")
//for each
// let arr = [2,3,4,5,6]
// arr.forEach(function x(val){
//     console.log(val);
// })
// let arr = [2,3,4,5,6]
//    arr.forEach((val) => {
//     console.log(val)
// })
// let arr = [2,3,4,5,6]
//    arr.forEach((val) => {
//     console.log(val*2)
// })
//map
// let arr = [2,3,4,5,6]
// arr.map(function x(val){
//     console.log(val+2)
// })
// let arr = [2,3,4,5,6]
//  let x = arr.map((val) => {
//     return val
// })
// console.log(x)
//filter
// let arr = [2,3,4,5,6]
//  let even = arr.filter((val) => {
//    return val % 2 === 0 
// }) 
//   console.log(even)
//reduce
// let arr = [2,3,4,5,6]
//   let result = arr.reduce((res,curr) => {
//      return res+curr
//  })
//  console.log(result);

// let arr = [2,3,4,5,6]
//   let result = arr.reduce((pre,curr) => {
//      return pre<curr ? pre:curr
//  })
//  console.log(result);
//filter marks of each student who score more than 80
// let marks = [56,89,98,78,96,70,99]
//  let output = marks.filter((val) => {
//      return val>90
// })
// console.log(output);
//using reduce sum of first five num
// let arr = [1,2,3,4,5]
// let output = arr.reduce((res,curr) => {
//       return res+curr
// })
// console.log(output);
//product
// let arr = [1,2,3,4,5]
// let output = arr.reduce((res,curr) => {
//       return res*curr
// })
// console.log(output);
//print even 0 to 100
// let n = 100
// for(let i = 0;i<=n;i++){
//     if(i%2==0){
//     console.log(i);
//     }
// }
//guessing num until it wount coorect
// let n =25
// let usernum = 65
// for(let i =0;i<=n;i++){
// }
//     if(n==usernum){
//     console.log("u r correct");
//     }
//     else{
//         console.log("u r wrong")
//     }
//  const fruit = "papaya"
//  switch(fruit){
//     case 1: console.log("plum");
//     break;
//     case 2:console.log("papaya");
//     break;
//     case 3:console.log("grapes");
//     break;
//     default:
//         console.log("not found")
//  }
