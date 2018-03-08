for these:

angle
frequency
integer
length
number
time

Syntax:
calc( expression );

Example:


// DECLARATION 
// CSS3 calc() function to perform calculations
@mixin calc($property, $expression) { 

  #{$property}: -webkit-calc( #{$expression} ); 
  #{$property}:    -moz-calc( #{$expression} );
  #{$property}:         calc( #{$expression} ); 

} 

// FUNCTION CALL
@include calc( height, "100% - 50px" );