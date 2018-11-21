$(document).ready(function() { 
    $('#group-names .power').bind('mouseenter', function() {
        $('.active').removeClass('active');
        $('#power').addClass('active');
    });

    $('#group-names .genius').bind('mouseenter', function() {
        $('.active').removeClass('active');
        $('#genius').addClass('active');
    });

    $('#group-names .citizens').bind('mouseenter', function() {
        $('.active').removeClass('active');
        $('#citizens').addClass('active');
    });
});