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
