(function($){
  $(function(){
    M.AutoInit();

    $('#quote-submit').on('click', function(e) {
    	e.preventDefault();
    	var button = $(this);
    	var form = $('#quote-form');
    	$.ajax({
            url: form.prop('action'),
            type: "POST",
            crossDomain: true,
            data: form.serialize(),
            dataType: "json",
            success: function(result) {
                $('#quote-success').removeClass('hide');
                form.addClass('hide');
                button.addClass('hide');        
            },
            error:function(xhr,status,error){
                alert(status);
                console.log(error);
            }
        });
    });

    $('.email-link').each(function(){
    	var element = $(this);
    	element.prop('href', 'mailto:' + element.prop('href').replace('://', '@'));
    	element.text(element.text().replace('://', '@'));
    });
  });
})(jQuery);