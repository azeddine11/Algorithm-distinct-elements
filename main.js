
/*
WITH ARRAYS
*/

function distinctElement() {

    var arr1 = [3,1,7,9,5]; 
    var arr2 = [2,4,1,9,3,5];
    let sum = 0;
    let arr3 = [];
    let two_arr = arr1.concat(arr2);
  
    // push the element that not already exist in arr3 
    for (let i = 0; i < two_arr.length; i++) {
      if (!arr3.includes(two_arr[i])) {  
        arr3.push(two_arr[i]);
      }
    }
    
    // sum of elements
    for (let i = 0; i < arr3.length; i++) {
      sum += arr3[i];
    }  
    console.log(sum);
  }




/*
WITH OBJECT , HASH TABLE
*/

// Define two objects 
let obj1 = {3: true, 1: true, 7: true, 9: true};
let obj2 = {2: true, 4: true, 1: true, 9: true, 3: true};

// Create an empty object to store the elements
let twice = {};

// Loop through the keys in set1
for (let key in obj1) {
    // Check if there is overlap between the keys in obj1 and obj2
    if (obj2[key]) {
        // If there is overlap, add the key to the overlap object
        twice[key] = true;
    }
}
// Calculate the sum of the overlapping elements and store it in a variable
let sum = 0;
for (let key in twice) {
    sum += parseInt(key);
}

// Print the sum
console.log(sum);

  