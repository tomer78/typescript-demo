(function ($) {

    $.fn.foo = function (options) {
        var settings = $.extend({
            one: false,
            two: true
        }, options);

        //do something
        $(this).addClass("foo");
        $(this).each(function(){
            $(this).html($(this).attr('id')  + " foo me!");
        });


    };

    $.fn.foo.bar = function (input) {

        return input;
    };
})(jQuery);