$(function(){
    $('.caseSlider').slick({
        arrows: true,
        dots: true,
        responsive: [{
            breakpoint: 402,
            settings:{
                arrows: false,
            }
            },]
    });
    $('.review-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 511,
            settings:{
                arrows: false,
            }
            },]
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

function overflow__body(){
    var $body;
    $body = document.body;
    if ($('#menu__toggle').is(':checked')){
        $body.classList.add('overlay');
    } else {
        $body.classList.remove('overlay');
    }
};

$(clickBtn);
$(overflow__body);








