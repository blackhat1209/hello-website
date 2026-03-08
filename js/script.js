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
