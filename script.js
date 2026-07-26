/* ==========================================
   TYPEWRITER HERO
========================================== */

const title = document.querySelector(".hero h1");

if(title){

const original = title.textContent;

title.textContent="";

let index=0;

function type(){

if(index<original.length){

title.textContent+=original.charAt(index);

index++;

setTimeout(type,120);

}

}

window.addEventListener("load",()=>{

setTimeout(type,500);

});

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements=document.querySelectorAll(".chapter,.event,.profile,.quote-section,footer");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/* ==========================================
   PROGRESS BAR
========================================== */

const progress=document.querySelector(".progress");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressValue=(scrollTop/height)*100;

progress.style.width=progressValue+"%";

});


/* ==========================================
   CURSOR GLOW
========================================== */

const glow=document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/* ==========================================
   PARALLAX HERO
========================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const scrolled=window.pageYOffset;

hero.style.transform=`translateY(${scrolled*0.18}px)`;

hero.style.opacity=1-(scrolled/900);

});


/* ==========================================
   CARD HOVER LIGHT
========================================== */

document.querySelectorAll(".event").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(122,62,62,.08),
#FCFAF7 45%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#FCFAF7";

});

});


/* ==========================================
   PROFILE ANIMATION
========================================== */

const profile=document.querySelector(".profile");

if(profile){

profile.addEventListener("mouseenter",()=>{

profile.style.transform="translateY(-10px)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="translateY(0px)";

});

}


/* ==========================================
   QUOTE FADE
========================================== */

const quote=document.querySelector(".quote-section h2");

window.addEventListener("scroll",()=>{

const rect=quote.getBoundingClientRect();

const value=1-(rect.top/window.innerHeight);

quote.style.opacity=Math.min(Math.max(value,0.25),1);

});


/* ==========================================
   EASTER EGG
========================================== */

let typed="";

document.addEventListener("keydown",(e)=>{

typed+=e.key.toLowerCase();

typed=typed.slice(-7);

if(typed.includes("someday")){

document.body.style.transition=".5s";

document.body.style.background="#efe8df";

setTimeout(()=>{

document.body.style.background="";

},2000);

}

});


/* ==========================================
   FOOTER APPEAR
========================================== */

const footer=document.querySelector("footer");

const footerObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

footer.animate([

{

opacity:0,

transform:"translateY(50px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}

});

});

footerObserver.observe(footer);


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.clear();

console.log(`

Hello Mr. Grumpy.

If you are reading this...

Thanks for taking the time.

— T

`);
