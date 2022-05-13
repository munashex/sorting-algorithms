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
  
  
  function MergeSortWithEqualArray(arr1, arr2){
  
      let finalArray  = [] 
  
      while(arr1.length && arr2.length){
          if(arr1[0] < arr2[0]){
  finalArray.push(arr1.shift())
          }else {
  finalArray.push(arr2.shift())
          }
      }
      return [...finalArray, ...arr1, ...arr2]
  }
  
  
  function mergeSort(arr){
  
      if(arr.length <= 1) return arr 
  
      let middle = Math.floor(arr.length / 2) 
      let leftSide = mergeSort(arr.slice(0, middle))
      let rightSide = mergeSort(arr.slice(middle)) 
  
      return merge(leftSide, rightSide)
  }
     mergeSort([5, 4, 3, 2, 1, 3])
