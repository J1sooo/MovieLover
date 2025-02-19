// 영화 사진 생성
let movie = ['기생충.jpg', '너의이름은.jpg', '모아나2.jpg',
    '센과치히로의행방불명.jpg', '어벤져스인피니티워.jpg',
    '인사이드아웃2.jpg', '탑건매버릭.jpg'];
const popup = document.querySelector('.popup-container');
const popupBox = document.querySelector('.popup-box');

document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.querySelector('.movie-list');

    for (let i = 0; i < movie.length; i++) {
        const movieBox = document.createElement('img');
        movieBox.classList.add('movie-box');
        movieBox.src = `../img/movie/${movie[i]}`;
        movieBox.alt = movie[i];
        movieList.appendChild(movieBox);

        // 개별 영화 박스 클릭 시 팝업 열기
        movieBox.addEventListener('click', () => {
            popupBox.style.height = '70%';
            popupBox.src = `../img/movie/${movie[i]}`;
            popup.style.display = 'flex';
        });
    }
})
// 팝업 창 닫기
document.querySelector('.close-button').addEventListener('click', () => {
    popup.style.display = 'none';
})

// 팝업 창 이미지 확대 축소
document.addEventListener('wheel', (evt) => {
    if (popup.style.display === 'flex') {
        evt.preventDefault();
        let imgHeight = parseInt(popupBox.style.height);
        if (evt.deltaY < 0) {
            imgHeight += 5;
        } else {
            imgHeight -= 5;
        }
        popupBox.style.height = imgHeight + '%';
    }
}, {passive: false})

// 검색 기능
const search = document.querySelector('.search > input')

search.addEventListener('keydown', (evt) => {
    let keyword = search.value.replaceAll(' ','');
    const movieBoxes = document.querySelectorAll('.movie-box');
    if (evt.key === 'Enter') {
        for (let i = 0; i < movie.length; i++) {
            if (movie[i].includes(keyword)) {
                movieBoxes[i].style.display = 'flex';
            } else {
                movieBoxes[i].style.display = 'none';
            }
        }
    } else if (evt.key === 'Backspace' && keyword.length === 1) {
        movieBoxes.forEach(box => {
            box.style.display = 'flex';
        })
    }
})

// 팝업 창 이미지 변경
const movePopupImg = (evt, arrow) => {
    if (popup.style.display === 'flex') {
        let popupImg = movie.indexOf(decodeURI(popupBox.src.split('/').pop()));
        if ((evt.key === 'ArrowLeft' || arrow === 'left') && popupImg > 0) {
            popupImg -= 1;
        } else if ((evt.key === 'ArrowRight' || arrow === 'right') && popupImg < movie.length - 1) {
            popupImg += 1;
        }
        popupBox.src = `../img/movie/${movie[popupImg]}`;
    }
}

// 화살표 방향으로 변경
document.addEventListener('keydown', movePopupImg);
// 클릭으로 변경
document.querySelector('.arrow-left').addEventListener('click', () => movePopupImg({}, 'left'));
document.querySelector('.arrow-right').addEventListener('click', () => movePopupImg({}, 'right'));

// 최상단일 때 네비바 스타일 변경
document.addEventListener('scroll', () => {
    const topNav = document.querySelector('.top-nav');
    if (window.scrollY > 0) {
        topNav.style.backgroundColor = 'white';
        topNav.style.color = 'black';
        topNav.style.boxShadow = '0 0 5px 3px gray';
    } else {
        topNav.style.backgroundColor = 'transparent';
        topNav.style.color = 'white';
        topNav.style.boxShadow = '0 0 0 0';
    }
})

// 윈도우 크기의 따라 반응형
const autoWidth = () => {
    const movieContainer = document.querySelector('.movie-container');
    const mainIntroduction = document.querySelector('.main-introduction');
    const movieBox = document.querySelectorAll('.movie-box');
    let windowWidth = window.innerWidth;

    if (windowWidth < 500) {
        mainIntroduction.style.marginTop = '300px';
        movieContainer.style.marginTop = '100px';
        movieBox.forEach(box => {
            box.style.width = '300px';
            box.style.height = '450px';
        })
    } else if (windowWidth < 700) {
        mainIntroduction.style.marginTop = '400px';
        movieContainer.style.marginTop = '100px';
        movieBox.forEach(box => {
            box.style.width = '200px';
            box.style.height = '300px';
        })
    } else if (windowWidth < 1000) {
        mainIntroduction.style.marginTop = '200px';
        movieContainer.style.marginTop = '300px';
    } else {
        movieContainer.style.marginTop = '400px';
    }
}
// 브라우저 실행 시, 사용자의 반응에 따른 적용
['DOMContentLoaded', 'resize'].forEach(evt => {
    window.addEventListener(evt, autoWidth);
})

// 영화 로고 클릭 시 최상단 이동
document.querySelector('.moveTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

// 영화 목록 클릭 시 이동
document.querySelector('.moveList').addEventListener('click', () => {
    function scrollMove(y) {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }

    if (window.innerWidth < 500) {
        scrollMove(500)
    } else if (window.innerWidth < 1000) {
        scrollMove(600)
    } else {
        scrollMove(700)
    }
})

// 깃허브 링크 새창에서 열기
document.querySelector('.foot-content').addEventListener('click', () => {
    window.open('https://github.com/J1sooo/MovieLover')
})

