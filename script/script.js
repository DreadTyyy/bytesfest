const motifBatiks = document.querySelectorAll('.motif-batik');

motifBatiks.forEach(el => {
    el.addEventListener('mouseenter', () => {
        motifBatiks.forEach(item => item.classList.remove('collapse-active'));

        el.classList.add('collapse-active');
    });
});

//const menu = document.querySelector('#menu')

//menu.addEventListener(
//    'click', 
//)

function checkVisibility(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function isVisible(el, className) {
    function onScroll() {
        if (checkVisibility(el)) {
            el.classList.add(className);
            window.removeEventListener('scroll', onScroll);
        }
    }

    onScroll();
    window.addEventListener('scroll', onScroll);
}

const kontenBatik = document.querySelector('.konten-batik');
const kontenWayang = document.querySelector('.konten-wayang');

isVisible(kontenBatik, 'show');          
isVisible(kontenWayang, 'show'); 