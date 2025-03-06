let nav = document.querySelector(".header");
let landing = document.querySelector(".landing");

let navtop=document.querySelectorAll('.navtop a');
let scrollSection = document.querySelectorAll(".scroll");

window.onload = function () {
  landing.classList.remove('rh');
  landing.classList.add("done");
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 1000);
};


window.onscroll = function () {
  if (window.scrollY > nav.offsetTop) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
  scrollSection.forEach((section) => {
    if (window.scrollY > section.offsetTop - 200) {
      section.classList.remove("rh");
      section.classList.add("done");
      // start********
    //  navtop.forEach(link=>{
      //  if(section.id===link.id){
      ////    navtop.forEach(a=>{
      ////    a.parentElement.classList.remove('nav-active');
      ////    console.log("donee");
      ////    });
      ////    link.parentElement.classList.add('nav-active');
        //}
      // end********

       // });
    }
  });
};
//let navgroup=['.landing','.feature','.pricing','.testimonial'];
/*
function navscroll (){
for(let i=0; i< navgroup.length; i++){
  if (window.pageYOffset === document.querySelector( navgroup[i]).offsetTop){
    console.log(document.querySelector(navgroup[i]).offsetTop);
    console.log(document.querySelector(navgroup[i]));
    console.log(window.pageYOffset);

  }
    // start********
      navtop.forEach(link=>{
        if(document.querySelector(navgroup[i]).id===link.id){
          console.log("donee");

          navtop.forEach(a=>{
          a.parentElement.classList.remove('nav-active');
          });
          link.parentElement.classList.add('nav-active');
        }
      // end********
  });

}
};
*/