$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});



$(".btn_unchor").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 70;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

var year = new Date().getFullYear();
$(".year").text(year);

$('.search_btn').on("click", function() {
    $(".search_form").toggle(100);
});

$('main').on("click", function() {
    $(".search_form").hide();
});

var h_hght = 40; // высота шапки
var h_mrg = 0; // отступ когда шапка уже не видна
$(function() {
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        var elem = $('header');
        if (top + h_mrg < h_hght) {
            elem.removeClass("fixed_header");
        } else {
            elem.addClass("fixed_header");
        }
    });
});

$(".call_menu").on("click", function() {
    $("nav").slideToggle(200);
});

$(".form_feedback").submit(function(e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail.php",
        data: form_data,
        success: function(response) {
            console.log(response);
            $(".thank_click").click();
        },
        error: function(error) {
            $(".thank_click").click();
        }
    });
    return false;
});