function is_touch_device() {
  return !!('ontouchstart' in window);
}

jQuery(window).load(function() {
	
	
	//Image slider configuration
    $('#photos_work_image_slider').carouFredSel({
        responsive: true,
        width: '100%',		
        auto: false,
        scroll: 1, 					
        prev: '#photos_work_prev',
        next: '#photos_work_next',
        pagination: "#photos_work_slide_pager",	
        swipe: {
            onMouse: false,
            onTouch: false
        },
        items: {
            width: 400,
            height: 'auto',	//	optionally resize item-height
            visible: {
                min: 1,
                max: 3
            },
			start: 2
        }
    });
	/**********************************/
	jQuery('ul#portfolio-items li, ul#digital-items li, ul#photos_work_image_slider li').each(function() {
					jQuery(this).find("span").hide();					
			});	
	/*************************************************/
	//Fix for slider pagination
    jQuery('.slider_holder').each(function(){
        var pagination_width = jQuery(this).find('.carousel_pagination').first().width();
        var windw_width = jQuery(this).width();
        jQuery(this).find('.carousel_pagination').first().css("margin-left", (windw_width-pagination_width)/2);
    });
		
    
    //Fix for apps work item text
    jQuery("#photo_work_image_slider li").each(function(){
        var element_holder_width = jQuery(this).width();
        var element_holder_height = jQuery(this).height();
        var apps_work_text_width = jQuery(this).find("p.photo_work_image_slider").width();
        var apps_work_text_height = jQuery(this).find("p.photo_work_image_slider").height();
        var top = (element_holder_height - apps_work_text_height)/1.1;
        var left = (element_holder_width - apps_work_text_width)/2;
        jQuery(this).find("p.photo_work_image_slider").css({
            'top': top, 
            'left': left
        });
    });
	
	//Fix for portfolio work item text
    jQuery("#portfolio-items li").each(function(){
        var work_items_element_holder_width = jQuery(this).width();
        var work_items_element_holder_height = jQuery(this).height();
        var work_items_text_width = jQuery(this).find("p.work_item_text").width();
        var work_items_text_height = jQuery(this).find("p.work_item_text").height();
        var work_items_top = (work_items_element_holder_height - work_items_text_height)/1.1;
        var work_items_left = (work_items_element_holder_width - work_items_text_width)/2;
        jQuery(this).find("p.work_item_text").css({
            'top': work_items_top, 
            'left': work_items_left
        });
    });
	
	//Fix for digital work item text
    jQuery("#digital-items li").each(function(){
        var work_items_element_holder_width = jQuery(this).width();
        var work_items_element_holder_height = jQuery(this).height();
        var work_items_text_width = jQuery(this).find("p.work_item_text").width();
        var work_items_text_height = jQuery(this).find("p.work_item_text").height();
        var work_items_top = (work_items_element_holder_height - work_items_text_height)/1.1;
        var work_items_left = (work_items_element_holder_width - work_items_text_width)/2;
        jQuery(this).find("p.work_item_text").css({
            'top': work_items_top, 
            'left': work_items_left
        });
    });
/********************************************/	
	if( is_touch_device() ){	
	
		jQuery('.background_fixed').each(function(){  
		jQuery(this).css('background-attachment','scroll');  
		});
	};  
/*************************************************/	
	jQuery('ul#portfolio-items li, ul#digital-items li, ul#photo_work_image_slider li').hover(function() {
				jQuery(this).find("span").show();					
			}, function() {
				jQuery(this).find("span").hide();					
		});				


});
$(document).ready(function() {
		
	$(window).load(function(){
        $('.doc-loader').fadeOut('slow');
     });
	
	displayHints();

	var ResetInput = function(){
    	$('input, textarea').each(function() {
        	$(this).val('').text('');
    	});
	};
	$(function() {
		if (window.PIE) {
			$('.rounded').each(function() {
				PIE.attach(this);
			});
		}
	});
});

var displayHints = function()
{
	$('#contact-form .name').attachHint('* Name');
	$('#contact-form .email').attachHint('* Email Address');
	$('#contact-form .subject').attachHint('* Web Site');
	$('#contact-form .message').attachHint('* Message');
};

jQuery(window).resize(function(){

	//Fix for slider pagination
    jQuery('.slider_holder').each(function(){
        var pagination_width = jQuery(this).find('.carousel_pagination').first().width();
        var windw_width = jQuery(this).width();
        jQuery(this).find('.carousel_pagination').first().css("margin-left", (windw_width-pagination_width)/2);
    });
	
	
    //Fix for apps work item text
    jQuery("#photo_work_image_slider li").each(function(){
        var element_holder_width = jQuery(this).width();
        var element_holder_height = jQuery(this).height();
        var apps_work_text_width = jQuery(this).find("p.photo_work_image_slider").width();
        var apps_work_text_height = jQuery(this).find("p.photo_work_image_slider").height();
        var top = (element_holder_height - apps_work_text_height)/1.1;
        var left = (element_holder_width - apps_work_text_width)/2;
        jQuery(this).find("p.photo_work_image_slider").css({
            'top': top, 
            'left': left
        });
    });
	
	//Fix for portfolio work item text
    jQuery("#portfolio-items li").each(function(){
        var work_items_element_holder_width = jQuery(this).width();
        var work_items_element_holder_height = jQuery(this).height();
        var work_items_text_width = jQuery(this).find("p.work_item_text").width();
        var work_items_text_height = jQuery(this).find("p.work_item_text").height();
        var work_items_top = (work_items_element_holder_height - work_items_text_height)/1.1;
        var work_items_left = (work_items_element_holder_width - work_items_text_width)/2;
        jQuery(this).find("p.work_item_text").css({
            'top': work_items_top, 
            'left': work_items_left
        });
    });
	//Fix for digital work item text
    jQuery("#digital-items li").each(function(){
        var work_items_element_holder_width = jQuery(this).width();
        var work_items_element_holder_height = jQuery(this).height();
        var work_items_text_width = jQuery(this).find("p.work_item_text").width();
        var work_items_text_height = jQuery(this).find("p.work_item_text").height();
        var work_items_top = (work_items_element_holder_height - work_items_text_height)/1.1;
        var work_items_left = (work_items_element_holder_width - work_items_text_width)/2;
        jQuery(this).find("p.work_item_text").css({
            'top': work_items_top, 
            'left': work_items_left
        });
    });


});
//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------

var StringFormat = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var regExpression = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(regExpression, arguments[i + 1]);
    }
    return s;
}

function is_touch_device() {
  return !!('ontouchstart' in window);
}