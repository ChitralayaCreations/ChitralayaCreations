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
const customCursor = document.querySelector('.custom-cursor');
const mediaFrame = document.querySelector('.mediaframe');

// Show the cursor when mouse moves (except in mediaframe)
document.addEventListener('mousemove', (e) => {
  if (!mediaFrame.contains(e.target)) {
    customCursor.style.display = 'block';
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  } else {
    customCursor.style.display = 'none';
  }
});

// Show cursor on click (even inside mediaframe)
document.addEventListener('click', (e) => {
  customCursor.style.display = 'block';
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});

// Counter Animation on Scroll
let countersAnimated = false;

function animateCounters() {
  document.querySelectorAll('.count').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 1000;

    const step = Math.ceil(target / 100);
    const update = () => {
      count += step;
      if (count < target) {
        counter.innerText = count;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

window.addEventListener('scroll', () => {
  const stats = document.querySelector('.about-stats');
  if (!stats || countersAnimated) return;

  const statsTop = stats.getBoundingClientRect().top;
  if (statsTop < window.innerHeight - 100) {
    animateCounters();
    countersAnimated = true;
  }
});

document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const requirement = document.getElementById('requirement').value;
    const message = document.getElementById('message').value.trim();
  
    const whatsappNumber = "+919392733100"; // Replace with your number, e.g., 919876543210
  
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
