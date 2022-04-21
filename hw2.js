 const testArray = [ true, false, false, true, false, false, false, true, true, true, false, ]

 function checkTrue(arr){
    let result= 0
    for( let i = 0; i < arr.length; i++)
    
    if(arr[i]){
        result++
    }

  return result;
 }

 console.log("This is the result", checkTrue(testArray))


 function