
/*let num = 25
let count =0
for(let i =0;i<=num;i++){
    if(num%i==0){
        count+=1
    }
}
if(count==2){
    console.log("this is a prime num",num)
}
else{
    console.log("not a prime num",num)
}*/

//fibnocci
/*let a =0
let b = 1
let num = 20


for(let i=0;i<=num;i++){
    val = a+b

console.log(val)
a=b
b=val
}

//Program to find the factorial of a number using a for loop:
/*let fac=1
let num=20
for(let i =1;i<=num;i++){
    console.log("fac is",fac)
  
    fac=fac*i
    
  
}*/
//Program to check for palindromes:
/*let string = "maidhm"
let count = 0
for(let i =0;i<=string.length/2;i++){
    if(string.length[i]==string.length-1[i]){
        count+=1
    }   
    }
    if(count==1){
        console.log("pallindrome",string)
    }
    else{
        console.log("not a pallindrome",string)
    }*/
  //let arr = ['h','i','n','d','i']
   //console.log(arr.reverse(arr));

   //nested
/*1111
2222
3333
4444*/

/*for(let i= 1;i<=4;i++){//outer loop
    let string =" "

for(let j =1;j<=4;j++){//inner loop
    string+=i
}
console.log(string);
}*/

/*square
for(let i= 1;i<=4;i++){//outer loop
    let string =" "

for(let j =1;j<=4;j++){//inner loop
    string+="*"
}
console.log(string);
}*/
/*right angle triangle
for(i=1;i<=5;i++){
    let string="  "
    
    for(j=1;j<=i;j++){
        
        string += "*"

    }
    console.log(string) 
}*/

//inverted triangle

//let string = " "
/*for(let i=1;i<=5;i++){
    let string = " "
    for(let j=5;j>=i;j--){
    string+="*"
    }
   console.log(string);
}*/
 //inverted right angled triangle
 /*let n = 5
 //let string = ""
 for(let i=1;i<=n;i++){
    let string = ""
    for(let j=i;j<=n;j++){
       string+="*"
 }
 console.log(string);
}*/
//right angled/_\
   /*let n=5
   for(let i=1;i<=n;i++){
    let str =""
    for(let j=1;j<=n;j++){
        if (j<=n-i){
            str+="";
         } else{
               str+="*";

            }
        }
        console.log(str);
    }*/
    
//mirror image of right angld triangle
/*let n=5
for(let i=1;i<=n;i++){
   let str =' ';
   for(let j=1;j<=n;j++){                              
    if(j<=n-i){
        str+=' ';
    }
    else{
        str+='*';
    }

}    
   
   console.log(str);
}*/
   //pyramid
/*let n = 5;
for (let i = 1; i <= n; i++) {
    let string = "";
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  
  console.log(string);
}*/

//square pattern
/*let n = 5
for(let i=0;i<n;i++){
    let str = ''
for(let j=0;j<n;j++){
    str+='*'
}    

  console.log(str);
}*/
//hollow square
/*let n =5
for(let i=1;i<=n;i++){
    let str ='';
   // console.log(str)
 for(let j=1;j<=n;j++){
if(i===1||i===n||j===1||j===n){
    str+='*';
}
else{
    str+=' ';
}
 }
console.log(str);
 
}*/
// inverted half pyramidPattern in Javascript
/*let n=5
for(i=n;i>=1;i--){
    let str='';
 for(j=1;j<=i;j++){
    str+='*';
 }   
 console.log(str);
}*/
//right angled
/*let n =5
for(i=1;i<=n;i++){
    let str ='';
for(j=1;j<=n;j++){
  if(j<=n-i){
    str+=' ';
  }
  else{
    str+='*'
  }
}  
   console.log(str);  
}*/
//pyramid
/*let n=5
for (let i = 1; i <= n; i++) {
    let string = "";
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  console.log(string);
}*/

//diamond
// let n=5
// for (let i = 1; i <= n; i++) {
//     let str= "";
//   for (let j = 1; j <= n - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     str += "*";
//   }
//   console.log(str);
// }
// for(let i=n;i>=1;i--){
//   let str ="";
//   for(let j=1;j<=n-i;j++){
//     str+=" ";
//   }
//   for(let k=1;k<=2*i-1;k++){
//     str+="*";
//   }

//   console.log(str);
//   }
//inverted p
/*let n =5
for(let i=n;i>=1;i--){
  let str ="";
  for(let j=1;j<=n-i;j++){
    str+=" ";
  }
  for(let k=1;k<=2*i-1;k++){
    str+="*";
  }

  console.log(str);
}*/



//rhombus
/*let n =5
for(let i =1;i<=n;i++){
    let str ='';
for(let j=1;j<=n-i;j++){
    str+=' ';
}
for(let j=1;j<=5;j++){
    str+='*';
}

console.log(str);
}*/

//pascal
/*let n =6
for(let i=1;i<=n;i++){
  let str ="";
for(let j=1;j<=i;j++){
  str+="*";
}  
console.log(str);
}
n=6
for(let i=n;i>=1;i--){
  let str="*"
  for(let j=1;j<=i;j++){
    str+="*"
  }
  console.log(str);
}*/
//hourglass
/*let n=5
for(let i=n;i>=1;i--){
  let str ="";
for(let j=1;j<=n-i;j++){
  str+=" "
}   
for(k=1;k<=2*i-1;k++){
  str+=("*")
}
console.log(str);
}
n=5
for(let i=2;i<=n;i++){
   let str ="";
 for(let j=1;j<=n-i;j++){
  str+=" "
 }   
 for(let k=1;k<=2*i-1;k++){
    str+="*"
 }
 console.log(str);

}*/
//map
// let arr = [4,6,7,8]
//  let result = arr.forEach((item,index) => console.log(item,index))
 
