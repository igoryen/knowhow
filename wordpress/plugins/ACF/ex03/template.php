


<?php
	if( has_post_thumbnail() && ( is_page() || is_singular( array( 'cpt_slug_1', 'cpt_slug_2') ) ) {
		$bg_img = wp_get_attachment_url( get_post_thumbnail_id(), 'full' );
	}
?>


<header id="masthead" class="site-header" <?php if( !empty($bg_img) ) { echo 'style="background-image: url(' . $bg_img . ');"'; } ?> role="banner">
	<!-- ... -->
</header>