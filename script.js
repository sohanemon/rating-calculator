const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let starData = Array.from(form.querySelectorAll('[type="number"]')).map(
    (el) => Number(el.value)
  );

  const sum = starData.reduce((p, c) => p + c, 0);
  result.textContent = sum / 5;
});
