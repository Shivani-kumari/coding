const arr = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]];
Array.prototype.myFlatArray = function () {
    let resultArray = [];
    
    const flattenArray = (inputArray, outputArray) => {
        for (let i = 0; i < inputArray.length; i++) {
            if (Array.isArray(inputArray[i])) {
                flattenArray(inputArray[i], outputArray); // Recursive call
            } else {
                outputArray.push(inputArray[i]); // Push non-array elements
            }
        }
    };

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            flattenArray(this[i], resultArray);
        } else {
            resultArray.push(this[i]);
        }
    }

    return resultArray;
};
