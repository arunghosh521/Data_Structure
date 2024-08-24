let arr = [5,6,3,4,1,9,26,74,56,20]

function quicksort(arr){
    if(arr.length <=1){
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i<arr.length; i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        }else {
            left.push(arr[i])
        }
    }
    return [...quicksort(right), pivot, ...quicksort(left)]
    
}

console.log(quicksort(arr));

//! Time complexity

//* Average Case  - O(nlog n)
//* Best case  - O(nlog n)
//* Worst case  - (n^2)

//! Space complexity

//* Average case  - O(log n)
//* Worst case  - O(n)