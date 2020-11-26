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
            for (var i in data) {
                $('#data_output').append("<li>" + data[i].division + "</li>");
                for (var j in data[i].person) {
                    $('#data_output').append("<li>" + data[i].person[j].name + ": " + data[i].person[j].age + "才</li>");
                };
            };
        });
    });
});