$(function() {
    $db = null;
    // read json file while page loading
    $(document).ready(function() {
        $.getJSON("dist/js/include.json", function(data) {
            $db = data; // save the json data into a global variable, so that the json file won't be read repeatly
            for (var i in data) { // print the data
                $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                data[i].lastName + data[i].firstName + '</div><div class="user-division">' + 
                data[i].division + '</div><div class="user-position">' + data[i].position + '</div>' + 
                '<div class="text-center"></div></div></li>');
            };
        });
    });
    // 
    $('#query-division').change(function() {
        if ($('#query-division').val() != "") {
            $('#loadarea').empty(); // clear the previous output
            for (var i in $db) { 
                if ($db[i].division == $('#query-division').val()) { // print the data which has the same division
                    $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                    $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                    $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
                    $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
                    '<div class="text-center"></div></div></li>');
                };
            };
        } else {
            $('#loadarea').empty();
            for (var i in $db) { // when query-division is setted to empty, print all the data
                $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
                $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
                '<div class="text-center"></div></div></li>');
            };
        };
    });
    // helper functions to sort the data
    function compareName(obj1, obj2) {
        if ((obj1.lastKana + obj1.firstKana) < (obj2.lastKana + obj2.firstKana)) {
            return -1
        };
        if ((obj1.lastKana + obj1.firstKana) > (obj2.lastKana + obj2.firstKana)) {
            return 1
        };
        return 0;
    };
    function compareHireday(obj1, obj2) {
        if ((obj1.hireday) < (obj2.hireday)) {
            return -1
        };
        if ((obj1.hireday) > (obj2.hireday)) {
            return 1
        };
        return 0;
    };
    function compareBirthday(obj1, obj2) {
        if ((obj1.birthday) < (obj2.birthday)) {
            return -1
        };
        if ((obj1.birthday) > (obj2.birthday)) {
            return 1
        };
        return 0;
    };
    function compareNo(obj1, obj2) {
        return obj1.number - obj2.number;
    };
    $('#sorting-name').click(function() {
        $('#loadarea').empty();
        $db.sort(compareName); // use helper function to sort the data
        for (var i in $db) {
            if (($db[i].division == $('#query-division').val()) || ($('#query-division').val() == '')) { // print data when query-division is empty or in same division
                $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
                $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
                '<div class="text-center"></div></div></li>');
                console.log($('#query-division').val());
            }
        };
    });
    $('#sorting-hireday').click(function() {
        $('#loadarea').empty();
        $db.sort(compareHireday);
        for (var i in $db) {
            if (($db[i].division == $('#query-division').val()) || ($('#query-division').val() == '')) {
                $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
                $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
                '<div class="text-center"></div></div></li>');
            }
        };
    });
    $('#sorting-birthday').click(function() {
        $('#loadarea').empty();
        $db.sort(compareBirthday);
        for (var i in $db) {
            if (($db[i].division == $('#query-division').val()) || ($('#query-division').val() == '')) {
                $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
                $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
                '<div class="text-center"></div></div></li>');
            }
        };
    });
    $('#sorting-clear').click(function() {
        $('#loadarea').empty();
        $('#query-division').val(''); // reset the output and setting
        $db.sort(compareNo); // sort the data in order of data No.
        for (var i in $db) { // print data
            $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
            $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
            $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
            $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
            '<div class="text-center"></div></div></li>');
        };
    });
});