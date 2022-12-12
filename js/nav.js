const nav = () => {
    const navItems = document.querySelectorAll('.menu__item_link');

    navItems.forEach((link) => {
        link.addEventListener('click', () => {
            navItems.forEach((link) => link.classList.remove('active'));
            link.classList.add('active');
        })
    })
}

nav();