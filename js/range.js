const range = () => {
    const rangeElement = document.querySelector('.field__input_range');
    const resultElement = document.querySelector('.field__label_result');

    const setResult = (value) => resultElement.innerText = `${value} %`;

    rangeElement.addEventListener('change', (e) => {
        if (resultElement) setResult(e.target.value)
    })
}

range();