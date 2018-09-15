<?php



locate_template('includes/wp_booster/td_single_template_vars.php', true);



get_header();



global $loop_module_id, $loop_sidebar_position, $post, $td_sidebar_position;



$td_mod_single = new td_module_single($post);

?>

<div class="td-main-content-wrap td-container-wrap">



    <div class="td-container td-post-template-default <?php echo $td_sidebar_position; ?>">

        <div class="td-pb-row">

            <?php



            //the default template

            switch ($loop_sidebar_position) {

                default: //sidebar right

					?>

                        <div class="td-pb-span9 td-main-content" role="main">

                            <div class="td-ss-main-content">
                                
                                <div class="td-crumb-container"><?php echo td_page_generator::get_single_breadcrumbs($td_mod_single->title); ?></div>
                                <?php

                                locate_template('loop-single.php', true);

                                comments_template('', true);

                                ?>

                            </div>

                        </div>

                        <div class="td-pb-span3 td-main-sidebar" role="complementary">

                            <div class="td-ss-main-sidebar">

                                <?php get_sidebar(); ?>

                            </div>

                        </div>

                    <?php

                    break;



                case 'sidebar_left':

                    ?>

                        <div class="td-pb-span9 td-main-content <?php echo $td_sidebar_position; ?>-content" role="main">

                            <div class="td-ss-main-content">

                                <?php

                                locate_template('loop-single.php', true);

                                comments_template('', true);

                                ?>

                            </div>

                        </div>

		                <div class="td-pb-span3 td-main-sidebar" role="complementary">

			                <div class="td-ss-main-sidebar">

				                <?php get_sidebar(); ?>

			                </div>

		                </div>

                    <?php

                    break;



                case 'no_sidebar':

                    td_global::$load_featured_img_from_template = 'td_1068x0';

                    ?>

                        <div class="td-pb-span12 td-main-content" role="main">

                            <div class="td-ss-main-content">

                                <?php

                                locate_template('loop-single.php', true);

                                comments_template('', true);

                                ?>

                            </div>

                        </div>

                    <?php

                    break;



            }

            ?>
		
        </div> <!-- /.td-pb-row -->
	<h3>
			Bình luận
		</h3><div class="fb-comments" data-href="https://fasttrack.edu.vn" data-numposts="20" width="100%" data-colorscheme="light" data-version="v3.1"></div>	
    </div> <!-- /.td-container -->
		
</div> <!-- /.td-main-content-wrap -->
<!-- Comment facebook -->
<?php



get_footer();