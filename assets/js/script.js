AOS.init();


  const paraqraf = new Typed('#ParaqrafString', {
    strings: ['It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. <strong>Tahir</strong> provide the best for our customers.'],
    typeSpeed: 20,
  });


  const swiper = new Swiper(".coffeeTahirSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
   

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
  });