By default, 
flex items will all try to fit onto one line. 
// the width of the items will shrink so that none of the items wrap i.e. spill over to the next line.
You can change that and 
allow the items to wrap as needed 
with this property. 
Direction also plays a role here, determining the direction new lines are stacked in.

.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}

nowrap (default): single-line / left to right in ltr; right to left in rtl
wrap: multi-line / left to right in ltr; right to left in rtl
wrap-reverse: multi-line / right to left in ltr; left to right in rtl