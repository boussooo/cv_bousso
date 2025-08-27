/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
  } else {
      menuBtn.className = "nav-menu";
  }
}

function downloadCV() {
  const cvUrl = 'CV_Mame_Touty_Bousso.pdf';
  
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'CV_Mame_Touty_Bousso.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  const btn = document.querySelector('.btn[onclick="downloadCV()"]');
  btn.innerHTML = '<i class="uil uil-check-circle"></i> CV Téléchargé !';
  setTimeout(() => {
      btn.innerHTML = 'Télécharger mon CV <i class="uil uil-file-alt"></i>';
  }, 2000);
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
let typedEffect; // Déclaration globale

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- SCROLL REVEAL LEFT_RIGHT ANIMATION ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  })
}


(function() {
    emailjs.init("4qu47QY5_b2OE2wnP"); // Remplacez par votre User ID
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const btn = event.target.querySelector('button');
    const originalBtnText = btn.innerHTML;
    
    // Mise à jour du bouton pendant l'envoi
    btn.disabled = true;
    btn.innerHTML = 'Sending... <i class="uil uil-spinner uil-spin"></i>';
    
    // Envoi du formulaire via EmailJS
    emailjs.sendForm('service_zjmur15', 'template_8h10j2e', this)
      .then(function() {
        // Redirection vers la page de remerciement après succès
        window.location.href = "merci.html";
      }, function(error) {
        // Affichage d'une alerte en cas d'erreur
        alert('Erreur lors de l\'envoi du message: ' + error.text);
      })
      .finally(function() {
        // Réinitialisation du bouton
        btn.disabled = false;
        btn.innerHTML = originalBtnText;
      });
  });
/* ----- TRANSLATION SYSTEM ----- */
const translations = {
  fr: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
      iamPrefix:"Je suis",
      typedText: ["Développeuse Web", "graphiste junior"],
      featuredText: "Développeuse frontend et backend, passionnée par la création de sites web à la fois esthétiques et fonctionnels.",
      aboutTitle: "À propos de moi",
      introductionTitle: "Mon introduction",
      aboutText: "Actuellement étudiant en deuxième année de Génie Logiciel, je nourris une véritable passion pour l'informatique et les nouvelles technologies. J'ai su développer des bases solides en programmation ainsi qu'en conception de pages web. Ma motivation, ma curiosité et mon désir d'apprendre me poussent à me perfectionner continuellement dans ce domaine en constante évolution. Je possède des compétences avérées en résolution de problèmes, en travail d'équipe et en adaptabilité. Je suis particulièrement enthousiaste à l'idée de contribuer à des projets innovants et de mettre en pratique les connaissances acquises au cours de mes études.", 
      projectsTitle: "Projets",
      contactTitle: "Contactez-moi",
      contactSubtitle: "Vous avez un projet en tête? Contactez-moi ici",
      findMe: "Trouvez-moi",
      send: "Envoyer",
      downloadCV: "Télécharger mon CV"
  },
  en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      iamPrefix:"I'm",
      typedText: ["Web Developer", "Web Designer"],
      featuredText: "Experienced frontend and backend developer with a passion for creating visually stunning and user-friendly websites.",
      aboutTitle: "About Me",
      introductionTitle: "My introduction",
      aboutText: "Currently a second-year Software Engineering student, I have a true passion for computers and new technologies. I have developed a solid foundation in programming and web design. My motivation, curiosity, and desire to learn drive me to continually improve myself in this ever-evolving field. I have proven skills in problem-solving, teamwork, and adaptability. I am particularly enthusiastic about contributing to innovative projects and putting into practice the knowledge acquired during my studies.",
      projectsTitle: "Projects",
      contactTitle: "Get in touch",
      contactSubtitle: "Do you have a project in your mind, contact me here",
      findMe: "Find Me",
      send: "Send",
      downloadCV: "Download my CV"
  }
};

let currentLanguage = 'fr';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
  applyLanguage(currentLanguage);
  const langToggle = document.getElementById('language-toggle');
  if (langToggle) {
      langToggle.textContent = currentLanguage.toUpperCase();
  }
}

function applyLanguage(lang) {
  const data = translations[lang];
  
  // Mettre à jour tous les éléments textuels
  const elementsToUpdate = {
    
      '.featured-text-info p': data.featuredText,
      '#about .top-header h1': data.aboutTitle,
      '#about .about-info p': data.aboutText,
      '#projects .top-header h1': data.projectsTitle,
      '#contact .top-header h1': data.contactTitle,
      '#contact .top-header span': data.contactSubtitle,
      '.contact-info h2': data.findMe,
      '.form-button .btn': data.send,
      '.about-info h3': data.introductionTitle,
      '.featured-text-btn .btn': `${data.downloadCV} <i class="uil uil-file-alt"></i>`
  };

  Object.entries(elementsToUpdate).forEach(([selector, text]) => {
      const element = document.querySelector(selector);
      if (element) {
          element.innerHTML = text;
      }
  });

  // Mettre à jour les liens de navigation
  document.querySelectorAll('.nav-link').forEach((link, index) => {
      const ids = ['home', 'about', 'projects', 'contact'];
      if (link && data[ids[index]]) {
          link.textContent = data[ids[index]];
      }
  });
  document.querySelector('.iam-prefix').textContent = data.iamPrefix + ' ';
    

  // Mettre à jour l'effet de frappe
  if (typedEffect) {
      typedEffect.destroy();
  }
  typedEffect = new Typed(".typedText", {
      strings: data.typedText,
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
  });
}

/* ----- DARK/LIGHT MODE TOGGLE ----- */
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
      if (document.body.classList.contains('dark-mode')) {
          icon.classList.replace('uil-moon', 'uil-sun');
          localStorage.setItem('theme', 'dark');
      } else {
          icon.classList.replace('uil-sun', 'uil-moon');
          localStorage.setItem('theme', 'light');
      }
  }
}

/* ----- INITIALIZATION ----- */
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser le texte "I'm" / "Je suis"
  document.querySelector('.iam-prefix').textContent = translations[currentLanguage].iamPrefix + ' ';
  // Initialiser l'effet de frappe
  typedEffect = new Typed(".typedText", {
      strings: translations.fr.typedText,
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
  });

  // Configurer les écouteurs d'événements
  const langToggle = document.getElementById('language-toggle');
  if (langToggle) {
      langToggle.addEventListener('click', toggleLanguage);
  }

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
      themeToggle.addEventListener('click', toggleDarkMode);
  }

  // Vérifier le thème sauvegardé
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      const icon = document.querySelector('#theme-toggle i');
      if (icon) {
          icon.classList.replace('uil-moon', 'uil-sun');
      }
  }

  // Initialiser la langue
  applyLanguage(currentLanguage);
  window.addEventListener('scroll', scrollActive);
});

// Vérifier le thème au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le thème depuis le localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Animation pour le conteneur
    setTimeout(() => {
        document.querySelector('.thank-you-container').style.opacity = '1';
        document.querySelector('.thank-you-container').style.transform = 'translateY(0)';
    }, 100);
});
