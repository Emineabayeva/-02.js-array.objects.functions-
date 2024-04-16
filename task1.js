                            //  taask1
// let eded=134;
// let cem=0;
// let hasil=0;
// let edediOrta=0;
 
// let yuzluk=Math.floor(eded/100);
// let onluq= Math.floor(eded % 100)/10;
// let teklik= eded % 10;

 
// cem = yuzluk+onluq+teklik;
// hasil =  yuzluk * onluq * teklik
// edediOrta = (yuzluk+onluq+teklik)/3

// console.log("redemlerin cemi:",cem);
// console.log("redem hasil:",hasil);
// console.log("edediorta:",edediOrta);

                                        //    task2
// let eded=10;
// for (let i = 1; i <= eded; i++) {
// if (eded % i===0){
//         console.log(i);
//     }

// }
                                    //  task3
// let eded=15;
// bolensayi=0;
// for (let i = 1; i <= eded; i++) {
// if (eded % i===0){
//    bolensayi++
//     }

// }
// console.log("bolen sayi:",bolensayi);

                                        //  task4

//  for (let i = 0; i <=10; i++) {
//      console.log(i + "x" + i + "=" + (i * i))
//  }

                                 
                                     //task7

// let tekCem = 0;
// let cutCem= 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         cutCem += i; 
//     } else {
//         tekCem += i; 
//     }
// }

// console.log("Teklerin cemi:", tekCem);
// console.log("cutlerin cemi:", cutCem);

                                            //  task6

// let i = 0;
// let j = 0;
                                            
// for (i = 2; i <= 100; i++) {
// let sadeEded= true;
// for (j = 2; j < i; j++) {
// if (i % j === 0) {
// sadeEded = false;
// break;
//     }
//         }
// if (sadeEded) {
// console.log(i);
//          }
//     }


                                             // Array tasks
                                             // Function
                                             // task1
// function printFullName(firstName, lastName) {
//   if (firstName && lastName) {
//     console.log("i am :",lastName,firstName);
//   } else {
//     console.log("I am jhon doe");
//   }
// }

// console.log(printFullName("jhon", "doe"));
 
                                                 //  task2
// function print(number) {
//   return number * number;
// }

// console.log(print(5));                     
                
                                                  //     task3
// function cem(a, b) {
//   return a + b;
// }

// function hasil(a, b) {
//   return a * b;
// }

// function ferq(a, b) {
//   return a - b;
// }

// function bolme(a, b) {
//   return a / b;
// }

// console.log(cem(2, 3));     
// console.log(hasil(2, 3)); 
// console.log(ferq(2, 3)); 
// console.log(bolme(2, 3));            

                                             //     task5

// function ilkVeSonCem(array) {
//  if(array.lenght===0){
//      return 0;
//  } else{
//      return array[0]+array[array.lenght - 1] ;
//  }
 
// }
//  const array = [1,2,3];
//  console.log("ilk ve son index cemi:",ilkVeSonCem(array));
                                       



                                                       // task6
//   function elementSayi(arr) {
//      let cem = 0;
//      for (let i = 0; i < arr.length; i++) {
//           cem +=arr[i];
//      }
//      return cem;
//   } 
//   const array = [1,2,3,4,5]  ;
//   console.log("butun index cemi:",elementSayi(array));                                         
                                                            // task7


// function findMax(array) {
//      return Math.max(...array);
// }
// const array=[1,7,16,77,75];
// console.log("max element:",findMax(array));

                                                  //   task8

// function findElement(array, number) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       return "element var:",number
//     }
//   }
//   return "element yoxdur:",array
// }

// console.log(findElement([33, 28, 45, 17], 45)); 
                                                       //     task9
 
                                                       
                                                       
function ikiArray(arr1, arr2) {
  const birlesmisarray = arr1.concat(arr2);
  return birlesmisarray;
}

console.log(ikiArray([1, 2, 3, 4, 5], [6, 7, 8, 9]));