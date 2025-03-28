const hamBtn = document.getElementById("hambar");
    const closeBtn = document.getElementById("close");
    const menu = document.getElementById("hide");

    hamBtn.addEventListener("click", () => {
        menu.style.display = "flex"; // Show the div
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none"; // Hide the div
    });

  

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    loop: false,
    initialSlide: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2,
        slideShadows: false,
    },
    breakpoints: {
        1400: {
            slidesPerView: "auto",
        },
        1024: {
            slidesPerView: "auto",
        },
        768: {
            slidesPerView: 1,
        }
    },
    on: {
        slideChangeTransitionEnd: function () {
            document.querySelectorAll('.swiper-slide').forEach(slide => {
                slide.style.transform = "scale(1)"; // Reset all slides
            });
            document.querySelector('.swiper-slide-active').style.transform = "scale(1.1)"; // Scale active slide
        }
    }
});
