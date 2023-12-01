const getWeatherInfo = () => {
    const cityInput = document.querySelector('.search');

    if (cityInput.value === '') {
        alert('Input Feild Empty!');
        return;
    }
};

function init() {
    document.querySelector('.btn').addEventListener('click', getWeatherInfo);
}

init();
