/* update footer year */
document.getElementById('year').textContent = new Date().getFullYear();

/* smooth scroll for anchor links */
document.querySelectorAll('nav a, header a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const targetId = a.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Update URL hash after smooth scroll
            history.pushState(null, null, targetId);
        }
    });
});

/* back‑to‑top visibility + smooth scroll */
const toTopBtn = document.getElementById('to-top');

/* show / hide after 300 px */
window.addEventListener('scroll', () => {
    toTopBtn.classList.toggle('show', window.scrollY > 300);
});

/* smooth‑scroll to very top */
toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Remove hash from URL
    history.pushState("", document.title, window.location.pathname + window.location.search);
});
