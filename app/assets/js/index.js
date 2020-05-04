$('.hamburger').click(function(e) {
    console.log('a');
    $('.header__menu').toggleClass('header__menu--active');
    $('.hamburger').toggleClass('hamburger--active');
});