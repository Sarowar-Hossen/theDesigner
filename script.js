function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./images/frames/0001.jpg
  ./images/frames/0012.jpg
  ./images/frames/0023.jpg
  ./images/frames/0034.jpg
  ./images/frames/0045.jpg
  ./images/frames/0056.jpg
  ./images/frames/0067.jpg
  ./images/frames/0078.jpg
  ./images/frames/0089.jpg
  ./images/frames/0100.jpg
  ./images/frames/0111.jpg
  ./images/frames/0122.jpg
  ./images/frames/0133.jpg
  ./images/frames/0144.jpg
  ./images/frames/0155.jpg
  ./images/frames/0166.jpg
  ./images/frames/0177.jpg
  ./images/frames/0188.jpg
  ./images/frames/0199.jpg
  ./images/frames/0210.jpg
  ./images/frames/0221.jpg
  ./images/frames/0232.jpg
  ./images/frames/0243.jpg
  ./images/frames/0254.jpg
  ./images/frames/0265.jpg
  ./images/frames/0276.jpg
  ./images/frames/0287.jpg
  ./images/frames/0298.jpg
  ./images/frames/0309.jpg
  ./images/frames/0320.jpg
  ./images/frames/0331.jpg
  ./images/frames/0342.jpg
  ./images/frames/0353.jpg
  ./images/frames/0364.jpg
  ./images/frames/0375.jpg
  ./images/frames/0386.jpg
  ./images/frames/0397.jpg
  ./images/frames/0408.jpg
  ./images/frames/0419.jpg
  ./images/frames/0430.jpg
  ./images/frames/0441.jpg
  ./images/frames/0452.jpg
  ./images/frames/0463.jpg
  ./images/frames/0474.jpg
  ./images/frames/0485.jpg
  ./images/frames/0496.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 46;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top%`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()






var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})







function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
  ./images/BIM frame/0038.jpg
  ./images/BIM frame/0044.jpg
  ./images/BIM frame/0049.jpg
  ./images/BIM frame/0055.jpg
  ./images/BIM frame/0060.jpg
  ./images/BIM frame/0066.jpg
  ./images/BIM frame/0071.jpg
  ./images/BIM frame/0077.jpg
  ./images/BIM frame/0082.jpg
  ./images/BIM frame/0088.jpg
  ./images/BIM frame/0093.jpg
  ./images/BIM frame/0099.jpg
  ./images/BIM frame/0104.jpg
  ./images/BIM frame/0110.jpg
  ./images/BIM frame/0115.jpg
  ./images/BIM frame/0121.jpg
  ./images/BIM frame/0126.jpg
  ./images/BIM frame/0132.jpg
  ./images/BIM frame/0137.jpg
  ./images/BIM frame/0143.jpg
  ./images/BIM frame/0148.jpg
  ./images/BIM frame/0154.jpg
  ./images/BIM frame/0159.jpg
  ./images/BIM frame/0165.jpg
  ./images/BIM frame/0170.jpg
  ./images/BIM frame/0176.jpg
  ./images/BIM frame/0181.jpg
  ./images/BIM frame/0187.jpg
  ./images/BIM frame/0192.jpg
  ./images/BIM frame/0198.jpg
  ./images/BIM frame/0203.jpg
  ./images/BIM frame/0209.jpg
  ./images/BIM frame/0220.jpg
  ./images/BIM frame/0225.jpg
  ./images/BIM frame/0231.jpg
  ./images/BIM frame/0236.jpg
  ./images/BIM frame/0242.jpg
  ./images/BIM frame/0247.jpg
  ./images/BIM frame/0253.jpg
  ./images/BIM frame/0258.jpg
  ./images/BIM frame/0264.jpg
  ./images/BIM frame/0269.jpg
  ./images/BIM frame/0275.jpg
  ./images/BIM frame/0280.jpg
  ./images/BIM frame/0286.jpg
  ./images/BIM frame/0291.jpg
  ./images/BIM frame/0297.jpg
  ./images/BIM frame/0302.jpg
  ./images/BIM frame/0308.jpg
  ./images/BIM frame/0313.jpg
  ./images/BIM frame/0319.jpg
  ./images/BIM frame/0324.jpg
  ./images/BIM frame/0330.jpg
  ./images/BIM frame/0335.jpg
  ./images/BIM frame/0341.jpg
  ./images/BIM frame/0352.jpg
  ./images/BIM frame/0357.jpg
  ./images/BIM frame/0363.jpg
  ./images/BIM frame/0368.jpg
  ./images/BIM frame/0346.jpg
  ./images/BIM frame/0374.jpg
  ./images/BIM frame/0379.jpg
  ./images/BIM frame/0385.jpg
  ./images/BIM frame/0390.jpg
  ./images/BIM frame/0396.jpg
  ./images/BIM frame/0401.jpg
  ./images/BIM frame/0407.jpg
  ./images/BIM frame/0412.jpg
  ./images/BIM frame/0418.jpg
  ./images/BIM frame/0423.jpg
  ./images/BIM frame/0429.jpg
  ./images/BIM frame/0434.jpg
  ./images/BIM frame/0440.jpg
  ./images/BIM frame/0445.jpg
  ./images/BIM frame/0451.jpg
  ./images/BIM frame/0456.jpg
  ./images/BIM frame/0462.jpg
  ./images/BIM frame/0467.jpg
  ./images/BIM frame/0473.jpg
  ./images/BIM frame/0478.jpg
  ./images/BIM frame/0484.jpg
  ./images/BIM frame/0489.jpg
  ./images/BIM frame/0495.jpg
  ./images/BIM frame/0500.jpg
`;
return data.split("\n")[index];
}

const frameCount = 85;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()




var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})






