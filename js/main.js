$(function(){
    $('.stats').slick({
        useTransform: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 400,
        cssEase: 'ease-in-out',
    });
    $('.caseSlider').slick({
        arrows: true,
        dots: true,
    });
    $('.review-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
});

function clickBtn() {
    var $btn = $('.programm__list-item__btn');
    var $sublist = $('.programm__list-item__sublist');

    $btn.click(function(event) {
        var $target = $(event.currentTarget);
        var $dropdown = $target.next();

        $btn.not($target).toggleClass('active', false);
        $sublist.not($dropdown).toggleClass('active', false);
        $target.toggleClass('active', true);
        $dropdown.toggleClass('active', true);
    });
};

$(clickBtn);








