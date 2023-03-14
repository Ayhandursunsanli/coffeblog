// const login_register_one = document.querySelector(".login_register_one");

// const login_register_two = document.querySelector(".login_register_two");

// const register_button = document.querySelector(".register_button");

// const login_button = document.querySelector(".login_button");

// login_register_two.style.display = "none";

// register_button.addEventListener("click" , () => {
//   login_register_one.style.display = "none";
//   login_register_two.style.display ="flex";
// });

// login_button.addEventListener("click" , () => {
//   login_register_one.style.display = "none";
//   login_register_two.style.display ="flex";
// });

const homePageHeaderTextRight = document.querySelector('.home_page_header_text_right');

const text = 'The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking.';

let index = 0;

function animateText() {
  if (index < text.length) {
    homePageHeaderTextRight.textContent += text.charAt(index);
    index++;
    setTimeout(animateText, 50);
  }
}

animateText();

const writeSection = document.querySelector('.write');

window.addEventListener('scroll', () => {
  if (writeSection.getBoundingClientRect().top <= window.innerHeight * 0.7) {
    const items = document.querySelectorAll('.experience_left_item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, (index + 1) * 500);
    });
  }
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


AOS.init();