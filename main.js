let x = document.querySelector('.x');
let y = document.querySelector('.y');
let blurr = document.querySelector('.blur');
let spread = document.querySelector('.spread');

let result = document.querySelector('.result');
let code = document.querySelector('.code');
let resetBtn = document.querySelector('.reset');

let valueX = document.querySelector('.x-value');
let valueY = document.querySelector('.y-value');
let valueBlur = document.querySelector('.blur-value');
let valueSpread = document.querySelector('.spread-value');

x.oninput = (e) => {
  result.style['box-shadow'] = `${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px white`
  valueX.textContent = `${x.value}px`;
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px #ffffff;`
}

y.oninput = (e) => {
  result.style['box-shadow'] = `${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px white`
  valueY.textContent = `${y.value}px`;
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px #ffffff;`
}

blurr.oninput = (e) => {
  result.style['box-shadow'] = `${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px white`
  valueBlur.textContent = `${blurr.value}px`;
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px #ffffff;`
}

spread.oninput = (e) => {
  result.style['box-shadow'] = `${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px white`
  valueSpread.textContent = `${spread.value}px`;
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px #ffffff;`
}


resetBtn.addEventListener('click', () => {
  x.value = 0;
  y.value = 0;
  blurr.value = 0;
  spread.value = 0;
  valueY.textContent = '0px';
  valueX.textContent = '0px';
  valueBlur.textContent = '0px';
  valueSpread.textContent = '0px';
  result.style['box-shadow'] = `0 0 0 0 white`
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurr.value}px ${spread.value}px #ffffff;`
})