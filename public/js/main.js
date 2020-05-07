function sel(el){
    return document.querySelector(el)
}

 var slidIndex=0;


window.onload=function(){
    var swiper = new Swiper('.slider .swiper-container', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    var swiper2 = new Swiper('#ImgGall .swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


    






}