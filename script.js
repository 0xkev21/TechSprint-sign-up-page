const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('reveal', entry.isIntersecting);
        if(entry.isIntersecting) {
            observer.unobserve(entry.target);
            entry.target.classList.remove('to-reveal');
        }
    })
});

const toReveal = document.querySelectorAll('.to-reveal, fieldset > div, .have-account');
toReveal.forEach(item => observer.observe(item));