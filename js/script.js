const swiper = new Swiper('.swiper', {

    spaceBetween: 40,

    direction: 'horizontal',
    loop: false,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints:{
        
        320: {
            slidesPerView: 1.7,
            spaceBetween: 20,

        },
        
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }

    });