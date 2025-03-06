// 영화 사진 생성
const originMovie = ['기생충.jpg', '너의이름은.jpg', '모아나2.jpg',
    '센과치히로의행방불명.jpg', '어벤져스인피니티워.jpg',
    '인사이드아웃2.jpg', '탑건매버릭.jpg'];
let movie = originMovie;
const popup = document.querySelector('.popup-container');
const popupBox = document.querySelector('.popup-box');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const renderMovie = () => {
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = '';

    for (let i = 0; i < movie.length; i++) {
        const movieBox = document.createElement('img');
        movieBox.classList.add('movie-box');
        movieBox.src = `img/movie/${movie[i]}`;
        movieBox.alt = movie[i];
        movieList.appendChild(movieBox);

        // 개별 영화 박스 클릭 시 팝업 열기
        movieBox.addEventListener('click', () => {
            let windowWidth = window.innerWidth;
            if (windowWidth < 500) {
                popupBox.style.height = '50%';
            } else {
                popupBox.style.height = '70%';
            }
            popupBox.src = `img/movie/${movie[i]}`;
            popup.style.display = 'flex';

            updateArrow(i, movie.length);
        });
    }
}
document.addEventListener('DOMContentLoaded', renderMovie)

// 팝업 양 끝 도달하면 화살표 없어짐
const updateArrow = (popupImgIndex, movieLength) => {
    const isFirst = popupImgIndex === 0;
    const isLast = popupImgIndex === movieLength-1;

    arrowLeft.style.borderLeft = isFirst ? 'none' : '5px solid white';
    arrowLeft.style.borderBottom = isFirst ? 'none' : '5px solid white';

    arrowRight.style.borderLeft = isLast ? 'none' : '5px solid white';
    arrowRight.style.borderBottom = isLast ? 'none' : '5px solid white';

    arrowLeft.style.cursor = isFirst ? 'default' : 'pointer';
    arrowRight.style.cursor = isLast ? 'default' : 'pointer';
}

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

search.addEventListener('keyup', (evt) => {
    if (search.value.length === 0) {
        movie = originMovie;
        renderMovie();
    } else if (evt.key === 'Enter') {
        const keyword = search.value.replaceAll(' ', '');
        movie = originMovie.filter(item => item.includes(keyword))
        renderMovie();
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
        popupBox.src = `img/movie/${movie[popupImg]}`;

        updateArrow(popupImg, movie.length);
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

