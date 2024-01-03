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
//     // x(true).catch(rejection);
//how to create a promise
// let getyouapen = new Promise((resolve, reject) => {
//   let prom = true
//   if(prom){
//     resolve("successful")
//   }else{
//     reject("failed")
//   }
// })
// console.log(getyouapen);
// //interaction how actuaaly it will run
// let val = true//errrrrrorrr
//  function getyouapen (cond) {
//  cond = new Promise((resolve, reject) => {

//  if (val==true){
//     resolve("successful")
//  }
//    else{
//     reject("faliure")
//    }
// })
//  }
//     function fulfil(result){
//       console.log(result);
//     }
//     function rejection(error){
//         console.log(error);
//     }
//     getyouapen(val).then(result).catch(error);
//pending
// let getapen = new Promise((resolve, reject) => {

// })
// console.log(getapen);
// let getapen = new Promise((resolve, reject) => {
//     resolve("completed")
// })
// console.log(getapen);
//** 
// let getapen = new Promise((resolve, reject) => {
//    let work = true
//    if (work ==true){
//     resolve()
//    }
//    else{
//     reject()
//    }
// });
// console.log(getapen);
//ineract code
//     let getapen = new Promise((resolve, reject) => {
//         console.log("fetching data")
//         let work = false
//         if (work ==true){
//          resolve()
//         }
//         else{
//          reject()
//         }
//     })
//    console.log( getapen.then((result) => {

//         console.log("succesfull")
//     }).catch((err) => {
//         console.log("failure")
//     }))
//     let getapen = new Promise((resolve, reject) => {
//         setTimeout(() => {

//         let work = false
//         if (work ==true){
//          resolve()
//         }
//         else{
//          reject()
//         }

//         }, 2000);
//         })
//    console.log( getapen.then((result) => {

//         console.log("succesfull")
//     }).catch((err) => {
//         console.log("failure")
//     }))
//  mypro =  new Promise((resolve, reject) => {
//         resolve("work done")
//  })
//       console.log(mypro);

// mypro =  new Promise((resolve, reject) => {
//             reject("work done")
//      })
//       console.log(mypro);

// mypro =new Promise((resolve, reject) => {
// let complete = true
// if(complete == true){
//  resolve("successful");
// }
// else{
//     reject("failed");
// }

// })
//    console.log(mypro);

// let pro = new Promise((resolve, reject) => {
//     resolve()
// })
// console.log(pro,)
// let pro = new Promise((resolve, reject) => {
//     let complete = true
//     if(complete){
//         resolve("done")
//     }else{
//         reject("not done")
//     }
// })
// console.log(pro);

//syntex of promises//if we either pass resolve nor rejected the operation would be in pending 
// const  willgetuadog = new Promise((resolve, reject) => {

// })
// console.log(willgetuadog);

//if we wont paases any value in resolve or reject it will show undefined
// const  willgetuadog = new Promise((resolve, reject) => {
//   resolve()
//   reject()
// })
// console.log(willgetuadog);
//applying condtion by taking random num
// const  willgetuadog = new Promise((resolve, reject) => {
//  const ran = Math.random()
//  if(ran<0.56){
//   resolve("operation successfull");
//  }else{
//   reject("failed");
//   }
// })
// console.log(willgetuadog);
//now willl lean how to ineract or how to run if code is resolve  or reject
// const  willgetuadog = new Promise((resolve, reject) => {
//   const ran = Math.random()
//   if(ran<0.56){
//    resolve();
//   }else{
//    reject();
//    }
//  })
//  console.log(willgetuadog.then(() => { console.log("has done")

//  }).catch(() => { console.log("not done")

//  }));
//using settimeout 
// const willgetuadog = new Promise((resolve, reject) => {
//   const ran = Math.random()
//   console.log("wait we are fetchin ur data")
//   setTimeout(() => {if(ran<0.56){
//     resolve();
//    }else{
//     reject();
//     }
//   }, 2000);
// })
//   console.log(willgetuadog.then(() => { console.log("has done")

