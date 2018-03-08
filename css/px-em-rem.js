em and rem 
units of measurement
flexible
scalable
browsers translate them into pixel values depending on the font size settings in your design. 

Ex: 
you use a value of 1em or 1rem, 
Browser translates it into anything from 16px to 160px or any other value.


Ex:
you use px values
the browser does not translate them
so 1px will always display as exactly 1px.





Use em and rem units for 
flexibility in our designs, 
the ability to scale elements up and down
to make our designs easier to adjust during development, 
more responsive, 
to allow browser users to control the overall scale of sites for maximum readability.


Use px for
being stuck with fixed sizes. 


THE DIFFERENCE BETWEEN EM AND REM

The Browser translates them into pixels differently

REM

	the browser 
	# looks at the font-size of <html> (the root element of the page) / the root font-size
	# multiplies that root font size by your REM

	Example: 
	if html font-size: 16px
		10rem x 16 = 160px

EM
	the browser
	# looks at the font-size of the element being styled.
	# multiplies that font-size by your EM

	Example: 
	if a div font-size: 18px
		10em x 18px = 180px



NB:
EMs are relative to the the font size of the element on which they are used, not of the parent element.


Parent element font size can effect em values, but when that happens it’s solely because of inheritance. 

Example:

Every element automatically inherits the font-size of its parent. 

How can you override inheritance?
Explicitly set the font size with PX or VW (units not subject to inheritance).

The browser could multiply your EM not by the PX of the element but by the parent`s PX or by grandparent`s PX etc.

Example:


# Set your <html> font-size to 16px (usually the default) 
# Create div.child with padding: 1.5em;
# Result: div.child computed padding is (1.5em x 16px =) 24px.


# Create div.parent around your div.child with font-size: 1.25em;
# Computed: div.parent font-size = 1.25em x 16px (<html>) = 20px;
# Computed: div.child padding = 1.5em x 20px (div.parent) = 30px;

# Give div.child font-size: 1.2em;
# Computed: div.child font-size = 1.2em x 20px (div.parent font-size) = 24px;
# Computed: div.child padding = 1.5em x 24px (div.child font-size) = 36px;

# Give div.child font-size: 14px; (PX are not subject to inheritance)
# Computed: div.child padding = 1.5em x 14px = 21px;


Browser default font-size: 16px;
This is the font-size of the <html>.
BUT user can change it from  9px to 72px in the Settings.
	Why? For all kinds of reasons, from strained eyesight to choosing optimum settings for devices that can be vastly different in size and viewing distance. Accommodating these settings allows for much better user experiences.

This will change the values of all EMs and REMs.





browser setting <html> 
if 16px then 10rem = 10 x 16px = 160px;
if 18px then 10rem = 10 x 18px = 180px;
if 20px then 10rem = 20 x 20px = 200px.
if 25px then 10rem = 20 x 25px = 250px.


The browser multiplies all the REM values by the font-size set in the browser settings.
You can reset it to px or vw (units not subject to inheritance).

The browser multiplies all the EM values by the font-size of the container element BUT it is can be reset by parent elements.
You can reset it to PX or VW (not subject to inheritance)


REM benefits:
# Consistency in sizing, not influenced by inheritance from parent elements.
# If user resets the default font-size all the sizes in the design will change consistently, 
	if he increases their font-size, the integrity of the layout will be preserved, and the text won’t get squashed up in a rigid space meant for smaller text.
	if he decreases their font-size, the entire layout scales down, and they won’t be left with a tiny smattering of text in a wasteland of white space.

file
Browser font size 9px

NB:
	Some (unwise) designers use rem based layouts in conjunction with a fixed px unit font-size setting on the html element. This is typically done so that a change of font size on the html element can scale overall the design up or down.

	This overrides the <html> font-size that is set in the browser settings. 
	Result: The settings have no effect, and the user can`t optimize for best viewing.

What if I still need to change the font size on the html element?
	do so with an em or rem value as the root font size will then still be a multiple of the user’s browser font size setting.
	This will still allow you to scale your design up or down by changing your html element’s font size, but you’ll preserve the effect of user browser settings.

EM benefits:
# allows something else determine the font-size, not just the html element.
# i.e. use it only to allow for scalability within the context of a specific design element.

EXAMPLE:
# set the padding, margin and line-height around a navigation menu item to use em values.
 this way if you change the menu’s font size the spacing around the menu items will scale proportionately, independently of the rest of the layout.


Use EMs only if you identify a clear need for them because keeping track of EMs can get out of hand very quickly.


Use EMs For:
------------
	Any sizing that should scale depending on the font-size of an element other than the root.
	Generally speaking, the only reason you’ll need to use EMs is to scale an element which has non default font sizing.

	As per our example above, design components like menu items, buttons, and headings may have their own explicitly stated font sizes. If you change these font sizes, you want the entire component to scale proportionately.

	Common properties this guideline will apply to are: 
	margin, padding, width, height and line-height settings, when used on elements with non default font sizing.

	I recommend that when you do employ em units, the font size of the element they’re used on should be set in rem units to preserve scalability but avoid inheritance confusion.

Don`t use EMs for Font Sizes.
	Use REMs instead.
	That makes designs more manageable.

