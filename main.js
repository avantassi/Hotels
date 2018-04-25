$("#checkbox").on('click', function() {
    if($("#input").prop('disabled')) {
        $("#input").prop('disabled', false);
    } else {
        $("#input").prop('disabled', true);
    }
});

(function($) {
    $(function() {

        $('select').styler();

    });
})(jQuery);