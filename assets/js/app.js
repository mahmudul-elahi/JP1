feather.replace();

$(function () {
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop()

        if (scrollPos > 0) {
            $('#navBar').addClass('navbarScrollEffect')
        } else {
            $('#navBar').removeClass('navbarScrollEffect')
        }
    })
})