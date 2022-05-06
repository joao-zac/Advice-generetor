const IdAdvice = document.querySelector('#IdQuote');
const TxtAdvice = document.querySelector('#Txt-quote');
const btn = document.querySelector('#btn');

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(Response =>   {
        return Response.json();
    }).then(adviceData => {
        const adviceNumber = adviceData.slip.id;
        const advice = adviceData.slip.advice;

        IdAdvice.textContent = adviceNumber;
        TxtAdvice.innerHTML = `<p>"${advice}"</p>`;
        
    }).catch(error => {
        console.log(error);
    })
}

btn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
}