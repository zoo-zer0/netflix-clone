
const newOnNetflix = [
    {title: "Breaking Bad", img:"./src/img/breaking-bad.webp"},
    {title: "Cat", img:"./src/img/cat.jpg"},
    {title: "Inside Job", img:"./src/img/inside-job.jpg"},
    {title: "Rick and Morty", img: "./src/img/rick-and-morty.webp"},
    {title: "Dexter", img: "./src/img/dexter.webp"},
    {title: "Gossip Girl", img: "./src/img/gossip-girl.webp"},
    {title: "Knives Out", img: "./src/img/knives-out.webp"}
];
const test = [
    {img:"./src/img/numbers/00.png"},
    {img: "./src/img/numbers/01.png"},
    {img: "./src/img/numbers/02.png"},
    {img: "./src/img/numbers/03.png"},
    {img: "./src/img/numbers/04.png"},
    {img: "./src/img/numbers/05.png"},
    {img: "./src/img/numbers/06.png"},
    {img: "./src/img/numbers/07.png"},
    {img: "./src/img/numbers/08.png"},
    {img: "./src/img/numbers/09.png"},
    {img: "./src/img/numbers/10.png"},
    {img: "./src/img/numbers/11.png"},
    {img: "./src/img/numbers/12.png"}
]
const test2 = [
    {img:"./src/img/numbers/00.png"},
    {img: "./src/img/numbers/01.png"},
    {img: "./src/img/numbers/02.png"},
    {img: "./src/img/numbers/03.png"},
    {img: "./src/img/numbers/04.png"},
    {img: "./src/img/numbers/05.png"},
    {img: "./src/img/numbers/06.png"},
    {img: "./src/img/numbers/07.png"},
    {img: "./src/img/numbers/08.png"},
    {img: "./src/img/numbers/09.png"},
    {img: "./src/img/numbers/10.png"},
    {img: "./src/img/numbers/11.png"},
    {img: "./src/img/numbers/12.png"},
    {img: "./src/img/numbers/13.png"}
]
function generateCarousel(title, items){
    const main = document.querySelector("main");
    const contentRow = document.createElement("section");
    contentRow.classList.add("content-row");
    main.appendChild(contentRow);

    const headerTitle = document.createElement("h1");
    headerTitle.textContent = title;
    contentRow.appendChild(headerTitle);

    const outerCarousel = document.createElement("div");
    outerCarousel.classList.add("outer-carousel");
    contentRow.appendChild(outerCarousel);

    const prevButton = document.createElement("button");
    prevButton.classList.add("prev");
    outerCarousel.appendChild(prevButton);

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    outerCarousel.appendChild(carousel);
    
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    carousel.appendChild(rowContainer);

    const nextButton = document.createElement("button");
    nextButton.classList.add("next");
    outerCarousel.appendChild(nextButton);

    items.forEach(item=>{
        const link = document.createElement("a");
        link.href = '#';
        const img = document.createElement("img");
        img.classList.add("content-card");
        img.src = item.img;
        img.alt = item.title;
        link.appendChild(img);
        rowContainer.appendChild(link);
    })
}
generateCarousel("New on Netflix", newOnNetflix);
generateCarousel("test", test);
generateCarousel("test 2", test2);
document.querySelectorAll('.carousel').forEach(carousel => {
    const container = carousel.querySelector('.row-container');
    const images = carousel.querySelectorAll('.row-container a');
    const nextBtn = carousel.parentElement.querySelector('.next');
    const prevBtn = carousel.parentElement.querySelector('.prev');
    let rowWidth = carousel.offsetWidth;
    let imageWidth = images[0].offsetWidth;
    let imagePerRow = Math.floor(rowWidth/imageWidth);
    
    //infinite carousel feature
    const firstClones = [];
    const lastClones = [];
    for (let j = 0; j < imagePerRow; j++) {
        const first = images[j].cloneNode(true);
        const last = images[images.length - imagePerRow + j].cloneNode(true);
        
        first.id = `first-clone-${j}`;
        last.id = `last-clone-${j}`;
        
        firstClones.push(first);
        lastClones.push(last);
    }
    lastClones.forEach(clone => container.insertBefore(clone, container.firstChild));
    firstClones.forEach(clone => container.appendChild(clone));
    let i = imagePerRow;
    
    container.style.transform = `translateX(${-imageWidth * i}px)`;
    nextBtn.addEventListener("click", ()=>{
        console.log(i);
        console.log(imagePerRow);
        if(i-imagePerRow>=images.length-imagePerRow){
            i=imagePerRow;
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*(images.length + imagePerRow)}px)`;
            setTimeout(()=>{
                container.style.transition = 'none';
                container.style.transform=`translateX(${-imageWidth * i}px)`;
            }, 300);
        }
        else{
            if(i>=images.length-imagePerRow) 
                {i =  images.length;
                    console.log("detected");
                    console.log(images.length);
                }
            else{i=i+imagePerRow;}
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*i}px)`;
        }
        console.log(i);
    });
    prevBtn.addEventListener("click",()=>{
        if(i==imagePerRow){
            i=imagePerRow+images.length-imagePerRow;
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${imageWidth*(images.length-imagePerRow)}px)`;
            setTimeout(()=>{
                container.style.transition='none';
                container.style.transform = `translateX(${-imageWidth*i}px)`;
            },300);
        }
        else if(i<imagePerRow+imagePerRow){
            i=imagePerRow;
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*i}px)`;
        }
        else{
            if(i-imagePerRow==images.length-imagePerRow){
                i = i-images.length%imagePerRow;
                console.log("detected");
                
            }
            else{i=i-imagePerRow;}
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*i}px)`;
        }
        console.log(i);
    });
})