Why do headings are set to EMs 
	because they’re a better choice than px units, being relative to regular text size. 
	
	However REMs can achieve this goal equally well. 
	If any font size adjustment on the html element is made, the heading sizes will still scale too.



DONT use EMs
	to make our font-sizes to scale based on any element other than the root
EXCEPTIONS:
	# a drop down menu. Because the text-size of a second level menu item depends on the font size of the first level. 
	# a font icon used inside a button, where the icon’s size should relate to the button’s text size.

However most elements in a web design will tend not to have this type of requirement, so you’ll generally want to use rem units for font sizing, with em units only where specifically needed.

USE REMs
	Any sizing that doesn’t need em units for the reasons described above, and that should scale depending on browser font size settings.

	This accounts for almost everything in a standard design including most heights, most widths, most padding, most margins, border widths, most font sizes, shadows, basically almost every part of your layout.

In a nutshell, everything that can be made scalable with rem units, should be.

Tip
---
When creating layouts it’s often easier to think in pixels but output in rem units.

You can have pixel to rem calculations done automatically via a preprocessor like Stylus / Sass / Less, or a postprocessor like PostCSS with the PXtoRem plugin.

Alternatively, you can use PXtoEM to manually do your conversions.


ALWAYS USE REMs
	in Media Queries
	----------------------------
	Importantly, when using rem units to create a uniformly scalable design, your media queries should also be in rem units. 
	This will ensure that whatever a user’s browser font size, your media queries will respond to it and adjust your layout.

	EXAMPLE
	if a user scales up text very high, your layout may need to snap down from a two columns to a single column, just as it might on a smaller screened mobile device.

	If your breakpoints are at fixed pixel widths, only a different viewport size can trigger them. However with rem based breakpoints they will respond to different font sizing too.

Don’t Use em or rem For:
------------------------
	Multi Column Layout Widths
	Column widths in a layout should typically be % based so they can fluidly fit unpredictably sized viewports.

However single columns should still generally incorporate rem values via a max-width setting.

For example:

css .container { width: 100%; max-width: 75rem; }

This keeps the column flexible and scalable, but prevents it from becoming too wide for the text therein to be comfortably readable.

When an Element Should be Strictly Unscalable
In a typical web design there won’t be many parts of your layout that can’t be designed for scalability. However occasionally you will come across elements that really do need to use explicit fixed values for the purpose of preventing scaling.

The precondition for employing fixed sizing values should be that if the element in question were scaled it would break. This really doesn’t come up often, so before you’re tempted to whip out those px units, ask yourself if using them is an absolute necessity.

Wrapping Up
Let’s have a quick bullet point recap of what we’ve covered:

rem and em units are computed into pixel values by the browser, based on font sizes in your design.
em units are based on the font size of the element they’re used on.
rem units are based on the font size of the html element.
em units can be influenced by font size inheritance from any parent element
rem units can be influenced by font size inheritance from browser font settings.

Use em units for sizing that should scale depending on the font size of an element other than the root.
Use rem units for sizing that doesn’t need em units, and that should scale depending on browser font size settings.
Use rem units unless you’re sure you need em units, including on font sizes.
Use rem units on media queries
Don’t use em or rem in multi column layout widths - use % instead.
Don’t use em or rem if scaling would unavoidably cause a layout element to break.
I hope you’ve now built a robust and complete picture of exactly how em and rem units work, and through that know how to best leverage them in your designs.

I encourage you to try the usage guidelines contained in this tutorial for yourself, and enjoy the fully fledged scalability and responsiveness of the layouts they’ll enable you to create.