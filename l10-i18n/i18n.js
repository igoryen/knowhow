i18n.js

i18n (aka "g11n")
		________________

			the design and development of a product, application or document content 
			that enables easy l10n for target audiences 
			that vary in culture, region, or language.

			i18n entails:
				1) Designing and developing in a way 
					that removes barriers to l10n or international deployment. 
					This includes such things as 
						- enabling the use of Unicode, or 
						- ensuring the proper handling of legacy character encodings where appropriate, 
						- taking care over the concatenation of strings, 
						- avoiding dependance in code of user-interface string values, etc.

				2) Providing support for features that may not be used until l10n occurs. E.g., 
					- adding markup in your DTD to support bidirectional text, or 
					- for identifying language. Or 
					- adding to CSS support for vertical text or other non-Latin typographic features.
				3) Enabling code to support 
					local, 
					regional, 
					language, or 
					culturally related preferences. 

					Typically this involves 
						- incorporating predefined l10n data and features 
							derived from existing libraries or user preferences. 
						Examples include 
							- date and time formats, 
							- local calendars, 
							- number formats and numeral systems, 
							- sorting and presentation of lists, 
							- handling of personal names and forms of address, etc.
				4) Separating localizable elements from source code or content, 
					such that localized alternatives can be loaded or selected 
					based on the user-s international preferences as needed.


				Notice that these items do not necessarily include 
				the l10n of the content, application, or product into another language; 
				they are design and development practices 
				which allow such a migration to take place easily in the future
				but which may have significant utility even if no l10n ever takes place.

				====================
				i18n can be defined as 
					the process of localizing things globally. 
					It can be considered as the aggregation of l10n 
					done for the local people. 
					Similar to the components of l10n, 
					it also consists of different languages, date format, culture and things like this.

					It is supposed to be implemented 
					when an organization wants to reach people to spread globally. 

					In order to bring i18n in real use, 
					one has to do a lot of researches 
					as everything changes every mile, 
					in terms of culture, language and so on.
					
					For example, 
					--------------------
						Facebook is one of the most used social media websites 
						with millions of peoples as their overwhelmingly active users from the entire globe. 
						That website has taken the process of i18n to a different level.
					
						Even in India, 
						it doesn’t just offer users to operate their website in Hindi 
						but also let them choose any among their sheer local language 
						like Tamil, Bengali and so on. 
						As the l10n has been done by them in the same manner, 
						it could be considered as the best example of i18n.
					--------------------

				==============================
				i18n

					i18n involves 
					planning for and implementing products and services 
					such that their l10n for the target audience and culture 
					will be easy. 
					
					A blend of international expertise and technicality 
					is needed to pull this off. 
					
					New systems are deployed in the process 
					while the ones in use are re-engineered. 
					i18n helps to ensure 
					that when you roll out your services in the selected target countries, 
					there is cost efficiency in the way you do business.

					i18n processes include 
					- making illustrations for documents 
						whereby text is easy to change to another language, 
					- creating space in user interfaces 
						in case there is a need for more space 
						during translation into another language, 
					- making web site graphics and print such 
						that their translation is not expensive, 
					- using examples with global meaning, 
						using tools that are able to give support to international character sets 
					- and making sure that there is data space in software 
						so that messages can be translated 
						from a source language with single-byte character codes 
						to the language of the target audience language 
						that has to make use of multiple-byte character codes.

				================================
				i18n is 
					a set of methodologies and best practices 
					in product design and software development 
					that facilitate l10n. 

					It’s a technical process that is informed by l10n. 
					For example, 
					it’s critical to facilitate local adaptation for 
						- time and date formats, 
						- text directionality, and 
						- text expansion. 
					Without these preparatory steps, 
					translation may not go very far.

				======================
				The term i18n refers to 
					methodologies and best practices to be followed, 
					when designing or developing a product, 
					to enable easy l10n. 
					An internationalized product can be easily and more efficiently localized.

					Do not treat i18n as a separate step 
					in your design or development process, 
					but consider it as a fundamental thought in every stage. 
					It involves following design and development practices 
					that will prepare your product for l10n.

				==========================
				How’s i18n Done?
					If you are designing 
						software, a website or a mobile app, 
						i18n means creating a user interface 
						that is easy to localize. 
						It involves 
						abstracting all localizable components out of the source code 
						and into files that you can hand over easily for l10n.

					Application Framework Support
						If your application framework supports i18n, 
						then you should use the [those] features to design and develop your product. 

						Some of the i18n features to look for in your application framework are:

						- Resource Files
						- Resource Bundle
						- Unicode Support
						- Dynamic UI
						- APIs (To handle multiple locales)

					Designing A Localizable UI

						Most of the UI errors in translation are in connection with the text. 
						Translated text may take up less space or more, 
						leading to your design appearing crowded or spread out.

						Allow room for expansion or contraction 
						while creating your UI. 
						You should also take into consideration 
						RTL languages like Arabic (right to left text).

						It would be ideal to program dynamic UI expansion 
						using features supported by your framework. 
						For example, 
						iOS offers the “Auto Layout” feature, 
						using which your views realign as required 
						for any locale. 
						Similarly, for Android apps, 
						you can use “Fragments” to build dynamic UI.

					Externalizing All Locale-Variable Data
						One of the essential practices for i18n is 
						externalizing all user-visible strings to a file, 
						typically referred to as an external resource file. 
						During l10n, 
						you will end up with 
						multiple versions 
						of these external resource files, 
						one for every locale.

						For example, 
						if you are designing an iOS app, 
						such files, containing localizable strings, 
						are called as the Strings file. 
						You should organize them in locale-specific directories, 
						with one Localizable.strings file for each language you support.

						en.project/Localizable.strings	
						“name”=”Your Name”;
						“greeting”=”Welcome”;

						de.project/Localizable.strings
						“name”=”Dein Name”;
						“greeting”=”herzlich willkommen”;

