$(document).ready(function () {
    $(".slick").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });
});

// загрузка фото
$(".label-form input[type=file]").on("change", function () {
    let file = this.files[0];
    $(this).closest(".input-file").find(".input-file-text").html(file.name);
});

$(function () {
    let header = $("header");
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass("header_fixed");
            $("body").css({
                paddingTop: hederHeight + "px", // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass("header_fixed");
            $("body").css({
                paddingTop: 0, // удаляю отступ у body, равный высоте шапки
            });
        }
    });
});

$(document).ready(function () {
    if (screen.width > 810) {
        $(".slick-products").slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 3,
            dotsClass: "products-dots",
            responsive: [
                {
                    breakpoint: 811,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
    $(".slick-stock").slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: "products-dots",
        fade: true,
    });

});

$(document).ready(function () {
    $(".slick-review").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "reviews-dots",
    });
});

$(document).ready(function () {
    $(".slick-product").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "products-dots",
    });
});

$(".slick-img-review").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dotsClass: "products-dots",
    responsive: [
        {
            breakpoint: 811,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

$('.slic-rev-prev').click(() => {
    $('.slick-review').slick('slickPrev')
})

$('.slic-rev-next').click(() => {
    $('.slick-review').slick('slickNext')
})

$('.slic-stock-prev').click(() => {
    $('.slick-stock').slick('slickPrev')
})

$('.slic-stock-next').click(() => {
    $('.slick-stock').slick('slickNext')
})

// function countSlides(slides) {
//   // console.log(slides);

//   let status
//   for (let i = 0; i < slides.length; i++) {
//     let countSlides = slides.eq(i).children();
//     console.log(slides.eq(i).eq(0).attr('class'));
//     if (countSlides.length <= 3) {
//       console.log("false");
//       slides.addClass("hidden-donts");
//       $(".products-dots").css('display', 'none');

//     } else {
//       console.log("true");
//       slides.addClass("hidden");
//     }
//   }
// }

$(document).ready(function () {
    $(".slick-more-products").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type = "button" class = "prev-stock"></ button> ',
        nextArrow: '<button type = "button" class = "next-stock"></ button> ',
        dotsClass: "products-dots",
    });

    // pop up

    $(".close").click(() => {
        $(".b-popup").toggleClass("b-popup-hiden");
    });
    setTimeout(() => popupBlock(), 2000);
    setInterval(() => popupBlock(), 300000);

    function popupBlock() {
        $(".b-popup").removeClass("b-popup-hiden");
    }

    $(".popup-open").click(function () {
        $(".popup-fade").fadeIn();
        return false;
    });

    $(".popup-close").click(function () {
        $(this).parents(".popup-fade").fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(".popup-fade").fadeOut();
        }
    });

    $(".popup-fade").click(function (e) {
        if ($(e.target).closest(".popup").length == 0) {
            $(this).fadeOut();
        }
    });

    // pop up отзывы

    $(".close").click(() => {
        $(".b-popup").toggleClass("b-popup-hiden");
    });
    setTimeout(() => popupBlock(), 2000);
    setInterval(() => popupBlock(), 300000);

    function popupBlock() {
        $(".b-popup").removeClass("b-popup-hiden");
    }

    $(".popup-open-review").click(function () {
        $(".popup-fade-review").fadeIn();
        return false;
    });

    $(".popup-close").click(function () {
        $(this).parents(".popup-fade-review").fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(".popup-fade-review").fadeOut();
        }
    });

    $(".popup-fade-review").click(function (e) {
        if ($(e.target).closest(".popup").length == 0) {
            $(this).fadeOut();
        }
    });

    //
    // pop up заказа

    $(".close").click(() => {
        $(".b-popup").toggleClass("b-popup-hiden");
    });
    setTimeout(() => popupBlock(), 2000);
    setInterval(() => popupBlock(), 300000);

    function popupBlock() {
        $(".b-popup").removeClass("b-popup-hiden");
    }

    $(".popup-open-order").click(function () {
        $(".popup-fade-order").fadeIn();
        return false;
    });

    $(".popup-close").click(function () {
        $(this).parents(".popup-fade-order").fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(".popup-fade-order").fadeOut();
        }
    });

    $(".popup-fade-order").click(function (e) {
        if ($(e.target).closest(".popup").length == 0) {
            $(this).fadeOut();
        }
    });

    //

    $("#bntUpload").click(function () {
        $("#photo").click();
    });

    $(".header-burger").click(() => {
        $(".header-burger, .burger-menu").toggleClass("active");
        $("body").toggleClass("lock");
    });

    $("a.scroll-to").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr("href");
        $(".header-burger, .burger-menu").toggleClass("active");
        // $('body').toggleClass('lock')
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $(anchor).offset().top - 60,
                },
                800
            );
    });

    // рейтинг
    // Получение значения рейтинга по клику
    $("input[name=rating]").click(function () {
        let value = $('input[name="rating"]:checked').val();
        let labels = $(".rating-label");

        for (let i = 0; i < value; i++) {
            labels.eq(i).addClass("select");
        }
    });


    $('input[name="color-form"]').click(() => {
        var value = $('input[name="color-form"]:checked').val();
        console.log(value);
        $('.color-selecting-form').addClass('animate')
        $('.color-selecting-form').html(value)
    });

    $('input[name="color"]').click(() => {
        var value = $('input[name="color"]:checked').val();
        $('.color-selecting').addClass('animate')
        $('.color-selecting').html(value)
    });


    $("#menu").click(function () {
        // Тут класс твоей кнопки
        $(".sub-menu").slideToggle(300);
    });

    // Увеличение

    $(function () {
        $(".minimized").click(function (event) {
            var i_path = $(this).children().attr("src");
            $("body").append(
                '<div id="overlay"></div><div id="magnify"><img src="' +
                i_path +
                '"><div id="close-popup"><i></i></div></div>'
            );

            function leftTop() {
                $("#magnify").css({
                    top: ($(window).height() - $("#magnify").outerHeight()) / 2,
                });
            }

            $(window).resize(function () {
                leftTop();
            });
            leftTop();
            $("#overlay, #magnify").fadeIn("fast");
        });

        $("body").on("click", "#close-popup, #overlay", function (event) {
            event.preventDefault();
            $("#overlay, #magnify").fadeOut("fast", function () {
                $("#close-popup, #magnify, #overlay").remove();
            });
        });
    });
});

