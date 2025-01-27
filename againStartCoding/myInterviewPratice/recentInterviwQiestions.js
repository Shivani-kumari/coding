// const arr = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]];
// Array.prototype.myFlatArray = function () {
//     let resultArray = [];
    
//     const flattenArray = (inputArray, outputArray) => {
//         for (let i = 0; i < inputArray.length; i++) {
//             if (Array.isArray(inputArray[i])) {
//                 flattenArray(inputArray[i], outputArray); // Recursive call
//             } else {
//                 outputArray.push(inputArray[i]); // Push non-array elements
//             }
//         }
//     };

//     for (let i = 0; i < this.length; i++) {
//         if (Array.isArray(this[i])) {
//             flattenArray(this[i], resultArray);
//         } else {
//             resultArray.push(this[i]);
//         }
//     }

//     return resultArray;
// };
// what approach did i take to sloveing this problem
function productSum(array) {
    const productArray = []; // Array to store results
    for (let i = 0; i < array.length; i++) {
        let product = 1;
        // Calculate the product of all elements except the current index
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                product *= array[j];
            }
        }
        // Add the computed product to the result array
        productArray.push(product);
    }

    return productArray;
}

// Example Usage

let array = [1,2,3,4]
// console.log(productSum([4,0,4]))

// function productExceptSelf(nums) {
//     const n = nums.length;
//     const answer = []; // Initialize the output array with 1s
//     // Calculate prefix products
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         // Set the product of elements to the left
//         answer.push(prefix)
//         console.log(`${prefix}*${nums[i]}`)
//         prefix = prefix* nums[i]; // Update the prefix product
//     }
//     // Calculate suffix products and multiply with the current answer
//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         answer[i] *= suffix; // Multiply with the suffix product
//         console.log(`${suffix}*${nums[i]}`)
//         suffix *= nums[i]; // Update the suffix product
//     }
//     return answer;
// }
function productExceptSelf(nums) {
    // Array to store all left multiplication
    let left = [];
    // Array to store all right multiplication
    let right = new Array(nums.length);
    left[0] = 1;
    right[nums.length - 1] = 1;
    // Fill the left array
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
        console.log(`${left[i]}=${left[i-1]}*${nums[i-1]}`)
        console.log(nums[i])
    }
    // Fill the right array
    for (let j = nums.length - 2; j >= 0; j--) {
        right[j] = right[j + 1] * nums[j + 1];
        console.log(`${right[j]}=${right[j+1]}*${right[j+1]}`)
    }
    // Calculate the final answer
    let ans = [];
    for (let k = 0; k < nums.length; k++) {
        ans[k] = left[k] * right[k];
    }
    return ans;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

 // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]

// Example Usage
// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([4,0,4])); // Output: [0, 0, 9, 0, 0]

