// Language translations
const translations = {
    'es': {
        'nav': ['Inicio', 'Sobre Nosotros', 'Nuestro Equipo', 'Contáctanos'],
        'hero-title': 'Toxicología computacional: rápida, económica y ética',
        'btn-more': 'Conocer más',
        // About Us Page
        'about-title': 'Sobre Nosotros',
        'about-content': 'Somos una empresa dedicada a la toxicología computacional, utilizando tecnologías avanzadas para realizar evaluaciones de seguridad de manera rápida, económica y ética.',
        // Our Team Page
        'team-title': 'Nuestro Equipo',
        'team-content': 'Nuestro equipo está compuesto por expertos en toxicología, programación y análisis de datos, comprometidos con la innovación y la seguridad.',
        // Contact Page
        'contact-title': 'Contáctanos',
        'contact-content': 'Puedes contactarnos a través de los siguientes medios:',
        'contact-email': 'Correo electrónico: info@fgtechnology.com',
        'contact-phone': 'Teléfono: +34 123 456 789'
    },
    'ca': {
        'nav': ['Inici', 'Sobre Nosaltres', 'El Nostre Equip', 'Contacta\'ns'],
        'hero-title': 'Toxicologia computacional: ràpida, econòmica i ètica',
        'btn-more': 'Conèixer més',
        // About Us Page
        'about-title': 'Sobre Nosaltres',
        'about-content': 'Som una empresa dedicada a la toxicologia computacional, utilitzant tecnologies avançades per realitzar avaluacions de seguretat de manera ràpida, econòmica i ètica.',
        // Our Team Page
        'team-title': 'El Nostre Equip',
        'team-content': 'El nostre equip està compost per experts en toxicologia, programació i anàlisi de dades, compromesos amb la innovació i la seguretat.',
        // Contact Page
        'contact-title': 'Contacta\'ns',
        'contact-content': 'Pots contactar-nos a través dels mitjans següents:',
        'contact-email': 'Correu electrònic: info@fgtechnology.com',
        'contact-phone': 'Telèfon: +34 123 456 789'
    },
    'en': {
        'nav': ['Home', 'About Us', 'Our Team', 'Contact Us'],
        'hero-title': 'Computational toxicology: fast, economical and ethical',
        'btn-more': 'Learn more',
        // About Us Page
        'about-title': 'About Us',
        'about-content': 'We are a company dedicated to computational toxicology, using advanced technologies to conduct safety assessments quickly, economically, and ethically.',
        // Our Team Page
        'team-title': 'Our Team',
        'team-content': 'Our team is composed of experts in toxicology, programming, and data analysis, committed to innovation and safety.',
        // Contact Page
        'contact-title': 'Contact Us',
        'contact-content': 'You can contact us through the following means:',
        'contact-email': 'Email: info@fgtechnology.com',
        'contact-phone': 'Phone: +34 123 456 789'
    }
};

// Function to change language globally
function changeLanguage(lang) {
    // Update active language button
    document.querySelectorAll('.language-selector a').forEach(a => {
        a.classList.remove('active');
    });
    document.querySelector(`.language-selector a[onclick="changeLanguage('${lang}')"]`).classList.add('active');
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link, index) => {
        link.textContent = translations[lang]['nav'][index];
        link.setAttribute('data-lang', lang);
    });
    
    // Update dynamic content based on current page
    const currentPage = document.body.getAttribute('data-page');
    
    // Hero section (if exists)
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.textContent = translations[lang]['hero-title'];
    }
    
    // Button (if exists)
    const btnMore = document.getElementById('btn-more');
    if (btnMore) {
        btnMore.textContent = translations[lang]['btn-more'];
    }
    
    // Page-specific translations
    switch(currentPage) {
        case 'about':
            document.getElementById('page-title').textContent = translations[lang]['about-title'];
            document.getElementById('page-content').textContent = translations[lang]['about-content'];
            break;
        case 'team':
            document.getElementById('page-title').textContent = translations[lang]['team-title'];
            document.getElementById('page-content').textContent = translations[lang]['team-content'];
            break;
        case 'contact':
            document.getElementById('page-title').textContent = translations[lang]['contact-title'];
            document.getElementById('page-content').textContent = translations[lang]['contact-content'];
            document.getElementById('contact-email').textContent = translations[lang]['contact-email'];
            document.getElementById('contact-phone').textContent = translations[lang]['contact-phone'];
            break;
    }
}

// Scroll effect for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});