//  }).catch(() => { console.log("not done")

//  }));
// //can also return a promise**
// const operation = () => {
//   return new Promise((resolve, reject) => {
//   const ran = Math.random()
//   setTimeout(() => {if(ran<0.56){
//     resolve();
//    }else{
//     reject();
//     }
//   }, 2000);
// })
// }
//   console.log (operation.then(() => { console.log("has done")

//     }).catch(() => { console.log("not done")

//   }));

// const servedinner = function () {
//   return new Promise((resolve, reject) => {
//     // step 1 ;p 1 ;buy grocery
//     setTimeout(() => {
//        groceryitem = ["pasta", " mix sauce", "coke"];
//       resolve(groceryitem)
//       }, 2000); 
//    }).then((recievedgroceryitem) => {
//       //step 2;p2;recieved item,we prepare pasta
//       console.log("recieved item", recievedgroceryitem)
//       return new Promise((resolve, reject) => {
//         //prepare pasta
//         setTimeout(() => {
//           if(groceryitem[0]=="pasta" && groceryitem[1]==="mix sauce" && groceryitem[2]=="coke"){
//             resolve("pasta ready")
//           }
//         }, 3000);
//       })
//     }).then((recievedpasta)  =>  {
//       //step3;p3 /pasta recieved
//       console.log("recieved pasta"+ " "+ recievedpasta)
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(recievedpasta + " "+ "ready to serve")
//         }, 2000);
//       })
//    })
// }
//  console.log(servedinner())
  
//   const servedinner = function(){
//     return new Promise((resolve, reject) => {
//     //buy grocery
//     setTimeout(() => {
//       groceryitem = ["pasta","mix sauce","coke"]
//       resolve(groceryitem)
//     }, 2000);
//   }).then((recievedgroceryitem)=>{
//     //recieved grocery then prepare pasta
//      console.log("recieved item"+ " " + recievedgroceryitem)

//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if(groceryitem[0]=="pasta" && groceryitem[1]=="mix sauce" && groceryitem[2]=="coke"){
//             resolve("pasta is ready" )
//           }
//         }, 1000);
//       }).then((recievedpasta) => {
//         //ready o serve
//            console.log("recieved pasta "+ " " + recievedpasta)
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve(recievedpasta + " " + "to serve")
//           }, 3000);
//         })
//       })
//     })
//   }
// servedinner().then((res) => {
//    console.log(res);
// } )

