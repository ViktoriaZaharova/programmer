function blocktimer(idtimer, timetimes, timesnows, member) {
    var timetimes = timetimes;
    timetimes = timetimes.split(", ");
    var timesnows = timesnows;
    var ts = new Date(timetimes[0], timetimes[1], timetimes[2]);
    if ((new Date()) > ts) {
        ts = (new Date()).getTime() + timesnows;
    }
    $(idtimer).countdown({
        timestamp: ts,
        callback: function (hours, minutes, seconds) {
        }
    });
}

$(document).ready(function () {
    blocktimer('#countdown', '2020, 1, 1', 19 * 30 * 60 * 1000);
});

$('.btn-maps').click(function (e) {
    e.preventDefault();
    $('.maps').removeClass('maps-active');
    var selectTab = $(this).attr("href");
    $(selectTab).addClass('maps-active');
});

// mail
$(".form").submit(function (e) {
    e.preventDefault();
    var phone_input = $('[name="phone"]').val();


    if (phone_input.length != 11) {
        $(".error").removeClass("n0ne");

    } else {
        $(".error").addClass("n0ne");

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay').fadeIn();
            $('#modal-thanks').css('display', 'flex')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
            $(".form").trigger("reset");
        });
        return false;
    }
});


$(".form2").submit(function (e) {
    e.preventDefault();
    var phone_input = $('[name="phone2"]').val();
    if (phone_input.length != 11) {
        $(".error").removeClass("n0ne");
    } else {
        $(".error").addClass("n0ne");

        $.ajax({
            type: "POST",
            url: "programm.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay').fadeIn();

            $('.modal__div').css('display', 'none').animate({
                opacity: 0,
                top: '45%'
            });

            $('#modal-thanks').css('display', 'flex')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
            $(".form2").trigger("reset");
        });
        return false;
    }
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay, .btn-yes');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$(".go_to").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top - 20}, 500);

    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.question-box__item').click(function () {
    $(this).toggleClass('open').siblings('.answer').fadeToggle();
});

$("body").on("click", ".click-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$(document).ready(function () {
    $('.certificate-content').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    appendArrows: '.certificate-nav'
                }
            }
        ]

    });
});