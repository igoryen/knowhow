Exclude Posts From Some Category
This example demonstrates how to hide a specific Category or Categories from being displayed. In this case, posts from Categories 3 and 8 are excluded. The example is different than the example above in that it makes a change to the query itself.

 <?php $query = new WP_Query( 'cat=-3,-8' ); ?>
 <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>

 <div class="post">
 
 <!-- Display the Title as a link to the Post's permalink. -->
 <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>

 <!-- Display the date (November 16th, 2009 format) and a link to other posts by this posts author. -->
 <small><?php the_time( 'F jS, Y' ); ?> by <?php the_author_posts_link(); ?></small>
 
  <div class="entry">
  	<?php the_content(); ?>
  </div>

  <p class="postmetadata"><?php esc_html_e( 'Posted in' ); ?> <?php the_category( ', ' ); ?></p>
 </div> <!-- closes the first div box -->

 <?php endwhile; 
 wp_reset_postdata();
 else : ?>
 <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
 <?php endif; ?>
Note: If you use this example for your main page, you should use a different Template for your Category archives; otherwise, WordPress will exclude all posts in Category 3 and Category 8, even when viewing that Category Archive! However, if you want to use the same template file, you can avoid this by using the is_home() tag to ensure that posts from Category 3 and Category 8 will only be excluded from the main page:

...
<?php if ( is_home() ) {
$query = new WP_Query( 'cat=-3,-8' );
if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); 
} else {
...
?>
...
There are other Conditional Tags that can be used to control the output depending on whether or not a particular condition is true with respect to the requested page.