Background

The Flexbox Layout (Flexible Box) module 
(currently a W3C Last Call Working Draft) 
aims at providing a more efficient way to 
- lay out, 
- align and 
- distribute space among items in a container, 
even when the size of the items is unknown and/or dynamic (thus the word "flex").

The main idea behind the flex layout is 
to give the container the ability 
to alter the width/height (and order) of its items 
to best fill the available space 
(mostly to accommodate to all kind of display devices and screen sizes). 

A flex container 
- expands items to fill available free space, 
- or shrinks them to prevent overflow.

Most importantly, 
the flexbox layout is direction-agnostic 
as opposed to the regular layouts 
( - block which is vertically-based and 
  - inline which is horizontally-based). 

While those work well for pages, 
they lack flexibility (no pun intended) to support large or complex applications 
(especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

Note: 
Flexbox layout is most appropriate to the components of an application, and small-scale layouts, 
while the Grid layout is intended for larger scale layouts.