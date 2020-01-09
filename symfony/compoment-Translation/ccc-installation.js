// run
composer require symfony/translation

This command creates 
an initial config file 
where you can define the default locale of the application 
and the directory where the translation files are located:

----------------------------
# config/packages/translation.yaml
framework:
    default_locale: 'en'
    translator:
        default_path: '%kernel.project_dir%/translations'
-----------------------------