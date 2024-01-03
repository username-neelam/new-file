//let list = ["milk","cheeese"];
  //  list[1] = "mayo";
//console.log(list);

//console.log(list);
//list[list.length] = "mayo";
//console.log(list);
//creating array
//to make empty array
//let people =  [];
//console.log( people )
//an array of string

//let people = ["manish","ravi","ram"]
//console.log(people)
//console.log(people.length);
//ARRAY METHOD
//PUSH METHOD - ADD TO EnD
//let people = ["manish","ravi","ram"]
//people.push("sonu")
//console.log(people)
//let man = people.push("sonu");
//console.log(man);

// POP - REMOVE TO END
//let people = ["manish","ravi","ram"]
//console.log(people.pop( ))
//shift and unshift
//let people = ["manish","ravi","ram"]
//people.unshift()
//console.log(people);

//console.log(people.unshift("monu"));
//console.log(people)
//CONCAT -MERGE
//let num1 = ["a","b","c"]
//let num2 = ["d","e","f"]
//console.log(num1.concat(num2));
//INCLUDEs
//let name = ["manish","ravi","ram","shyam"]

//console.log(name.includes("rajat"));
//indexOf (ells position)
//let name = ["manish","ravi","ram","shyam"]
//console.log(name.indexOf("ravi"));
 //reverse
 //let name = ["manish","ravi","ram","shyam"]
 //console.log(name.reverse())
// slice
//let name = ["manish","ravi","ram","shyam"]


//console.log(name.slice(0,2));
//splice
/*let name = ["manish","ravi","ram","shyam"]
let i = 0


for (i=0;i<=name.length;i++){
if(i===2){
console.log("print the name",name[i])
}*/
//console.log(name)

//console.log(name.splice(2,3,"monu"));
//let element = ["m","n","o","p","y"]
//console.log(element.splice(1,2,"h"));
//Sorting
//let name = ["manish","ravi","ram","shyam"]
//console.log(name.sort());
//***let number = [0,1,88,65,10000];
//console.log(number.sort());
//IDEA of reference

/*let fruit = "orange"
color =fruit
console.log(color);
 fruit = "papaya"
 console.log(fruit);
 console.log(color);*/
 //CONSTT ARRAY
 //const name = "neelam"
 //console.log(name);
 //name = "heena" //cannt do that but in array
 //const color = ["brown","black","blue","red"]
 //console.log(color.push("pink"))
 //NESTED ARRAY****
 /*let animals = [
     ["hen" ,"cock"] 
 ["peahen","peacock"]
 ["horse","mare"] ];
 console.log(animals);
 /*let people = [ "neelam", "heena","kirti","kunal"]
 let person = people.push("nishu");
 console.log(people)*/

//PROGRAM TO CHECK WHETHER IT IS ARRAY OR NOT'
/*let x = ['a','s','l'];
console.log(typeof x)*/
//WRITE A PROGRAM TO ADD A RANDOM NAME TO AN ARRAY from last
//let name = ["manish","kirti","payal","kunal"]
  // name.push("ravi")
   //console.log(name);
   //program to join(add) all elements of an array into string;red , green ,wite ,black
/*let colors = ["red","green","white","black"]
   
  console.log( colors.join('+'));*/
  //(5,8,9,90,78) creates dashes btween 
  //let num = [5,8,9,90,78]
  //console.log(num.join('-'));

  //Write a JavaScript program that accepts a string as 
  //input and swaps the case of each character
   //For example if you input 'The Quick Brown Fox'
    //the output should be 'tHE qUICK bROWN fOX'
/* let letters = ("The Quick Brown Fox")
letters.toLowerCase('T','Q','B','F');
   console.log (letters.toLowerCase('T','Q','B','F')(letters.toUpperCase('h','e','u','i','c','k','r','o','w','n','o','x')))*/
    /*let sum = 0
    let arr = [5,6,9]
    for(i=0;i<arr.length;i++){
      sum+=i
    console.log("avg is"+sum/arr.length)
    
    }*/
    
   //objects
/*let properties = {
  name  : "neelam",
  age   :  21 ,
  nickname : "heena",
}
console.log(properties);*/
 
/*let num = {
  12 : "twelve",
  2 :  "two"
}
let no = 12
console.log(num[no])*/

/*let arr = [6,8,9]
let sum = 0
for(i=0;i<arr.length;i++){
  sum +=arr[i]
  
}
console.log("sum of all",sum);*/

/*let arr= [9,8]
let sum = 0

    for(i=0;i<arr.length;i++){
      
      sum+=arr[i]
      //let avg = sum/arr.length
   
   
    }
    console.log("avg is",sum/arr.length);*/
    
    /*let array = [2,4,6,8,]
    let max = array[0]
    for(let i = 0;i<array.length;i++){
      if(max>array[i]){
        max = array[i]
      }
      console.log("max value" + max)
    }*/
     /*let array = [6,8,4,5]
     let num = Math.min(...array)
     console.log(num)*/
     /*let array = [6,8,4,5]
     console.log(Math.max(...array));*/
     //let num = [6,8,77,46];
     
     //console.log(num.sort()])

     /*let data = [12,46,79,80,98]
     let num = 80
     let item = undefined
     for(let i=0;i<data.length;i++){
      if(data[i]===num){
       i = item
       
      }
      console.log(item);
    }*/

    /*let name = ["arti","shivam","parth"];
    //let people = name.reverse()
    console.log(name.reverse());*/

    /*let num1 = ["a","b","c"]
    let num2 = ["d","e","f"]
console.log(num1.concat(num2));*/
/*let arr =[1,2,3,4,5,6,7]
   r = 2
  
   for(let i=0;i<arr.length;i++){
   
    //(i+2%arr.length){
      
    }

  }*/

  //INSERTION
    /*let data = [2,4,5,8,9]
    let newData = 18
    let position = 2
    for(i = data.length;i>=0;i--){
      if(i>=position){
      }
        data[i+1]=data[i];
        if(i===position){
          data[i]=newData

        }
        console.log(data);
      }*/

      //DELETION
    /*let data = [3,6,8,15,29,78];
    let pos = 3;
    for(i=pos;i<=data.length;i++){
      data[i]=data[i+1];
    }
      console.log(data)*/
      
      /*let data = [4,6,8,56,78,80];
      let position = 3
      for(i=3;i<=data.length;i++){
        data[i] = data[i+1];

      }
      data.length = data.length-1
      console.log(data);*/
      //double by using map
//  let arr = [3,4,6.7,9];
// // function double(x) {
// //   return x*2
// // }
// //  let result = arr.map(double)
// //   console.log(result);
// let result = arr.map((x) =>  x*2)
//   console.log(result);
// let arr = [2,4,14,5,18,46,7]
// function odd(x){
//    return x%2!==0
  
// }
//   let result = arr.filter(odd)
//   console.log(result);

// let arr = [2,4,14,5,18,46,7]

//   let result = arr.filter((x) => x%2==0) 
//   console.log(result);
