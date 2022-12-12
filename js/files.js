const setFile = () => {
    const textElement = document.querySelector('.field__input_text');
    const fileElement = document.querySelector('.field__input_file');


    if (!textElement || !fileElement) return;

    textElement.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    fileElement.addEventListener('change', (e) => {
        e.preventDefault();
        const isFiles = e.target.files.length >= 1;
        if (!isFiles) return;

        textElement.innerHTML = `<span class="active">${e.target.files[0].name}</span>`;
    })
}

setFile();