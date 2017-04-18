$(window).bind('scroll resize', function() {	
										 
	var currentSection = null;
	
	$('.section').each(function(){
        var element = $(this).attr('id');	
        if ($('#'+element).is('*')){
            if($(window).scrollTop() >= $('#'+element).offset().top - 70)
            {
                currentSection = element;
            }
        }
    });
	
	$('#main_menu ul li').removeClass('active').find('a[href="#'+currentSection+'"]').parent().addClass('active');
	$('select.small-menu option:selected').removeAttr('selected');
	$('select.small-menu option[value="#'+currentSection+'"]').attr('selected', 'selected');
});

jQuery(document).ready(function() {
	$("#main_menu").sticky({ topSpacing: 0 });
	$('#main_menu ul li a, a.slow-scroll').click(function() {
		$('html, body').animate({scrollTop: $(this.hash).offset().top}, 2000);
		return false;
	});
});