// let arr = ["apple", "banana", "mango"];
// console.log(arr);

// let colors = ["Red", "Blue", "Green", "white"];
// console.log(colors[0]);
// console.log(colors[3]);

// let fruits = ["Apple", "Banana"];

// fruits.push("orange");
// console.log(fruits);

// let numbers = [10, 20, 30, 40];
// numbers.pop(2);
// console.log(numbers);

// let names = ["Akash", "Rahul", "Sam"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let cities = ["Mumbai", "Pune", "Delhi", "Goa"];

// console.log(cities.length);

// let nums = [10, 20, 30, 40];

// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i];
// }

// console.log(sum);

// // 8. Find Largest Number in Array

// // Find the largest number from:

// let num1 = [5, 2, 9, 1, 7];

// let largest = num1[0];

// for (let i = 0; i < num1.length; i++) {
//   if (num1[i] > largest) {
//     largest = num1[i];
//   }
// }
// console.log(largest);

// //  . Check Element Exists

// // Check whether "Mango" exists in array or not.

// let fruits1 = ["Apple", "Banana", "Mango"];

// if (fruits1.includes("Mango")) {
//   console.log("Mango exists");
// } else {
//   console.log("Mango Not Found");
// }


// // 10. Reverse Array

// // Reverse this array:

// let num2 = [1, 2, 3, 4]
// num2.reverse();
// console.log(num2);

// Question 1 — Count Even Numbers

// Find how many even numbers are present in this array:

let nums = [1, 2, 4, 7, 8, 10]

let even =0 
for(let i= 0; i < nums.length;i ++ ){
    if(nums[i] % 2==0 ){
        even++;
    }
}
console.log(even)

// Question 2 — Find Smallest Number

// Find the smallest number from:

let nums1 = [12, 5, 8, 1, 19]

let smallest = nums1[0];

for(let i=0 ; i<nums1.length ;i++){
    if( nums1[i]< smallest){
        smallest= nums1[i]
    }
}

console.log(smallest)


// Question 3 — Convert Names to Uppercase

// Convert this array to uppercase:

let names = ["akash", "rahul", "sam"]

for( let i =0; i <names.length ;i++){

    names[i]= names[i].toUpperCase()
}
console.log(names)


// Question 4 — Remove Duplicates

// Remove duplicate numbers from this array:

let nums2 = [1, 2, 2, 3, 4, 4, 5]
  let unique =[...new Set(nums2)]
 
  console.log(unique);


// Question 5 — Find Second Largest Number

// Find the second largest number from:

let nums = [10, 50, 30, 80, 60];

let largest = nums[0];
let secondLargest = nums[0];

for (let i = 0; i < nums.length; i++) {

    if (nums[i] > largest) {

        secondLargest = largest;

        largest = nums[i];

    } else if (nums[i] > secondLargest && nums[i] != largest) {

        secondLargest = nums[i];
    }
}

console.log(secondLargest);