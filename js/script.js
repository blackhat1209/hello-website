// SHOW / HIDE ANSWER

function showAnswer() {

let ans = document.getElementById("answer");

if(ans.style.display === "none" || ans.style.display === ""){
ans.style.display = "block";
}else{
ans.style.display = "none";
}

}


// COMPLETE LESSON

function completeLesson(){

localStorage.setItem("lesson1","done");

alert("Lesson Completed!");

window.location.href = "lessons.html";

}


// DOUBLE SLIT SIMULATION

function startSimulation(){

const canvas = document.getElementById("interferenceCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function createParticle(){

let xCenter = canvas.width / 2;

/* create interference stripes */
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
