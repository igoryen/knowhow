ISSUE: Google Analytics Labels
==================
	tracking the links on our website

	we need to submit actions to google analytics
	we have a library to do that

	Needed:

	3 pieces of info:

	1) category "About" or "Automobiles"
	2) action "Click"
	3) label

	links <a></a>: 
	- internal links (to a spot inside the website)
		must have the CLAC (class, label, action, category):
		class="ga_link" // added to the existing class
		data-label=""
		data-action=""
		data-category=""
		
		they are read automatically

	- external links (to the outside)
		must have the CLACH (class, label, action, category, href):
		class="external_link" // it makes an "exit modal" pop up that says "you are leaving our website"
		data-label=""
		data-action=""
		data-category=""
		data-href="" // href="" (without the 'data-' prefix) is outdated as it creates the ghost link problem
		

	ga (google analytics) events 
	can also be tracked manually with the library

	======================
	Lexus.Analytics.trackEvent({
	     category :"",
	     action : "",
	     label : ""
	});
	======================

	you can verify tracking
	by checking the network activity on your browser // tab Network
	(don`t forget to check "Persistent Logs" in the Firefox Settings)
	you should see an ajax request
	over to google analytics
	Search for the text of your GA label (data-label="")
	in the text of the request

	collect?v=…


	
	http://www.google-analytics.com/collect?
		v=1&
		_v=j39&
		a=300022214&
		t=event&
		_s=2&
		dl=http://staging.lexus.ca/lexus/fr/about/amazing-in-motion&
		ul=en-us&
		de=UTF-8&
		dt=L`imagination en mouvement | Info-Lexus | Lexus Canada&
		sd=24-bit&
		sr=1122x943&
		vp=1122x943&
		je=1&
		fl=18.0 r0&
		ec=Global&
		ea=Browser size&
		el=1122 x 943&
		_u=ACCAgEAB~&
		jid=&
		cid=979367466.1442525779&
		tid=UA-10758299-14&
		z=211279579

	
	https://docs.google.com/spreadsheets/d/1RJZu9mxYjLThzCJw6eShdIBuDANJnGYv08ISPZIfvsM/edit#gid=0
	Add missing label - see line 99.
	Correct code for lines 101-106 ... showing double for each click.
	
	=============================
	LEXUS GA tracking document
	=============================

	=============================
	Section
		e.g. "About Lexus"
	Page
		e.g. "Amazing in Motion"
	Subpage
		e.g. "Lexus Events"
	Event
		e.g. "Learn More"
	...................
	Category
		e.g. "About"
	Action
		e.g. "click"
	Label 
		e.g. "Designtour_Learn_More_Events"

	===========================
	FF persistent logs
	===========================
	https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Settings_2

	```
	BEFORE
	-------------------------------------
	<a 	class="section_trigger"
		href="#/lexus-events/performance-tour" 
		data-href="#performance-tour" 
		>
		<#if locale=="fr">
		    En savoir plus
		<#else>
		    Find out now
		</#if>
	</a>
	====================================
	AFTER
	------------------------------------
	<a 	href="#/lexus-events/performance-tour" 
		class="section_trigger ga_link"  				<---<< // added `ga_lilnk`
		data-label="Performancetour_Learn_More_Events"> <---<<
		data-action="Click" 							<---<<
		data-category="About" 							<---<<
		data-href="#performance-tour">

		<#if locale=="fr">
		    En savoir plus
		<#else>
		    Find out now
		</#if>
	</a>
	====================================
	```

	<a 	href="#/lexus-events/design-tour" 
		class="section_trigger ga_link" 
		data-label="Designtour_Learn_More_Events"
		data-action="Click" 
		data-category="About" 
		data-href="#design-tour" 
		>
	                           ...
	</a>&gt;

-------------------------------

T,
is this correct:
Your experiences may vary. 
Visit <a class="external_link ga_scroll" 
		data-action="Virtual Pageview" 
		data-category="P&amp;S" 
		data-label="maintenance_service_jdpower" 
		data-href="http://www.jdpower.com/">jdpower.com</a>

noooooooo

i knew it

a virtual page view is triggered when a user scrolls to a particular section of a website
and lingers there for a second or two
there is no clicking action associated with a virtual page view

wil shouldve sent you a snippet of code
the only thing you need to do is add a `ga_scroll` class to the element your want tracked (your JD power container)
and give it a `data-href` name

she gave this example
`<section 
	id="autoshow_booth" 
	class="display_section ga_scroll" 
	data-href="#lexusbooth">``

yeah
i sent her that
the `data-href` should be supplied to you in the GA spreadsheet
there is no need to specify an action or category
	data-action="%%%" // not needed
	data-category="%%%" // not needed
	// not CLAC ut CL

just take a look at the autoshow page, or any other part of the website
where `ga_scroll` is used
if you need more examples
you should be able to see in the console when the virtual page view is triggered
 ```track pageview: /lexus/en/about/news-events#lexusbooth```

ok, i’ve seen suchlike things

hey
can you fix this pls
 ```<a class="external_link" 
 		data-action="Virtual Pageview" 
 		data-category="P&amp;S" 
 		data-label="maintenance_service_jdpower" 
 		data-href="http://www.jdpower.com/">jdpower.com</a>```

thanks :simple_smile:

Should it be like this? 
`<a class="external_link"  
	href="http://www.jdpower.com/">jdpower.com</a>`

`external_link` shouldn’t be used with an `href` b/c of ghost click
im talking about the `data-action="Virtual Pageview"`
wait
have you fixed the GA link?
dont push to live preview until you do pls
i reopened your ticket a while back

I now have this:
`<a class="external_link" 
	data-category="P&amp;S" 
	data-label="maintenance_service_jdpower" 
	data-href="http://www.jdpower.com/">jdpower.com</a>`

why did you get rid of the data-action
the link wont track successfully
without the three elements

what should the action be?
the same as every other(edited) link - "Click"

ok, i searched sitewide, and found majority of external links have just `class="external_link"` and `href=""`
nothing was given on the Lexus GA Tracking on google deck

thats outdated
external_link should not use href=""
it was updated to read from data-href="" because of a ghost clicking issue
any recent page should show that

i see the GA tracking on line 808 of the GA document(edited)
and you should know that every CTA/link has a data-action="" of click

yes: // LACH
        data-label=""
        data-action=""
        data-category=""
        data-href=""
        

 ```
 // CLACH
<a class="external_link" 
	data-label="maintenance_service_jdpower" 
	data-action="Click"
	data-category="P&amp;S" 
	data-href="http://www.jdpower.com/">jdpower.com</a>
```
Is this correct?(edited)

yes
are you sure on the label though?

no, the GA document doesn’t have anything on this link

well then that link doesn’t need to be tracked
i see one for "Click to request a Service Appointment " though
has that one been implemented?

yes

okay

then there are only 2 things to be tracked on the page
- the virtual page view (ga_scroll) on the container
- and the “Click to request a service appointment” cta
the jdpower.ca link is not listed in the GA doc

so then
```<a class="external_link" data-href="http://www.jdpower.com/">jdpower.com</a>`
```
is right?(edited)

yes

thank you for the clarification :thumbsup:

no problem
===============================

Section: Parts & Service	
	Page: Tires	
		Subpage/section: Lexus Tire Store 	
			Events: Scroll to Tire Match Promise	
				Category: P&S	
				Action: Virtual Pageview
				Label: Tires_Lexus_Tire_Store_Tire_Match		

			Event: Click to learn more about Tire Match Promise 	
				Category: P&S	
				Action: Click
				Label: Tires_Lexus_Tire_Store_Tire_Match_Learn_More 		

