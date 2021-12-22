const humburgger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links'); 
const links = nav.querySelectorAll('a');
humburgger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-open')
    humburgger.classList.toggle('toggle')
})
links.forEach(link => {
    link.addEventListener('click', ()=>{
        nav.classList.toggle('nav-open');
        humburgger.classList.toggle('toggle');
    })

});