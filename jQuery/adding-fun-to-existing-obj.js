Source:
https://stackoverflow.com/questions/1950038/jquery-fire-event-if-css-class-changed/24284069#24284069

$(function() { // Line A
	(function($) {
	    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

	    $.fn.attrchange = function(callback) {
	        if (MutationObserver) {
	            var options = {
	                subtree: false,
	                attributes: true
	            };

	            var observer = new MutationObserver(function(mutations) {
	                mutations.forEach(function(e) {
	                    callback.call(e.target, e.attributeName);
	                });
	            });

	            return this.each(function() {
	                observer.observe(this, options);
	            });

	        }
	    }
	})(jQuery);

	//Now you need to append event listener
	$('body *').attrchange(function(attrName) {

	    if(attrName=='class'){
	            alert('class changed');
	    }else if(attrName=='id'){
	            alert('id changed');
	    }else{
	        //OTHER ATTR CHANGED
	    }

	});
}); // Line Z

/*----------------------------------------
I made these changes
1) set the parent to be watched
2) Omitted line A and line Z, and placed the rest into the init().
-----------------------------------------*/


(function($) {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    $.fn.attrchange = function(callback) {
        if (MutationObserver) {
            var options = {
                subtree: false,
                attributes: true
            };

            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(e) {
                    callback.call(e.target, e.attributeName);
                });
            });

            return this.each(function() {
                observer.observe(this, options);
            });

        }
    }
})(jQuery);


//Now you need to append event listener
var attrName = "class";
$('#specDir').attrchange(function(attrName) { // watch the parent

    if(attrName=='class'){
        // alert('class changed');
        if( $(this).css('display') !== "none" ) { // if/when the parent becomes visible
            
            // alert(" it's on!");
            $('#spec_dir_textarea').on( 'change keyup keydown paste cut', 'textarea', function (){ // register the event on the child
                // console.log("Hop!");
                $(this).height(0).height(this.scrollHeight);
            }).find( 'textarea' ).change();
        }
    }else if(attrName=='id'){
            // alert('id changed');
    }else{
        //OTHER ATTR CHANGED
    }

});