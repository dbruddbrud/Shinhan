$(document).ready(function(){

    $('.top_btn').click(function(){
        $('html').animate({
            scrollTop: 0
        })
    })

    $('.menu_3>li').click(function(){

        $('.menu_3>li').removeClass('on')
        $(this).addClass('on')
        return false

    })

    $('.menu_3>li:nth-child(1)').click(function(){
        $('#con_1').css({
            display: 'block'
        })
        $('#con_2').css({
            display: 'none'
        })
        $('#con_3').css({
            display: 'none'
        })
    })

    $('.menu_3>li:nth-child(3)').click(function(){
        $('#con_1').css({
            display: 'none'
        })
        $('#con_2').css({
            display: 'block'
        })
        $('#con_3').css({
            display: 'none'
        })
    })

    $('.menu_3>li:nth-child(5)').click(function(){
        $('#con_1').css({
            display: 'none'
        })
        $('#con_2').css({
            display: 'none'
        })
        $('#con_3').css({
            display: 'block'
        })
    })


    $(window).scroll(function(){
        sct = $(window).scrollTop();

        if(sct>50){
            $('header').css({
                backgroundColor: '#fff'
            })

            $('.gnb>li>a').css({
                color: '#000'
            })

            $('.lang').css({
                color: '#000'
            })

            $('#logo_w').css({
                display: 'none'
            })

            $('#logo_b').css({
                display: 'block'
            })

            $('.arrowdown_w').css({
                display: 'none'
            })

            $('.arrowdown_b').css({
                display: 'block'
            })

            $('#menu_icon_white').css({
                display: 'none'
            })

            $('#menu_icon_black').css({
                display: 'block'
            })
        }else{
            $('header').css({
                backgroundColor: 'unset'
            })

            $('.gnb>li>a').css({
                color: '#fff'
            })

            $('.lang').css({
                color: '#fff'
            })

            $('#logo_w').css({
                display: 'block'
            })

            $('#logo_b').css({
                display: 'none'
            })

            $('.arrowdown_w').css({
                display: 'block'
            })

            $('.arrowdown_b').css({
                display: 'none'
            })

            $('#menu_icon_white').css({
                display: 'block'
            })

            $('#menu_icon_black').css({
                display: 'none'
            })
        }

    })

    $('.lang').click(function(){
        var a=$('.lang_wrap').css('display');
        if(a=='block'){
            $('.lang_wrap').css({
                display: 'none'
            })
        }else{
            $('.lang_wrap').css({
                display: 'block'
            })
        }
        return false
    })




})//end