// Here is script for question1
$(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
        $('#back-to-top').hide();
    } else {
        $('#back-to-top').show();
    }
});
