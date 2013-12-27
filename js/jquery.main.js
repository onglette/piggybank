$(document).ready(function(){
	ClearField();
	
	if($('.gallery-area').length){
		$('.gallery-area').flexslider({
			animation: "fade",
			slideshow: true,
			directionNav: false,
			controlNav: true,
			slideshowSpeed: 5000
		});	
	}
	
	MainTabs();
	MoreSlide();
	DropShow();
	MoreSlideDown();
	
	$('.btn-to-top').click(function(){
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

function ClearField(){
	var fields = $('.search-form input[type="text"]');
	fields.each(function(){
		var this_field = $(this);
		var default_value = this_field.val();
		this_field.focus(function(){
	 		if(this_field.val() == default_value){
				this_field.val("");
			}
		 });
		 this_field.blur(function(){
		 	if(this_field.val() == ""){
				this_field.val(default_value);
			}
		 });
	});
}

function MainTabs(){
	var item_click = $('.tab-nav a');
	
	item_click.click(function(){
		var id_ = $(this).attr('href');
		
		if(!$(this).parent().hasClass('active')){
			$(this).parent().siblings().removeClass('active');
			$(this).parent().addClass('active');
			$(id_).siblings().hide().removeClass('active');
			$(id_).addClass('active').hide().fadeIn(350);
		}
		return false;
	});
}

function MoreSlide(){
	$('.q-links .more').click(function(){
		$(this).closest('li').hide();
		$(this).closest('.q-links-holder').find('ul.hidden').slideDown(350);
		$('.q-links .less').closest('li').slideDown(350);
		return false;
	});
	
	$('.q-links .less').click(function(){
		$(this).closest('li').hide();
		$(this).closest('ul').slideUp(350);
		$('.q-links .more').closest('li').slideDown(350);
		return false;
	});
}

function DropShow(){
	$('.login-box .link').click(function(){
		if(!$(this).closest('.login-box').hasClass('active')){
			$(this).closest('.login-box').addClass('active');
			$(this).closest('.h-row').find('.drop-box').show();
		}
		else{
			$(this).closest('.login-box').removeClass('active');
			$(this).closest('.h-row').find('.drop-box').hide();
		}
		return false;
	});
	
	$('#nav > ul > li > a').click(function(){
		if(!$(this).closest('li').hasClass('active')){
			$(this).closest('li').addClass('active');
			$(this).closest('li').siblings().removeClass('active');
		}
		else{
			$(this).closest('li').removeClass('active');
			$(this).closest('li').siblings().removeClass('active');
		}
		return false;
	});
	
	$('#nav > ul > li').hover(function(){
		if($(this).siblings('li').hasClass('active')){
			$(this).siblings('li').removeClass('active');
		}
	});
}

function MoreSlideDown(){
	$('.side-link-box .btn-more').click(function(){
		if(!$(this).hasClass('hide')){
			$(this).addClass('hide');
			$(this).html('Hide');
			$(this).closest('.side-link-box').find('li.hidden').stop(true, true).slideDown(350);
		}
		else{
			$(this).removeClass('hide');
			$(this).html('More');
			$(this).closest('.side-link-box').find('li.hidden').stop(true, true).slideUp(350);
		}
		return false;
	});
	
	$('.faqs-section .link-expand').click(function(){
		if(!$(this).hasClass('hide')){
			$(this).addClass('hide');
			$(this).html('Collapse');
			$(this).closest('.txt-box').find('.hide-box').stop(true, true).slideDown(350);
		}
		else{
			$(this).removeClass('hide');
			$(this).html('Expand');
			$(this).closest('.txt-box').find('.hide-box').stop(true, true).slideUp(350);
		}
		return false;
	});
	
	$('.add-lst-btn a.expand').click(function(){
		$(this).closest('.add-content-area').find('.link-expand').html('Collapse').addClass('hide');
		$('.hide-box').slideDown(350);
		return false;
	});
	
	$('.add-lst-btn a.collapse').click(function(){
		$(this).closest('.add-content-area').find('.link-expand').html('Expand').removeClass('hide');
		$('.hide-box').slideUp(350);
		return false;
	});
	
	$('.faq-lst .link').click(function(){
		if(!$(this).hasClass('hide')){
			$(this).addClass('hide');
			$(this).closest('li').find('.hidden-block').stop(true, true).slideDown(350);
		}
		else{
			$(this).removeClass('hide');
			$(this).closest('li').find('.hidden-block').stop(true, true).slideUp(350);
		}
		return false;
	});
}