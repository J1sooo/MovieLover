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
let movie = ['../img/movie/기생충.jpg', '../img/movie/너의이름은.jpg', '../img/movie/모아나2.jpg',
                    '../img/movie/센과치히로의행방불명.jpg', '../img/movie/어벤져스인피니티워.jpg',
                    '../img/movie/인사이드아웃2.jpg', '../img/movie/탑건매버릭.jpg'];
document.addEventListener('DOMContentLoaded', ()=>{
    const movieList = document.querySelector('.movie-list');

    for (let i=0;i<movie.length;i++){
        const movieBox = document.createElement('div');
        movieBox.classList.add("movie-box");
        movieBox.style.backgroundImage = `url(${movie[i]})`;
        movieBox.style.backgroundSize = "cover";
        movieList.appendChild(movieBox);
    }
})

// 윈도우 크기의 따라 반응형
window.addEventListener('resize', ()=>{
    const movieContainer = document.querySelector('.movie-container');
    const mainIntroduction = document.querySelector('.main-introduction');
    const movieBox = document.querySelectorAll('.movie-box');
    let windowWidth = window.innerWidth;

    if (windowWidth<500) {
        mainIntroduction.style.marginTop = '300px';
        movieContainer.style.marginTop = '100px';
        movieBox.forEach(box=>{
            box.style.width = '300px';
            box.style.height = '450px';
        })
    } else if (windowWidth<700){
        mainIntroduction.style.marginTop = '400px';
        movieContainer.style.marginTop = '100px';
        movieBox.forEach(box=> {
            box.style.width = '200px';
            box.style.height = '300px';
        })
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