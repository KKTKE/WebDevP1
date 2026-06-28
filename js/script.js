console.log('Car Hub loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const message = this.querySelector('textarea');
            
            let valid = true;
            
            if (name && name.value.trim().length < 2) {
                name.classList.add('is-invalid');
                valid = false;
            } else if (name) {
                name.classList.remove('is-invalid');
            }
            
            if (email && !email.value.includes('@')) {
                email.classList.add('is-invalid');
                valid = false;
            } else if (email) {
                email.classList.remove('is-invalid');
            }
            
            if (message && message.value.trim().length < 5) {
                message.classList.add('is-invalid');
                valid = false;
            } else if (message) {
                message.classList.remove('is-invalid');
            }
            
            if (valid) {
                alert('Message sent! We\'ll get back to you soon.');
                form.reset();
            }
        });
    }
});

