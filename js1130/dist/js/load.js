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
    $('#sorting-clear').click(function() {
        $('#loadarea').empty();
        for (var i in $db) {
            $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
            $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
            $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
            $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
            '<div class="text-center"></div></div></li>');
        };
    });
    $('#query-division').focusout(function() {
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
        };
    });
    function compareName(obj1, obj2) {
        return (obj1.kastKana + obj1.firstKana) < (obj2.kastKana + obj2.firstKana);
    }
    $('#sorting-name').click(function() {
        $('#loadarea').empty();
        alert(compareName($db[0], $db[1]));
        $db.sort(compareName);
        for (var i in $db) {
            $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
            $db[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
            $db[i].lastName + $db[i].firstName + '</div><div class="user-division">' + 
            $db[i].division + '</div><div class="user-position">' + $db[i].position + '</div>' + 
            '<div class="text-center"></div></div></li>');
        };
        $.getJSON("dist/js/include.json", function(data) {$db = data;});
    });
});