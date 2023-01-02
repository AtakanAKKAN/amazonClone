var fourSectionMargin = document.querySelector(".carousel-control-next").offsetHeight ;
var r = document.querySelector(':root');
fourSectionMargin = fourSectionMargin*0.8
r.style.setProperty('--fourSection-Margin-top', fourSectionMargin + "px");
r.style.setProperty('--fourSection-Minus-Margin-top', "-" + fourSectionMargin + "px");


console.log(fourSectionMargin);


const swiper = new Swiper(".swiper" , {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints:{
      //when window width is >= 640px
      640:{
          slidesPerView: 4,
          slidesPerGroup: 3,
          freeMode: false,
          speed: 1200,
      },

      1096:{
        slidesPerView: 5,
        slidesPerGroup: 5,
        freeMode: false,
        speed: 1200,
      },
    },
  
  });