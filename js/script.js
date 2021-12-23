const inputRub = document.querySelector('#rub');
const inputEur = document.querySelector('#eur');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
/*     request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); */
    request.send();
    request.addEventListener('load', () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response);
            const usdRate = data.Valute.USD.Value;
            const eurRate = data.Valute.EUR.Value;
            inputUsd.value = (inputRub.value * usdRate).toFixed(2);
            inputEur.value = (inputRub.value * eurRate).toFixed(2);
        } else {
            inputUsd.value = 'что то пошло не так';
            inputEur.value = 'что то пошло не так';
        }
    })
})