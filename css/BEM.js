B.E.M.
blocks, elements, modifiers

Block
	.block represents the higher level of an abstraction or component.
	Standalone entity that is meaningful on its own.
	Encapsulates a standalone entity that is meaningful on its own. 
	While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. 
	Holistic entities without DOM representation (such as controllers or models) can be blocks as well.

	Block names may consist of Latin letters, digits, and dashes. To form a CSS class, add a short prefix for namespacing: 

	.block
	.checkbox
	.container
	.header
	.input
	.menu

	Any DOM node can be a block if it accepts a class name.
	<div class="block">...</div>

	- Use class name selector only
	- No tag name or ids
	- No dependency on other blocks/elements on a page

	.block { color: #042; }

	.site-search {} /* Block */


Element
	.block__element represents a descendent of .block that helps form .block as a whole.
	represents a descendent of .block that helps form .block as a whole.
	A part of a block that has no standalone meaning and is semantically tied to its block.
	
	checkbox caption
	header title
	list item
	menu item

	Parts of a block and have no standalone meaning. Any element is semantically tied to its block.

	Element names may consist of Latin letters, digits, dashes and underscores. 
	CSS class is formed as block name plus two underscores plus element name: 

	.block__elem

	Any DOM node within a block can be an element. Within a given block, all elements are semantically equal.

	<div class="block">
	 	...
	  	<span class="block__elem"></span>
	</div>

	Use class name selector only
	No tag name or ids
	No dependency on other blocks/elements on a page

	.block__elem { color: #042; }
	.site-search__field {} /* Element */



Modifier
	.block--modifier represents a different state or version of .block.

	A flag on a block or element. Use them to change appearance or behavior.

	checked
	color yellow
	disabled
	fixed
	highlighted
	size big

	Flags on blocks or elements. Use them to change appearance, behavior or state.

	Modifier names may consist of Latin letters, digits, dashes and underscores. 
	CSS class is formed as block’s or element’s name plus two dashes: 
	.block--mod 
	or 
	.block__elem--mod 
	and 
	.block--color-black 
	with 
	.block--color-red. 

	Spaces in complicated modifiers are replaced by dash.

	Modifier is an extra class name which you add to a block/element DOM node. 
	Add modifier classes only to blocks/elements they modify, and keep the original class:

	<div class="block block--mod">...</div>
	<div class="block block--size-big block--shadow-yes">...</div>

	Use modifier class name as selector:

	.block--hidden { }
	
	To alter elements based on a block-level modifier:
	.block--mod .block__elem { }

	Element modifier:
	.block__elem--mod { }

	.site-search--full {} /* Modifier */


Example

	Suppose you have block form with modifiers 
	theme: "xmas" 
	and 
	simple: true 
	and with elements 
	input 
	and 
	submit, 
	and element 
	submit 
	with its own modifier 
	disabled: true 
	for not submitting form while it is not filled:

	<form class="form form--theme-xmas form--simple">
	  <input class="form__input" type="text" />
	  <input class="form__submit form__submit--disabled"  type="submit" />
	</form>

	.form { }
	.form--theme-xmas { }
	.form--simple { }
	.form__input { }
	.form__submit { }
	.form__submit--disabled { }

Example

	button
	
	We can have a normal button for usual cases, and two more states for different ones. 
	Because we style blocks by class selectors with BEM, we can implement them using any tags we want (button, a or even div). 
	The naming rules tell us to use block--modifier-value syntax.

	<button class="button">
		Normal button
	</button>

	<button class="button button--state-success">
		Success button
	</button>

	<button class="button button--state-danger">
		Danger button
	</button>

	.button {
		display: inline-block;
		border-radius: 3px;
		padding: 7px 12px;
		border: 1px solid #D5D5D5;
		background-image: linear-gradient(#EEE, #DDD);
		font: 700 13px/18px Helvetica, arial;
	}
	.button--state-success {
		color: #FFF;
		background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
		border-color: #4A993E;
	}
	.button--state-danger {
		color: #900;
	}

Benefits

	Modularity

		Block styles are never dependent on other elements on a page, so you will never experience problems from cascading.
		You also get the ability to transfer blocks from your finished projects to new ones.

	Reusability

		Composing independent blocks in different ways, and reusing them intelligently, reduces the amount of CSS code that you will have to maintain.
		With a set of style guidelines in place, you can build a library of blocks, making your CSS super effective.

	Structure

		BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.
-----------

Naming convention

.block {}
.block__element {}
.block--modifier {}

------------

.person {}
.person__hand {}
.person--female {}
.person--female__hand {}
.person__hand--left {}

.person {}
.hand {}
.female {}
.female-hand {}
.left-hand {}

-----

<form class="site-search  site-search--full">
    <input type="text" class="site-search__field">
    <input type="Submit" value ="Search" class="site-search__button">
</form>

.media {}
.media__img {}
.media__img--rev {}
.media__body {}

From the way this CSS is written we can already glean that .media__img and .media__body must live inside .media and that .media__img--rev is a slight variation on .media__img. All that information gathered from the names of our CSS selectors alone!


<div class="media">
    <img src="logo.png" alt="Foo Corp logo" class="media__img  media__img--rev">
    <div class="media__body">
        <h3 class="alpha">Welcome to Foo Corp</h3>
        <p class="lede">Foo Corp is the best, seriously!</p>
    </div>
</div>

We can now instantly see that .media is the block, .media__img--rev is an element of .media that has a modifier applied and .media__body is an unmodified element of .media. All through the names of their classes. That is incredibly useful.

-------
.header {}
.header__logo {}

------
<div class="content">
    <h1 class="content__headline">Lorem ipsum dolor...</h1>
</div>