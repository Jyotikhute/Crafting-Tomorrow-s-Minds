burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('v-class-resp')
    rightnav.classList.toggle('v-class-resp')
})