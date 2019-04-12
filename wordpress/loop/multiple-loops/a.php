Multiple Loops

This section deals with advanced use of The Loop. It's a bit technical, but don’t let that scare you. We’ll start with an easy example and work up from there. With a little common sense, patience, and enthusiasm, you too can do multiple loops.

First off, why would one want to use multiple loops? In general, the answer is that you might want to do something with one group of posts, and do something different to another group of posts, but display both groups on the same page. "Something" could mean almost anything; you are only limited by your PHP skill and your imagination.

We will get into examples below, but first you should read about the basics. Take a look at the basic Loop. It consists of:

<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>    
	<!-- do stuff ... -->
	<?php endwhile; ?>
<?php endif; ?>
In English (PHP types and people familiar with code speak can skip to below), the above would be read: If we are going to be displaying posts, then get them, one at a time. For each post in the list, display it according to <!-- do stuff ... -->. When you hit the last post, stop. The do stuff line(s), are template dependent.

A little aside on Do stuff: in this example it is simply a placeholder for a bunch of code that determines how to format and display each post on a page. This code can change depending on how you want your WordPress to look. If you look at the Kubrick theme’s index.php the do stuff section would be everything below:

<?php while ( have_posts() ) : the_post(); ?>
To above:

<?php comments_popup_link( 'No Comments »', '1 Comment »', '% Comments »' ); ?>
An explanation for the coders out there: The have_posts() and the_post() are convenience wrappers around the global $wp_query object, which is where all of the action is. The $wp_query is called in the blog header and fed query arguments coming in through GET and PATH_INFO. The $wp_query takes the arguments and builds and executes a DB query that results in an array of posts. This array is stored in the object and also returned back to the blog header where it is stuffed into the global $posts array (for backward compatibility with old post loops).

Once WordPress has finished loading the blog header and is descending into the template, we arrive at our post Loop. The have_posts() simply calls into $wp_query->have_posts() which checks a loop counter to see if there are any posts left in the post array. And the_post() calls $wp_query->the_post() which advances the loop counter and sets up the global $post variable as well as all of the global post data. Once we have exhausted the loop, have_posts() will return false and we are done.