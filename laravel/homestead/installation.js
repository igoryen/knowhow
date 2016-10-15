https://www.codementor.io/php/tutorial/how-to-install-laravel-5-xampp-windows

# install xampp 

# install Composer

# set up the virtual hosts
	c:\Windows\System32\drivers\etc\hosts
		127.0.0.1 		site8
		
	c:\xampp\apache\conf\extra\httpd-vhosts.conf
		<VirtualHost *:80>
		    DocumentRoot "C:\aaa\ig\eggfruit_mvc\public"
		    ServerName site8
		    <Directory "C:\aaa\ig\eggfruit_mvc\public">
		        AllowOverride AuthConfig FileInfo Indexes Limit Options
		        Allow from all
		        Require all granted
		    </Directory>
		</VirtualHost>


# install laravel into "C:\xampp\htdocs"
	PS C:\xampp\htdocs> composer create-project laravel/laravel laravel "5.*"
	Installing laravel/laravel (v5.2.31)
	  - Installing laravel/laravel (v5.2.31)
	    Downloading: 100%

	Created project in laravel // i.e. at c:\xampp\htdocs\laravel\
	> php -r "copy('.env.example', '.env');"
	
	Loading composer repositories with package information
	Updating dependencies (including require-dev)
	  - Installing vlucas/phpdotenv (v2.3.0)
	    Downloading: 100%

	  - Installing symfony/polyfill-mbstring (v1.2.0)
	    Downloading: 100%

	  - Installing symfony/var-dumper (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/translation (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/routing (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/process (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/polyfill-util (v1.2.0)
	    Downloading: 100%

	  - Installing symfony/polyfill-php56 (v1.2.0)
	    Downloading: 100%

	  - Installing symfony/http-foundation (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/event-dispatcher (v3.1.3)
	    Downloading: 100%

	  - Installing psr/log (1.0.0)
	    Downloading: 100%

	  - Installing symfony/debug (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/http-kernel (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/finder (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/console (v3.0.9)
	    Downloading: 100%

	  - Installing swiftmailer/swiftmailer (v5.4.3)
	    Downloading: 100%

	  - Installing jakub-onderka/php-console-color (0.1)
	    Downloading: 100%

	  - Installing jakub-onderka/php-console-highlighter (v0.3.2)
	    Downloading: 100%

	  - Installing dnoegel/php-xdg-base-dir (0.1)
	    Downloading: 100%

	  - Installing nikic/php-parser (v2.1.0)
	    Downloading: 100%

	  - Installing psy/psysh (v0.7.2)
	    Downloading: 100%

	  - Installing paragonie/random_compat (v1.4.1)
	    Downloading: 100%

	  - Installing nesbot/carbon (1.21.0)
	    Downloading: 100%

	  - Installing mtdowling/cron-expression (v1.1.0)
	    Downloading: 100%

	  - Installing monolog/monolog (1.21.0)
	    Downloading: 100%

	  - Installing league/flysystem (1.0.25)
	    Downloading: 100%

	  - Installing jeremeamia/superclosure (2.2.0)
	    Downloading: 100%

	  - Installing doctrine/inflector (v1.1.0)
	    Downloading: 100%

	  - Installing classpreloader/classpreloader (3.0.0)
	    Downloading: 100%

	  - Installing laravel/framework (5.2.41)
	    Downloading: 100%

	  - Installing fzaninotto/faker (v1.6.0)
	    Downloading: 100%

	  - Installing hamcrest/hamcrest-php (v1.2.2)
	    Downloading: 100%

	  - Installing mockery/mockery (0.9.5)
	    Downloading: 100%

	  - Installing symfony/yaml (v3.1.3)
	    Downloading: 100%

	  - Installing sebastian/version (1.0.6)
	    Downloading: 100%

	  - Installing sebastian/global-state (1.1.1)
	    Downloading: 100%

	  - Installing sebastian/recursion-context (1.0.2)
	    Downloading: 100%

	  - Installing sebastian/exporter (1.2.2)
	    Downloading: 100%

	  - Installing sebastian/environment (1.3.7)
	    Downloading: 100%

	  - Installing sebastian/diff (1.4.1)
	    Downloading: 100%

	  - Installing sebastian/comparator (1.2.0)
	    Downloading: 100%

	  - Installing doctrine/instantiator (1.0.5)
	    Downloading: 100%

	  - Installing phpunit/php-text-template (1.2.1)
	    Downloading: 100%

	  - Installing phpunit/phpunit-mock-objects (2.3.8)
	    Downloading: 100%

	  - Installing phpunit/php-timer (1.0.8)
	    Downloading: 100%

	  - Installing phpunit/php-file-iterator (1.4.1)
	    Downloading: 100%

	  - Installing phpunit/php-token-stream (1.4.8)
	    Downloading: 100%

	  - Installing phpunit/php-code-coverage (2.2.4)
	    Downloading: 100%

	  - Installing webmozart/assert (1.0.2)
	    Downloading: 100%

	  - Installing phpdocumentor/reflection-common (1.0)
	    Downloading: 100%

	  - Installing phpdocumentor/type-resolver (0.2)
	    Downloading: 100%

	  - Installing phpdocumentor/reflection-docblock (3.1.0)
	    Downloading: 100%

	  - Installing phpspec/prophecy (v1.6.1)
	    Downloading: 100%

	  - Installing phpunit/phpunit (4.8.27)
	    Downloading: 100%

	  - Installing symfony/css-selector (v3.0.9)
	    Downloading: 100%

	  - Installing symfony/dom-crawler (v3.0.9)
	    Downloading: 100%

	symfony/var-dumper suggests installing ext-symfony_debug ()
	symfony/translation suggests installing symfony/config ()
	symfony/routing suggests installing doctrine/annotations (For using the annotation loader)
	symfony/routing suggests installing symfony/config (For using the all-in-one router or any loader)
	symfony/routing suggests installing symfony/dependency-injection (For loading routes from a service)
	symfony/routing suggests installing symfony/expression-language (For using expression matching)
	symfony/event-dispatcher suggests installing symfony/dependency-injection ()
	symfony/http-kernel suggests installing symfony/browser-kit ()
	symfony/http-kernel suggests installing symfony/class-loader ()
	symfony/http-kernel suggests installing symfony/config ()
	symfony/http-kernel suggests installing symfony/dependency-injection ()
	psy/psysh suggests installing ext-pcntl (Enabling the PCNTL extension makes PsySH a lot happier :))
	psy/psysh suggests installing ext-posix (If you have PCNTL, you`ll want the POSIX extension as well.)
	psy/psysh suggests installing ext-readline (Enables support for arrow-key history navigation, and showing and manipulating command history.)
	psy/psysh suggests installing ext-pdo-sqlite (The doc command requires SQLite to work.) paragonie/random_compat suggests installing ext-libsodium (Provides a modern crypto API that can be used to generate random bytes.)
	
	monolog/monolog suggests installing aws/aws-sdk-php (Allow sending log messages to AWS services like DynamoDB)
	monolog/monolog suggests installing doctrine/couchdb (Allow sending log messages to a CouchDB server)
	monolog/monolog suggests installing ext-amqp (Allow sending log messages to an AMQP server (1.0+ required))
	monolog/monolog suggests installing ext-mongo (Allow sending log messages to a MongoDB server)
	monolog/monolog suggests installing graylog2/gelf-php (Allow sending log messages to a GrayLog2 server)
	monolog/monolog suggests installing mongodb/mongodb (Allow sending log messages to a MongoDB server via PHP Driver)
	monolog/monolog suggests installing php-amqplib/php-amqplib (Allow sending log messages to an AMQP server using php-amqp lib)
	monolog/monolog suggests installing php-console/php-console (Allow sending log messages to Google Chrome)
	monolog/monolog suggests installing rollbar/rollbar (Allow sending log messages to Rollbar)
	monolog/monolog suggests installing ruflin/elastica (Allow sending log messages to an Elastic Search server)
	monolog/monolog suggests installing sentry/sentry (Allow sending log messages to a Sentry server)
	
	league/flysystem suggests installing league/flysystem-aws-s3-v2 (Allows you to use S3 storage with AWS SDK v2)
	league/flysystem suggests installing league/flysystem-aws-s3-v3 (Allows you to use S3 storage with AWS SDK v3)
	league/flysystem suggests installing league/flysystem-azure (Allows you to use Windows Azure Blob storage)
	league/flysystem suggests installing league/flysystem-cached-adapter (Flysystem adapter decorator for metadata caching)
	league/flysystem suggests installing league/flysystem-copy (Allows you to use Copy.com storage)
	league/flysystem suggests installing league/flysystem-dropbox (Allows you to use Dropbox storage)
	league/flysystem suggests installing league/flysystem-eventable-filesystem (Allows you to use EventableFilesystem)
	league/flysystem suggests installing league/flysystem-rackspace (Allows you to use Rackspace Cloud Files)
	league/flysystem suggests installing league/flysystem-sftp (Allows you to use SFTP server storage via phpseclib)
	league/flysystem suggests installing league/flysystem-webdav (Allows you to use WebDAV storage)
	league/flysystem suggests installing league/flysystem-ziparchive (Allows you to use ZipArchive adapter)
	laravel/framework suggests installing aws/aws-sdk-php (Required to use the SQS queue driver and SES mail driver (~3.0).)

	laravel/framework suggests installing doctrine/dbal (Required to rename columns and drop SQLite columns (~2.4).)
	laravel/framework suggests installing guzzlehttp/guzzle (Required to use the Mailgun and Mandrill mail drivers and the ping methods on schedules (~5.3|~6.0).)
	laravel/framework suggests installing league/flysystem-aws-s3-v3 (Required to use the Flysystem S3 driver (~1.0).)
	laravel/framework suggests installing league/flysystem-rackspace (Required to use the Flysystem Rackspace driver (~1.0).)
	laravel/framework suggests installing pda/pheanstalk (Required to use the beanstalk queue driver (~3.0).)
	laravel/framework suggests installing predis/predis (Required to use the redis cache and queue drivers (~1.0).)
	laravel/framework suggests installing pusher/pusher-php-server (Required to use the Pusher broadcast driver (~2.0).)
	laravel/framework suggests installing symfony/psr-http-message-bridge (Required to psr7 bridging features (0.2.*).)
	
	sebastian/global-state suggests installing ext-uopz (*)
	phpunit/phpunit-mock-objects suggests installing ext-soap (*)
	phpunit/php-code-coverage suggests installing ext-xdebug (>=2.2.1)
	phpunit/phpunit suggests installing phpunit/php-invoker (~1.1)
		
		Writing lock file
		Generating autoload files
		> Illuminate\Foundation\ComposerScripts::postUpdate
		> php artisan optimize
		Generating optimized class loader
		> php artisan key:generate
		Application key [base64:tt8moWo4ziaPL9oqmci+LAVZatqxe1Ikd9raggOVJys=] set successfully.
	PS C:\xampp\htdocs>

# restart Apache from xampp panel