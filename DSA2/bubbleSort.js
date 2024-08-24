//! Bubble Sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order.

//* Start at the beginning of the list.
//* Compare the first two items.
//* If the first item is bigger than the second item, swap them.
//* If the first item is not bigger than the second item, do nothing.
//* Move to the next pair of items.
//* Repeat the process for each pair of items until you reach the end of the list.
//* Start again from the beginning and repeat the process.
//* Keep repeating until you can go through the whole list without needing to make any swaps.


let arr = [6,8,3,5,1,9,4]

function bubblesort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0; i< arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }
    while(swapped)
        return arr
}

console.log(bubblesort(arr));


let str = ["zulaikh", "vishnu", "siju", "anas", "Rahul"]

function sorting(str){
    let n = str.length
    for(let i =0; i< n; i++){
        for(let j = 0; j< n-i-1; j++){
            if(str[j].toLowerCase() > str[j+1].toLowerCase()){
                let temp = str[j]
                str[j] = str[j+1]
                str[j+1] = temp
            }
        }
    }
    return str
}


console.log(sorting(str));


let nums =[56,21,42,69,89,78,23,56,42,16,18,59]

function numberSorting(nums){
    let n = nums.length
    for(let i = 0; i< n; i++){
        for(let j = 0; j< n-i-1; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
}

console.log(numberSorting(nums)); 