=============
https://www.lionbridge.com/blog/translation-l10n/l10n-g11n-i18n-whats-the-difference/

	i18n is 
	a corporate strategy 
	that involves making products and services 
	as adaptable as possible, 
	so they can easily enter different national markets. 

	i18n often requires 
	the assistance of subject-matter experts, 
	technical experts, 
	and people with international experience. 

	Products intended for use by speakers of multiple languages 
	typically undergo an i18n process. 
	
	For example, 
	----------------
		IKEA internationalizes the assembly instructions for its furniture 
		by using only diagrams and illustrations, 
		without including any text that would need to be translated. 
		Products with instructions that do require translation 
		are still often written 
		with the goal of being as culturally-neutral as possible. 
		This, of course, is easier said than done.
	-----------------------------

	In the case of software products and electronics, 
	i18n involves a number of different concerns:

	Data encoding: 
		The ASCII character encoding is sufficient for texts in most Western European languages. 
			However, languages that use non-Latin alphabets 
			(such as Russian, Chinese, Hindi, and Korean) 
			require larger character encodings such as Unicode.

	Hardware support: 
		Software designers must consider 
		that certain hardware devices may not be available in all countries.

	User interface: 
		If a software application will be translated into multiple languages, 
		the user interface needs to include enough space for the text in all of these languages.

	According to most definitions, 
	companies must first internationalize 
	before they can localize a product. 


	================
	https://www.lionbridge.com/blog/translation-l10n/l10n-g11n-i18n-whats-the-difference/
	i18n is 
	the practice of designing products and services, 
	as well as structuring the internal operations of a company, 
	in a way that facilitates expansion into international markets.

	// you can export your products and services only if they are internationalized.
	// To internationalize = to exportabilize.

	Productive forces must be internationalized.
	internationalized productive forces produce products that are easily localized.




================
https://unitedlanguagegroup.com/blog/what-is-the-difference-i18n-g11n/
i18n is a g11n Task

	If g11n is the end goal, 
	then i18n is a task 
	that has to be completed 
	in order for the end goal to be achieved. 

	To internationalize your company’s app or website means 
	designing them with full g11n in mind.

	From a coding standpoint, 
	this means that the text of labels and drop down menus 
	shouldn’t be hardcoded into the application. 
	This will allow for easier translation down the line.

	i18n means 
	writing all web copy in a style like global English, 
	again so that everything is easier to translate into various languages. 
	If sentences are short and vocabulary is limited, 
	the translation process will go much faster and cost less. 
	Additionally, 
	internationalizing an app means it’s designed so that 
	a change in such things as different time formats and currencies won’t affect its functionality.

	When an app or site has been designed internationally, 
	you’re halfway there to full g11n.

==============================
https://en.wikipedia.org/wiki/i18n_and_l10n

i18n is 
	the process of designing a software application 
	so that it can be adapted to various languages and regions 
	without engineering changes. 

	l10n is the process of 
	adapting internationalized software 
	for a specific region or language 
	by translating text and adding locale-specific components. 
	i18n
	provides the infrastructure or flexibility
	i18n is ideally performed only once before l10n, 
	or as an integral part of ongoing development


Acc. to Software without frontiers, 
	the design aspects to consider 
	when internationalizing a product are 
	data encoding, 
	data and documentation, 
	software construction, 
	hardware device support, 
	user interaction

	the key design areas to consider 
	when making a fully internationalized product from scratch are 
	user interaction, 
	algorithm design and data formats, 
	software services, 
	documentation

