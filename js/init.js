(function($){
  $(function(){
    M.AutoInit();

    $('#quote-submit').on('click', function(e) {
    	e.preventDefault();
    	var button = $(this);
    	var form = $('#quote-form');
    	$.post(form.prop('action'), form.serialize(), function(response) {
    		$('#quote-success').removeClass('hide');
    		form.addClass('hide');
    		button.addClass('hide');
    	});
    });

    $('.email-link').each(function(){
    	var element = $(this);
    	element.prop('href', 'mailto:' + element.prop('href').replace('://', '@'));
    	element.text(element.text().replace('://', '@'));
    });
  });
})(jQuery);