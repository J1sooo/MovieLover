window.addEventListener("scroll", function (event){
    console.log("현재 스크롤 위치:", window.scrollY);
    const topNav = document.querySelector('.top-nav');
    if (window.scrollY>0) {
        topNav.style.backgroundColor = 'white';
        topNav.style.color = 'black';
        topNav.style.boxShadow = '0 0 5px 3px gray';
    } else {
        topNav.style.backgroundColor = 'transparent';
        topNav.style.color = 'white';
        topNav.style.boxShadow = '0 0 0 0';
    }
})

