Translation of text is done through the translator service (Translator). 
To translate a block of text (called a message), 
use the trans() method. 

Suppose, for example, 
that you're translating a simple message from inside a controller:

----------------------------------
	use Symfony\Contracts\Translation\TranslatorInterface;

	public function index(TranslatorInterface $translator)
	{
	    $translated = $translator->trans('Symfony is great');

	    // ...
	}
----------------------------------
When this code is executed, 
Symfony will attempt to translate the message "Symfony is great" 
based on the locale of the user. 

For this to work, 
you need to tell Symfony how to translate the message 
via a "translation resource", 
which is usually a file that contains 
a collection of translations for a given locale. 

This "dictionary" of translations can be created 
in several different formats, 
XLIFF being the recommended format: