$(function() {
    $('#hamburger').click(function () {
        $('#line1').toggleClass('c_line1');
        $('#line2').toggleClass('c_line2');
        $('#line3').toggleClass('c_line3');
        $('#nav_menu').toggleClass('menu_in');
    });
});