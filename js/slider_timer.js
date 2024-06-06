// const swiper = new Swiper('.img__scrolling', {
//   direction: 'horizontal',
//   loop: true,
//   autoplay: {
//     delay: 3000,
//   },
//   slidesPerView: 1,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true,
//   },
// });
let randomBgImage = Math.floor((Math.random()*10)+1);
document.querySelector('.img__scrolling').style.backgroundImage = "url(../images/body/block_01/img/"+randomBgImage+".jpg)";
// setInterval(function(){
//   animate();
// }, 5000);

// function animate(){
//   let randomBgImage = Math.floor((Math.random()*10));
//   document.querySelector('.img__scrolling').style.backgroundImage = "url(../images/body/block_01/img/"+randomBgImage+".jpg)";
// }


// let slideIndex = 1;
// showSlides(slideIndex);

// let prev = document.getElementById ('prev');
// let next = document.getElementById ('next');

// next.addEventListener ("click", function () {
//   showSlides(slideIndex += 1);
//   makeTimer();//Пересоздаем интервал если производится нажатие 
// });

// prev.addEventListener ("click", function () {
//   showSlides(slideIndex -= 1);
//   makeTimer();//Пересоздаем интервал если производится нажатие 
// });

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }


// function showSlides(n) {
//     let slides = document.getElementsByClassName("img__scrolling");
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
 
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "flex";    
//   }
//  var timer = 0;
//  makeTimer(); //Создаем интервал 
//  function makeTimer(){
//     clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
//     timer = setInterval(function(){
//       slideIndex++;
//       showSlides(slideIndex);
//     },5000);
//   }
  
  
//  //Таймер, (чтобы было удобнее считать время) можно удалить
//  var seconds = 5;
//  setInterval(()=>{
//     seconds = seconds - 1;
//     if(!seconds){seconds = 5;}
//         document.getElementById("timeVisual").innerHTML = seconds
//  },1000)