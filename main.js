
let x = document.querySelector('.x');
let y = document.querySelector('.y');
let blurEffect = document.querySelector('.blur');
let spread = document.querySelector('.spread');
let result = document.querySelector('.result');
let code = document.querySelector('.code');


x.addEventListener('keyup', () => {
  result.style['box-shadow'] = `${x.value}px ${y.value}px ${blurEffect.value}px ${spread.value}px white`
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurEffect.value}px ${spread.value}px #ffffff;`
})

y.addEventListener('keyup', () => {
  result.style['box-shadow'] = `${x.value}px ${y.value}px ${blurEffect.value}px ${spread.value}px white`
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurEffect.value}px ${spread.value}px #ffffff;`
})

blurEffect.addEventListener('keyup', () => {
  result.style['box-shadow'] = `${x.value}px ${y.value}px ${blurEffect.value}px ${spread.value}px white`
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurEffect.value}px ${spread.value}px #ffffff;`
})

spread.addEventListener('keyup', () => {
  result.style['box-shadow'] = `${x.value}px ${y.value}px ${blurEffect.value}px ${spread.value}px white`
  code.textContent = `box-shadow: ${x.value}px ${y.value}px ${blurEffect.value}px ${spread.value}px #ffffff;`
})





