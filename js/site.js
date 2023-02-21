//Get the values (string) from the page
//Controller function
function getValue(){

    //make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");
    //get user string from the page
    let userString = document.getElementById('userString').value;

    //check for a palindrome
    let returnObj = palindrom(userString);

    //display out string to the screen
    displayString(returnObj);

}





//Reverse the string
//Logic function
function palindrom(userString){

    //level
    userString = userString.toLowerCase();

    //remove special character and spaces
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");


    let revArray = [];
    let returnObj = {};
     //reverse a string using a for loop

    for (let i = userString.length -1 ; i >= 0; i--) {
        revArray += userString[i];
        
    }

    if (revArray == userString) {
        returnObj.msg = "Well Done! You entered a palindrome!";
    }else{
        returnObj.msg = "Sorry! You did not entered a palindrome!"
    }
    
    returnObj.reversed = revArray;

    return returnObj;

}





//Display the reversed string to the user
//View function
function displayString(returnObj){

    document.getElementById("alertHeader").innerHTML =  returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}