.container {
 	flex-direction: row | row-reverse | column | column-reverse;
}

This establishes the main-axis, 
thus defining the direction in which the flex items are placed in the flex container. 
Flexbox is (aside from optional wrapping) a single-direction layout concept. 
Think of flex items as primarily laying out either in horizontal rows or vertical columns.

row (default): 
	left to right in ltr; right to left in rtl
row-reverse: 
	right to left in ltr; left to right in rtl
column: 
	same as row but top to bottom
column-reverse: 
	same as row-reverse but bottom to top