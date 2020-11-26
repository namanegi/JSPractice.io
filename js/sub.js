$(function() {
    //script for question4
    $('#hamburger').click(function () {
        $('#line1').toggleClass('c_line1');
        $('#line2').toggleClass('c_line2');
        $('#line3').toggleClass('c_line3');
        $('#nav_menu').toggleClass('menu_in');
    });

    // script for question8
    $(document).ready(function() {
        $.getJSON("data/test.json", function(data) {
            var db = data;
        });
    });
    for (var i in db) {
        $('#division').append('<option value="' + $db[i].division + '">' + $db[i].division + '</option>');
    }
});