//! a simple and efficient sorting algorithm that repeatedly selects the smallest or largest element from an unsorted list and moves it to the sorted portion.

function selectionSort(arr){
    let n  = arr.length
    for (let i = 0; i < n-1; i++) {   //?n
        let minIndex = i
        for (let j = i+1; j < n; j++) {  //?n
             if(arr[j] < arr[minIndex]){
                minIndex = j;
             }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([30, 10, 40, 25, 5, 3, 15]));


//* Time complexity  = O(n^2)
//* Space complexity  = O(1)


