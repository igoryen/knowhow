.item {
  flex-grow: <number>; /* default 0 */
}

This defines the ability for a flex item to grow if necessary. 
It accepts a unitless value that serves as a proportion. 
It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, 
the remaining space in the container will be distributed equally to all children. 
If one of the children has a value of 2, 
the remaining space would take up twice as much space as the others (or it will try to, at least).