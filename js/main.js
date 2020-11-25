$(function() {
    // Here is script for question1
    $(window).scroll(function() {
        if ($(window).scrollTop() < 10) {
            $('#back-to-top').hide();
        } else {
            $('#back-to-top').show();
        }
    });

    // script for question5
    $posi_l = $('#nav_1').position().left;
    $('.megamenu').css('margin-left', $posi_l - 10);
    $('#nav_1').hover(function() {
        $('#nav_1_con').stop().slideDown();
        $('#nav_1').css('background', 'url(./images/navi.png) 0px 0px');
    }, function() {
        $('#nav_1_con').stop().hide();
        $('#nav_1').css('background', 'url(./images/navi.png) 0px -120px');
    });
    $('#nav_1_con').hover(function() {
        $('#nav_1_con').show();
        $('#nav_1').css('background', 'url(./images/navi.png) 0px 0px');
    }, function() {
        $('#nav_1_con').stop().hide();
        $('#nav_1').css('background', 'url(./images/navi.png) 0px -120px');
    });

    $('#nav_2').hover(function() {
        $('#nav_2_con').stop().slideDown();
        $('#nav_2').css('background', 'url(./images/navi.png) -180px 0px');
    }, function() {
        $('#nav_2_con').stop().hide();
        $('#nav_2').css('background', 'url(./images/navi.png) -180px -120px');
    });
    $('#nav_2_con').hover(function() {
        $('#nav_2_con').show();
        $('#nav_2').css('background', 'url(./images/navi.png) -180px 0px');
    }, function() {
        $('#nav_2_con').stop().hide();
        $('#nav_2').css('background', 'url(./images/navi.png) -180px -120px');
    });

    // script for question2
    $s1 = 0;
    $s2 = 0;
    $s3 = 0;
    $s4 = 0;
    $('#acc_menu_1').click(function() {
        if ($s1 == 1) {
            $('#list1').css('height', '20px');
            $('#acc_menu_1').text('→個人のお客様');
            $('#list11').hide();
            $('#list12').hide();
            $s1 = 0;
        } else {
            $('#list1').css('height', '86px');
            $('#acc_menu_1').text('↓個人のお客様');
            $('#list11').show();
            $('#list12').show();
            $s1 = 1;
        };
    });
    $('#acc_menu_2').click(function() {
        if ($s2 == 1) {
            $('#list2').css('height', '20px');
            $('#acc_menu_2').text('→法人のお客様');
            $('#list21').hide();
            $('#list22').hide();
            $s2 = 0;
        } else {
            $('#list2').css('height', '86px');
            $('#acc_menu_2').text('↓法人のお客様');
            $('#list21').show();
            $('#list22').show();
            $s2 = 1;
        };
    });
    $('#acc_menu_3').click(function() {
        if ($s3 == 1) {
            $('#list3').css('height', '20px');
            $('#acc_menu_3').text('→株主・投資家の皆様');
            $('#list31').hide();
            $s3 = 0;
        } else {
            $('#list3').css('height', '65px');
            $('#acc_menu_3').text('↓株主・投資家の皆様');
            $('#list31').show();
            $s3 = 1;
        };
    });
    $('#acc_menu_4').click(function() {
        if ($s4 == 1) {
            $('#list4').css('height', '20px');
            $('#acc_menu_4').text('→採用情報');
            $('#list41').hide();
            $s4 = 0;
        } else {
            $('#list4').css('height', '65px');
            $('#acc_menu_4').text('↓採用情報');
            $('#list41').show();
            $s4 = 1;
        };
    });

    //script for question7
    $t_p = 1;
    $('#tab1').click(function() {
        if ($t_p != 1) {
            $('#tab1_con').show();
            $('#tab2_con').hide();
            $('#tab3_con').hide();
            $('#tab4_con').hide();
            $(this).children('img').attr('src', 'images/tab01_on.png');
            $('#tab2').children('img').attr('src', 'images/tab02_off.png');
            $('#tab3').children('img').attr('src', 'images/tab03_off.png');
            $('#tab4').children('img').attr('src', 'images/tab04_off.png');
            $t_p = 1;
        }
    });
    $('#tab2').click(function() {
        if ($t_p != 2) {
            $('#tab1_con').hide();
            $('#tab2_con').show();
            $('#tab3_con').hide();
            $('#tab4_con').hide();
            $('#tab1').children('img').attr('src', 'images/tab01_off.png');
            $('#tab2').children('img').attr('src', 'images/tab02_on.png');
            $('#tab3').children('img').attr('src', 'images/tab03_off.png');
            $('#tab4').children('img').attr('src', 'images/tab04_off.png');
            $t_p = 2;
        }
    });
    $('#tab3').click(function() {
        if ($t_p != 3) {
            $('#tab1_con').hide();
            $('#tab2_con').hide();
            $('#tab3_con').show();
            $('#tab4_con').hide();
            $('#tab1').children('img').attr('src', 'images/tab01_off.png');
            $('#tab2').children('img').attr('src', 'images/tab02_off.png');
            $('#tab3').children('img').attr('src', 'images/tab03_on.png');
            $('#tab4').children('img').attr('src', 'images/tab04_off.png');
            $t_p = 3;
        }
    });
    $('#tab4').click(function() {
        if ($t_p != 4) {
            $('#tab1_con').hide();
            $('#tab2_con').hide();
            $('#tab3_con').hide();
            $('#tab4_con').show();
            $('#tab1').children('img').attr('src', 'images/tab01_off.png');
            $('#tab2').children('img').attr('src', 'images/tab02_off.png');
            $('#tab3').children('img').attr('src', 'images/tab03_off.png');
            $('#tab4').children('img').attr('src', 'images/tab04_on.png');
            $t_p = 4;
        }
    });
});