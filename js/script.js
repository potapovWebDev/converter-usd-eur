const inputRub = document.querySelector('#rub');
const inputEur = document.querySelector('#eur');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value * data.current.usd).toFixed(2);
            inputEur.value = (+inputRub.value * data.current.eur).toFixed(2);
        } else {
            inputUsd.value = 'что то пошло не так';
            inputEur.value = 'что то пошло не так';
        }
    })
})