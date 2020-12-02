$(function() {
    $(document).ready(function() {
        $.getJSON("dist/js/include.json", function(data) {
            for (var i in data) {
                $('#loadarea').append('<li class="user-box col-md-2 col-sm-4 col-xs-12 text-center"><div class="thumbnail"><div class="thumbnail-image"><img class="img-circle" src="' + 
                data[i].imagePath + '"></div><div class="user-indicator"></div><div class="user-name">' + 
                data[i].lastName + data[i].firstName + '</div><div class="user-division">' + 
                data[i].division + '</div><div class="user-position">' + data[i].position + '</div>' + 
                '<div class="text-center"></div></div></li>');
            };
        });
    });       
});