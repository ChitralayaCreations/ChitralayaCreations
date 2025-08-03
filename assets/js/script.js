$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Chitralaya Creations";
            $("#favicon").attr("href", "assets/images/img.jpg");
        }
        else {
            document.title = "Come Back To site";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

});

function animateCounters() {
  document.querySelectorAll('.count').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const step = Math.ceil(target / 100);

    const update = () => {
      count += step;
      counter.innerText = Math.min(count, target);
      if (count < target) {
        requestAnimationFrame(update);
      }
    };

    update();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  animateCounters();
});


document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.querySelector('.video-scroller');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  // Select one card to measure its true width
  function getCardWidth() {
      const card = document.querySelector('.video-card');
      return card ? card.getBoundingClientRect().width : 0;
  }

  function scrollLeft() {
      const amount = getCardWidth();
      scroller.scrollBy({ left: -amount, behavior: 'smooth' });
  }

  function scrollRight() {
      const amount = getCardWidth();
      scroller.scrollBy({ left: amount, behavior: 'smooth' });
  }

  if (leftBtn) leftBtn.addEventListener('click', scrollLeft);
  if (rightBtn) rightBtn.addEventListener('click', scrollRight);
});



window.addEventListener('scroll', () => {
  const stats = document.querySelector('.about-stats');
  if (!stats || countersAnimated) return;

  const statsTop = stats.getBoundingClientRect().top;
  if (statsTop < window.innerHeight - 100) {
    animateCounters();
    countersAnimated = true;
  }
});

/* ===== WHATSAPP FORM SUBMISSION ===== */
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const requirement = document.getElementById('requirement').value;
  const message = document.getElementById('message').value.trim();

  const whatsappNumber = "+919392733100";
  const fullMessage = `Hello, I'm ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${requirement}%0AMessage: ${message}`;
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

  window.open(whatsappURL, '_blank');
});



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .yt', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h1', { delay: 100 });
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });