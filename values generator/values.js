console.log (printArray()) // takes in the two numbers
function printArray (num1,num2) {
function mapVals(_,i){ //=>This is a function that takes in two parameters (_ & i)  _ represents a parameter which 
                       // should be ignored during execution. i represents the parameter of an index.
return (num1+i)}       //=> This is what the function's code does when it is called, it takes num1 and adds an index
                       // to it.
function mapVals2 (_,i){ //=>The function that takes in the (_,i) parameters.
    return (num2 +i)     //=> Is what the function's code executes when called (takes num2 and adds an index to it)
}
  if( num1<num2){   //=> This is meant to check whether num1 is less than num2 and if so it executes a function
                    // which returns an array whose length is set by {length: num2-num1 +1} and calls the second
                    //function
    return Array.from({length: num2-num1 +1}, mapVals )
  }else {           //=>This is what the code does when the condition is not met , it returns an array then sets the
                    //  length of the array and calls the third function and ties it all together by displaying the 
                    // array in reverse.     
    return Array.from({length: num1-num2 + 1}, mapVals2 ).reverse()

  }}