function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
  ./images/House/Frame 11.png
  ./images/House/Frame 12.png
  ./images/House/Frame 13.png
  ./images/House/Frame 14.png
  ./images/House/Frame 15.png
  ./images/House/Frame 16.png
  ./images/House/Frame 17.png
  ./images/House/Frame 18.png
  ./images/House/Frame 19.png
  ./images/House/Frame 110.png
  ./images/House/Frame 111.png
  ./images/House/Frame 112.png
  ./images/House/Frame 113.png
  ./images/House/Frame 114.png
  ./images/House/Frame 115.png
  ./images/House/Frame 116.png
  ./images/House/Frame 117.png
  ./images/House/Frame 118.png
  ./images/House/Frame 119.png
  ./images/House/Frame 120.png
  ./images/House/Frame 121.png
  ./images/House/Frame 122.png
  ./images/House/Frame 123.png
  ./images/House/Frame 124.png
  ./images/House/Frame 125.png
  ./images/House/Frame 126.png
  ./images/House/Frame 127.png
  ./images/House/Frame 128.png
  ./images/House/Frame 129.png
  ./images/House/Frame 130.png
  ./images/House/Frame 131.png
  ./images/House/Frame 132.png
  ./images/House/Frame 133.png
  ./images/House/Frame 134.png
  ./images/House/Frame 135.png
  ./images/House/Frame 136.png
  ./images/House/Frame 137.png
  ./images/House/Frame 138.png
  ./images/House/Frame 139.png
  ./images/House/Frame 140.png
  ./images/House/Frame 141.png
  ./images/House/Frame 142.png
  ./images/House/Frame 143.png
  ./images/House/Frame 144.png
  ./images/House/Frame 145.png
  ./images/House/Frame 146.png
  ./images/House/Frame 147.png
  ./images/House/Frame 148.png
  ./images/House/Frame 149.png
  ./images/House/Frame 150.png
  ./images/House/Frame 151.png
  ./images/House/Frame 152.png
  ./images/House/Frame 153.png
  ./images/House/Frame 154.png
  ./images/House/Frame 156.png
  ./images/House/Frame 157.png
  ./images/House/Frame 158.png
  ./images/House/Frame 159.png
  ./images/House/Frame 160.png
  ./images/House/Frame 161.png
  ./images/House/Frame 162.png
  ./images/House/Frame 163.png
  ./images/House/Frame 164.png
  ./images/House/Frame 165.png
  ./images/House/Frame 166.png
  ./images/House/Frame 167.png
  ./images/House/Frame 168.png
  ./images/House/Frame 169.png
  ./images/House/Frame 170.png
  ./images/House/Frame 171.png
  ./images/House/Frame 172.png
  ./images/House/Frame 173.png
  ./images/House/Frame 174.png
  ./images/House/Frame 175.png
  ./images/House/Frame 178.png
  ./images/House/Frame 179.png
  ./images/House/Frame 180.png
  ./images/House/Frame 181.png
  ./images/House/Frame 182.png
  ./images/House/Frame 183.png
  ./images/House/Frame 184.png
  ./images/House/Frame 185.png
  ./images/House/Frame 186.png
  ./images/House/Frame 187.png
  ./images/House/Frame 188.png
  ./images/House/Frame 189.png
  ./images/House/Frame 190.png
  ./images/House/Frame 191.png
  ./images/House/Frame 192.png
  ./images/House/Frame 193.png
  ./images/House/Frame 194.png
  ./images/House/Frame 195.png
  
`;
return data.split("\n")[index];
}

const frameCount = 92;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page7`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()



gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  scale:1.5
})



gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  backgroundColor : `#cea40a91`,
})

// drone page


function canvas30(){
  const canvas = document.querySelector("#page30>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./images/Drone/ezgif-frame-001.png
  ./images/Drone/ezgif-frame-002.png
  ./images/Drone/ezgif-frame-003.png
  ./images/Drone/ezgif-frame-004.png
  ./images/Drone/ezgif-frame-005.png
  ./images/Drone/ezgif-frame-006.png
  ./images/Drone/ezgif-frame-007.png
  ./images/Drone/ezgif-frame-008.png
  ./images/Drone/ezgif-frame-009.png
  ./images/Drone/ezgif-frame-010.png
  ./images/Drone/ezgif-frame-011.png
  ./images/Drone/ezgif-frame-012.png
  ./images/Drone/ezgif-frame-013.png
  ./images/Drone/ezgif-frame-014.png
  ./images/Drone/ezgif-frame-015.png
  ./images/Drone/ezgif-frame-016.png
  ./images/Drone/ezgif-frame-017.png
  ./images/Drone/ezgif-frame-018.png
  ./images/Drone/ezgif-frame-019.png
  ./images/Drone/ezgif-frame-020.png
  ./images/Drone/ezgif-frame-021.png
  ./images/Drone/ezgif-frame-022.png
  ./images/Drone/ezgif-frame-023.png
  ./images/Drone/ezgif-frame-024.png
  ./images/Drone/ezgif-frame-025.png
  ./images/Drone/ezgif-frame-026.png
`;
return data.split("\n")[index];
}

const frameCount = 26;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page30`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page30",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas30()

gsap.to("#page30>#page30T>div",{
  scrollTrigger: {
    scrub: .5,
    trigger: `#page30`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  visibility: "visible",
  x:150,
  y:140,
  stagger:.5
})

gsap.to("#page30>#page30T>div>h4",{
  scrollTrigger: {
    scrub: .5,
    trigger: `#page30`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  rotate:360,
  fontSize:"3vw",
  color:"#492ba6",
  paddingTop:"0.5vw"
})

gsap.to("#page8>.page8-bottom>h1",{
  scrollTrigger: {
    scrub: .5,
    trigger: `#page8`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  rotate:720,
  fontSize:"4vw",

})

// Our service

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});