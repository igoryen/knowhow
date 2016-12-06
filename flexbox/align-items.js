align-items

This defines the default behaviour 
for how flex items are laid out along the cross axis // vertically
on the current line. 
Think of it as the "justify-content" version 
for the "cross-axis" (perpendicular to the "main-axis").

.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}

flex-start: cross-start margin edge of the items is placed on the cross-start line
flex-end: cross-end margin edge of the items is placed on the cross-end line
center: items are centered in the cross-axis
baseline: items are aligned such as their baselines align
stretch (default): stretch to fill the container (still respect min-width/max-width)