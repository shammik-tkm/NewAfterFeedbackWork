document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            const subject = encodeURIComponent(`Anfrage von ${name} - ${service}`);
            const body = encodeURIComponent(
                `Name: ${name}\nTelefon: ${phone}\nE-Mail: ${email}\nLeistung: ${service}\n\nNachricht:\n${message}`
            );
            window.location.href = `mailto:adbworkteam@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});