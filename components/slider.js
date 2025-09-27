
const newOnNetflix = [
    {title: "Breaking Bad", img:"./img/breaking-bad.webp"},
    {title: "Cat", img:"./img/cat.jpg"},
    {title: "Inside Job", img:"./img/inside-job.jpg"},
    {title: "Rick and Morty", img: "./img/rick-and-morty.webp"},
    {title: "Dexter", img: "./img/dexter.webp"},
    {title: "Gossip Girl", img: "./img/gossip-girl.webp"},
    {title: "Knives Out", img: "./img/knives-out.webp"}
];
const test = [
    {img:"./img/numbers/00.png"},
    {img: "./img/numbers/01.png"},
    {img: "./img/numbers/02.png"},
    {img: "./img/numbers/03.png"},
    {img: "./img/numbers/04.png"},
    {img: "./img/numbers/05.png"},
    {img: "./img/numbers/06.png"},
    {img: "./img/numbers/07.png"},
    {img: "./img/numbers/08.png"},
    {img: "./img/numbers/09.png"},
    {img: "./img/numbers/10.png"},
    {img: "./img/numbers/11.png"},
    {img: "./img/numbers/12.png"}
]
const test2 = [
    {img:"./img/numbers/00.png"},
    {img: "./img/numbers/01.png"},
    {img: "./img/numbers/02.png"},
    {img: "./img/numbers/03.png"},
    {img: "./img/numbers/04.png"},
    {img: "./img/numbers/05.png"},
    {img: "./img/numbers/06.png"},
    {img: "./img/numbers/07.png"},
    {img: "./img/numbers/08.png"},
    {img: "./img/numbers/09.png"},
    {img: "./img/numbers/10.png"},
    {img: "./img/numbers/11.png"},
    {img: "./img/numbers/12.png"},
    {img: "./img/numbers/13.png"}
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
    let i = 0;
    let rowWidth = carousel.offsetWidth;
    let imageWidth = images[0].offsetWidth;
    let imagePerRow = Math.floor(rowWidth/imageWidth);
    
    //infinite carousel feature
    //document selector all treats html element like an array(?)
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length -1].cloneNode(true);
    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';   
    //initial position
    container.style.transform = `translateX(${-imageWidth * i}px)`;

    nextBtn.addEventListener("click", ()=>{
        console.log(i);
        console.log(imagePerRow);
        if(i>=images.length-imagePerRow){
            i=0;
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = 'translateX(0px)';
        }
        else{
            if(i+imagePerRow>=images.length-imagePerRow) 
                {i =  images.length-imagePerRow;
                    console.log(images.length);
                }
            else{i=i+imagePerRow;}
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*i}px)`;
        }
        console.log(i);
    });
    prevBtn.addEventListener("click",()=>{
        if(i==0){
            i=images.length-imagePerRow;
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*i}px)`;
        }
        else{
            if(i==images.length-imagePerRow){
                i = i-images.length%imagePerRow;
                console.log("detected");
                
            }
            else{i=i-imagePerRow;}
            container.style.transition = 'transform 0.4s ease-in-out';
            container.style.transform = `translateX(${-imageWidth*i}px)`;
        }
        console.log(i);
    });

    //loop reset
    
})