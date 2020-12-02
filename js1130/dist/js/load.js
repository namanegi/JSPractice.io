$(function() {
    $db = null;
    $(document).ready(function() {
        $.getJSON("dist/js/include.json", function(data) {
            $db = data;
            for (var i in data) {
                $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                data[i].lastName + data[i].firstName + '</div><div class="user-division">' + 
                data[i].division + '</div><div class="user-position">' + data[i].position + '</div>' + 
                '<div class="text-center"></div></div></li>');
            };
        });
    });
    $('#query-division').change(function() {
        if ($('#query-division').val() != "") {
            $('#loadarea').empty();
            for (var i in $db) {
                if ($db[i].division == $('#query-division').val()) {
                    $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                    $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                    $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
                    $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
                    '<div class="text-center"></div></div></li>');
                };
            };
        } else {
            $('#loadarea').empty();
            for (var i in $db) {
                $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
                $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
                '<div class="text-center"></div></div></li>');
            };
        };
    });
    function compareName(obj1, obj2) {
        if ((obj1.kastKana + obj1.firstKana) < (obj2.kastKana + obj2.firstKana)) {
            return -1
        };
        if ((obj1.kastKana + obj1.firstKana) > (obj2.kastKana + obj2.firstKana)) {
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
        if ((obj1.number) < (obj2.number)) {
            return -1
        };
        if ((obj1.number) > (obj2.number)) {
            return 1
        };
        return 0;
    };
    $('#sorting-name').click(function() {
        $('#loadarea').empty();
        $db.sort(compareName);
        for (var i in $db) {
            $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
            $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
            $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
            $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
            '<div class="text-center"></div></div></li>');
        };
    });
    $('#sorting-hireday').click(function() {
        $('#loadarea').empty();
        $db.sort(compareHireday);
        for (var i in $db) {
            $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
            $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
            $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
            $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
            '<div class="text-center"></div></div></li>');
        };
    });
    $('#sorting-birthday').click(function() {
        $('#loadarea').empty();
        $db.sort(compareBirthday);
        for (var i in $db) {
            $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
            $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
            $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
            $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
            '<div class="text-center"></div></div></li>');
        };
    });
    $('#sorting-clear').click(function() {
        $('#loadarea').empty();
        $db.sort(compareNo);
        for (var i in $db) {
            $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
            $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
            $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
            $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
            '<div class="text-center"></div></div></li>');
        };
    });
});