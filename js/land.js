const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Fechar menu com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
/* ================= MODAIS ================= */
document.querySelectorAll(".btn[data-modal]").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById(this.dataset.modal).style.display = "flex";
    });
});

document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function () {
        this.closest(".modal").style.display = "none";
    });
});

window.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});

/* ================= ANIMAÇÃO AO ROLAR ================= */
const elements = document.querySelectorAll(".fade-scroll");

function animateOnScroll() {
    const windowBottom = window.innerHeight + window.scrollY;

    elements.forEach(el => {
        if (windowBottom > el.offsetTop + 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
