//漢堡

$('.hamburger').click(function(e) {
    console.log('a');
    $('.header__menu').toggleClass('header__menu--active');
    $('.hamburger').toggleClass('hamburger--active');
});

//手風琴
$(".collapse__item h4").click(function() {
    console.log("a");

    $(this).parent().toggleClass("is-focus");

});