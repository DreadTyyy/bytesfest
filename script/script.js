const motifBatiks = document.querySelectorAll('.motif-batik');

motifBatiks.forEach(el => {
    el.addEventListener('mouseenter', () => {
        motifBatiks.forEach(item => item.classList.remove('collapse-active'));

        el.classList.add('collapse-active');
    });
});