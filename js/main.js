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
    $('.megamenu').css('margin-left', $posi_l - 8);
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

    $('#nav_3').hover(function() {
        $('#nav_3_con').stop().slideDown();
        $('#nav_3').css('background', 'url(./images/navi.png) -360px 0px');
    }, function() {
        $('#nav_3_con').stop().hide();
        $('#nav_3').css('background', 'url(./images/navi.png) -360px -120px');
    });
    $('#nav_3_con').hover(function() {
        $('#nav_3_con').show();
        $('#nav_3').css('background', 'url(./images/navi.png) -360px 0px');
    }, function() {
        $('#nav_3_con').stop().hide();
        $('#nav_3').css('background', 'url(./images/navi.png) -360px -120px');
    });

    $('#nav_4').hover(function() {
        $('#nav_4_con').stop().slideDown();
        $('#nav_4').css('background', 'url(./images/navi.png) -600px 0px');
    }, function() {
        $('#nav_4_con').stop().hide();
        $('#nav_4').css('background', 'url(./images/navi.png) -600px -120px');
    });
    $('#nav_4_con').hover(function() {
        $('#nav_4_con').show();
        $('#nav_4').css('background', 'url(./images/navi.png) -600px 0px');
    }, function() {
        $('#nav_4_con').stop().hide();
        $('#nav_4').css('background', 'url(./images/navi.png) -600px -120px');
    });

    // script for question2
    $s1 = 0;
    $s2 = 0;
    $s3 = 0;
    $s4 = 0;
    $('#acc_menu_1').click(function() {
        if ($s1 == 1) {
            $('#list1').css('height', '40px');
            $('#acc_menu_1').text('→個人のお客様');
            $('#list11').hide();
            $('#list12').hide();
            $s1 = 0;
        } else {
            $('#list1').css('height', '106px');
            $('#acc_menu_1').text('↓個人のお客様');
            $('#list11').show();
            $('#list12').show();
            $s1 = 1;
        };
    });
    $('#acc_menu_2').click(function() {
        if ($s2 == 1) {
            $('#list2').css('height', '40px');
            $('#acc_menu_2').text('→法人のお客様');
            $('#list21').hide();
            $('#list22').hide();
            $s2 = 0;
        } else {
            $('#list2').css('height', '106px');
            $('#acc_menu_2').text('↓法人のお客様');
            $('#list21').show();
            $('#list22').show();
            $s2 = 1;
        };
    });
    $('#acc_menu_3').click(function() {
        if ($s3 == 1) {
            $('#list3').css('height', '40px');
            $('#acc_menu_3').text('→株主・投資家の皆様');
            $('#list31').hide();
            $s3 = 0;
        } else {
            $('#list3').css('height', '85px');
            $('#acc_menu_3').text('↓株主・投資家の皆様');
            $('#list31').show();
            $s3 = 1;
        };
    });
    $('#acc_menu_4').click(function() {
        if ($s4 == 1) {
            $('#list4').css('height', '40px');
            $('#acc_menu_4').text('→採用情報');
            $('#list41').hide();
            $s4 = 0;
        } else {
            $('#list4').css('height', '85px');
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

    //script for question3
    $('#slide3').click(function() {
        $('#modal3').fadeIn();
    });
    $('.js-modal-close').on('click', function() {
        $('.modal_win').fadeOut();
        return false;
    });

    //script for question6
    $cur_slide = 1;
    $('#graphic img').hide();
    $('#slide' + $cur_slide).show();
    var Timer;
    function startTimer() {
        Timer = setInterval(function(){
            $pre_slide = $cur_slide;
            if ($cur_slide == 3) {
                $cur_slide = 1;
            } else {
                $cur_slide++;
            };
            $('#slide' + $pre_slide).fadeOut();
            $('#slide' + $cur_slide).fadeIn();
        }, 5000);
    }
    startTimer();
    $('#change1').click(function() {
        $('#slide' + $cur_slide).fadeOut();
        $('#slide1').fadeIn();
        $cur_slide = 1;
    });
    $('#change2').click(function() {
        $('#slide' + $cur_slide).fadeOut();
        $('#slide2').fadeIn();
        $cur_slide = 2;
    });
    $('#change3').click(function() {
        $('#slide' + $cur_slide).fadeOut();
        $('#slide3').fadeIn();
        $cur_slide = 3;
    });

    //script for question8
    $info_data = null;
    var img_class = {c1: '<div><img src="images/category_07.png"></div>', c2: '<div><img src="images/category_08.png"></div>', c3: '<div><img src="images/category_09.png"></div>'};
    $(document).ready(function() {
        $.getJSON("data/info.json", function(data) {
            $info_data = data;
            for (var i in $info_data) {
                $('#tab1_con').append(
                    '<div id="' + $info_data[i].info_id + '">' + 
                    '<div class="time">' + $info_data[i].time + '</div>' +
                    img_class[$info_data[i].info_cls] + 
                    '<div id="infotext">' + $info_data[i].infotext + '</div>' +
                    '</div>'
                    );
                if ($info_data[i].info_cls == 'c1') {
                    $('#tab2_con').append(
                        '<div id="' + $info_data[i].info_id + '">' + 
                        '<div class="time">' + $info_data[i].time + '</div>' +
                        img_class[$info_data[i].info_cls] + 
                        '<div id="infotext">' + $info_data[i].infotext + '</div>' +
                        '</div>'
                        );
                };
                if ($info_data[i].info_cls == 'c2') {
                    $('#tab2_con').append(
                        '<div id="' + $info_data[i].info_id + '">' + 
                        '<div class="time">' + $info_data[i].time + '</div>' +
                        img_class[$info_data[i].info_cls] + 
                        '<div id="infotext">' + $info_data[i].infotext + '</div>' +
                        '</div>'
                        );
                };
                if ($info_data[i].info_cls == 'c3') {
                    $('#tab2_con').append(
                        '<div id="' + $info_data[i].info_id + '">' + 
                        '<div class="time">' + $info_data[i].time + '</div>' +
                        img_class[$info_data[i].info_cls] + 
                        '<div id="infotext">' + $info_data[i].infotext + '</div>' +
                        '</div>'
                        );
                };
            };
        });
    });
});