// add = (a,b) => a+b 
  
// function sub(a,b){
//   return a-b
// }
// function result(a,b,cb){
//    return cb (a,b)
// }
// console.log(result(6,3,add));
// console.log(result(6,3,sub));

// let arr = [3,5,7,9]
// function x(val){
//   return val*2
// }
// let result = arr.map(x)
// console.log(result);
// let arr = [4,5,7,9,10,12]
// function odd(val){
//   return val>3
// }
// let output = arr.filter(odd)
// console.log(output)
// let arr = [4,6,8,9]
// function val(a,b){
//   return a+b
// }
// let output = arr.reduce(val)
// console.log(output);
//1.for loop (i have to find the total length of given array)
//2 then apply if condtion of given question
//3 sum of total
// let arr = [2,3,4,6,7,11,13,15,14]
// for(let i =0;i<arr.length;i++){
//   let count = 0
//   for(let j=1;j<=arr[i];j++){
//     if(arr[i]%j==0){
//       count+=1
//     }
//   }

// if(count==2){
//   console.log("prime num",arr[i])
// }else{
//   console.log("not prime",arr[i])
// }
// }
 
  
  //  let num = 10
  //  let count = 0
  //  for(let i=1;i<=10;i++){
  //   if(num%i==0){
  //       count+=1
  //   }
  //   }
  //  if(count==2){
  //      console.log("this is a prime number",num)
  //  }
  //  else{
  //    console.log("this is not a prime number",num)
  //  }
  //Program to display numbers from 1 to 5 using a while loop:
  // var i=1
  // var n =5
  // while(i<=n){
  //   console.log(i);
  //   i++
  // }
 // Program to calculate the sum of numbers from 1 to 10 using a while loop:
  //  var n =10
  //  var i =1
  //  var sum = 0
  
  //  while(i<=n){
  //   sum+=i
  //   i++
  //  }
  //  console.log(sum)
  //Program to print even numbers between 1 and 20 using a while loop:
// var i =1
// var n =20
// while(i<=20){
//   if(i%2==0){
//   console.log("even num",i);
//   }else{
//     console.log("odd num",i)
//   }

//     i++
// }
//Program to find the factorial of a number using a while loop:
// var n=5
// var i =1
// var fac = 1
// while (i<=n){
//   fac*=i
//   i++
// }
// console.log(fac);
// Program to reverse a given number using a while loop:
// var n=1
// var i =5
// while(i>=n){
//   console.log(i);
//   i--
// }
//: Program to display numbers from 1 to 5 using a do-while
// var i=1
// var n=5
// do{
//   console.log(i)
//   i++
// }
// while(i<=5){
// }
// Program to calculate the sum of numbers from 1 to 10 using a do-while loop
// var i =1
// var n =10
// var sum =0
// do{
//   // console.log(sum)
//   sum+=i
//   i++

// }
//   while(i<=10) {
//   }
//   console.log(sum)
//Program to find the factorial of a number using a do-while loop:
// let i =1
// let fac =1
// let n = 5
// do{

//   fac*=i
//   i++
//  //console.log(fac)

// }
// while(i<=n){

// }
// console.log(fac)
// Program to reverse a given number using a do-while loop:
// var i=5
// var n=1
// do{
//   console.log(i);
//   i--
// }
// while(i>=n){

// }
//Program to print a triangle pattern:
// let n=5
// let str = ""
// for(let i =1;i<=n;i++){
//   // let str = ""
//   //console.log(i);
//   for(let j=1;j<=i;j++){
//     str+="*"
//   }
//   console.log(str);
// }
//Program to calculate the sum of even numbers between 1 and 50:

// let n=50
// let count=0
// for(let i=1;i<=n;i++){ 
//   if(i%2==0){
//     count+=i 
// }
// console.log("even",count);
// }


//  let i=1
//  var sum = 0
//  for(i=1;i<=50;i++){
    
//     if(i%2==0){
//         sum=sum+i
//     }
//   }
//  console.log("total of even number",sum)

//: Program to find if a number is prime or not:
// let n =19
// let count = 0
// for(let i=1;i<=n;i++){
//   if(n%i==0){
//     count+=1
//   }
//   if (count==2){
//     console.log("prime num",n)
//   }
// }
// Program to print Fibonacci series:
// let n =10
// let a =0
// let b = 1
// for(let i =1;i<=n;i++){
//   result= a+b
//   a = b
//   b=result
// }
// console.log(result);

//Program to print a diamond pattern:
  //     // x(true).catch(rejection);

// let n =4
// for(let i =1;i<=n;i++){
//    let str ="";
//   for(let j=1;j<=n-i;j++){
//     str+=" ";
//   }
//     for(let k=1;k<=2*i-1;k++){
//       str+="*"
//   }
//   console.log(str);
// }

//   for(let i=1;i<=n;i++){
//     let str = ""
//     for(j=1;j<=i;j++){
//       str+=" "
//     }
//     for(k=1;k<=2*(n-i)-1;k++){
//       str+="*"
//     }
//     console.log(str);]]
//   }
    







  



 
























   
   







