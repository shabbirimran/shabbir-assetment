// var cross=document.querySelector("#cross")
// var a=document.querySelector(".searchbar")

// document.querySelector("#sb").addEventListener("click",function(){
    

//     a.style.display="block"
//     cross.style.display="block"
//     a.style.backgroundColor="black"
//     cross.style.zIndex=999

//     cross.style.position="absolute"
//     cross.style.transform="translate(50%,-80%)"
    

// })

// var swiper = new Swiper("#swiper", {
//   loop: true,
//   //   slidesPerView: 3,
//   spaceBetween: 30,
//   centeredSlides: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
// });
var swiper = new Swiper(".mySwiper", {
  
  autoplay: 2500,
  autoplayDisableOnInteraction: true,
  loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0.5,
      },
      912: {
        slidesPerView: 1,
        spaceBetween: 0.5,
      },
    799: {
        slidesPerView: 1,
        spaceBetween: 0.5,
      },
 	
    },
  });

  var sliders=document.querySelectorAll(".section-img")
  var counter=0;
  sliders.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
  })
  const slideImage=()=>{
    sliders.forEach((slide)=>{
      slide.style.transform=`translateX(-${counter*100}%)`
    })
  }
  const goNext=()=>{
      counter++
      slideImage()
  }

  const range=document.querySelector("#smallimg input")
  const divider=document.querySelector('.divider')
  const img1=document.querySelector("#section4-box .img1 img  ")
  console.log(img1)
  const img1clone=img1.cloneNode(true);
  img1clone.classList.add("img1");
  console.log(img1clone)
  img1.insertAdjacentElement("afterbegin",img1clone)
  const img2=document.querySelector(".img2")
  console.log(img2)
  range.oninput=()=>{
    let sliderValue=range.value
    divider.style.left=`${sliderValue}%`

    img2.style.width=`${sliderValue}%`
    img2.style.position= "absolute";
    img2.style.overflow= "hidden";
  };
 