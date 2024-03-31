let numbers = [] //=> This is where the array of numbers will be entered , in the empty array.

function prime (num){ //=> This function is used to check whether a  number in the  array is a prime number.By firstly
    if(num<=1){       // making sure it is not less than or equal to one .
        return false
    }
    for ( let i = 2; i < num; i++){ // And by making sure that the number is not divisible by any other number in 
                                    // such a case it will return false. But in the opposite will return true.Then 
                                    // the process is iterated through the  values of the array using the for loop.
        if (num % i ===0){
            return false
        }else {return true}
    }
}
function filterPrime (arr){           //=> This function does the job of filtering out the numbers that have met the 
                                      // condition of being a prime number. The function calls the  first function 
                                      // and uses it to filter out the prime numbers that have met its conditions.
    return arr.filter(function (num){
        return prime(num)
    })

}
let primeNumbers = filterPrime(numbers) //=> This calls the second function and then it is stored in the primeNumbers
                                        // variable
console.log (primeNumbers)