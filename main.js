
/*
WITH ARRAYS
*/

  var arr1 = [3,1,7,9]; 
  var arr2 = [2,4,1,9,3];
  let arr3 = arr1.concat(arr2);
  let the_one = [];
  let sum = 0;


//loop inside loop to know the element that not distinct 
  for(let i=0;i < arr1.length; i++)
  {
    for(let j=0;j < arr2.length; j++)
    {
      if(arr1[i]== arr2[j])
      {
        the_one.push(arr1[i])
      }

    }

  }


/* loop inside loop to give 0 to the element that 
are exist in  the_one array and in arr3 */
  for(let i=0;i < arr3.length; i++)
  {
    for(let j=0;j < the_one.length; j++)
    {
      if(arr3[i] === the_one[j])
      {
        arr3[i] = 0 

      }

    }
    sum += arr3[i]
  }

  console.log(sum)






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
let summ = 0;
for (let key in twice) {
    summ += parseInt(key);
}

// Print the sum
console.log(summ);

  