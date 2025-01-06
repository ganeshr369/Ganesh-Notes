let lastScrollTop = 0;
let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function() {
     let currentScroll = this.window.scrollY 
    console.log(currentScroll);
    if(currentScroll > lastScrollTop) {
        navbar.style.top = "-75px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop =  currentScroll <= 0? 0: currentScroll;
})