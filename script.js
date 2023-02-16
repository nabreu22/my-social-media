const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelector(".carousel-image")

// carousel.addEventListener('click', doCarousel);

const intervalID = setInterval(doCarousel, 2500);

let nextActive = 1


carousel.children[0].classList.add("active");

function doCarousel(){
       
    let removeActive = 0
    if(nextActive === 0){
        removeActive = carousel.children.length - 1
    }else{
        removeActive = nextActive - 1
    }
    
    carousel.children[removeActive].classList.remove("active");
    carousel.children[nextActive].classList.add("active");
    
    if(nextActive >= carousel.children.length - 1){
        nextActive = 0
    } else {
        nextActive++;
    }
    
    console.log(carousel.children, nextActive);

}

