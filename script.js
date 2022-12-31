
const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30

let msg = document.getElementById('message_cont')
const worldElem = document.querySelector("[data-world]")
let click = 0
setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)


let typed2 = new Typed('.autotype', {
  strings: ["   ","I know", "game didn't work !", 'sometimes in life', ' things dont work','the way we expect them ', " but don't panic", "just breathe","do your work", "& remember !", "atleast you tried 😊","be YOU !", "we are all imperfect", "but thats the beauty of being you", "watch the video", "Happy New Year 2023"],
  typeSpeed: 100,
  backSpeed: -1,
  fadeOut: true,
  loop: false
});


window.addEventListener('click',() =>{
  console.log("click_count"+click)
  if(click<5)
  countFun()
});

function countFun(){
  click += 1;
  if(click<3){
  console.log(click)
 }else if(click==3){
    worldElem.remove()
    animFun()
    console.log(click)
 }
}

function animFun(){
  const video_btn = document.createElement('button')
  const video_link = document.createElement('a')
  video_link.innerHTML="go to video ->"
  video_link.href="https://www.youtube.com/watch?v=N-hEH4H9U90";
  video_btn.appendChild(video_link)
  video_btn.setAttribute('class', 'video_btn')
  document.body.appendChild(video_btn)
  msg.classList.remove('hidden')
  msg.classList.add('visible')
}




function setPixelToWorldScale() {
  let worldToPixelScale
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}
