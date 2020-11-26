$(function() {
    //script for question4
    $('#hamburger').click(function () {
        $('#line1').toggleClass('c_line1');
        $('#line2').toggleClass('c_line2');
        $('#line3').toggleClass('c_line3');
        $('#nav_menu').toggleClass('menu_in');
    });

    // script for question8
    $db = null;
    $(document).ready(function() {
        $.getJSON("data/test.json", function(data) {
            $db = data;
            for (var i in $db) {
                $('#division').append('<option value="' + $db[i].division + '">' + $db[i].division + '</option>');
            };
        });
    });
    $('#ch_division').click(function() {
        $cur_div = $('#division').val();
        $('#data_output').remove();
        for (var i in $db) {
            if ($db[i].division == $cur_div) {
                for (var j in $db[i].person) {
                    $('#data_output').append("<li>" + $db[i].person[j].name + ": " + $db[i].person[j].age + "才</li>");
                }
            };
        };
    });
});