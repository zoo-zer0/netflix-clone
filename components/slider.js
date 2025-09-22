document.querySelectorAll('.carousel').forEach(carousel => {
    const container = carousel.querySelector('.row-container');
    const images = carousel.querySelectorAll('.row-container a');
    const nextBtn = carousel.parentElement.querySelector('.next');
    const prevBtn = carousel.parentElement.querySelector('.prev');
    let i = 1;
    let rowWidth = carousel.offsetWidth;
    let imageWidth = images[0].offsetWidth;
    let imagePerRow = Math.floor(rowWidth/imageWidth);
    
    //infinite carousel feature
    //document selector all treats html element like an array(?)
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length -1].cloneNode(true);
    const firstImage = container.querySelector('a');
    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    const allImages = carousel.querySelectorAll(".row-container a");
    
    //initial position
    container.style.transform = `translateX(${-imageWidth * i}px)`;

    nextBtn.addEventListener("click", ()=>{
        if(i>=allImages.length-1) return;
        if(i==allImages.length-imagePerRow){
            i=1;
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = 'translateX(0px)';
        }
        else{
            if(i+imagePerRow>=allImages.length-1) 
                {i =  allImages.length-imagePerRow;}
            else{i=i+imagePerRow;}
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*i}px)`;
        }
        console.log(i);
    });
    prevBtn.addEventListener("click",()=>{
        if(i<=0) return;
        if(i==1){
            i=allImages.length-imagePerRow;
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*i}px)`;
        }
        else{
        if(i-imagePerRow<=1){
            i=1
        }
        else{i=i-imagePerRow;}
        container.style.transition = 'transform 0.4s ease-in-out';
        container.style.transform = `translateX(${-imageWidth*i}px)`;}
        console.log(i);
    });

    //loop reset
    
})