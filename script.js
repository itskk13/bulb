const bulb = document.getElementById('bulb');
const container = document.querySelector('.bulb-container')
const btn = document.getElementById('icon');
const menu = document.querySelector('.menu');
const listItem = document.querySelectorAll('.nav-li');
const switchBtn = document.querySelector('.glow-btn');




btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('close');
});

listItem.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.toggle('close');
    btn.classList.toggle('active');
  })
})
switchBtn.addEventListener('click', () => {
  if(bulb.src.match('bulb-on')) {
    bulb.src ='images/bulb-off.png';
    switchBtn.innerHTML = '<span></span><span></span><span></span><span></span>Switch On';
  }else {
    bulb.src ='images/bulb-on.png';
    switchBtn.innerHTML = '<span></span><span></span><span></span><span></span>Switch Off';
  }
});

