<!-- Instagram -->

<?php if (td_util::get_option('tds_footer_instagram') == 'show') { ?>

<div class="td-main-content-wrap td-footer-instagram-container td-container-wrap <?php echo td_util::get_option('td_full_footer_instagram'); ?>">
    <?php
    //get the instagram id from the panel
    $tds_footer_instagram_id = td_util::get_option('tds_footer_instagram_id');
    ?>

    <div class="td-instagram-user">
        <h4 class="td-footer-instagram-title">
            <?php echo  __td('Follow us on Instagram', TD_THEME_NAME); ?>
            <a class="td-footer-instagram-user-link" href="https://www.instagram.com/<?php echo $tds_footer_instagram_id ?>" target="_blank">@<?php echo $tds_footer_instagram_id ?></a>
        </h4>
    </div>

    <?php
    //get the other panel seetings
    $tds_footer_instagram_nr_of_row_images = intval(td_util::get_option('tds_footer_instagram_on_row_images_number'));
    $tds_footer_instagram_nr_of_rows = intval(td_util::get_option('tds_footer_instagram_rows_number'));
    $tds_footer_instagram_img_gap = td_util::get_option('tds_footer_instagram_image_gap');
    $tds_footer_instagram_header = td_util::get_option('tds_footer_instagram_header_section');

    //show the insta block
    echo td_global_blocks::get_instance('td_block_instagram')->render(
        array(
            'instagram_id' => $tds_footer_instagram_id,
            'instagram_header' => /*td_util::get_option('tds_footer_instagram_header_section')*/ 1,
            'instagram_images_per_row' => $tds_footer_instagram_nr_of_row_images,
            'instagram_number_of_rows' => $tds_footer_instagram_nr_of_rows,
            'instagram_margin' => $tds_footer_instagram_img_gap
        )
    );

    ?>
</div>

<?php } ?>


<!-- Footer -->
<?php
if (td_util::get_option('tds_footer') != 'no') {
    td_api_footer_template::_helper_show_footer();
}
?>


<!-- Sub Footer -->
<?php if (td_util::get_option('tds_sub_footer') != 'no') { ?>
    <div class="td-sub-footer-container td-container-wrap <?php echo td_util::get_option('td_full_footer'); ?>">
        <div class="td-container">
            <div class="td-pb-row">
                <div class="td-pb-span td-sub-footer-menu">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer-menu',
                            'menu_class'=> 'td-subfooter-menu',
                            'fallback_cb' => 'td_wp_footer_menu'
                        ));

                        //if no menu
                        function td_wp_footer_menu() {
                            //do nothing?
                        }
                        ?>
                </div>

                <div class="td-pb-span td-sub-footer-copy">
                    <?php
                    $tds_footer_copyright = stripslashes(td_util::get_option('tds_footer_copyright'));
                    $tds_footer_copy_symbol = td_util::get_option('tds_footer_copy_symbol');

                    //show copyright symbol
                    if ($tds_footer_copy_symbol == '') {
                        echo '&copy; ';
                    }

                    echo $tds_footer_copyright;
                    ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>
</div><!--close td-outer-wrap-->
<div class="no-margin-widget">
	<div class="contact-popup-box">	
		<?php echo do_shortcode('[contact-form-7 id="215" title="Popup CTF"]');?>
		<div class="popup-title">
			<span class="contact-popup-title"><i class="fas fa-pencil-alt" style="margin-right: 5px;"></i>NHẬN TƯ VẤN</span>
		</div>
	</div>
</div>
<div class="background-close-popup"></div>

<?php wp_footer(); ?>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.1&appId=2174410252844536&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<script type="text/javascript">
    jQuery(document).ready(function($){
		jQuery('.stretch_row').each(function(i){
			var stretchRowContent = jQuery(this).find('.vc_row').html();
			jQuery(this).find('.vc_row').empty();
			jQuery(this).find('.vc_row').append('<div class="tdc-row stretch_row_inner"></div>');
			jQuery(this).find('.vc_row .stretch_row_inner').append(stretchRowContent);
		})
        if($('body').hasClass('single-khoa_hoc')){
            var courseName = $('.td-post-title .entry-title').text();
            $('input[name="your-course"]').val(courseName);
        }
        //ONCLICK FIXED BOTTOM BUTTON        
		$('.popup-title, .home-slider a').on('click', function(){
		  console.log('clicked');
		  $('.contact-popup-box .wpcf7').slideToggle('slow');
		  $('.background-close-popup').fadeToggle();
		})
		$('.background-close-popup, .contact-popup-close').on('click', function(){
			$('.background-close-popup').fadeToggle();
			$('.contact-popup-box .wpcf7').slideToggle('slow');
		})

        $(window).on('resize', function(){
            var windowz = $(window);
            var windowHeight = windowz.outerHeight();
            if(windowHeight < 400){
                $('.contact-popup-box form').css({
                    "max-height":windowHeight - 80
                })
                $('.contact-popup-box form .overlay-box').css({
                    "max-height":windowHeight - 120,
                    "overflow-y":"scroll"
                })
            }else{
                $('.contact-popup-box form').css({
                    "max-height":"none"
                })
                $('.contact-popup-box form .overlay-box').css({
                    "max-height": "none",
                    "overflow-y":"visible"
                })
            }
        })


    });

</script>
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5ab200e3d7591465c708c1fb/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
<!--Start of GetResponse Script-->
<script>
  (function (w,i,d,g,e,t,s) {w[d] = w[d]||[];t= i.createElement(g);
    t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t, s);
  })(window, document, '_gscq','script','//widgets.getsitecontrol.com/81107/script.js');
</script>
<!--End of GetResponse Script-->
</body>
</html>