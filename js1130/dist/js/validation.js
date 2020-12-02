$(function() {
    $('input[class*="required"]').focusout(function() {
        if ($(this).val() == "") {
            $(this).css("background-color", "lightpink");
            $(this).css("border", "1px red solid");
            $(this).next().text("※入力必須項目です");
        } else {
            $(this).css("background-color", "#F4F4F4");
            $(this).css("border", "1px #EAE4E4 solid");
            $(this).next().text("");
        };
    });
    $('input[class*="max"]').focusout(function() {
        var this_class = $(this).attr("class");
        var i = this_class.indexOf('max') + 3;
        var max_length = (this_class[i] + this_class[i+1]) * 1;
        if ($(this).val().length > max_length) {
            $(this).css("background-color", "lightpink");
            $(this).css("border", "1px red solid");
            $(this).next().text("※" + max_length + "文字以内にしてください");
        } else {
            $(this).css("background-color", "#F4F4F4");
            $(this).css("border", "1px #EAE4E4 solid");
            $(this).next().text("");
        };
    });
    $('input[class*="kana"]').focusout(function() {
        if ($(this).val().match(/^[ぁ-んー]+$/)) {
            $(this).css("background-color", "#F4F4F4");
            $(this).css("border", "1px #EAE4E4 solid");
            $(this).next().text("");
        } else {
            $(this).css("background-color", "lightpink");
            $(this).css("border", "1px red solid");
            $(this).next().text("※ひらがなで入力してください");
        };
    });
    $('input[class*="phone"]').focusout(function() {
        if ($(this).val().match(/^(0[5-9]0-[0-9]{4}-[0-9]{4})$/)) {
            $(this).css("background-color", "#F4F4F4");
            $(this).css("border", "1px #EAE4E4 solid");
            $(this).next().text("");
        } else {
            $(this).css("background-color", "lightpink");
            $(this).css("border", "1px red solid");
            $(this).next().text("※正しく入力してください");
        };
    });
    $('input[class*="email"]').focusout(function() {
        if ($(this).val().match(/^([a-z]+)(@)([a-z]+)(.com)$/)) {
            $(this).css("background-color", "#F4F4F4");
            $(this).css("border", "1px #EAE4E4 solid");
            $(this).next().text("");
        } else {
            $(this).css("background-color", "lightpink");
            $(this).css("border", "1px red solid");
            $(this).next().text("※正しく入力してください");
        };
    });
    $('input').focusout(function() {
        var err_text = '';
        var chk_req = 1;
        err_text = '';
        chk_req = 1;
        $('[class*="error"]').each(function(i, element) {
            err_text = err_text + $(element).text();
        });
        $('input[class*="required"]').each(function(i, element) {
            if ($(element).val() == '') {
                chk_req = 0;
            };
        });
        if ((err_text == '') && (chk_req == 1)) {
            $('#add-user-form-submit').prop("disabled", false);
        } else {
            $('#add-user-form-submit').prop("disabled", true);
        };
    });
});