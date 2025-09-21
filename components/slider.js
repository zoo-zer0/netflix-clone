document.querySelectorAll('.carousel').forEach(carousel => {
    const container = carousel.querySelector('.row-container');
    const image = carousel.querySelectorAll('.row-container img');
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');

    let i = 1;
    let imageWidth = image[0].offsetWidth + 10;

    nextBtn.addEventListener("click", ()=>{
        container.scrollBy({left: imageWidth,behavior:"smooth"});
    });
    prevBtn.addEventListener("click",()=>{
        container.scrollBy({left: -imageWidth,behavior:"smooth"});
    });
})