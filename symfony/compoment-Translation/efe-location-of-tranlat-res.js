Symfony looks for message files (i.e. translations) 
in the following default locations:

the translations/ directory (at the root of the project);
the Resources/translations/ directory inside of any bundle.

The locations are listed here 
with the highest priority first. 

That is, 
you can override the translation messages of a bundle in the first directory.

The override mechanism works at a key level: 
only the overridden keys need to be listed in a higher priority message file. 
When a key is not found in a message file, 
the translator will automatically fall back 
to the lower priority message files.

The filename of the translation files is also important: 
each message file must be named 
according to the following path: domain.locale.loader:

domain: 
	An optional way to organize messages into groups 
	(e.g. admin, navigation or the default messages) 
	- see Using Message Domains;

locale: 
	The locale that the translations are for 
	(e.g. en_GB, en, etc);

loader: 
	How Symfony should load and parse the file 
	(e.g. xlf, php, yaml, etc).


The loader can be the name of any registered loader. 
By default, Symfony provides many loaders, including:

xlf: XLIFF file;
php: PHP file;
yaml: YAML file.

The choice of which loader to use 
is entirely up to you and is a matter of taste. 
The recommended option is to use xlf for translations. 
For more options, see Loading Message Catalogs.

You can add other directories 
with the "paths" option 
in the configuration:
---------------------------------
	# config/packages/translation.yaml
	framework:
	    translator:
	        paths:
	            - '%kernel.project_dir%/custom/path/to/translations'
---------------------------------