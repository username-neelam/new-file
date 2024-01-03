//for loop and arrays
/*let animals = ["lion","elephant","dog","tigers"];
for(let i = 0;i<animals.length;i++){
    console.log(i,animals[i]);
}*/
/*let word = ["a","p","p","o","i","t"]
for(let i = word.length;i>=0;i--){
console.log( i,word[i]);
}*/


   /*let num = 10
   let count = 0
   for( let i=1;i<=10;i++){
   if(num%i==0);
   count+=1
   }
   
   if(count==2){
    console.log("this is a prime number",num)
}
else{
  

   console.log("this is not a prime number",num)
}*/

/*let i =1
while(i<=10){
    i++
    console.log(i)

}*/


/*let i = 1
do{
    console.log(i)
    i++
}
while(i<=10){

}*/

 /*let i=1
    do{
        if(i%2==0){
            console.log("this is an even number",i);
        }
    else{
         console.log("this is a odd number",i);
 
    }
  i++
}
while(i<=10){
}*/


/*let i=0
if(i>0){
    console.log("this is a positive number ",i);
}


else if(i===0){
    console.log("this is a zero ",i);
}

else{
    console.log("this is a negative number ",i);
}*/

/*let sum =0
for(i=0;i<=10;i++){
    sum+=i

}
console.log("print",sum)*/


/*let arr = [3,-7,2]
   let product = 1
   for(i=0;i<=arr.length;i++){
    product*=arr[i]

   }
   console.log("print product",product);*/
   
    
        
    /*let string = "mom"
    let len = string.length
    let count = 0
 
    for(let i = 0;i < len/2;i++){
    
    if(string[i]!==string-1[i]){
        count+=1
    }
        
    
    
}
       if(count ==1){
        console.log( string," not  a pallindrome")
        
       }
       else{
        console.log( string," a pallindrome")
       }*/

       /*for (let i=10;i>1;i--){
        console.log(i)
       }*/

      /* let i=1
       while(i<=10){
        i++
        console.log(i);
       }*/
      /*let i = 1
      let sum = 0
      while(i<10){
        i++
        sum+=i
       
      }
      console.log("sum of number",sum)*/
   /*let i = 1
   while(i<=20){
    if(i%2==0){
        console.log("this is an even number",i);
    }
    else{
        console.log("this is an odd number",i);
    
    }
    i++
   }*/
  /*let i =0
  let fac = 0
  while(i<10){
   fac+=i
   i++
  }

console.log(fac);*/
 /*let i=10
 while(i>0){
    i--
    console.log(i)
 }*/

/*let i =0
do{
    console.log(i);
    i++
}
while(i<=5){
   
}*/

/*let i=1
let sum=0
do{
    
    sum+=i
    i++


}
while(i<=10){

}
console.log("print sum",sum)*/

/*let i =0

do{
if(i%2==0){
    console.log("even num",count)
    
}
else{
    console.log("odd num",i)
}
i++
}
while(i<=10){

}*/

/*let fac=1
for(let i=1;i<=10;i++){
    fac*=i
}
console.log("factorial are",fac);*/

/*let num = 50
let count=0
for(i=1;i<=10;i++){
}
    if(num%i==0){
      count+=0
    
if(count==2)
console.log("this is a prime num",num)
}

else{
    console.log("this is not a prime num",num)
}*/

/*let sum =0
for(i=1;i<=50;i++){
    
    if (i%2==0){
        sum+=i
    }
}
 console.log("print even num",sum);*/

 //create a JavaScript program to print tables using nested for loop.

//  let n =2
// for(let i =2;i<=2;i++){
//     let string="";
//     //console.log(i);
//     for(let j =1;j<=10;j++){
//        string+= i*j;
//        string+='\n';
//     }
// console.log(string);
// }
//triangle
// let n=5
// for(let i=1;i<=n;i++){
//     let str = "";
// for(let j =1;j<=i;j++){
//     str+="*"   
// }
//  console.log(n);
// }
// //console.log(str);
//even
//  var r = [4,6,8,9,10,24,14]
//  for(let i=0;i<=r.length;i++){
//     let str =[]
//     if(r[i]%2==0){
//        // console.log(i);
//        str+=r[i];

//     console.log(str);
//     }
// }
//callback hell
// setTimeout(() => {
//     console.log("hii")
//     setTimeout(() => {
//        console.log("heyy after 2")
//           setTimeout(() => {
//             console.log("hello executed")
//               },300 )
//         },200)

// }, 100);
//new promise
// let promise = new Promise(function(resolve, reject) {
//     resolve("I am  done");
// });
// console.log(promise);
// let promise = new Promise(function(resolve,reject){
//     reject("not done yet");
// });
// console.log(promise);
// let complete = false;
// let prom = new Promise(function(resolve,reject){
//   if(complete==true){
//     resolve("this is completed")
//   }
//   else{
//     reject("not completed yet")
//   }
// })  
// console.log(prom);

// function x(complete){
//     return new Promise (function(resolve, reject){
//      if(complete==true){
//         resolve("successfull")
//      }
//      else{
//         reject("failure")
//      }
//     }) 
    
// }
//  console.log (x(true));


// function x(complete){
//     return new Promise (function(resolve, reject){
//      if(complete==true){
//         resolve("successfull")
//      }
//      else{
//         reject("failure")
//      }
//     }) 
// }
//     function fulfil(result){
//        console.log(result)
//     }
//     function rejection(error){
//         console.log(error)
//     }
//      x(true).then(fulfil);
//      x(true).catch(rejection);
 //console.log (x(true));
 //pending
//  function x(complete){
//     return new Promise (function(resolve, reject){
//         console.log("we are fetching your data");  
      
//      if(complete==true){
//         resolve("successfull")
//      }
//      else{
//         reject("failure")
//      }
//     })
// }
// // console.log("we are fetching your data");  
//     function fulfil(result){
//        console.log(result)
//     }
//     function rejection(error){
//         console.log(error)
//     }
//      x(true).then(fulfil).catch(rejection);
    // x(true).catch(rejection);

// function x(complete){
//     return new Promise (function(resolve, reject){
//         console.log("we are fetching your data");  
//       setTimeout (function(){ if(complete){
//         resolve("successfull")
//      }
//      else{
//         reject("failure")
//      }},6000)
//     })
// }
// // console.log("we are fetching your data");  
//     function fulfil(result){
//        console.log(result)
//     }
//     function rejection(error){
//         console.log(error)
//     }
//      x(true).then(fulfil).catch(rejection);

































































 
 










   

















































