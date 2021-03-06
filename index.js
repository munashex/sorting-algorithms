function bubbleSort(arr) {
    let noSwaps
    for (let i = arr.length - 1; i > 0; i--) {
      noSwaps = true
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          // SWAP
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          noSwaps = false
        }
      }
      if (noSwaps) break
    }
    return arr
  }
  console.log(bubbleSort([2, 3, 1, 2]))
  
  
  
  function selectionSort(arr){
  
      for(let i = 0; i < arr.length; i++){
          let lowest = i 
  
          for(let j = i + 1; j < arr.length; j++){
              if(arr[j] < arr[lowest]){
                lowest = j
              }
          }
          if(lowest !== i){
              [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
          }
      }
      return arr
  }
  
  console.log(selectionSort([5, 4, 3, 2, 1]))
  
  
  
  
  function insertSort(arr){
  
      for(let i = 1; i < arr.length; i++){
          let currentValue = arr[i]
  
          let j
          for( j = i - 1; j >= 0 && arr[j] > currentValue; j--){
              arr[j + 1] = arr[j]
          }
          arr[j + 1] = currentValue
      }
      return arr
  }
  
  console.log(insertSort([4, 5, 8, 1]))
  
  
  function merge(left, right) {
  let sortedArr = [] 
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
console.log(mergeSort([3, 5, 8, 5, 99, 1]))



function partition(arr, start, end) {
  const pivotValue = arr[start]
  let swapIndex = start
  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swapIndex++
      if (i !== swapIndex) {
        // SWAP
        ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
      }
    }
  }
  if (swapIndex !== start) {
    // Swap pivot into correct place
    ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
  }
  return swapIndex
}



function quickSort(arr, start = 0, end = arr.length - 1) {
  // Base case
  if (start >= end) return
  let pivotIndex = partition(arr, start, end)
  // Left
  quickSort(arr, start, pivotIndex - 1)
  // Right
  quickSort(arr, pivotIndex + 1, end)
  return arr
}
console.log(quickSort([5,4, 3, 2, 1]))




function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

function radixSort(arrOfNums) {
  let maxDigitCount = mostDigits(arrOfNums)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
    for (let i = 0; i < arrOfNums.length; i++) {
      let digit = getDigit(arrOfNums[i], k)
      digitBuckets[digit].push(arrOfNums[i])
    }
    // New order after each loop
    arrOfNums = [].concat(...digitBuckets)
  }
  return arrOfNums
}
console.log(radixSort([1, 33, 444, 0, 3, 2]))
