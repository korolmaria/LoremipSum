const scroll = () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', (e) => {
        e.preventDefault();

        if (window.scrollY > 10) header.style.opacity = '100%';
        if (window.scrollY === 0) header.style.opacity = '90%';
    })
}

scroll();