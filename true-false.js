/**
 * If the value is 0 then the condition will always false
 * 
 * If the value is set to empty string then the condition will be false.
 * 
 * If the variable is defined but the value is not then the value will be undefined.
 * so again the condition will be false.
 * 
 * If name is equal to boolean false then obviously the condition will be false.
 * 
 * IF name is set to NaN then again it will be false if it's used inside in a condition to check
 * 
 * If name is set to null again it will be false or falsy.
 * 
 * @return string 
 */

let name = null;

if ( name ) {
    
    console.log("The condition is true");

} else {

    console.log("The condition is false.");

}