flex

This is the shorthand for 
	flex-grow, 
	flex-shrink and 
	flex-basis combined. 
The second and third parameters (flex-shrink and flex-basis) are optional. 
Default is 0 1 auto.

.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}

It is recommended that you use this shorthand property 
rather than set the individual properties. 
The short hand sets the other values intelligently.