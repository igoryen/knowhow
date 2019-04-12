	<?php
		if( have_rows( 'flexible_content') ): // if we have DB rows 
			while ( have_rows( 'flexible_content' ) ) : the_row(); // while we have rows 
				if( get_row_layout() == 'image_text_overlay' ): ?> <!-- if the row-type is image_text_overlay (Layout 1) -->

					<section class="text-overlay">
						
						<h1><?php the_sub_field('overlay_text'); ?></h1> <!-- Layout #1 > Overlay Text -->
						<?php $background_image == get_sub_field('background_image'); ?>
						<img src="<?php echo $background_image['url']; ?>"> 

					</section>


					<?php elseif( get_row_layout() == 'image_and_text_block' ): ?>

						<section class="text-centered">
							<?php $featured_image = get_sub_field('featured_image'); ?>
							<img src="<?php echo $featured_image['url']; ?>"> 
							
							<section class="text-block">
								<?php the_sub_field("description_text"); ?>
							</section>
						</section>					

					<?php elseif( get_row_layout() == 'callout_blocks' ): ?>

							<?php if( have_rows('block_collection') ): /* if the repeater has rows */?>

								<section class="text-callout">
									<?php while(have_rows('block_collection')): the_row(); ?>

										<?php $block_image = get_sub_field('block_image'); ?>
										<section class="text-callout-block">
											<h1><?php the_sub_field('block_text'); ?></h1>
											<img src="<?php echo $block_image['url']; ?>"> 
										</section>

									<?php endwhile; ?>
								</section>

							<?php endwhile; ?>


						<section>
							<h1>Callout Blocks</h1>
						</section>					

				<?php endif; ?>
			<?php endwhile; ?>
		<?php endif; ?>