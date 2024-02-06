
let text = document.querySelector('.bt1')
let matn = document.querySelector('h1')

text.addEventListener('click', function(){
    matn.classList.add('active')
})


let prev = document.querySelector('.bt2')
prev.addEventListener('click', function(){
    matn.classList.remove('active')
})
