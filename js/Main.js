const panel = document.getElementById('nav_panel');
const content = document.getElementById('content');
const closePanel = document.getElementById('close_panel_btn');
const openPanel = document.getElementById('open_panel');
const burger = document.querySelector('.burger');
const navItems = document.querySelector('.navbar').children;

function close_Panel() {
  panel.classList.remove('show');
  burger.classList.add('show');
  // content.classList.remove('shrink')
}

function open_Panel() {
  panel.classList.add('show');
  burger.classList.remove('show');
  // content.classList.add('shrink');
}

// Close the panel if the "X" mark as been clicked
closePanel.addEventListener('click', () => {
  close_Panel();
});

// Open the panel if the Hamburger menu icon has been clicked
openPanel.addEventListener('click', () => {
  open_Panel();
});

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 400,
  speedAsDuration: true,
  easing: 'easeOutQuad',
});

// Close the panel if the nav items have been closed in mobile mode
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    close_Panel();
  });
}

const footers = document.querySelectorAll('.card-footer');
let toggleFooter = document.querySelector('.card-footer-description');

function findFooter(e) {
  for (let i = 0; i < footers.length; i++) {
    if (footers[i].classList.contains('tapped') && footers[i].id != e.target.parentNode.id) {
      footers[i].classList.remove('tapped');
    }
  }

  e.target.parentNode.classList.add('tapped');
}

toggleFooter.addEventListener('click', (e) => {
  findFooter(e);
});

// Highlight the current section on the Navbar
function alterActiveSection() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = {
    home: 'home',
    portfolio: 'portfolio',
    analysis: 'analysis',
    conclusion: 'conclusion',
  };

  Object.values(sections).forEach((val) => {
    if (window.scrollY >= document.getElementById(val).offsetTop - 150) {
      let currentSection = '#' + document.getElementById(val).id;

      for (let link of navLinks) {
        if (currentSection === link.getAttribute('href')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    }
  });
}

let menus = document.getElementsByClassName('menu_header');

for (let i = 0; i < menus.length; i++) {
  menus[i].onclick = function () {
    let content = this.nextElementSibling;
    this.classList.toggle('is-open');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  };
}

window.addEventListener('scroll', () => {
  const elemTarget = document.querySelector('#portfolio');
  const elemTargetAnalysis = document.querySelector('#analysis');
  const anlsHeading = document.getElementById('heading_card_2');
  const heading = document.getElementById('heading_card_1');

  if (window.scrollY >= elemTarget.offsetTop - 80) {
    heading.classList.add('animate-underline');
  } else if (window.scrollY >= elemTargetAnalysis.offsetTop - 80) {
    anlsHeading.classList.add('animate-underline');
  } else {
    heading.classList.remove('animate-underline');
  }

  alterActiveSection();
});

const cardsList = document.querySelector('.factors-cards').children;
let counter = 0;

const revealOriginBottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 1200,
  reset: true,
});

function revealCards(cards) {
  for (let i = 0; i <= cards.length; i++) {
    if (i === 0) {
      revealOriginBottom.reveal('.first', {
        delay: counter,
      });
    } else if (i === 1) {
      counter += 100;
      revealOriginBottom.reveal('.second', {
        delay: counter,
      });
    } else if (i === 2) {
      counter += 100;
      revealOriginBottom.reveal('.third', {
        delay: counter,
      });
    } else {
      counter += 100;
      revealOriginBottom.reveal('.fourth', {
        delay: counter,
      });
    }
  }
}

revealCards(cardsList);