//   const servedinner = function(){
//   return new Promise((resolve, reject) => {
//     //buy grocery
//     setTimeout(() => {
//       groceryitem = ["pasta","mix sauce","coke"]
//       resolve(groceryitem)
//     }, 2000);
//   }).then((recievedgroceryitem)=>{
//     //recieved grocery then prepare pasta
//      console.log("recieved item"+ " " + recievedgroceryitem)
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if(groceryitem[0]=="pasta" && groceryitem[1]=="mix sauce" && groceryitem[2]=="coke"){
//             resolve("pasta is ready" )
//           }
//         }, 1000);
//       }).then((recievedpasta) => {
//         //ready o serve
//            console.log("recieved pasta "+ " " + recievedpasta)
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve(recievedpasta + " " + "to serve")
//           }, 3000);
//         })
//       }) 
//   })

// }
// servedinner().then((res) => {
//   console.log(res);
// })
 
// function createorder(){
//     return new Promise((resolve, reject) => {
//     validate = true
//     if(validate){
//       resolve(validate)
//     }
//     }).then((res) => {
//         console.log("successfull")
//     })
    
// }
// createorder().then((res) => {
//     console.log("valid")
// })


// function createorder(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         validate = true
//         if(validate){
//           resolve(validate)
//         }
 
//     }, 4000)
    
// }).then((res) => {
//     console.log("successfull")
// })
// }
// createorder().then((res) => {
//     console.log("valid")
// })

// function returnPromises() {
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("Sample Data");
//       }, 3000);
//     });
// }
// async function ExecuteFunction() {
//     var newData = "Mayank";
//     var getData = await returnPromises();
//     console.log(getData);
//     console.log(newData);
// }
  
//   ExecuteFunction()

// it will always return a promise
// async function getdata(){
//     return "hello world"
// }
//   const output =  getdata()
//    console.log(output);

//the case in which we want it returns a value
// async function getdata(){
//     return "hello world"
// }
//   const output =  getdata()
//    output.then((res) => console.log(res));

//but if we reuturn something which is already a promise hn in that case
// const p = new Promise((resolve, reject) => {
//     resolve("hello world")
// }) 
//    async function getdata() {
//     return p
    
//    }
//      const output = getdata()
//      output.then((res) => console.log(res))

//without async awai handling promise
// const p = new Promise((resolve, reject) => {
//     resolve("hello world")
// })
//  function getdata(){
//     p.then((res) => console.log(res))
//  }
//   getdata()
//with async await
//await can only  be used inside async 
// const p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     resolve("hello world")
//    },2000)
//    console.log("hey")
// })
//  async function getdata(){
//       const value = await p
//       console.log(value);
//       console.log("promise resolving")
//  }
//   getdata()

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello world")
//     },2000)
    
// })
//  function getdata(){
//     p.then((res) => console.log(res))
//     console.log("data executing");
//  }
//   getdata()

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello world")
//     },2000)
//     console.log("hey");
    
// })
//   async function getdata(){
//     const val = await p
//     console.log("data executing");
//     console.log(val)
//  }
//   getdata()

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("data resolved")
//     },5000)
//     console.log("hello world")
// })
//     console.log("hey");
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("promise resolved")
//         },1000)
//         console.log("hey");
    
// })
//   async function getdata(){
//     const val1 = await p1
//     console.log("promise executing");
//     console.log(val1)
 
//     const val2 = await p2
//     console.log("data executing");
//     console.log(val2)
//   }
//   getdata()

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("data resolved")
//     },5000)
//     console.log("hello world")
// })
//     console.log("hey");
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("promise resolved")
//         },1000)
//         console.log("hey");
    
// })
//   async function getdata(){
//     const val1 = await p1
//     console.log("promise executing");
//     console.log(val1)
 
//     const val2 = await p2
//     console.log("data executing");
//     console.log(val2)
//   }
//   getdata()
 
//promise api's 
//promise.all
//in promise.all it waill print all the promises which is in given array after three second in form of new array
//    const p1 = new Promise((resolve, reject) => {
//       console.log("p1 executed")
//      setTimeout(() =>   resolve ("promise 1 resolve"), 1000);
//  })
//  const p2 = new Promise((resolve, reject) => {
//    console.log("p2 executed")
//     setTimeout(() => resolve ("promise 2 resolve") , 5000);
// })
// const p3 = new Promise((resolve, reject) => {
//    console.log("p3 executed")
//     setTimeout(() =>   resolve ("promise 3 resolve"), 2000);
// })
//   Promise.all([p1,p2,p3]).then(res => { 
//    console.log(res);
//  })
//if any one of them promise is rejected it will throw error as soon as it reach at rejection promise second
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() =>   resolve ("promise 1 rejected"), 1000);
//   })
//   const p2 = new Promise((resolve, reject) => {
//      setTimeout(() => reject ("promise 2 reject") , 2000);
//  })
//  const p3 = new Promise((resolve, reject) => {
//      setTimeout(() =>  resolve ("promise 3 resolve"), 5000);
//  })
//  Promise.all([p1,p2,p3]).then((res) => { 
//     console.log(res);
//   }).catch((err) => {
//   console.error(err);
//  });
//promise.allsettled
//if we want that result of promise which was succeed  will print even reject is there it will settled all the
// promises in 5 sec
// const p1 = new Promise((resolve, reject) => {
//      setTimeout(() => reject ("promise 1 resolve"), 5000);
//  })
//  const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve ("promise 2 resolve") , 2000);
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() =>   resolve ("promise 3 resolve"), 1000);
// })
// Promise.allSettled([p1,p2,p3]).then((res) => { 
//    console.log(res);
//  }).catch((err) => {
//    console.log(err);
//  });

// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => reject ("promise 1 failed"), 1000);
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject ("promise 2 failed") , 2000);
// })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() =>   resolve ("promise 3 resolve"), 3000);
// })
// Promise.allSettled([p1,p2,p3]).then((res) => { 
//  console.log(res);
// }).catch((err) => {
//  console.log(err);
// });
//promise.race = whichver will resoove first it will execute
//    const p1 = new Promise((resolve, reject) => {
//      setTimeout(() =>   resolve ("promise 1 resolve"), 2000);
//    })
//    const p2 = new Promise((resolve, reject) => {
//       setTimeout(() => resolve ("promise 2 resolve") , 2000);
//   })
//   const p3 = new Promise((resolve, reject) => {
//       setTimeout(() =>   resolve ("promise 3 resolve"), 5000);
//   })
//   Promise.race([p1,p2,p3]).then((res) => { 
//      console.log(res);
//    }).catch((err) => {
//      console.log(err);
//    });
   //rejection case lesast time promise will execute whether it is rsolve or reject
   //or can say it will give value for first settled promise
//    const p1 = new Promise((resolve, reject) => {
//      setTimeout(() =>   resolve ("promise 1 resolve"), 5000);
//    })
//    const p2 = new Promise((resolve, reject) => {
//       setTimeout(() => resolve ("promise 2 resolve") , 2000);
//   })
//   const p3 = new Promise((resolve, reject) => {
//       setTimeout(() =>   reject ("promise 3 reject"), 1000);
//   })
//   Promise.race([p1,p2,p3]).then((res) => { 
//      console.log(res);
//    }).catch((err) => {
//      console.log(err);
//    });

//promise.any=it wil wait for first promise to get resolve
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => resolve ("promise 1 resolve"), 5000);
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve ("promise 2 resolve") , 2000);
// })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() =>  resolve ("promise 3 resolve"), 1000);
// })
// Promise.any([p1,p2,p3]).then((res) => { 
//  console.log(res);
// })
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => resolve ("promise 1 resolve"), 500);
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve ("promise 2 resolve") , 1000);
// })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve ("promise 3 resolve"), 3000);
// })
// Promise.any([p1,p2,p3]).then((res) => { 
//  console.log(res);
// }).catch((err) => {
//  console.log(err);
// });
//rejection case
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() =>   resolve ("promise 1 resolve"), 5000);
// })
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject ("promise 2 fail") , 2000);
// })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject ("promise 3 fail"), 1000);
// })
// Promise.any([p1,p2,p3]).then((res) => { 
//  console.log(res);
// }).catch((err) => {
//  console.log(err);
// });

// const p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve("hello world")
//    },2000)
//    console.log("hey");
   
// })
//  async function getdata(){
//    const val = await p
//    console.log(val)
//    console.log("data executing");
// }
//  getdata()
//Q1 Create a Promise and resolve it immediately.
//   const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("promise resolved")
//    }, 2000);
//   })
//    promise.then((res) => {
//    console.log(res);
//   })
// Create a function that returns a Promise and resolve when calling the function.
   // const promise = function(){
   //    return new Promise((resolve, reject) => {
   //       setTimeout(() => {
   //          resolve("resolved promise")
   //       }, 2000);
   //    })
   // }
   // promise().then((res) =>{
   //  console.log(res)
   // })
   
//   const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 success")
//    }, 1000);
//   })
//   const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p2 success")
//    }, 2000);
//   })
//   const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p3 success")
//    }, 3000);
//   })
//   Promise.all([p1,p2,p3]).then((res) => {
//    console.log(res)
//   })

// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 success")
//    }, 3000);
//   })
//   const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p2 success")
//    }, 2000);
//   })
//   const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p3 success")
//    }, 1000);
//   })
//   Promise.all([p1,p2,p3]).then((res) => {
//    console.log(res)
//   })

// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 success")
//    }, 3000);
//   })
//   const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p2 failed")
//    }, 2000);
//   })
//   const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p3 success")
//    }, 1000);
//   })
//   Promise.all([p1,p2,p3]).then((res) => {
//    console.log(res)
//   }).catch((err) => {
//    console.error(err)
//   })

// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 success")
//    }, 3000);
//   })
//   const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p2 success")
//    }, 2000);
//   })
//   const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p3 failed")
//    }, 1000);
//   })
//   Promise.allSettled([p1,p2,p3]).then((res) => {
//    console.log(res)
//   }).catch((err) => {
//    console.error(err)
//   })


// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 success")
//    }, 3000);
//   })
//   const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p2 success")
//    }, 2000);
//   })
//   const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p3 failed")
//    }, 1000);
//   })
//   Promise.race([p1,p2,p3]).then((res) => {
//    console.log(res)
//   }).catch((err) => {
//    console.error(err)
//   })

// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p1 reject")
//    }, 3000);
//   })
//   const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p2 failed")
//    }, 2000);
//   })
//   const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p3 failed")
//    }, 1000);
//   })
//   Promise.any([p1,p2,p3]).then((res) => {
//    console.log(res)
//   }).catch((err) => {
//    console.error(err)
//   })
    
// let prom = new Promise((resolve, reject) => {
//    let num = 10+10
//    setTimeout(() => {
//       if(num == 20)
//       resolve("number will execute");
//      else{
//       reject("number will block");
//      }
//    }, 2000);
// })
// prom.then((res) => {
//    console.log(res)
// }).catch((err) => {
//    console.log(err)
// });

//How do you handle a rejected promise in JavaScript?
// const promise =new Promise((resolve,reject) => {
//    reject("promise reject")
// })
// .catch((err) => {
//     console.log(err);
// })

//       function promise(){
//    return new Promise((resolve, reject) => {
//       resolve()
//    })
// }
// promise().then((res) => {
//    console.log("successful")
// })
//How can you make multiple promises execute concurrently
// and wait for all of them to resolve before proceeding?

// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 success")
//    },2000)
   
// })
// const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p2 success")
//    }, 1000);
   
// })
// const p3 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//    resolve("p3 sucess")
//   }, 3000);
// })
//  Promise.all([p1,p2,p3]).then((res) => {
//    console.log(res)
//  }).catch((err) => {
//    console.log(err)
//  })
//rejection
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 success")
//    },2000)
   
// })
// const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p2 unsuccess")
//    }, 1000);
   
