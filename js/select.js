const select = () => {
    const selectCurrent = document.querySelector('.select__header');
    const selectItems = document.querySelectorAll('.select__item');

    selectCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            e.target.closest('.select').classList.toggle('select_active');
        })

    selectItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            selectCurrent.innerText = e.target.innerText;
            selectCurrent.classList.remove('select_active');
        })
    })

    document.addEventListener( 'click', (e) => {
        const select = document.querySelector('.select');
        const is_select = e.target === select;

        const select_is_active = select.classList.contains('select_active');

        if (!is_select && select_is_active) {
            select.classList.remove('select_active');
        }
    })
}

select();