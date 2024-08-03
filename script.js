document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;
    
    function showItem(index) {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
    
    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : totalItems - 1;
        showItem(index);
    });
    
    nextButton.addEventListener('click', () => {
        index = (index < totalItems - 1) ? index + 1 : 0;
        showItem(index);
    });
    
    showItem(index); 
});
