const inputs = document.querySelectorAll('.order-group__input');

inputs.forEach(input => {
  const group = input.closest('.order-group');

  const toggleFilledClass = () => {
    if (input.value.trim() !== '') {
      group.classList.add('order-group--filled');
    } else {
      group.classList.remove('order-group--filled');
    }
  };

  toggleFilledClass();

  input.addEventListener('input', toggleFilledClass);
});

document.querySelector('.js-show-menu').addEventListener('click', function(event) {
  event.stopPropagation();
  document.body.classList.toggle('mopen');
});

document.addEventListener('click', function(event) {
  const menu = document.querySelector('.menu');
  if (document.body.classList.contains('mopen') && !menu.contains(event.target)) {
    document.body.classList.remove('mopen');
  }
});

document.querySelectorAll('.menu-block__link').forEach(function(link) {
  link.addEventListener('click', function() {
    document.body.classList.remove('mopen');
  });
});

document.querySelector('.menu').addEventListener('click', function(event) {
  event.stopPropagation();
});


const select = document.querySelector('#select-form');
const current = select.querySelector('.select__current-text');
const items = select.querySelectorAll('.select__item');

select.addEventListener('click', function (e) {
  e.stopPropagation();
  select.classList.toggle('active');
});

items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
    current.textContent = this.textContent;
    select.classList.remove('active');
  });
});

document.addEventListener('click', function () {
  select.classList.remove('active');
});



const slider = document.getElementById('rangeSlider');
const valueDisplay = document.getElementById('rangeValue');

function updateSlider() {
  const val = slider.value;
  valueDisplay.textContent = val + ' %';
  slider.style.background = `linear-gradient(to right, #42A9ED 0%, #42A9ED ${val}%, rgba(255, 255, 255, 0.7) ${val}%, rgba(255, 255, 255, 0.7) 100%)`;
}

slider.addEventListener('input', updateSlider);
updateSlider();


const fileInput = document.querySelector('#file');
const fileButton = document.querySelector('.order-file__button');
const fileBlock = document.querySelector('.order-file__block');
const fileNameSpan = fileBlock.querySelector('.order-file__text');
const deleteButton = fileBlock.querySelector('.order-file__delete');

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileNameSpan.textContent = fileName;
    fileButton.style.display = 'none';
    fileBlock.style.display = 'flex';
  }
});


deleteButton.addEventListener('click', () => {
  fileInput.value = '';
  fileBlock.style.display = 'none';
  fileButton.style.display = 'flex';
});


const blocks = document.querySelectorAll('.animated');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0
});

blocks.forEach(block => {
  observer.observe(block);
});