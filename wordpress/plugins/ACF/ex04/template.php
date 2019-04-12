<?php if( have_rows( 'team_member_modules') ): // if we have DB rows 
	while ( have_rows( 'team_member_modules' ) ) : the_row(); // while we have rows 

		if( get_row_layout() == 'team_member_block' ): ?> <!-- if the row-type is team_member_block (Layout 1) -->

			<section class="text-overlay">
				
				
				<?php $team_member_photo == get_sub_field('team_member_photo'); ?>
				<img src="<?php echo $team_member_photo['url']; ?>"> 
				<?php the_sub_field('team_member_full_name'); ?>
				<?php the_sub_field('team_member_job_title'); ?></h1>
				<?php the_sub_field('team_member_bio'); ?></h1>


			</section>
	

		<?php endif; ?>
	<?php endwhile; ?>
<?php endif; ?>