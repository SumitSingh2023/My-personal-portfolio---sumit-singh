var typed=new Typed(".text",{
    strings:[" Frontend developer!|","ReactJs developer!|"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

let section =document.querySelectorAll('section');
let navLinks=document.querySelectorAll('nav ul li a')

window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')

        if(top >= offset && top < offset +height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*='+id+']').classList.add('active');
            })
        }
    })
}