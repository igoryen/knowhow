justify-content

This defines the alignment along the main axis. // i.e. horizontally
It helps distribute extra free space left over 
when either all the flex items on a line are inflexible, 
or are flexible but have reached their maximum size. 
It also exerts some control over the alignment of items when they overflow the line.

.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}

flex-start (default): items are packed toward the start line
flex-end: items are packed toward to end line
center: items are centered along the line
space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line

space-around: 
	items are evenly distributed in the line with equal space around them. 
	Note that visually the spaces aren`t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.