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

alert("Lesson Completed!");

updateProgress();

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
