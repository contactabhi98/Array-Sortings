function sortArrayInDescendingOrder(arr) {
    console.log("Unsorted Array: ",arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] < arr[j + 1]) {
                // Swap them if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function sortArrayInAscendingOrder(arr) {
    console.log("Unsorted Array: ",arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j > arr.length - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] < arr[j + 1]) {
                // Swap them if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log("Sorted Array In Desc Order: ",sortArrayInDescendingOrder([5, 2, 10, 4, 1, 17, 15]));
console.log("Sorted Array In Aesc Order: ",sortArrayInAscendingOrder([5, 2, 10, 4, 1, 17, 15]));

