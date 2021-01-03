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
    window.addEventListener("resize", function(){
        if (window.innerWidth <=768) {
            $('.stats').slick('unslick');
        }
    });
    window.addEventListener("resize", function(){
        if (window.innerWidth <=768) {
            $('.stats-item__br').toggleClass('stats-item-disable');
            $('.stats-item-last').toggleClass('stats-item-enable')
        } 
    });
});

function clickBtn() {
    var $btn = $('.programm__list-item__btn');
    var $sublist = $('.programm__list-item__sublist');

    $btn.click(function(event) {
        var $target = $(event.currentTarget); //отслеживает текущий таргет
        var $dropdown = $target.next(); //закрывает таргет предыдущий

        $btn.not($target).toggleClass('active', false);
        $sublist.not($dropdown).toggleClass('active', false);
        $target.toggleClass('active');
        $dropdown.toggleClass('active');
    });
};

$(clickBtn);








