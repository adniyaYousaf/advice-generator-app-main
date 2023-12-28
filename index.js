const advice = document.querySelector('#advice');
const adviceNumber = document.querySelector('#adviceNumber');

const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();
    advice.textContent = data.slip.advice;
    adviceNumber.textContent = data.slip.id;
}

fetchAdvice();