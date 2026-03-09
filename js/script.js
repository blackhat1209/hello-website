function showAnswer(){

let ans = document.getElementById("answer");

if(ans.style.display === "none"){
ans.style.display = "block";
}else{
ans.style.display = "none";
}

}

function completeLesson(){

localStorage.setItem("lesson1","done");

document.body.innerHTML += "<p style='position:fixed;bottom:20px;right:20px;background:#3b82f6;padding:10px;border-radius:6px;'>Lesson Completed ✔</p>";

setTimeout(function(){
window.location.href="lessons.html";
},1500);

}

function updateProgress(){

let count = 0;

if(localStorage.getItem("lesson1") === "done"){
count++;
}

let progress = document.getElementById("progressText");

if(progress){
progress.innerText = count + " lessons completed";
}

}

updateProgress();
function startSimulation(){

const canvas = document.getElementById("interferenceCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function createParticle(){

let xCenter = canvas.width / 2;

/* create interference stripes using sine distribution */
let offset = Math.sin(Math.random()*10) * 80;

particles.push({
x: xCenter + offset,
y: 0,
vy: 2
});

}

function update(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.y += p.vy;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#38bdf8";
ctx.fill();

});

particles = particles.filter(p=>p.y < canvas.height);

}

setInterval(createParticle,60);
setInterval(update,30);

}
}

function update(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x += p.vx;
p.y += p.vy;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#38bdf8";
ctx.fill();

});

particles = particles.filter(p=>p.y < canvas.height);

}

setInterval(createParticle,100);
setInterval(update,30);

}