let page = window.location.pathname;

switch (page) {
    case "/catalog/product/":
        $(".page")[4].classList.add("active-page");
        $(".page")[8].classList.add("active-page");
        $(".page")[0].classList.add("active-page");
        break;
    case "/catalog/":
        $(".page")[4].classList.add("active-page");
        $(".page")[8].classList.add("active-page");
        $(".page")[0].classList.add("active-page");
        break;
    case "/contact.html":
        $(".page")[6].classList.add("active-page");
        $(".page")[2].classList.add("active-page");
        $(".page")[10].classList.add("active-page");
        break;
    case "/review.html":
        $(".page")[7].classList.add("active-page");
        $(".page")[11].classList.add("active-page");
        $(".page")[3].classList.add("active-page");
        break;
    default:
        break;
}

let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

$(".btn-modal-order").click(() => {
    let data = [
        $(".recall-form .name"),
        $(".recall-form .phone"),
    ];
    if (validateOrder(data)) {
        let objMain = {
            data: {
                'phone': data[1],
                'name': data[0],
            },
            "form_kind": "modal-main"
        }
        // sendAjaxRequest(objMain);
        window.location.replace("order_success.html");
    }
});

$(".btn-index-form").click(() => {
    let data = [
        $(".mini-form .name"),
        $(".mini-form .phone"),
    ];
    if (validateOrder(data)) {
        let objMain = {
            data: {
                'phone': data[1],
                'name': data[0],
            },
            "form_kind": "modal"
        }
        // sendAjaxRequest(objMain);
        window.location.replace("order_success.html");
    }
});

$(".btn-order-max").click(() => {
    let data = [
        $(".form-max .name"),
        $(".form-max .phone"),
    ];
    if (validateOrder(data)) {
        let objMain = {
            data: {
                'phone': data[1],
                'name': data[0],
            },
            "form_kind": "modal-main"
        }
        // sendAjaxRequest(objMain);
        window.location.replace("order_success.html");
    }
});

//   функция валидации
function validateOrder(data) {
    for (let i = 0; i < data.length; i++) {
        let itemValue = data[i].val();
        if (itemValue == "") {
            data[i].addClass("warning-inputs");
            errors = false
        } else {
            data[i].removeClass("warning-inputs");
            errors = true
        }
    }

    let numberValue = data[1].val()
    if (numberValue.length < 17) {
        data[1].addClass('warning-inputs')
    } else {
        data[1].removeClass('warning-inputs')
    }


    if ($('.warning-inputs').length) {
        return false
    } else {
        return true
    }
}

// let body=document.querySelector('body');

// if(isMobile.any()){
// 		body.classList.add('touch');
// 		let arrow=document.querySelectorAll('.arrow');
//         let menu = document.querySelectorAll('#menu');

// }else{
// 	body.classList.add('mouse');
// }


window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('#phone'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});