-----
Business process for internationalizing software

	In order to internationalize a product, 
	it is important to look at 
		- the market
		- a variety of markets 
	that the product will foreseeably enter.

	Details such as 
		- field length for street addresses, 
		- unique format for the address, 
		- ability to make the postal code field optional to address countries that do not have postal codes or the state field for countries that do not have states, plus the introduction of new registration flows that adhere to local laws are just some of the examples that make i18n a complex project.[15][16]

	A broader approach takes into account 
		- cultural factors 
			regarding for example the adaptation of the business process logic or 
			the inclusion of individual cultural (behavioral) aspects.

	Already in the 1990s, 
		companies 
			such as Bull 
		used machine translation (Systran) in large scale, 
		for all their translation activity: 
		human translators handled pre-editing 
			(making the input machine-readable) 
		and post-editing.


....
Engineering

	Both 
		~ in re-engineering an existing software or 
		~ designing a new internationalized software, 
	the first step of i18n is 
	to split each potentially locale-dependent part 
	(whether code, text or data) 
	into a separate module. 

	Each module can then 
	~ either rely on a standard library/dependency or 
	~ be independently replaced as needed for each locale.

	The current prevailing practice is for applications to 
	~ place text in resource strings which are loaded during program execution as needed. 

	These strings, 
	stored in resource files, 
	are relatively easy to translate. 

	Programs are often built to reference resource libraries 
	depending on the selected locale data.

	The storage for translatable and translated strings 
	is sometimes called a "message catalog" 
	as the strings are called messages. 

	The "message catalog" generally comprises 
	~ a set of files in a specific l10n format and 
	~ a standard library to handle said format. 

	One software library and format that aids this is !gettext!.

	Thus to get an application to support multiple languages 
	one would design the application to select the relevant language resource file at runtime. 

	The code required to manage data entry verification 
	and many other locale-sensitive data types 
	also must support differing locale requirements. 
	Modern development systems and operating systems 
	include sophisticated libraries 
	for international support of these types, 
	see also Standard locale data above.

	Many l10n issues 
	(e.g. writing direction, text sorting) 
	require more profound changes in the software 
	than text translation. 

	For example, 
	OpenOffice.org achieves this with compilation switches.




	....

	Process

	A g11n method includes, after planning, three implementation steps: 
	1) i18n, 
	2) l10n and 
	3) quality assurance.

	To some degree (e.g. for quality assurance), 
	development teams include 
	someone who handles the basic/central stages of the process 
	which then enable all the others.

	Such persons typically understand foreign languages and cultures 
	and have some technical background. 

	Specialized technical writers are required 
	to construct a culturally appropriate syntax 
	for potentially complicated concepts, 
	coupled with engineering resources 
	to deploy and test the l10n elements.

	Once properly internationalized, 
	software can rely on more decentralized models for l10n: 
	free and open source software 
	usually rely on self-l10n by end-users and volunteers, 
	sometimes organized in teams.
	
	The KDE3 project, for example, 
	-----------------
		has been translated into over 100 languages;
		MediaWiki in 270 languages, of which 100 mostly complete as of 2016.
	-----------------

	When translating existing text to other languages, 
	it is difficult to maintain the parallel versions of texts 
	throughout the life of the product.
	For instance, 
	--------------------
		if a message displayed to the user is modified, 
		all of the translated versions must be changed.
	--------------------
.......
	Commercial considerations

	In a commercial setting, 
	the benefit from l10n is access to more markets. 

	e.g.
	---------------
		In the early 1980s, 
		Lotus 1-2-3 took two years to separate program code and text 
		and lost the market lead in Europe over Microsoft Multiplan. 

		MicroPro found that 
		using an Austrian translator for the West German market 
		caused its WordStar documentation to, an executive said, 
		not "have the tone it should have had".
	--------------------
	However, 
	there are considerable costs involved, 
	which go far beyond engineering. 
	Further, 
	business operations must adapt to manage the production, 
	storage and distribution of multiple discrete localized products, 
	which are often being sold in completely different currencies, 
	regulatory environments and tax regimes.

	Finally, 
	sales, marketing and technical support 
	must also facilitate their own operations in the new languages, 
	in order to support customers for the localized products. 
	
	Particularly for relatively small language populations, 
	it may never be economically viable 
	to offer a localized product. 
	Even where large language populations could justify l10n for a given product, 
	and a product-s internal structure already permits l10n, 
	a given software developer or publisher may lack the size and sophistication 
	to manage the ancillary functions 
	associated with operating in multiple locales.