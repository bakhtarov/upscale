
jQuery(window).load(function() {
							 
		var small_menu = '<div class="small-menu-wrapper"><select class="small-menu">';		
		jQuery('#main_menu nav ul:first').find('li').each(function(){
			var href = jQuery(this).find('a').first().attr('href');			
			var title = jQuery(this).find('a').first().text();				
			small_menu += '<option value="'+href+'">'+title+'</option>';  						
    	});		
		small_menu += '</select></div>';		
		jQuery('#main_menu nav ul:first').after(small_menu);
				
	
	
	if (jQuery(document).width() < 767 ) { 
		
	   jQuery('#main_menu nav ul:first, .logo').hide();
	   jQuery('#main_menu nav').width('100%');
	   jQuery('.small-menu-wrapper').show();
    } 
	else {
	   jQuery('#main_menu nav ul:first, .logo').show();
	   jQuery('#main_menu nav').width('auto');
	   jQuery('.small-menu-wrapper').hide();   
	}


	jQuery('.small-menu').change(function() {
        var goTo = jQuery(this).val();		
		if (goTo != ''){
        if (goTo.indexOf('#') == 0){
            jQuery('html, body').animate({
                scrollTop: jQuery(goTo).offset().top
            }, 2000);				
        }
        else {			
            window.location.href = goTo;
        }
	}
    });	   

});

jQuery(window).resize(function(){
	
	if (jQuery(document).width() < 767 ) {      
	   jQuery('#main_menu nav ul:first, .logo').hide();	 
	   jQuery('#main_menu nav').width('100%');
	   jQuery('.small-menu-wrapper').show();
    }
	else {
	   jQuery('#main_menu nav ul:first, .logo').show();
	   jQuery('#main_menu nav').width('auto');
	   jQuery('.small-menu-wrapper').hide();   
	}
	   
});