// })
// const p3 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//    resolve("p3 sucess")
//   }, 3000);
// })
//  Promise.all([p1,p2,p3]).then((res) => {
//    console.log(res)
//  }).catch((err) => {
//    console.log(err)
//  })
//tea serve
// const servetea = function(){
//    return new Promise((resolve, reject) => {
//     // step 1=purchaseitem
//     setTimeout(() => {
//       items =["tea","sugar","milk"]
//        resolve(items)
//     },2000) 
//    }).then((recieveditems) => {
//    console.log("we purchase items" + " " + recieveditems)
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          if (items[0]=="tea"&& items[1]=="sugar"&& items[2] =="milk"){
//          resolve("tea is ready")
//          }
//       }, 1000)
//    }).then((purchaseditems) => {
//       console.log (purchaseditems + " " + "to prepare")
//       return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             resolve("to serve")
//          }, 3000);
//       }).then((servingtea) => {
//          console.log(purchaseditems + " " + servingtea)
//          return new Promise((resolve, reject) => {
//             resolve("tea is ready" + " " + servingtea)
//          })
//       })
//    })
//    })
// }
// servetea().then((res) => {
//       console.log(res)
// })
//  const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 executed successfully")
//    }, 2000);
//  })
//  const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p2 successfully executed")
//    }, 1000);
//  })
//  const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p3 excuted")
//    }, 3000);
//  })
//  Promise.race([p1,p2,p3]).then((res) => {
//    console.log(res)
//  })

//promise.all
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p1 reject")
//    }, 1000);
// })
// const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p2 success")
//    }, 2000);
// })
// const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p3 success")
//    }, 3000);
// })
// Promise.all([p1,p2,p3]).then((res) => {
//    console.log(res)
// }).catch((err) => {
//    console.log(err)
// })
// Promise.allSettled
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p1 resole")
//    }, 1000);
// })
// const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p2 reject")
//    }, 2000);
// })
// const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p3 resolve")
//    }, 3000);
// })
// Promise.allSettled([p1,p2,p3]).then((res) => {
//    console.log(res)
// }).catch((err) => {
//    console.log(err)
// })

//promise.race
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p1 reject")
//    }, 1000);
// })
// const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p2 resolve")
//    }, 2000);
// })
// const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("p3 resolve")
//    }, 3000);
// })
// Promise.race([p1,p2,p3]).then((res) => {
//    console.log(res)
// }).catch((err) => {
//    console.log(err)
// })
//Promise.any
// const p1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p1 reject")
//    }, 1000);
// })
// const p2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p2 reject")
//    }, 2000);
// })
// const p3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("p3 reject")
//    }, 3000);
// })
// Promise.any([p1,p2,p3]).then((res) => {
//    console.log(res)
// }).catch((err) => {
//    console.log(err)
// })
// const pro = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve("promise executing")
//  }, 2000);  
// })
// async function x(){
//    const value = await pro
//    console.log(value);
//    console.log("promise success");
// }
//  x()
//ques
// Simple Promise:
// Create a simple Promise that resolves after a given delay
//  (e.g., 2 seconds) and logs a message when resolved.
// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("promise successfully done")
//    }, 2000);
// })
// promise.then((res) => {
//    console.log(res)
// })
//Chaining Promises:
//Write a program that chains three Promises, each 
//resolving with a different message, and logs the final result.
// const cart = function() {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          //item in cart
//          cartitem = ["kurta","shoes","dress"]
//          if(cartitem)
//          resolve(cartitem)
//       }, 2000);
// }).then((createorder) => {
//    console.log("recieved cart item" + " " + createorder)
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          //payment proceed
//        if(cartitem[0]=="kurta"&& cartitem[1]=="shoes"&& cartitem[2]=="dress")
//        resolve("payment")
//       }, 1000);
//    }).then((proceedtopayment) => {
//       console.log("order is ready for" + " " + proceedtopayment) 
//       return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             //successfull order
//             resolve("successfull")
//          }, 3000);
//       }).then((orderdone) => {
//          console.log("order is" + " " + orderdone)
//       })  
//    })
// })
// }
// cart()

//Promise.all:
//Create a program that uses Promise.all to fetch data from 
//multiple APIs simultaneously and log the combined results.
// const Github_api = "https://jsonplaceholder.typicode.com/posts/4"
// setTimeout(() => {
//    const p1 = fetch(Github_api)

// }, 2000);
// const data = "https://jsonplaceholder.typicode.com/posts/5"
// setTimeout(() => {
//    const p2 = fetch(data)
  
// },1000);
// const link = "https://jsonplaceholder.typicode.com/posts/6"
// setTimeout(() => {
//    const p3 = fetch(link)
// }, 3000);
// Promise.all([p1,p2,p3]).then((res) => {
//    console.log(res)
// })
//Promise Error Handling:
//Modify the simple Promise from the first example to
 //reject with an error message after a given delay (e.g., 2 seconds)
// const pro = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("promise failed")
//    }, 2000);
// })
// pro.catch((err) => {
//    console.log(err)
// })
//Promise Timeout
//Create a program that adds a timeout to a Promise and 
//rejects it if the operation takes longer than a specified duration.
// const p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       reject("rejected promise")
//    }, 3000);
// })
// console.log(p);

//Async/Await with Promises:
//Explain the relationship between async/await and Promises. Provide an example demonstrating the
// usage of async/await with a Promise-based function
