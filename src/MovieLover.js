// 최상단일 때 네비바 스타일 변경
document.addEventListener('scroll', ()=>{
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

// 영화 사진 생성
document.addEventListener('DOMContentLoaded', ()=>{
    const movieList = document.querySelector('.movie-list');
    console.log(movieList)

    for (let i=0;i<6;i++){
        const movieBox = document.createElement('div');
        movieBox.classList.add("movie-box");
        movieList.appendChild(movieBox);
    }
})

// 윈도우 크기의 따라 반응형
window.addEventListener('resize', ()=>{
    const movieContainer = document.querySelector('.movie-container');
    const mainIntroduction = document.querySelector('.main-introduction');
    const movieBox = document.querySelector('.movie-box');
    let windowWidth = window.innerWidth;

    if (windowWidth<500) {
        mainIntroduction.style.marginTop = '300px';
        movieContainer.style.marginTop = '100px';
        movieBox.style.width = '300px';
        movieBox.style.height = '400px';
    } else if (windowWidth<700){
        mainIntroduction.style.marginTop = '400px';
        movieContainer.style.marginTop = '100px';
        movieBox.style.width = '200px';
        movieBox.style.height = '300px';
    } else if (windowWidth<1000) {
        mainIntroduction.style.marginTop = '200px';
        movieContainer.style.marginTop = '300px';
    } else {
        movieContainer.style.marginTop = '400px';
    }
})

// 영화 목록 클릭 시 이동
document.querySelector('.moveList').addEventListener('click', () => {
    function scrollMove(y) {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    if (window.innerWidth<500) {
        scrollMove(500)
    } else if (window.innerWidth<1000) {
        scrollMove(600)
    } else {
        scrollMove(700)
    }
})