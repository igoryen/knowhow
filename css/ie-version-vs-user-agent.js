--- Step #: HTML

"About Internet explorer" > 
Version: 11.0.9600.18665
Update Versions: 11.0.42
@ 2013 Microsoft Corporation.

--- Step #: JS
var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform );

// IE 10 == Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)


--- Step #: CSS
html[data-useragent*='MSIE 10.0'] h1 {
  color: blue;
}

--- RESULT: HTML
<HTML 
	data-useragent="Mozilla/4.0 
					(compatible; 
					MSIE 7.0; 
					Windows NT 6.1; 
					WOW64; 
					Trident/7.0; 
					SLCC2; 
					.NET CLR 2.0.50727; 
					.NET CLR 3.5.30729; 
					.NET CLR 3.0.30729; 
					.NET4.0C; 
					.NET4.0E; 
					Media Center PC 6.0)" 

	data-platform="Win32">
	...

--- HTML CSS:
	doesn`t work

	//////////////
	? Why does the version token report the earlier version?

	# You Enabled a Compatibility View for a wabpage

	# You set your browser mode to an earlier version

	/////
--- when Compatibility View mode is off:
<html data-useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; Media Center PC 6.0; rv:11.0) like Gecko" data-platform="Win32">
<head>
<script type="text/javascript">
		