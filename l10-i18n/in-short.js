You have to internationalize in order to localize.
First internationalize then localize.
i18n is step 1, l10n is step 2.
i18n is planning, l10n is implementing.
i18n leads l10n.

the product MUST be internationalized
so that it can be localized.

i18n is the gun, l10n is the bullets.

E.g.
-----------
	A polyglot is a person 
	who is i18nized from birth 
	and can easily localize himself.
-----------------

If you want to globalize your work
you need to internationalize your product
and continuously work on localizing it.

Going global!

A globalized enterprise 
has its products internationalized
and works continuously on l10n of their content.


Some data is locale-variable
Externalize them ALL! 

- external resource files



g11n = what your goal is
i18n = the technical part
l10n = content authors part

the process of i18n.

IKEA
i18n excludes l10n? 
= no text, just pictures

2 options:
make it culturally-neutral
localize for every locale

a locale is a geographical location.

Data encoding:
	ASCII: bad, not enough.
	Unicode: good. 

You want to go global? You want g11n? 
Take these steps in their order:
1) i18n
2) l10n

The 2 processes:
	i18n and l10n



i18n = exportabilization, make X exportable.

Robot
Robot must be exported
It must be made exportable
in order to be exportable
it must be internationalized
an internationalized robot can adapt to locales it ships to
its speech is localized

C-3PO
is it internationalized?
partly.
its appearance it not localized.
its speech is localized.



====
g11n is a strategy of planning
determined before the beginning of development 

if your planning did not include g11n
if your product already exists but is not globalized
it will have to be globalized retrospectively
this is harder to do.

You need the efforts from:
- copy writers, 
- designers
- web developers. 

g11n is the strategy
it includes the processes:
1. i18n
2. l10n

redesigning it with g11n in mind

E.g., a thermometer app that was internationalized
can easily switch between temperature scales

A calendar app that is internationalized
can easily switch between 
- languages (for weekdays)
- Sunday as first day or as last day

You globalize
by internationalizing your product 
and then localizing it for each locale

You internationalize once.
You localize continuously:
	for Mexico;
	for Quebec;
	for others.

1) build it with the necessary 



g11n takes open mindedness 
taking the world into consideration

Globalize:
how to adapt the product to people of other cultures

if project is not internationalized
it will have to be re-ingineered

Create a "message catalog"
i.e. a catalog of "messages" (strings)

Functionalities to internationalize:
--------------------------------------

	- avoiding dependance in code on user-interface string values, etc
	- Data encoding (use Unicode)
	- DB update to provide for Unicode chars
	- documentation, 
	- encoding 1: enabling the use of Unicode
	- encoding 2: ensuring the proper handling of legacy character encodings where appropriate
	- format of input fields for address: ability to make the postal code field optional to address countries that do not have postal codes or the state field for countries that do not have states, plus the introduction of new registration flows that adhere to local laws are just some of the examples that make i18n a complex project.[15][16]
	- format of input fields for addresses: field length for street addresses, 
	- format of input fields for calendars (locale-dependent)
	- format of input fields for currency
	- format of input fields for date and time
	- format of input fields for names - handling of personal names and forms of address, etc.
	- format of input fields for number and numeral systems, 
	- format of input fields for numbers: decimal separator (periods, commas)
	- graphics: images and icons
	- graphics: images with text on top
	- hardware device support, 
	- lists - sorting and presentation of lists, 
	- locale identify: (by url or by headers)
	- locale switcher (in the header) (language)
	- graphics: make some elements culturally-neutral
	- message catalogs
	- show/hide | add/or remove | input fields depending on locale (patronymic (Rus), decimal (Yen))
	- text directionality (Hebrew, Arabic, Taiwan)
	- UI provide for text expansion: layout to provide space when needed
	- user interaction
--------------------------------------


Elements of i18n
------------------------
	- abstracting all localizable components out of the source code and into files that you can hand over easily for l10n.
------------------------


Examples from commerce
------------------------
	- Amazon
	- Apple
		Elements it has internationalized:
			Siri-s 
				~ its language (language or language variant (AmE, GBE, AuE, NZE))
				~ conventions it uses in its speech
					- temperature scales - l10n: recalculation between F and C 
					- systems of measurements - l10n: recalculation between metric, imperial etc.
	- Facebook
	- IKEA
		culturally-neutal (images)
	- McDonalds
		it embraced g11n
		it exports to 100 countries
		the 2 processes are happening in it.

		Elements it has internationalized
			- menus
				localized for Israel (kosher)
				localized for China (spicy)
				localized for India (vegan)
			- work schedules
				localized for Israel (closed on special days)
	- Netflix
		Netflix
		g11n = export its services
		i18n = add functionality to switch subtitles and audio
		l10n = create subtitles and audio 
	- Pixar
		Elements it has internationalized:
			video 
				- localized the character reading motion ("Inside Out") for RTL countries (Israel, Arabsphere, Arab states)
	- Browsers
		i18n
		Browsers
		are internationalized
		they are made to display all kinds of stuff 
		no matter the locale

------------------------

Kinds of products:
	- software products
		BOTH form and content are switchable
	- hardware products
		only form is switchable

CX has to be re-engineered in the process of i18n


Concept
----------------------
	i18n is done once
	l10n is repeated for every locale (e.g. localize it for Mexico)
----------------------

1. internationalize (i.e. prepare for localization)
2. localize

"Message catalog" - The storage for translatable and translated strings aka "messages" 


Maintaining parallel versions of text