
//! Time Complexity Analysis:

//* 1. Divide Step:
    //? At each level of recursion, the array is divided into two halves until we reach arrays of size 1.
    //? If the original array has n elements, the array will be divided log⁡ 𝑛 times (because each division reduces the size by half).
    //? Therefore, the depth of the recursion tree is logn.

//* 2. Merge Step:
    //? At each level of recursion (each level of the recursion tree), the merging process involves going through all 𝑛 elements to combine the sorted halves.
    //? Since there are logn levels and each level involves merging n elements, the total work done at each level is 𝑂(𝑛).
    //? Across all levels, this results in O(n)×logn operations.
//* Combining Both:
    //? Divide: O(logn) for the depth of the recursion tree.
    //? Merge: O(n) for merging at each level.

//* So the total time complexity is O(n log n)

let arr = ["arun", "siju", "muneer", "anas", "zulaikh", "dhishon"]

function mergesort(arr){
    if(arr.length<= 1) return arr
    let mid = ~~(arr.length/2)
    let left = mergesort(arr.slice(0, mid))
    let right = mergesort(arr.slice(mid))
    return merge(left, right)
}

function merge(left, right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    console.log(sortedArr);
    return [...sortedArr, ...left, ...right]
}

console.log(mergesort(arr));

let arr2 = [52,64,86,42,13,15,75,64,58]

function sorting(arr){
    if(arr.length <=1) return arr
    let mid = ~~(arr.length/2)
    let left = sorting(arr.slice(0,mid))
    let right = sorting(arr.slice(mid))
    return merging(left, right)
}

function merging(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}


console.log(sorting(arr2));