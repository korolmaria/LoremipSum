const validate = (name, type, email) => {
    let errors = [];
    const patterns = {
        email: /\S+@\S+\.\S+/,
        name: /[a-zA-ZА-яЁё]/,
    }

    if (type === "Выберите тип системы") errors = [...errors, 'Выберите тип системы'];
    if (!email.match(patterns.email)) errors = [...errors, 'введите корректный email'];
    if (!name.match(patterns.name)) errors = [...errors, 'введите корректное имя'];

    return errors;
}

const submitData = () => {
    const modal = document.getElementById("modal");
    const form = document.querySelector( ".form" );
    const body = document.querySelector(".modal-window__body");
    const close = document.querySelector(".modal-window__close");
    const errorBlock = document.querySelector('.error');

    form.addEventListener( "submit", function ( e ) {
        e.preventDefault();
        errorBlock.innerText = '';
        document.body.style.setProperty('overflow', 'hidden');


        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const type = document.getElementById("type").innerText;
        const range = document.querySelector("input[name='range']").value;
        const file = document.querySelector("input[name='file']").value;

        const errors = validate(name, type, email);

        if (errors.length > 0) errorBlock.innerText = errors.join(', ');

        if (errors.length === 0) {
            body.innerHTML = `
            <p class="modal-window__text"><span class="modal-window__text_bold">Имя</span> - ${name}</p>
            <p class="modal-window__text"><span class="modal-window__text_bold">Емэйл</span> - ${email}</p>
            <p class="modal-window__text"><span class="modal-window__text_bold">Тип системы</span> - ${type}</p>
            <p class="modal-window__text"><span class="modal-window__text_bold">Количество</span> - ${range} %</p>
            <p class="modal-window__text"><span class="modal-window__text_bold">Загружен файл</span> - ${file}</p>
        `;
            modal.classList.add('modal_open');
        }
    } );

    close.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.setProperty('overflow', 'auto');
        modal.classList.remove('modal_open');
    })
}

submitData();