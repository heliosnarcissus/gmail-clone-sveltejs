
//validation to check if field is empty
export function isEmpty(val) {
    return val.trim().length === 0;
}
//validation to check if email is valid e-mail format
export function isValidEmail(val) {
    //this regex pattern doesnt make the period mandatory after '@'
    const emailRegx = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
    //this regex pattern makes the period MANDATORY after '@', stricter
    const strictEmailRegx = /^[^ ]+@[^ ]+[\.][a-z]{2,3}$/;
    return val.match(strictEmailRegx);
    //return new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?").test(val);
}
//validates the whole form as a group
export function isFormValid(username, emailaddress){  
    /*return boolean value of
        -is username not empty and
        -is email not empty and
        -is email a valid email
        if these 3 conditions are met,return TRUE, else, FALSE.
    */
    return(!isEmpty(username) && !isEmpty(emailaddress) && isValidEmail(emailaddress) )
}

//unfinished function.. 
export function changeBorderColor(val){
    isEmpty(name) 
    return{

    }
}