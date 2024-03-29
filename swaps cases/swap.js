let stringPrompt = ""     //  The user will enter the string in the empty string that is provided.
const lowerCase= a-z  //This is a variable that has the entire alphabet but in lowercase.
const upperCase  = A-Z //This is a variable that has the entire alphabet but in uppercase.
const caseSwapper = function (){ // This is where the function that swaps cases is declared
    if(stringPrompt === lowerCase){ //This is where a condition is set to determine the case of the entered string
                                    //and where the cases will be swapped.
       console.log (stringPrompt.toupperCase() )
    }else console.log (stringPrompt.toLowerCase())
}
caseSwapper() //This is where the function is called