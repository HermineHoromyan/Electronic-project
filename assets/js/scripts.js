$(document).ready(function () {
    $(".P-slider-main").slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: `<div class="P-prev-arrow"><span class="icon-chevron-right"></span></div>`,
        nextArrow: `<div class="P-next-arrow"><span class="icon-chevron-right"></span></div>`,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1023.98,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    arrows: false,
                    prevArrow: false,
                    nextArrow: false,
                }
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    arrows: false,
                    prevArrow: false,
                    nextArrow: false,
                }
            }
        ]
    });
});

//  ================ -scroll-animation-start- ================
let coverSection = document.getElementsByClassName('P-cover-section')[0]
console.log(coverSection)
coverWhite()

function sticktothetop() {
    let scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > 0) {
        console.log("scroll")
        $('#nav').addClass('onscroll');
        $('#header-content').addClass('header-onscroll')
    } else {
        $('#nav').removeClass('onscroll');
        $('#header-content').removeClass('header-onscroll')
    }
    coverWhite()
}

$(window).scroll(sticktothetop);
sticktothetop();

function coverWhite() {
    let scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > coverSection.offsetHeight) {
        $('#header-content').addClass('header-white-color')
    } else {
        $('#header-content').removeClass('header-white-color')
    }
}

//  ================ -scroll-animation-end- ================

//  ================ -scroll-contacts-start- ================

$(document).ready(function () {
    $('#scrolling-menu li').click(function () {
        let target = $(this).attr('id');
        let content = $('#' + target + '-content')
        let sections = document.getElementsByClassName('P-scroll-js')
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].classList.contains('section-padding-scroll')) {
                sections[i].classList.remove('section-padding-scroll')
            }
        }
        $(content).addClass('section-padding-scroll')
        $('html, body').animate({scrollTop: content.offset().top - 80}, 1000);
    });
    $(window).on('scroll', () => {
        let removeScrollClass = document.getElementsByClassName('section-padding-scroll')[0]
        if (removeScrollClass) {
            removeScrollClass.classList.remove('section-padding-scroll')
        }
    })
});
//  ================ -scroll-contacts-end- ================

//  ================ -menu-click-start- ================
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 991) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'})
            if (window.innerWidth<500){
                $('.menu-cnt').css({width: '80%', transition: '0.5s'});
            }else {
                $('.menu-cnt').css({width: '90%', transition: '0.5s'});
            }
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({width: '0%'});
            $('body').removeClass('body_fix');
            time = 0;
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '0', transition: '0.3s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.3s'})
            }
        })
    })
});

//  ================ -menu-click-end- ================

